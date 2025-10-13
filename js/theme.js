document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded!');
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    console.log('Theme toggle element:', themeToggle);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            console.log('Theme toggle clicked!');
            // Toggle dark mode
            document.body.classList.toggle('dark-theme');
            
            // Also toggle data-theme for CSS variables
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            console.log('Theme changed to:', newTheme);
        });
    }

    // Find crypto buttons by their actual structure
    const cryptoButtons = document.querySelectorAll('.crypto-option button, .crypto-btn, [onclick*="copyCryptoAddress"]');
    console.log('Crypto buttons found:', cryptoButtons.length);
    
    cryptoButtons.forEach(button => {
        // Remove the broken onclick and use proper event listeners
        button.onclick = null;
        
        button.addEventListener('click', function() {
            // Extract crypto type from button text or parent element
            const buttonText = this.textContent || '';
            let crypto = 'unknown';
            
            if (buttonText.includes('HBAR')) crypto = 'HBAR';
            else if (buttonText.includes('BTC')) crypto = 'BTC';
            else if (buttonText.includes('ETH')) crypto = 'ETH';
            else if (buttonText.includes('SOL')) crypto = 'SOL';
            
            console.log(`Selected: ${crypto}`);
            
            // Copy to clipboard functionality
            const address = getCryptoAddress(crypto);
            if (address) {
                navigator.clipboard.writeText(address).then(() => {
                    alert(`Copied ${crypto} address to clipboard!`);
                }).catch(err => {
                    console.error('Failed to copy:', err);
                    alert(`Selected ${crypto} - Address: ${address}`);
                });
            } else {
                alert(`Selected ${crypto}`);
            }
        });
    });

    // Define the missing function that was causing errors
    window.copyCryptoAddress = function(crypto) {
        console.log('Legacy crypto function called for:', crypto);
        const address = getCryptoAddress(crypto);
        if (address) {
            navigator.clipboard.writeText(address).then(() => {
                alert(`Copied ${crypto} address to clipboard!`);
            });
        }
    };

    // Helper function to get crypto addresses
    function getCryptoAddress(crypto) {
        const addresses = {
            'HBAR': '0.0.123456',
            'BTC': 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
            'ETH': '0x742d35Cc6634C0532925a3b8Df6A2e4c5B6e6D9c',
            'SOL': 'SOLanaAddress1234567890123456789012345678901234567890'
        };
        return addresses[crypto] || `Your ${crypto} address here`;
    }
});
