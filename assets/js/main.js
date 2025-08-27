// Universal Design for Learning - Accessible Course JavaScript

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAccessibilityFeatures();
    initializeNavigationEnhancements();
    initializeUserPreferences();
    initializeProgressTracking();
});

// Accessibility Features
function initializeAccessibilityFeatures() {
    // Add skip navigation functionality
    addSkipNavigation();
    
    // Enhance focus management
    enhanceFocusManagement();
    
    // Initialize keyboard navigation
    initializeKeyboardNavigation();
    
    // Add ARIA labels and descriptions
    enhanceARIA();
    
    // Initialize screen reader announcements
    initializeScreenReaderAnnouncements();
}

function addSkipNavigation() {
    // Ensure skip navigation works properly
    const skipLink = document.querySelector('.skip-nav');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

function enhanceFocusManagement() {
    // Ensure proper focus management for interactive elements
    const interactiveElements = document.querySelectorAll('button, [role="button"], .module-link, .engagement-option');
    
    interactiveElements.forEach(element => {
        // Ensure all interactive elements are focusable
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
        
        // Add focus indicators
        element.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        
        element.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
}

function initializeKeyboardNavigation() {
    // Enhanced keyboard navigation for module cards and interactive elements
    const moduleCards = document.querySelectorAll('.module-card');
    const engagementOptions = document.querySelectorAll('.engagement-option');
    
    // Module card keyboard navigation
    moduleCards.forEach(card => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('.module-link');
                if (link) {
                    link.click();
                }
            }
        });
    });
    
    // Engagement options keyboard navigation
    engagementOptions.forEach(option => {
        option.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleEngagementOption(this);
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                navigateEngagementOptions(this, e.key);
            }
        });
    });
}

function enhanceARIA() {
    // Add ARIA labels and descriptions where needed
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach((card, index) => {
        const title = card.querySelector('h3');
        if (title) {
            card.setAttribute('aria-labelledby', `module-title-${index}`);
            title.id = `module-title-${index}`;
        }
    });
    
    // Enhance outcome cards with ARIA
    const outcomeCards = document.querySelectorAll('.outcome-card');
    outcomeCards.forEach((card, index) => {
        card.setAttribute('role', 'article');
        card.setAttribute('aria-labelledby', `outcome-title-${index}`);
        const title = card.querySelector('h4');
        if (title) {
            title.id = `outcome-title-${index}`;
        }
    });
}

function initializeScreenReaderAnnouncements() {
    // Create announcement region for dynamic content changes
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.id = 'announcements';
    document.body.appendChild(announcer);
    
    // Make announcer globally available
    window.announceToScreenReader = function(message) {
        const announcer = document.getElementById('announcements');
        if (announcer) {
            announcer.textContent = message;
            setTimeout(() => {
                announcer.textContent = '';
            }, 1000);
        }
    };
}

// Navigation Enhancements
function initializeNavigationEnhancements() {
    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Set focus to target for accessibility
                if (target.hasAttribute('tabindex') || target.tagName.match(/^(A|BUTTON|INPUT|TEXTAREA|SELECT)$/)) {
                    setTimeout(() => target.focus(), 500);
                }
            }
        });
    });
    
    // Active navigation state
    updateActiveNavigation();
    window.addEventListener('scroll', throttle(updateActiveNavigation, 100));
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// User Preferences
function initializeUserPreferences() {
    // Load saved preferences
    loadUserPreferences();
    
    // Initialize preference controls
    initializePreferenceControls();
    
    // Save preferences on change
    document.addEventListener('change', saveUserPreferences);
}

function loadUserPreferences() {
    const preferences = JSON.parse(localStorage.getItem('coursePreferences') || '{}');
    
    // Apply font size preference
    if (preferences.fontSize) {
        document.documentElement.style.fontSize = preferences.fontSize;
    }
    
    // Apply high contrast preference
    if (preferences.highContrast) {
        document.body.classList.add('high-contrast');
    }
    
    // Apply reduced motion preference
    if (preferences.reducedMotion) {
        document.body.classList.add('reduce-motion');
    }
    
    // Apply learning preference
    if (preferences.learningStyle) {
        const engagementOption = document.querySelector(`[data-learning-style="${preferences.learningStyle}"]`);
        if (engagementOption) {
            toggleEngagementOption(engagementOption);
        }
    }
}

function saveUserPreferences() {
    const preferences = {
        fontSize: document.documentElement.style.fontSize || '16px',
        highContrast: document.body.classList.contains('high-contrast'),
        reducedMotion: document.body.classList.contains('reduce-motion'),
        learningStyle: document.querySelector('.engagement-option.selected')?.dataset.learningStyle
    };
    
    localStorage.setItem('coursePreferences', JSON.stringify(preferences));
}

function initializePreferenceControls() {
    // Create accessibility toolbar if it doesn't exist
    if (!document.querySelector('.accessibility-toolbar')) {
        createAccessibilityToolbar();
    }
}

function createAccessibilityToolbar() {
    const toolbar = document.createElement('div');
    toolbar.className = 'accessibility-toolbar';
    toolbar.innerHTML = `
        <button type="button" id="toggle-high-contrast" aria-pressed="false">
            High Contrast
        </button>
        <button type="button" id="toggle-font-size" aria-pressed="false">
            Large Text
        </button>
        <button type="button" id="toggle-reduced-motion" aria-pressed="false">
            Reduce Motion
        </button>
    `;
    
    document.body.appendChild(toolbar);
    
    // Add event listeners
    document.getElementById('toggle-high-contrast').addEventListener('click', toggleHighContrast);
    document.getElementById('toggle-font-size').addEventListener('click', toggleFontSize);
    document.getElementById('toggle-reduced-motion').addEventListener('click', toggleReducedMotion);
}

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
    const button = document.getElementById('toggle-high-contrast');
    const isActive = document.body.classList.contains('high-contrast');
    button.setAttribute('aria-pressed', isActive);
    announceToScreenReader(`High contrast ${isActive ? 'enabled' : 'disabled'}`);
}

function toggleFontSize() {
    const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const newSize = currentSize >= 20 ? '16px' : '20px';
    document.documentElement.style.fontSize = newSize;
    
    const button = document.getElementById('toggle-font-size');
    const isLarge = newSize === '20px';
    button.setAttribute('aria-pressed', isLarge);
    announceToScreenReader(`Font size ${isLarge ? 'increased' : 'reset'}`);
}

function toggleReducedMotion() {
    document.body.classList.toggle('reduce-motion');
    const button = document.getElementById('toggle-reduced-motion');
    const isActive = document.body.classList.contains('reduce-motion');
    button.setAttribute('aria-pressed', isActive);
    announceToScreenReader(`Motion ${isActive ? 'reduced' : 'restored'}`);
}

// Progress Tracking
function initializeProgressTracking() {
    // Track module completion
    trackModuleProgress();
    
    // Track time spent on page
    trackTimeOnPage();
    
    // Track engagement with materials
    trackEngagement();
}

function trackModuleProgress() {
    // Load progress from localStorage
    const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    
    // Update progress indicators
    updateProgressIndicators(progress);
    
    // Track current page view
    const currentModule = getCurrentModule();
    if (currentModule) {
        progress[currentModule] = progress[currentModule] || {};
        progress[currentModule].lastVisited = new Date().toISOString();
        progress[currentModule].visits = (progress[currentModule].visits || 0) + 1;
        
        localStorage.setItem('courseProgress', JSON.stringify(progress));
    }
}

function getCurrentModule() {
    const path = window.location.pathname;
    const moduleMatch = path.match(/module-(\d+)/);
    return moduleMatch ? `module-${moduleMatch[1]}` : null;
}

function updateProgressIndicators(progress) {
    // Update any progress bars or indicators on the page
    const progressIndicators = document.querySelectorAll('[data-progress]');
    progressIndicators.forEach(indicator => {
        const moduleId = indicator.dataset.progress;
        const moduleProgress = progress[moduleId];
        if (moduleProgress && moduleProgress.completed) {
            indicator.classList.add('completed');
        }
    });
}

function trackTimeOnPage() {
    const startTime = Date.now();
    
    window.addEventListener('beforeunload', function() {
        const timeSpent = Date.now() - startTime;
        const currentModule = getCurrentModule();
        if (currentModule) {
            const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
            progress[currentModule] = progress[currentModule] || {};
            progress[currentModule].timeSpent = (progress[currentModule].timeSpent || 0) + timeSpent;
            localStorage.setItem('courseProgress', JSON.stringify(progress));
        }
    });
}

function trackEngagement() {
    // Track clicks on learning materials
    const resourceLinks = document.querySelectorAll('.resource-card a, .module-link');
    resourceLinks.forEach(link => {
        link.addEventListener('click', function() {
            const resourceType = this.closest('.resource-card')?.querySelector('.resource-type')?.textContent || 'link';
            trackEvent('resource_access', { type: resourceType, url: this.href });
        });
    });
    
    // Track engagement option selections
    const engagementOptions = document.querySelectorAll('.engagement-option');
    engagementOptions.forEach(option => {
        option.addEventListener('click', function() {
            const learningStyle = this.querySelector('h4').textContent;
            trackEvent('learning_preference', { style: learningStyle });
        });
    });
}

function trackEvent(eventName, data) {
    // Store analytics data locally (could be sent to analytics service)
    const analytics = JSON.parse(localStorage.getItem('courseAnalytics') || '[]');
    analytics.push({
        timestamp: new Date().toISOString(),
        event: eventName,
        data: data,
        module: getCurrentModule(),
        page: window.location.pathname
    });
    
    // Keep only last 1000 events
    if (analytics.length > 1000) {
        analytics.splice(0, analytics.length - 1000);
    }
    
    localStorage.setItem('courseAnalytics', JSON.stringify(analytics));
}

// Utility Functions
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function toggleEngagementOption(option) {
    // Remove selected class from all options
    document.querySelectorAll('.engagement-option').forEach(opt => {
        opt.classList.remove('selected');
        opt.setAttribute('aria-pressed', 'false');
    });
    
    // Add selected class to clicked option
    option.classList.add('selected');
    option.setAttribute('aria-pressed', 'true');
    
    // Store preference
    const preference = option.querySelector('h4').textContent;
    option.dataset.learningStyle = preference.toLowerCase().replace(/\s+/g, '-');
    
    // Announce to screen reader
    announceToScreenReader(`Learning preference set to ${preference}`);
    
    // Track the selection
    trackEvent('learning_preference_selected', { preference: preference });
    
    // Save preferences
    saveUserPreferences();
}

function navigateEngagementOptions(currentOption, direction) {
    const options = Array.from(document.querySelectorAll('.engagement-option'));
    const currentIndex = options.indexOf(currentOption);
    let nextIndex;
    
    if (direction === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % options.length;
    } else if (direction === 'ArrowLeft') {
        nextIndex = (currentIndex - 1 + options.length) % options.length;
    }
    
    if (nextIndex !== undefined) {
        options[nextIndex].focus();
    }
}

// CSS for accessibility features
const accessibilityCSS = `
.accessibility-toolbar {
    position: fixed;
    top: 0;
    right: 0;
    background: white;
    border: 2px solid var(--primary-color);
    border-radius: 0 0 0 8px;
    padding: 8px;
    z-index: 1000;
    display: flex;
    gap: 8px;
}

.accessibility-toolbar button {
    padding: 4px 8px;
    border: 1px solid var(--primary-color);
    background: white;
    color: var(--primary-color);
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
}

.accessibility-toolbar button[aria-pressed="true"] {
    background: var(--primary-color);
    color: white;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.focused {
    outline: 3px solid var(--secondary-color) !important;
    outline-offset: 2px !important;
}

.high-contrast {
    filter: contrast(120%) brightness(110%);
}

.reduce-motion * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
}

@media (prefers-reduced-motion: reduce) {
    .reduce-motion * {
        animation: none !important;
        transition: none !important;
    }
}
`;

// Inject CSS
const styleElement = document.createElement('style');
styleElement.textContent = accessibilityCSS;
document.head.appendChild(styleElement);