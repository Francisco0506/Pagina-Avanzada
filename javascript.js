// Funcionalidad para cambiar tema
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Verificar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Tema Claro';
    }
    
    // Función para cambiar tema
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Tema Claro';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = 'Cambiar Tema';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Funcionalidad del formulario
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        
        if (nombre && email) {
            alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje. Te contactaremos en: ${email}`);
            contactForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
    
    // Animación suave para las tarjetas de servicios
    const serviceCards = document.querySelectorAll('.service-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});