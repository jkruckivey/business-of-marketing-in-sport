#!/usr/bin/env python3
"""
Add learning outcomes widget references to all module storyboards
"""

import os
import re

# Define weeks and their modules
weeks = {
    "week1": list(range(0, 8)),  # modules 0-7
    "week2": list(range(1, 8)),  # modules 1-7 (no module-0)
    "week3": list(range(1, 7)),  # modules 1-6
    "week4": [0, 7],  # only modules 0 and 7 (others already have widgets)
}

base_path = r"C:\Users\jkruck\Ivey Business School\EdTech Lab - Documents\Github\business-of-marketing-in-sport\modules"

widget_element_template = """| {num} | **⚙ iFrame Widget** ◐ Recommended | **Learning Outcomes Widget** - Interactive MLO-CLO mapping | Embed `learning-outcomes-module-{module}.html` | Shows how module outcomes connect to course goals |
"""

widget_section_template = """
### Element {num}: Learning Outcomes Widget

**Widget Purpose:** Interactive visualization showing how this module's learning outcomes connect to course-level goals

**Uplimit Implementation:**

**Widget File:** `learning-outcomes-module-{module}.html`

**Embed Code:**
```html
<iframe
  src="../../widgets/learning-outcomes-module-{module}.html"
  width="100%"
  height="600"
  style="border: none; border-radius: 8px;"
  title="Learning Outcomes - Module {module}"
  aria-label="Interactive widget showing module learning outcomes and their connection to course goals"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Widget Features:**
- Click any module outcome to see which course-level outcomes it contributes to
- Interactive highlighting shows connections between module and course goals
- WCAG 2.2 AA compliant with keyboard navigation and screen reader support

"""

def find_insert_position(content):
    """Find where to insert the widget element in the element table"""
    # Look for the element table
    table_match = re.search(r'\| Order \| Element \|.*?\n\|----', content, re.DOTALL)
    if not table_match:
        return None, None

    # Find the last row of the table (before any ###)
    table_start = table_match.end()
    next_section = content.find('\n###', table_start)
    if next_section == -1:
        next_section = content.find('\n##', table_start)

    table_section = content[table_start:next_section]
    table_rows = [line for line in table_section.split('\n') if line.strip().startswith('|') and '---' not in line]

    if not table_rows:
        return None, None

    last_row = table_rows[-1]
    # Extract the element number from last row
    match = re.match(r'\|\s*(\d+)\s*\|', last_row)
    if match:
        last_num = int(match.group(1))
        next_num = last_num + 1
    else:
        next_num = 1

    # Find position after last table row
    last_row_pos = content.find(last_row, table_start) + len(last_row)

    return last_row_pos, next_num

def find_content_insert_position(content, element_num):
    """Find where to insert the widget content section"""
    # Look for the last Element section before any Module Complete or Design Rationale
    pattern = rf'### Element {element_num - 1}:.*?(?=\n###|\n##|\*\*Design Rationale)'
    match = re.search(pattern, content, re.DOTALL)

    if match:
        return match.end()

    # Fallback: insert before Design Rationale or Module Complete
    design_pos = content.find('**Design Rationale')
    module_complete_pos = content.find('## Module')

    if design_pos != -1:
        return design_pos
    elif module_complete_pos != -1:
        return module_complete_pos

    return len(content)

def update_module(week, module_num):
    """Update a single module file"""
    module_path = os.path.join(base_path, week, "storyboards", "modules", f"module-{module_num}-*.md")

    # Find the actual file
    import glob
    files = glob.glob(module_path)
    if not files:
        print(f"  [WARN] No file found for {week} module-{module_num}")
        return False

    file_path = files[0]

    # Check if already has learning outcomes widget
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'Learning Outcomes Widget' in content:
        print(f"  [OK] {week}/module-{module_num} already has widget")
        return True

    # Find insert positions
    table_pos, element_num = find_insert_position(content)
    if table_pos is None:
        print(f"  [WARN] Could not find element table in {week}/module-{module_num}")
        return False

    content_pos = find_content_insert_position(content, element_num)

    # Insert widget element row in table
    widget_element = widget_element_template.format(num=element_num, module=module_num)
    content = content[:table_pos] + '\n' + widget_element + content[table_pos:]

    # Adjust content_pos for the insertion we just made
    content_pos += len(widget_element) + 1

    # Insert widget content section
    widget_section = widget_section_template.format(num=element_num, module=module_num)
    content = content[:content_pos] + widget_section + content[content_pos:]

    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  [ADDED] {week}/module-{module_num}")
    return True

# Main execution
if __name__ == "__main__":
    print("Adding learning outcomes widgets to storyboards...\n")

    for week, modules in weeks.items():
        print(f"{week.upper()}:")
        for module_num in modules:
            update_module(week, module_num)
        print()

    print("[DONE] Complete!")
