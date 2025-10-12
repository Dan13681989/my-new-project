// Skills Animation
document.addEventListener('DOMContentLoaded', function() {
    const skillSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillSection && skillBars.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(bar => {
                        const level = bar.getAttribute('data-level');
                        bar.style.width = level + '%';
                    });
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(skillSection);
    }
});
