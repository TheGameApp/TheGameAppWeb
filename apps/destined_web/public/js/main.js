// Main JavaScript file for Destined Web

console.log('Destined Web - Initialized');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
