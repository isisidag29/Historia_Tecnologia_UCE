// script.js - Control de navegación y ScrollSpy

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL SPY: Iluminar el botón correcto al bajar
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-btn');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Si el scroll está dentro de esta sección (-150px para el header)
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 2. SMOOTH SCROLL para los enlaces del menú
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Restar un poco para compensar la barra fija
            const offsetTop = targetSection.offsetTop - 100;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });
});
