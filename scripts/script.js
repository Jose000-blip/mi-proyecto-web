// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // MENÚ MÓVIL - Funcionalidad hamburguesa
    // ========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Cambiar icono del menú
            if (navMenu.classList.contains('active')) {
                menuToggle.textContent = '✕';
            } else {
                menuToggle.textContent = '☰';
            }
        });

        // Cerrar menú al hacer click en un enlace
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });

        // Cerrar menú al hacer click fuera de él
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });
    }

    // ========================================
    // ANIMACIONES DE SCROLL - Intersection Observer
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar todos los elementos con clase fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // ========================================
    // FORMULARIO DE CONTACTO
    // ========================================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(this);
            const nombre = formData.get('nombre');
            const email = formData.get('email');
            const telefono = formData.get('telefono');
            const servicio = formData.get('servicio');
            const mensaje = formData.get('mensaje');

            // Validación básica
            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa todos los campos obligatorios.');
                return;
            }

            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un email válido.');
                return;
            }

            // Simular envío exitoso
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Cambiar botón a estado de carga
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simular tiempo de envío
            setTimeout(() => {
                alert(`¡Gracias ${nombre}! Tu solicitud ha sido enviada correctamente. Te contactaremos pronto para enviarte la cotización.`);
                
                // Resetear formulario
                this.reset();
                
                // Restaurar botón
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Opcional: scroll hacia arriba
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
            }, 1500);
        });

        // Validación en tiempo real para el email
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (this.value && !emailRegex.test(this.value)) {
                    this.style.borderColor = '#ff4444';
                    this.style.backgroundColor = '#ffe6e6';
                } else {
                    this.style.borderColor = '';
                    this.style.backgroundColor = '';
                }
            });
        }
    }

    // ========================================
    // NAVEGACIÓN SUAVE - Smooth Scroll
    // ========================================
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcular offset del header fijo
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // HEADER DINÁMICO - Cambios al hacer scroll
    // ========================================
    const header = document.querySelector('.header');
    let lastScrollY = 0;
    let scrolling = false;

    function handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            // Header más transparente y con blur cuando se hace scroll
            header.style.background = 'rgba(30, 60, 114, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            // Header normal en la parte superior
            header.style.background = 'linear-gradient(135deg, #1e3c72, #2a5298)';
            header.style.backdropFilter = 'none';
            header.style.borderBottom = 'none';
        }

        // Ocultar header al hacer scroll hacia abajo, mostrarlo al subir
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            // Scrolling hacia abajo
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling hacia arriba
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        scrolling = false;
    }

    window.addEventListener('scroll', function() {
        if (!scrolling) {
            requestAnimationFrame(handleScroll);
            scrolling = true;
        }
    });

    // ========================================
    // EFECTOS ADICIONALES
    // ========================================

    // Contador animado para las estadísticas
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/\D/g, ''));
            const suffix = counter.textContent.replace(/[0-9]/g, '');
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + suffix;
                }
            }, 30);
        });
    }

    // Activar contador cuando la sección sea visible
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }

    // Efecto parallax sutil en el hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.backgroundPosition = `center ${rate}px`;
        });
    }

    // Preloader simple (opcional)
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Fade in inicial para toda la página
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // ========================================
    // UTILIDADES ADICIONALES
    // ========================================

    // Detectar si es dispositivo móvil
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Función para mostrar notificaciones (opcional)
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : '#f44336'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            opacity: 0;
            transform: translateX(100px);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover después de 4 segundos
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    // Scroll to top button (botón para ir arriba)
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(45deg, #ffd700, #ffed4e);
        color: #1e3c72;
        border: none;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(scrollTopBtn);
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });

    // ========================================
    // LOGS DE DEBUG (remover en producción)
    // ========================================
    console.log('🚛 TransCargo Express - Website cargado correctamente');
    console.log('📱 Dispositivo móvil:', isMobile());
    console.log('🎯 Elementos con animación encontrados:', fadeElements.length);
    
});