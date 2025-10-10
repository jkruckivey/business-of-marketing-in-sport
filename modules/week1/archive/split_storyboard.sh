#!/bin/bash
FILE="uplimit-week1-storyboard-complete.md"

# Extract UDL section (search for it near end of file)
sed -n '/<a name="udl-verification">/,/<a name="[^"]*">/p' "$FILE" > learning-design/udl-accessibility.md

# Split modules - I'll do this manually with line ranges based on file structure
echo "Splitting storyboard into organized structure..."
echo "Manual extraction recommended for precision"
