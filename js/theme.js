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

// Crypto payment addresses - UPDATE THESE WITH YOUR REAL ADDRESSES!
// Multi-crypto addresses - UPDATE WITH YOUR REAL ADDRESSES!
const cryptoAddresses = {
    hbar: "0.0.10028376-hzant",
    btc: "bc1qpv3lmmnxwpx8xxc2vgeh930dgtqcvpyu8xx2e5g8",
    eth: "0xaC7fefDEdA697eB4846741971a2D34F8a607410d",
    sol: "8R8jXo7o9KyUSnFLdRxE48FvYnT72uMRz7rYvnfubhmn"
};

// Copy crypto address to clipboard
    const textArea = document.createElement("textarea");
    textArea.value = address;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand("copy");
        alert(`✅ ${currency.toUpperCase()} address copied! Send payment and email transaction ID.`);
    } catch (err) {
        prompt(`Please copy this ${currency.toUpperCase()} address manually:`, address);
    }
    document.body.removeChild(textArea);
}

// Multi-crypto addresses - UPDATE WITH YOUR REAL ADDRESSES!
function copyCryptoAddress(currency) {
    const address = cryptoAddresses[currency];
    if (!address) {
        alert('Address not found for ' + currency);
        return;
    }
    
    // Create a temporary textarea element to copy text
    const textArea = document.createElement("textarea");
    textArea.value = address;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        // Try to copy to clipboard
        document.execCommand("copy");
        alert(`✅ ${currency.toUpperCase()} address copied!\n\nSend the exact amount and email your Transaction ID.`);
    } catch (err) {
        // Fallback if copy fails
        prompt(`📋 Please copy this ${currency.toUpperCase()} address manually:`, address);
    }
    document.body.removeChild(textArea);
}
