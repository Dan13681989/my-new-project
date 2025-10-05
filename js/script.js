// Simple interactive features
document.addEventListener('DOMContentLoaded', function() {
    console.log('My GitHub Pages site is loaded!');
    
    // Add current date to the page
    const currentDate = new Date().toLocaleDateString();
    const dateElement = document.createElement('p');
    dateElement.textContent = `Site last updated: ${currentDate}`;
    dateElement.style.textAlign = 'center';
    dateElement.style.color = '#666';
    dateElement.style.marginTop = '20px';
    
    document.body.appendChild(dateElement);
});
