// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple reveal on scroll for sections
const sections = document.querySelectorAll('.section');

const revealSection = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', revealSection);
revealSection(); // Initial call to reveal any sections already in view
