// Dark Mode Toggle Functionality
class ThemeManager {
    constructor() {
        this.themeToggle = this.createToggleButton();
        this.init();
    }

    createToggleButton() {
        const button = document.createElement('button');
        button.className = 'theme-toggle';
        button.innerHTML = '🌙';
        button.setAttribute('aria-label', 'Toggle dark mode');
        button.setAttribute('title', 'Toggle dark mode');
        
        button.addEventListener('click', () => this.toggleTheme());
        document.body.appendChild(button);
        
        return button;
    }

    init() {
        // Check for saved theme preference or prefer OS setting
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            this.enableDarkMode();
        } else {
            this.enableLightMode();
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    this.enableDarkMode();
                } else {
                    this.enableLightMode();
                }
            }
        });
    }

    enableDarkMode() {
        document.body.classList.add('dark-mode');
        this.themeToggle.innerHTML = '☀️';
        localStorage.setItem('theme', 'dark');
    }

    enableLightMode() {
        document.body.classList.remove('dark-mode');
        this.themeToggle.innerHTML = '🌙';
        localStorage.setItem('theme', 'light');
    }

    toggleTheme() {
        if (document.body.classList.contains('dark-mode')) {
            this.enableLightMode();
        } else {
            this.enableDarkMode();
        }
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});

console.log('Dark mode script loaded successfully!');

// Scroll to contact form function
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
