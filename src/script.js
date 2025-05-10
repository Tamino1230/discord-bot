document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active state to current section in table of contents
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.table-of-contents a');

    function highlightCurrentSection() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.fontWeight = link.getAttribute('href').slice(1) === currentSection ? 'bold' : 'normal';
        });
    }

    window.addEventListener('scroll', highlightCurrentSection);
    highlightCurrentSection(); // Initial check
});