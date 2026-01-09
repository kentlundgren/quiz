// ============================================
// JavaScript för "Fredagsquiz med AI" - Pedagogisk genomgång
// Skapad av: Cursor (AI-assisterad utveckling)
// Datum: November 2025
// 
// KOMMENTAR: Detta script använder ES2023-funktionalitet
// ============================================

'use strict';

// ============================================
// MODAL HANTERING - Teknik & Filformat
// ============================================

/**
 * Initialiserar modal-funktionalitet när DOM är laddad
 * Skapad: 2025-11-21
 */
document.addEventListener('DOMContentLoaded', () => {
    // Hämta DOM-element
    const modal = document.getElementById('techModal');
    const btn = document.getElementById('techModalBtn');
    const span = document.getElementsByClassName('close')[0];

    // Kontrollera att alla element finns
    if (!modal || !btn || !span) {
        console.error('Modal-element kunde inte hittas');
        return;
    }

    /**
     * Öppnar modal när användaren klickar på knappen
     * UPPDATERING 2025-11-21: Lagt till smooth scroll till toppen
     */
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Förhindra scrollning i bakgrunden
        
        // Logga händelse för analytics (om implementerat)
        logModalEvent('open', 'tech-modal');
    });

    /**
     * Stänger modal när användaren klickar på (x)
     * UPPDATERING 2025-11-21: Återställ body overflow
     */
    span.addEventListener('click', () => {
        closeModal();
    });

    /**
     * Stänger modal när användaren klickar utanför modal-innehållet
     * UPPDATERING 2025-11-21: Förbättrad event-hantering
     */
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    /**
     * Stänger modal med Escape-tangenten
     * UPPDATERING 2025-11-21: Tillgänglighetsfunktion tillagd
     */
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    /**
     * Hjälpfunktion för att stänga modal
     * Skapad: 2025-11-21
     */
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Återställ scrollning
        
        // Logga händelse för analytics
        logModalEvent('close', 'tech-modal');
    }

    /**
     * Loggning av modal-händelser (placeholder för framtida analytics)
     * Skapad: 2025-11-21
     * 
     * @param {string} action - Händelsetyp (open, close)
     * @param {string} modalName - Namn på modal
     */
    function logModalEvent(action, modalName) {
        // I framtiden kan detta kopplas till Google Analytics, Matomo, etc.
        console.log(`Modal ${action}: ${modalName} - ${new Date().toISOString()}`);
    }
});

// ============================================
// SMOOTH SCROLL FÖR INTERNA LÄNKAR
// ============================================

/**
 * Smooth scroll-funktionalitet för alla interna länkar
 * UPPDATERING 2025-11-21: Använder moderna scrollIntoView options
 */
document.addEventListener('DOMContentLoaded', () => {
    // Hämta alla interna länkar (som börjar med #)
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Kontrollera att det är en giltig anchor
            if (href === '#' || href === '') return;

            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                // Smooth scroll till element
                // KOMMENTAR: Använder ES2023 smooth scrolling API
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Uppdatera URL utan att reloada sidan
                history.pushState(null, null, href);
            }
        });
    });
});

// ============================================
// SCROLL-ANIMATIONER (FADE IN)
// ============================================

/**
 * Fade-in animation för element när de scrollar in i vy
 * Skapad: 2025-11-21
 * KOMMENTAR: Använder Intersection Observer API (ES2023)
 */
document.addEventListener('DOMContentLoaded', () => {
    // Elementen som ska animeras
    const animatedElements = document.querySelectorAll(
        '.step-card, .insight-card, .comparison-card, .workflow-step'
    );

    // Kontrollera om Intersection Observer stöds
    if (!('IntersectionObserver' in window)) {
        console.log('Intersection Observer stöds ej - animationer inaktiverade');
        return;
    }

    /**
     * Intersection Observer callback
     * Triggas när element kommer in i eller lämnar viewport
     */
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element är synligt - lägg till animation klass
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                // Trigger animation efter en kort delay
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                // Sluta observera detta element (animation körs bara en gång)
                observer.unobserve(entry.target);
            }
        });
    };

    // Skapa observer med options
    const observerOptions = {
        root: null, // Använd viewport som root
        rootMargin: '0px',
        threshold: 0.1 // Trigger när 10% av elementet är synligt
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Börja observera alla element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// ============================================
// EXTERNA LÄNKAR - Öppna i ny flik
// ============================================

/**
 * Säkerställer att externa länkar öppnas i ny flik med säkra attributes
 * Skapad: 2025-11-21
 * KOMMENTAR: Viktig säkerhetsfunktion för externa länkar
 */
document.addEventListener('DOMContentLoaded', () => {
    // Hämta alla externa länkar (som inte är anchor-länkar)
    const externalLinks = document.querySelectorAll('a[href^="http"]');

    externalLinks.forEach(link => {
        // Kontrollera om länken redan har target="_blank"
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
        }

        // Lägg till säkerhetsattribut för att förhindra tabnabbing
        // KOMMENTAR: rel="noopener noreferrer" är viktigt för säkerhet
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }

        // Lägg till visuell indikator (optional - kan stylas med CSS)
        if (!link.querySelector('.external-icon')) {
            const icon = document.createElement('span');
            icon.className = 'external-icon';
            icon.innerHTML = ' ↗';
            icon.style.fontSize = '0.8em';
            icon.style.opacity = '0.7';
            link.appendChild(icon);
        }
    });
});

// ============================================
// RESPONSIV NAVIGATION HIGHLIGHT
// ============================================

/**
 * Highlightar aktuell sektion i navigation baserat på scroll-position
 * Skapad: 2025-11-21
 * KOMMENTAR: Använder IntersectionObserver för performance (ES2023)
 */
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Trigger när sektion är centrerad
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hitta motsvarande navigationslänk och highlighta den
                const id = entry.target.getAttribute('id');
                const navLink = document.querySelector(`a[href="#${id}"]`);
                
                if (navLink) {
                    // Ta bort tidigare highlight
                    document.querySelectorAll('.nav-active').forEach(link => {
                        link.classList.remove('nav-active');
                    });
                    
                    // Lägg till highlight på aktuell länk
                    navLink.classList.add('nav-active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// ============================================
// COPY-TO-CLIPBOARD FUNKTIONALITET
// ============================================

/**
 * Lägg till copy-to-clipboard funktionalitet för kod-exempel (om sådana finns)
 * Skapad: 2025-11-21
 * KOMMENTAR: Använder moderna Clipboard API (ES2023)
 */
document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(codeBlock => {
        // Skapa copy-knapp
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.textContent = 'Kopiera';
        copyButton.setAttribute('aria-label', 'Kopiera kod');

        // Styling för copy-knapp
        Object.assign(copyButton.style, {
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '5px 10px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '0.85rem',
            transition: 'all 0.3s ease'
        });

        // Gör parent position relative
        const pre = codeBlock.parentElement;
        if (pre.tagName === 'PRE') {
            pre.style.position = 'relative';
            pre.appendChild(copyButton);
        }

        // Click-event för kopiering
        copyButton.addEventListener('click', async () => {
            try {
                // KOMMENTAR: Använder moderna Clipboard API istället för deprecated execCommand
                await navigator.clipboard.writeText(codeBlock.textContent);
                
                // Feedback till användaren
                copyButton.textContent = '✓ Kopierat!';
                copyButton.style.background = '#10b981';

                // Återställ efter 2 sekunder
                setTimeout(() => {
                    copyButton.textContent = 'Kopiera';
                    copyButton.style.background = '#2563eb';
                }, 2000);

            } catch (err) {
                console.error('Kunde inte kopiera text:', err);
                copyButton.textContent = '✗ Fel';
                copyButton.style.background = '#ef4444';

                setTimeout(() => {
                    copyButton.textContent = 'Kopiera';
                    copyButton.style.background = '#2563eb';
                }, 2000);
            }
        });
    });
});

// ============================================
// PRINT-FUNKTION
// ============================================

/**
 * Lägg till print-funktion med optimering för utskrift
 * Skapad: 2025-11-21
 */
function printPage() {
    // Stäng modal före utskrift om den är öppen
    const modal = document.getElementById('techModal');
    if (modal && modal.style.display === 'block') {
        modal.style.display = 'none';
    }

    // Trigga print-dialog
    window.print();
}

// Gör funktionen tillgänglig globalt
window.printPage = printPage;

// ============================================
// FELHANTERING OCH LOGGING
// ============================================

/**
 * Global error handler för att fånga JavaScript-fel
 * Skapad: 2025-11-21
 * KOMMENTAR: Viktig för debugging i produktion
 */
window.addEventListener('error', (event) => {
    console.error('JavaScript-fel inträffade:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
    });

    // I produktion skulle detta kunna skickas till en error-tracking service
    // Exempel: Sentry, Rollbar, LogRocket, etc.
});

/**
 * Handler för unhandled promise rejections
 * Skapad: 2025-11-21
 * KOMMENTAR: ES2023 feature för att fånga obehandlade Promise-fel
 */
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
    
    // Förhindra default error-hantering
    event.preventDefault();
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

/**
 * Logga sidans laddningstid
 * Skapad: 2025-11-21
 * KOMMENTAR: Använder Performance API för att mäta laddningstid
 */
window.addEventListener('load', () => {
    // Vänta lite så att allt hinner laddas
    setTimeout(() => {
        if (window.performance && window.performance.timing) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            console.log(`📊 Sidladdningstid: ${pageLoadTime}ms`);
            
            // I produktion kan denna data skickas till analytics
        }
    }, 0);
});

// ============================================
// SLUT PÅ SCRIPT
// ============================================

console.log('✅ Fredagsquiz AI - Script laddat och klart!');
console.log('📅 Skapad: 2025-11-21');
console.log('🤖 Utvecklad med: Cursor (AI-assisterad kodgenerering)');
console.log('💡 ES2023-funktionalitet används för moderna webbfunktioner');

