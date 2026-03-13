document.addEventListener('DOMContentLoaded', () => {
    // Initialize the portfolio functionality
    initPortfolio();
});

function initPortfolio() {
    setupEventListeners();
    // Additional initialization code can go here
}

function setupEventListeners() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}