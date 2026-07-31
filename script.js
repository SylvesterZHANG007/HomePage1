/**
 * Siyuan Zhang - Personal Portfolio Website
 * Main JavaScript File - 主要JavaScript功能文件
 * 
 * 功能说明:
 * - 页面导航高亮和滚动监听
 * - 平滑滚动和页面过渡动画
 * - 移动端触摸交互优化
 * - 卡片悬停效果和触摸反馈
 * 
 * 技术特点:
 * - 原生JavaScript ES6+
 * - 触摸事件处理
 * - 性能优化的滚动监听
 * - 响应式交互设计
 * 
 * 作者: Siyuan Zhang
 * 版本: v3.0
 * 更新: 2024年12月
 */

// ===== 页面过渡和动画系统 =====

// Page transition animation
const PageTransition = {
    init() {
        this.body = document.body;
        this.setupPageLoad();
        this.setupSmoothScrolling();
        this.setupNavigationHighlight();
        this.setupMobileMenu();
    },

    setupPageLoad() {
        // Set initial state
        // NOTE: Do NOT use `transform` on <body> here. A transform on the body
        // creates a new containing block, which breaks `position: fixed` on the
        // navbar (it would scroll away with the page). Fade in with opacity only.
        this.body.style.opacity = '0';
        this.body.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        // Smooth page entrance
        setTimeout(() => {
            this.body.style.opacity = '1';
        }, 100);
    },

    setupSmoothScrolling() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Adjusted for navbar height
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    setupNavigationHighlight() {
        // Update active navigation link based on scroll position
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        // Debounce scroll event to improve performance
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                let current = '';
                const scrollPos = window.scrollY + 120;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            }, 50); // 50ms debounce
        });
    },

    setupMobileMenu() {
        // Mobile menu toggle
        window.toggleMobileMenu = () => {
            const navMenu = document.querySelector('.nav-menu');
            const navToggle = document.querySelector('.nav-toggle');
            const navOverlay = document.querySelector('.nav-overlay');
            const body = document.body;
            
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            navOverlay.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        };

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navMenu = document.querySelector('.nav-menu');
                const navToggle = document.querySelector('.nav-toggle');
                const navOverlay = document.querySelector('.nav-overlay');

                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navOverlay.classList.remove('active');
                // Restore body scroll — without this the page stays locked
                // (overflow: hidden set on open) and can't scroll until reload.
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking overlay
        document.querySelector('.nav-overlay')?.addEventListener('click', () => {
            toggleMobileMenu();
        });
    }
};

// Reading progress bar: create once and attach to the navbar (bottom edge)
const readingProgress = document.createElement('div');
readingProgress.className = 'reading-progress';
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.appendChild(readingProgress);
    } else {
        document.body.appendChild(readingProgress);
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const scrolled = window.scrollY;
        if (scrolled > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            navbar.style.backdropFilter = 'blur(30px) saturate(180%)';
        }
    }

    // Update reading progress: fraction of the page scrolled (0% -> 100%)
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    readingProgress.style.width = progress + '%';
});

// Enhanced intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize page transitions
    PageTransition.init();
    
    // Observe cards and sections for animations
    // The project grid inside #pcfAll is display:none until expanded, so it never
    // trips the observer and would stay stuck at opacity:0 / translateY(30px).
    // Those inline styles also fight the FLIP transition, so skip it here.
    const elementsToAnimate = document.querySelectorAll(
        '.card, .category-card-large, .metric-card, .timeline-item, .research-card-horizontal, .project-card-with-image:not(#pcfAll .project-card-with-image)'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        // Set initial opacity for fade-in effect
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        }
    });
});

// Add smooth hover effects and mobile touch support
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .category-card-large, .project-card-with-image, .research-card-horizontal');
    
    cards.forEach(card => {
        // Desktop hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
        
        // Mobile touch effects
        if ('ontouchstart' in window) {
            card.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
                this.style.transition = 'transform 0.1s ease';
            });
            
            card.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
                this.style.transition = 'transform 0.2s ease';
            });
        }
    });
    
    // Mobile-specific optimizations
    if ('ontouchstart' in window) {
        // Disable hover effects on mobile
        document.body.classList.add('mobile-device');
        
        // Optimize scroll performance
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Update scroll-based animations here if needed
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Improve touch response
        document.addEventListener('touchstart', () => {}, {passive: true});
        document.addEventListener('touchmove', () => {}, {passive: true});
    }
});

// Prevent FOUC (Flash of Unstyled Content)
document.documentElement.style.opacity = '0';
window.addEventListener('load', () => {
    document.documentElement.style.opacity = '1';
});



// Add intersection observer for counter animation
const animateCounters = () => {
    const counters = document.querySelectorAll('.metric-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const numericTarget = parseInt(target.replace(/\D/g, ''));
        
        if (numericTarget > 0) {
            let current = 0;
            const increment = numericTarget / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericTarget) {
                    current = numericTarget;
                    clearInterval(timer);
                }
                counter.textContent = target.replace(/\d+/, Math.floor(current));
            }, 30);
        }
    });
};

// Trigger counter animation when metrics section is visible
const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            metricsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const metricsSection = document.querySelector('.impact-metrics');
    if (metricsSection) {
        metricsObserver.observe(metricsSection);
    }
});

// Abstract toggle function
function toggleAbstract(abstractId) {
    const abstractElement = document.getElementById(abstractId);
    if (abstractElement.style.display === 'none' || abstractElement.style.display === '') {
        abstractElement.style.display = 'block';
    } else {
        abstractElement.style.display = 'none';
    }
}

// Rotating keyword in the hero subtitle, typewriter style: the current word is
// erased one character at a time, then the next word is typed in one character
// at a time. A width-collapse "wipe" was tried first, but clipping a box only
// hides the text - it never reads as erasing, and the swap at zero width looked
// like the word changing behind a vanished cursor. Deleting real characters
// makes the erase unmistakable.
(() => {
    const wrapper = document.querySelector('.hero-words');
    if (!wrapper) return;

    const target = wrapper.querySelector('b') || wrapper;
    const words = (wrapper.dataset.words || '').split('|').filter(Boolean);
    if (words.length < 2) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const TYPE = 30;     // ms per character typed
    const ERASE = 30;    // ms per character erased
    const HOLD = 2000;   // ms the complete word rests before erasing
    const PAUSE = 320;   // ms of stillness after erasing, before typing

    let index = 0;
    let text = words[0];

    const wait = (ms) => new Promise((r) => setTimeout(r, ms));

    const erase = async () => {
        while (text.length) {
            text = text.slice(0, -1);
            target.textContent = text;
            await wait(ERASE);
        }
    };

    const type = async (word) => {
        for (let i = 1; i <= word.length; i++) {
            text = word.slice(0, i);
            target.textContent = text;
            await wait(TYPE);
        }
    };

    const run = async () => {
        // eslint-disable-next-line no-constant-condition
        while (true) {
            await wait(HOLD);
            await erase();
            await wait(PAUSE);
            index = (index + 1) % words.length;
            await type(words[index]);
        }
    };

    run();
})();

// Project coverflow: cards are laid out around an active index. Each card's
// distance from the centre decides its offset, scale, blur and stacking, so the
// middle one reads as the focus and the outer ones recede. It drifts on its own,
// and the mouse wheel or the arrows scrub through it.
(() => {
    const root = document.getElementById('pcf');
    if (!root) return;

    const stage = root.querySelector('.pcf-stage');
    const cards = [...root.querySelectorAll('.pcf-card')];
    if (cards.length < 2) return;

    const prevBtn = root.querySelector('.pcf-prev');
    const nextBtn = root.querySelector('.pcf-next');

    const N = cards.length;
    // Offsets are absolute pixels, so they must shrink with the viewport or the
    // cards push the document wider than the screen.
    const stepFor = () => (window.innerWidth <= 768 ? 118 : 235);
    let STEP = stepFor();
    const AUTO_MS = 3000;  // dwell before drifting one card along
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let index = 0;
    let timer = null;

    // Shortest signed distance from `i` to the active index on a ring, so the
    // carousel wraps without a jump when crossing the ends.
    const ringOffset = (i) => {
        let d = i - index;
        if (d > N / 2) d -= N;
        if (d < -N / 2) d += N;
        return d;
    };

    const render = () => {
        cards.forEach((card, i) => {
            const d = ringOffset(i);
            const a = Math.abs(d);
            // Depth cues: shrink and blur with distance, and fade the far ones out.
            const scale = a === 0 ? 1 : a === 1 ? 0.78 : 0.6;
            const blur = a === 0 ? 0 : a === 1 ? 0 : 3;
            // The container no longer clips (that sliced the shadows), so cards
            // beyond the third ring are hidden outright.
            const opacity = a <= 1 ? 1 : a === 2 ? 0.5 : 0;
            // Squeeze outer cards inward so they peek rather than march off-screen.
            const x = d * STEP * (a <= 1 ? 1 : 0.86);

            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--s', scale);
            card.style.setProperty('--b', `${blur}px`);
            card.style.setProperty('--o', opacity);
            // Centre on top so it overlaps the neighbours on both sides.
            card.style.setProperty('--z', String(100 - a * 10));
            card.style.visibility = opacity === 0 ? 'hidden' : 'visible';
            card.classList.toggle('is-active', a === 0);
            card.setAttribute('aria-hidden', a === 0 ? 'false' : 'true');
        });
    };

    const go = (delta) => {
        index = (index + delta + N) % N;
        render();
    };

    const startAuto = () => {
        if (reduce) return;
        stopAuto();
        timer = setInterval(() => go(1), AUTO_MS);
    };
    const stopAuto = () => {
        if (timer) clearInterval(timer);
        timer = null;
    };

    nextBtn?.addEventListener('click', () => { go(1); startAuto(); });
    prevBtn?.addEventListener('click', () => { go(-1); startAuto(); });

    // Wheel scrubbing: accumulate deltas so a trackpad's many small events don't
    // fly through the whole carousel at once. Only claim the gesture when it is
    // mostly horizontal-ish scrolling over the carousel; otherwise let the page
    // scroll normally.
    let wheelAcc = 0;
    let wheelLock = false;
    root.addEventListener('wheel', (e) => {
        const amount = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        wheelAcc += amount;
        if (Math.abs(wheelAcc) < 60 || wheelLock) return;
        e.preventDefault();
        go(wheelAcc > 0 ? 1 : -1);
        wheelAcc = 0;
        wheelLock = true;
        setTimeout(() => { wheelLock = false; }, 260);
        startAuto();
    }, { passive: false });

    // Pause the drift while the pointer rests on the carousel.
    root.addEventListener('mouseenter', stopAuto);
    root.addEventListener('mouseleave', startAuto);

    // Touch swipe.
    let touchX = null;
    stage.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; stopAuto(); }, { passive: true });
    stage.addEventListener('touchend', (e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX = null;
        startAuto();
    }, { passive: true });

    // Clicking a side card brings it to the centre instead of following its link.
    cards.forEach((card, i) => {
        card.addEventListener('click', (e) => {
            if (ringOffset(i) !== 0) {
                e.preventDefault();
                index = i;
                render();
                startAuto();
            }
        });
    });

    window.addEventListener('resize', () => {
        const next = stepFor();
        if (next !== STEP) {
            STEP = next;
            render();
        }
    });

    render();
    startAuto();
})();

// Project list expand/collapse: a plain swap between the carousel and the full
// grid, no transition. (Animated versions of this were tried and dropped.)
(() => {
    const btn = document.getElementById('pcfExpand');
    const panel = document.getElementById('pcfAll');
    const carousel = document.getElementById('pcf');
    if (!btn || !panel || !carousel) return;

    const label = btn.querySelector('.pcf-expand-label');
    let open = false;

    btn.addEventListener('click', () => {
        open = !open;
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (label) label.textContent = open ? 'Collapse' : 'See all projects';
        panel.classList.toggle('is-open', open);
        carousel.classList.toggle('is-hidden', open);
    });
})();
