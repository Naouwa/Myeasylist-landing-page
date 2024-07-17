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

// Function to show tasks based on feature clicked
function showTasks(feature) {
    switch (feature) {
        case 'mustbedone':
            alert('Tasks that must be done:\n - Task 1\n - Task 2');
            break;
        case 'ongoing':
            alert('Ongoing tasks:\n - Task A\n - Task B');
            break;
        case 'done':
            alert('Tasks that are done:\n - Completed Task X\n - Completed Task Y');
            break;
        default:
            break;
    }
}
