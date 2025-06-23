// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Language switching functionality
const languageSwitcher = {
    currentLang: 'en',
    translations: {
        en: {
            'Home': 'Home',
            'Services': 'Services',
            'About': 'About',
            'Contact': 'Contact',
            'AI-Powered Solutions for the Future': 'AI-Powered Solutions for the Future',
            'Transform your business with intelligent AI agents that automate, optimize, and innovate your operations.': 'Transform your business with intelligent AI agents that automate, optimize, and innovate your operations.',
            'Explore Services': 'Explore Services',
            'Get Started': 'Get Started',
            'Our AI Services': 'Our AI Services',
            'Comprehensive AI solutions tailored to your business needs': 'Comprehensive AI solutions tailored to your business needs',
            'AI Agents': 'AI Agents',
            'Intelligent autonomous agents that handle complex tasks and decision-making processes.': 'Intelligent autonomous agents that handle complex tasks and decision-making processes.',
            'Machine Learning': 'Machine Learning',
            'Custom ML models that learn from your data to provide predictive insights and automation.': 'Custom ML models that learn from your data to provide predictive insights and automation.',
            'Data Analytics': 'Data Analytics',
            'Advanced analytics and business intelligence powered by AI to drive informed decisions.': 'Advanced analytics and business intelligence powered by AI to drive informed decisions.',
            'Process Automation': 'Process Automation',
            'Streamline operations with intelligent automation that adapts to your workflow.': 'Streamline operations with intelligent automation that adapts to your workflow.',
            'Chatbots & NLP': 'Chatbots & NLP',
            'Intelligent conversational AI that understands and responds to natural language.': 'Intelligent conversational AI that understands and responds to natural language.',
            'AI Security': 'AI Security',
            'Protect your systems with AI-powered security solutions and threat detection.': 'Protect your systems with AI-powered security solutions and threat detection.',
            'About cmurosdev': 'About cmurosdev',
            'We are a forward-thinking AI company dedicated to creating intelligent solutions that drive business transformation. Our team of experts combines cutting-edge technology with deep industry knowledge to deliver AI agents that truly make a difference.': 'We are a forward-thinking AI company dedicated to creating intelligent solutions that drive business transformation. Our team of experts combines cutting-edge technology with deep industry knowledge to deliver AI agents that truly make a difference.',
            'Projects Completed': 'Projects Completed',
            'Client Satisfaction': 'Client Satisfaction',
            'Support Available': 'Support Available',
            'Get In Touch': 'Get In Touch',
            'Ready to transform your business with AI? Let\'s discuss your project.': 'Ready to transform your business with AI? Let\'s discuss your project.',
            'Email': 'Email',
            'Phone': 'Phone',
            'Location': 'Location',
            'Global - Remote First': 'Global - Remote First',
            'Your Name': 'Your Name',
            'Your Email': 'Your Email',
            'Company (Optional)': 'Company (Optional)',
            'Your Message': 'Your Message',
            'Send Message': 'Send Message',
            'Transforming businesses with intelligent AI solutions.': 'Transforming businesses with intelligent AI solutions.',
            'All rights reserved.': 'All rights reserved.',
            'Inicio': 'Home',
            'Servicios': 'Services',
            'Nosotros': 'About',
            'Contacto': 'Contact',
            'Soluciones con IA para el Futuro': 'AI-Powered Solutions for the Future',
            'Transforma tu negocio con agentes de IA inteligentes que automatizan, optimizan e innovan tus operaciones.': 'Transform your business with intelligent AI agents that automate, optimize, and innovate your operations.',
            'Explorar Servicios': 'Explore Services',
            'Comenzar': 'Get Started',
            'Nuestros Servicios de IA': 'Our AI Services',
            'Soluciones integrales de IA adaptadas a las necesidades de tu negocio': 'Comprehensive AI solutions tailored to your business needs',
            'Agentes de IA': 'AI Agents',
            'Agentes autónomos inteligentes que manejan tareas complejas y procesos de toma de decisiones.': 'Intelligent autonomous agents that handle complex tasks and decision-making processes.',
            'Aprendizaje Automático': 'Machine Learning',
            'Modelos de ML personalizados que aprenden de tus datos para proporcionar insights predictivos y automatización.': 'Custom ML models that learn from your data to provide predictive insights and automation.',
            'Análisis de Datos': 'Data Analytics',
            'Análisis avanzado e inteligencia empresarial impulsada por IA para tomar decisiones informadas.': 'Advanced analytics and business intelligence powered by AI to drive informed decisions.',
            'Automatización de Procesos': 'Process Automation',
            'Optimiza las operaciones con automatización inteligente que se adapta a tu flujo de trabajo.': 'Streamline operations with intelligent automation that adapts to your workflow.',
            'Chatbots y PLN': 'Chatbots & NLP',
            'IA conversacional inteligente que entiende y responde al lenguaje natural.': 'Intelligent conversational AI that understands and responds to natural language.',
            'Seguridad con IA': 'AI Security',
            'Protege tus sistemas con soluciones de seguridad impulsadas por IA y detección de amenazas.': 'Protect your systems with AI-powered security solutions and threat detection.',
            'Acerca de cmurosdev': 'About cmurosdev',
            'Somos una empresa de IA visionaria dedicada a crear soluciones inteligentes que impulsan la transformación empresarial. Nuestro equipo de expertos combina tecnología de vanguardia con profundo conocimiento de la industria para entregar agentes de IA que realmente marcan la diferencia.': 'We are a forward-thinking AI company dedicated to creating intelligent solutions that drive business transformation. Our team of experts combines cutting-edge technology with deep industry knowledge to deliver AI agents that truly make a difference.',
            'Proyectos Completados': 'Projects Completed',
            'Satisfacción del Cliente': 'Client Satisfaction',
            'Soporte Disponible': 'Support Available',
            'Ponte en Contacto': 'Get In Touch',
            '¿Listo para transformar tu negocio con IA? Hablemos de tu proyecto.': 'Ready to transform your business with AI? Let\'s discuss your project.',
            'Correo': 'Email',
            'Teléfono': 'Phone',
            'Ubicación': 'Location',
            'Global - Remoto Primero': 'Global - Remote First',
            'Tu Nombre': 'Your Name',
            'Tu Correo': 'Your Email',
            'Empresa (Opcional)': 'Company (Optional)',
            'Tu Mensaje': 'Your Message',
            'Enviar Mensaje': 'Send Message',
            'Transformando negocios con soluciones inteligentes de IA.': 'Transforming businesses with intelligent AI solutions.',
            'Todos los derechos reservados.': 'All rights reserved.'
        },
        es: {
            'Home': 'Inicio',
            'Services': 'Servicios',
            'About': 'Nosotros',
            'Contact': 'Contacto',
            'AI-Powered Solutions for the Future': 'Soluciones con IA para el Futuro',
            'Transform your business with intelligent AI agents that automate, optimize, and innovate your operations.': 'Transforma tu negocio con agentes de IA inteligentes que automatizan, optimizan e innovan tus operaciones.',
            'Explore Services': 'Explorar Servicios',
            'Get Started': 'Comenzar',
            'Our AI Services': 'Nuestros Servicios de IA',
            'Comprehensive AI solutions tailored to your business needs': 'Soluciones integrales de IA adaptadas a las necesidades de tu negocio',
            'AI Agents': 'Agentes de IA',
            'Intelligent autonomous agents that handle complex tasks and decision-making processes.': 'Agentes autónomos inteligentes que manejan tareas complejas y procesos de toma de decisiones.',
            'Machine Learning': 'Aprendizaje Automático',
            'Custom ML models that learn from your data to provide predictive insights and automation.': 'Modelos de ML personalizados que aprenden de tus datos para proporcionar insights predictivos y automatización.',
            'Data Analytics': 'Análisis de Datos',
            'Advanced analytics and business intelligence powered by AI to drive informed decisions.': 'Análisis avanzado e inteligencia empresarial impulsada por IA para tomar decisiones informadas.',
            'Process Automation': 'Automatización de Procesos',
            'Streamline operations with intelligent automation that adapts to your workflow.': 'Optimiza las operaciones con automatización inteligente que se adapta a tu flujo de trabajo.',
            'Chatbots & NLP': 'Chatbots y PLN',
            'Intelligent conversational AI that understands and responds to natural language.': 'IA conversacional inteligente que entiende y responde al lenguaje natural.',
            'AI Security': 'Seguridad con IA',
            'Protect your systems with AI-powered security solutions and threat detection.': 'Protege tus sistemas con soluciones de seguridad impulsadas por IA y detección de amenazas.',
            'About cmurosdev': 'Acerca de cmurosdev',
            'We are a forward-thinking AI company dedicated to creating intelligent solutions that drive business transformation. Our team of experts combines cutting-edge technology with deep industry knowledge to deliver AI agents that truly make a difference.': 'Somos una empresa de IA visionaria dedicada a crear soluciones inteligentes que impulsan la transformación empresarial. Nuestro equipo de expertos combina tecnología de vanguardia con profundo conocimiento de la industria para entregar agentes de IA que realmente marcan la diferencia.',
            'Projects Completed': 'Proyectos Completados',
            'Client Satisfaction': 'Satisfacción del Cliente',
            'Support Available': 'Soporte Disponible',
            'Get In Touch': 'Ponte en Contacto',
            'Ready to transform your business with AI? Let\'s discuss your project.': '¿Listo para transformar tu negocio con IA? Hablemos de tu proyecto.',
            'Email': 'Correo',
            'Phone': 'Teléfono',
            'Location': 'Ubicación',
            'Global - Remote First': 'Global - Remoto Primero',
            'Your Name': 'Tu Nombre',
            'Your Email': 'Tu Correo',
            'Company (Optional)': 'Empresa (Opcional)',
            'Your Message': 'Tu Mensaje',
            'Send Message': 'Enviar Mensaje',
            'Transforming businesses with intelligent AI solutions.': 'Transformando negocios con soluciones inteligentes de IA.',
            'All rights reserved.': 'Todos los derechos reservados.',
            'Inicio': 'Inicio',
            'Servicios': 'Servicios',
            'Nosotros': 'Nosotros',
            'Contacto': 'Contacto',
            'Soluciones con IA para el Futuro': 'Soluciones con IA para el Futuro',
            'Transforma tu negocio con agentes de IA inteligentes que automatizan, optimizan e innovan tus operaciones.': 'Transforma tu negocio con agentes de IA inteligentes que automatizan, optimizan e innovan tus operaciones.',
            'Explorar Servicios': 'Explorar Servicios',
            'Comenzar': 'Comenzar',
            'Nuestros Servicios de IA': 'Nuestros Servicios de IA',
            'Soluciones integrales de IA adaptadas a las necesidades de tu negocio': 'Soluciones integrales de IA adaptadas a las necesidades de tu negocio',
            'Agentes de IA': 'Agentes de IA',
            'Agentes autónomos inteligentes que manejan tareas complejas y procesos de toma de decisiones.': 'Agentes autónomos inteligentes que manejan tareas complejas y procesos de toma de decisiones.',
            'Aprendizaje Automático': 'Aprendizaje Automático',
            'Modelos de ML personalizados que aprenden de tus datos para proporcionar insights predictivos y automatización.': 'Modelos de ML personalizados que aprenden de tus datos para proporcionar insights predictivos y automatización.',
            'Análisis de Datos': 'Análisis de Datos',
            'Análisis avanzado e inteligencia empresarial impulsada por IA para tomar decisiones informadas.': 'Análisis avanzado e inteligencia empresarial impulsada por IA para tomar decisiones informadas.',
            'Automatización de Procesos': 'Automatización de Procesos',
            'Optimiza las operaciones con automatización inteligente que se adapta a tu flujo de trabajo.': 'Optimiza las operaciones con automatización inteligente que se adapta a tu flujo de trabajo.',
            'Chatbots y PLN': 'Chatbots y PLN',
            'IA conversacional inteligente que entiende y responde al lenguaje natural.': 'IA conversacional inteligente que entiende y responde al lenguaje natural.',
            'Seguridad con IA': 'Seguridad con IA',
            'Protege tus sistemas con soluciones de seguridad impulsadas por IA y detección de amenazas.': 'Protege tus sistemas con soluciones de seguridad impulsadas por IA y detección de amenazas.',
            'Acerca de cmurosdev': 'Acerca de cmurosdev',
            'Somos una empresa de IA visionaria dedicada a crear soluciones inteligentes que impulsan la transformación empresarial. Nuestro equipo de expertos combina tecnología de vanguardia con profundo conocimiento de la industria para entregar agentes de IA que realmente marcan la diferencia.': 'Somos una empresa de IA visionaria dedicada a crear soluciones inteligentes que impulsan la transformación empresarial. Nuestro equipo de expertos combina tecnología de vanguardia con profundo conocimiento de la industria para entregar agentes de IA que realmente marcan la diferencia.',
            'Proyectos Completados': 'Proyectos Completados',
            'Satisfacción del Cliente': 'Satisfacción del Cliente',
            'Soporte Disponible': 'Soporte Disponible',
            'Ponte en Contacto': 'Ponte en Contacto',
            '¿Listo para transformar tu negocio con IA? Hablemos de tu proyecto.': '¿Listo para transformar tu negocio con IA? Hablemos de tu proyecto.',
            'Correo': 'Correo',
            'Teléfono': 'Teléfono',
            'Ubicación': 'Ubicación',
            'Global - Remoto Primero': 'Global - Remoto Primero',
            'Tu Nombre': 'Tu Nombre',
            'Tu Correo': 'Tu Correo',
            'Empresa (Opcional)': 'Empresa (Opcional)',
            'Tu Mensaje': 'Tu Mensaje',
            'Enviar Mensaje': 'Enviar Mensaje',
            'Transformando negocios con soluciones inteligentes de IA.': 'Transformando negocios con soluciones inteligentes de IA.',
            'Todos los derechos reservados.': 'Todos los derechos reservados.'
        }
    },

    init() {
        this.bindEvents();
        this.loadSavedLanguage();
    },

    bindEvents() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    },

    loadSavedLanguage() {
        const savedLang = localStorage.getItem('cmurosdev_lang') || 'en';
        this.switchLanguage(savedLang);
    },

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('cmurosdev_lang', lang);
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        document.querySelectorAll('[data-en], [data-es]').forEach(element => {
            if (element.classList.contains('hero-title')) return;
            if (lang === 'es' && element.hasAttribute('data-es')) {
                element.textContent = element.getAttribute('data-es');
            } else if (lang === 'en' && element.hasAttribute('data-en')) {
                element.textContent = element.getAttribute('data-en');
            }
        });
        document.querySelectorAll('label').forEach(label => {
            if (lang === 'es' && label.hasAttribute('data-es')) {
                label.textContent = label.getAttribute('data-es');
            } else if (lang === 'en' && label.hasAttribute('data-en')) {
                label.textContent = label.getAttribute('data-en');
            }
        });
        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(input => {
            if (lang === 'es' && input.hasAttribute('data-es')) {
                input.placeholder = input.getAttribute('data-es');
            } else if (lang === 'en' && input.hasAttribute('data-en')) {
                input.placeholder = input.getAttribute('data-en');
            }
        });
        if (typeof typingEffect.run === 'function') {
            typingEffect.run();
        }
    }
};

// Mobile navigation
const mobileNav = {
    init() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
};

// Smooth scrolling for navigation links
const smoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// Navbar scroll effect
const navbarScroll = {
    init() {
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
};

// Contact form handling
const contactForm = {
    init() {
        const form = document.querySelector('.contact-form');
        if (form) {
            form.addEventListener('submit', this.handleSubmit.bind(this));
        }
    },

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email || !data.message) {
            this.showMessage('Please fill in all required fields.', 'error');
            return;
        }

        if (!this.isValidEmail(data.email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission
        this.showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
        e.target.reset();
        
        // In a real application, you would send the data to your server here
        console.log('Form data:', data);
    },

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 8px;
            font-weight: 500;
            ${type === 'success' ? 'background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0;' : 'background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5;'}
        `;

        const form = document.querySelector('.contact-form');
        form.insertBefore(messageDiv, form.firstChild);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
};

// Parallax effect for floating elements
const parallaxEffect = {
    init() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.element');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
};

// Typing effect for hero title
const typingEffect = {
    currentTimeout: null,
    currentIndex: 0,
    currentText: '',
    isTyping: false,
    init() {
        this.run();
    },
    run() {
        const title = document.querySelector('.hero-title');
        if (!title) return;
        // Cancelar cualquier animación anterior
        if (this.currentTimeout) clearTimeout(this.currentTimeout);
        this.isTyping = false;
        // Obtener el texto correcto según el idioma
        const lang = languageSwitcher.currentLang || 'en';
        const text = title.getAttribute('data-' + lang) || '';
        this.currentText = text;
        this.currentIndex = 0;
        title.textContent = '';
        title.style.borderRight = '2px solid var(--primary-color)';
        this.isTyping = true;
        const typeWriter = () => {
            if (!this.isTyping) return; // Si se cancela, detener
            if (this.currentIndex < this.currentText.length) {
                title.textContent += this.currentText.charAt(this.currentIndex);
                this.currentIndex++;
                this.currentTimeout = setTimeout(typeWriter, 100);
            } else {
                title.style.borderRight = 'none';
                this.isTyping = false;
            }
        };
        setTimeout(typeWriter, 200);
    }
};

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Limpiar el contenido del título antes de cualquier animación
    const title = document.querySelector('.hero-title');
    if (title) title.textContent = '';
    languageSwitcher.init();
    setTimeout(() => {
        languageSwitcher.switchLanguage(languageSwitcher.currentLang);
    }, 0);
    mobileNav.init();
    smoothScroll.init();
    navbarScroll.init();
    contactForm.init();
    parallaxEffect.init();
    typingEffect.init();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style); 