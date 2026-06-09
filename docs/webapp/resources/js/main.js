// ============================================
// FAQ — АККОРДЕОН
// ============================================
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        
        if (!isActive) {
            item.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        } else {
            question.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Поддержка клавиатуры
    question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            question.click();
        }
    });
});

// ============================================
// ПЛАВНАЯ ПРОКРУТКА ПО ЯКОРЯМ
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'auto',
                block: 'start'
            });
            
            // Закрываем мобильное меню
            if (typeof navLinks !== 'undefined' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }
    });
});

// ============================================
// МОБИЛЬНОЕ МЕНЮ (БУРГЕР)
// ============================================
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        const isActive = burger.classList.toggle('active');
        navLinks.classList.toggle('active');
        burger.setAttribute('aria-expanded', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// ЭФФЕКТ HEADER ПРИ СКРОЛЛЕ
// ============================================
const header = document.querySelector('.header');

if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

// ============================================
// ПАРАЛЛАКС ФОНА
// ============================================
(function() {
    const parallaxBlocks = document.querySelectorAll('#about, #program');
    const PARALLAX_SPEED = 0.25;
    
    function updateParallax() {
        const scrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        parallaxBlocks.forEach(block => {
            const bg = block.querySelector('.parallax-bg');
            if (!bg) return;
            
            const rect = block.getBoundingClientRect();
            const blockTop = rect.top + scrollY;
            const blockHeight = block.offsetHeight;
            
            if (rect.bottom < 0 || rect.top > windowHeight) return;
            
            const maxOffset = blockHeight * 0.20;
            const progress = (scrollY - blockTop + windowHeight) / (windowHeight + blockHeight);
            const offset = (progress - 0.5) * maxOffset * 2 * PARALLAX_SPEED;
            
            const clampedOffset = Math.max(-maxOffset, Math.min(maxOffset, offset));
            
            bg.style.transform = `translate3d(0, ${clampedOffset}px, 0)`;
        });
    }
    
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    updateParallax();
})();

// ============================================
// ПЕРЕКЛЮЧАТЕЛЬ ТЕМ (опционально)
// ============================================
function switchTheme(themeName) {
    const themeStylesheet = document.getElementById('theme-stylesheet');
    if (themeStylesheet) {
        themeStylesheet.href = `/resources/css/theme-${themeName}.css`;
        localStorage.setItem('selectedTheme', themeName);
    }
}

// Восстановление темы при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        switchTheme(savedTheme);
    }
});

// ============================================
// ПЕРЕКЛЮЧАТЕЛЬ ТЕМ
// ============================================
(function() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    
    // Функция смены темы
    function switchTheme(themeName) {
        if (!themeStylesheet) return;
        
        // Меняем href у тега link
        themeStylesheet.href = `${window.location.pathname.replace(/\/[^\/]*$/, '')}/resources/css/theme-${themeName}.css`;
        
        // Обновляем активную кнопку
        themeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === themeName);
        });
        
        // Сохраняем выбор в localStorage
        localStorage.setItem('selectedTheme', themeName);
    }
    
    // Обработчики кликов по кнопкам
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchTheme(btn.dataset.theme);
        });
    });
    
    // Восстанавливаем тему при загрузке
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && themeStylesheet) {
        // Меняем href сразу, без анимации
        themeStylesheet.href = `${window.location.pathname.replace(/\/[^\/]*$/, '')}/resources/css/theme-${savedTheme}.css`;
        themeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === savedTheme);
        });
    }
})();
