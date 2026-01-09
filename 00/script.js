/**
 * ============================================
 * JavaScript för "Hur Fredagsquizet Skapas"
 * Beskriver AI-samarbetet mellan Claude och Cursor
 * ============================================
 * 
 * Detta script innehåller interaktiva funktioner för att
 * förbättra användarupplevelsen på beskrivningssidan.
 */

// ========== DOCUMENT READY ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('📝 Sidan "Hur Fredagsquizet Skapas" har laddats');
    
    // Initialisera alla funktioner
    initSmoothScroll();
    initScrollAnimations();
    initCodeHighlight();
    trackUserInteraction();
    addPrintFunctionality();
    
    console.log('✅ Alla interaktiva funktioner har initierats');
});

// ========== SMOOTH SCROLL ==========
/**
 * Implementerar mjuk scrollning för alla interna länkar
 */
function initSmoothScroll() {
    // Hitta alla länkar som pekar på ID:n på samma sida
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Ignorera tomma hash-länkar
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Mjuk scrollning till målelementet
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Uppdatera URL:en utan att ladda om sidan
                history.pushState(null, null, targetId);
            }
        });
    });
    
    console.log('🔗 Smooth scroll initierad för interna länkar');
}

// ========== SCROLL ANIMATIONS ==========
/**
 * Lägger till animationer när element kommer in i synfältet
 * Detta förbättrar användarupplevelsen genom att göra innehållet mer dynamiskt
 */
function initScrollAnimations() {
    // Skapa en Intersection Observer för att upptäcka när element blir synliga
    const observerOptions = {
        threshold: 0.1, // Trigga när 10% av elementet är synligt
        rootMargin: '0px 0px -50px 0px' // Offset från botten
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Lägg till fade-in animation
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                // Animera in elementet
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                // Sluta observera efter animationen
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observera alla sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    console.log('🎨 Scroll-animationer initierade');
}

// ========== CODE HIGHLIGHT ==========
/**
 * Förbättrar kodexempel genom att lägga till copy-knappar
 * Detta gör det enklare för användare att kopiera promptexempel
 */
function initCodeHighlight() {
    const codeBlocks = document.querySelectorAll('.prompt-text');
    
    codeBlocks.forEach((block, index) => {
        // Skapa en container för koden och knappen
        const container = document.createElement('div');
        container.style.position = 'relative';
        
        // Flytta koden till container
        block.parentNode.insertBefore(container, block);
        container.appendChild(block);
        
        // Skapa kopieringsknapp
        const copyButton = document.createElement('button');
        copyButton.textContent = '📋 Kopiera';
        copyButton.className = 'copy-button';
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 8px 16px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            z-index: 10;
        `;
        
        // Hover-effekt
        copyButton.addEventListener('mouseenter', function() {
            this.style.background = 'var(--primary-dark)';
            this.style.transform = 'scale(1.05)';
        });
        
        copyButton.addEventListener('mouseleave', function() {
            this.style.background = 'var(--primary-color)';
            this.style.transform = 'scale(1)';
        });
        
        // Kopieringsfunktionalitet
        copyButton.addEventListener('click', function() {
            const text = block.textContent;
            
            // Kopiera till clipboard
            navigator.clipboard.writeText(text).then(function() {
                // Visa framgångsmeddelande
                copyButton.textContent = '✅ Kopierad!';
                copyButton.style.background = 'var(--success)';
                
                // Återställ efter 2 sekunder
                setTimeout(() => {
                    copyButton.textContent = '📋 Kopiera';
                    copyButton.style.background = 'var(--primary-color)';
                }, 2000);
            }).catch(function(err) {
                console.error('Kunde inte kopiera text: ', err);
                copyButton.textContent = '❌ Fel';
                setTimeout(() => {
                    copyButton.textContent = '📋 Kopiera';
                }, 2000);
            });
        });
        
        container.appendChild(copyButton);
    });
    
    console.log('📋 Copy-knappar tillagda till kodexempel');
}

// ========== TRACK USER INTERACTION ==========
/**
 * Spårar användarinteraktioner för att förstå hur besökare använder sidan
 * (I en produktionsmiljö skulle detta kunna integreras med analytics)
 */
function trackUserInteraction() {
    // Spåra klick på exempel-kort
    const exampleCards = document.querySelectorAll('.example-card');
    exampleCards.forEach(card => {
        card.addEventListener('click', function() {
            const quizNumber = this.querySelector('.example-number').textContent;
            console.log(`🎯 Användaren klickade på: ${quizNumber}`);
            // Här skulle man kunna skicka data till analytics
        });
    });
    
    // Spåra klick på tips-kort
    const tipCards = document.querySelectorAll('.tip-card');
    tipCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const heading = this.querySelector('h3').textContent;
            console.log(`💡 Användaren klickade på tips-kort: ${heading}`);
        });
    });
    
    // Spåra scrolldjup
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
        if (scrollPercentage > maxScroll) {
            maxScroll = scrollPercentage;
            
            // Logga milstolpar
            if (maxScroll > 25 && maxScroll < 30) {
                console.log('📊 Användaren har scrollat 25% av sidan');
            } else if (maxScroll > 50 && maxScroll < 55) {
                console.log('📊 Användaren har scrollat 50% av sidan');
            } else if (maxScroll > 75 && maxScroll < 80) {
                console.log('📊 Användaren har scrollat 75% av sidan');
            } else if (maxScroll > 95) {
                console.log('📊 Användaren har scrollat till botten av sidan');
            }
        }
    });
    
    console.log('📊 Användarinteraktionsspårning aktiverad');
}

// ========== PRINT FUNCTIONALITY ==========
/**
 * Lägger till utskriftsfunktionalitet
 */
function addPrintFunctionality() {
    // Skapa utskriftsknapp
    const printButton = document.createElement('button');
    printButton.innerHTML = '🖨️ Skriv ut guide';
    printButton.className = 'print-button';
    printButton.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        padding: 15px 25px;
        background: var(--secondary-color);
        color: white;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        box-shadow: var(--shadow-lg);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    // Hover-effekt
    printButton.addEventListener('mouseenter', function() {
        this.style.background = 'var(--secondary-dark)';
        this.style.transform = 'scale(1.05)';
    });
    
    printButton.addEventListener('mouseleave', function() {
        this.style.background = 'var(--secondary-color)';
        this.style.transform = 'scale(1)';
    });
    
    // Utskriftsfunktionalitet
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    document.body.appendChild(printButton);
    
    // Dölj utskriftsknappen vid utskrift
    window.addEventListener('beforeprint', function() {
        printButton.style.display = 'none';
    });
    
    window.addEventListener('afterprint', function() {
        printButton.style.display = 'block';
    });
    
    console.log('🖨️ Utskriftsfunktionalitet tillagd');
}

// ========== UTILITY FUNCTIONS ==========

/**
 * Funktion för att visa en notifikation
 * Kan användas för olika typer av feedback till användaren
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? 'var(--success)' : 'var(--info)'};
        color: white;
        border-radius: 10px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Ta bort notifikationen efter 3 sekunder
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ========== KEYBOARD SHORTCUTS ==========
/**
 * Lägger till tangentbordsgenvägar för vanliga åtgärder
 */
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + P för utskrift
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
    
    // Ctrl/Cmd + K för att scrolla till toppen
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// ========== ACCESSIBILITY IMPROVEMENTS ==========
/**
 * Förbättrar tillgängligheten genom att lägga till ARIA-attribut
 */
function improveAccessibility() {
    // Lägg till aria-labels för viktiga sektioner
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const heading = section.querySelector('h2');
        if (heading) {
            section.setAttribute('aria-labelledby', `section-heading-${index}`);
            heading.id = `section-heading-${index}`;
        }
    });
    
    // Lägg till aria-labels för interaktiva element
    const cards = document.querySelectorAll('.example-card, .tip-card, .step-card');
    cards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
    });
    
    console.log('♿ Tillgänglighetsförbättringar tillagda');
}

// Kör tillgänglighetsförbättringar
improveAccessibility();

// ========== EXPORT FOR TESTING ==========
// Om du vill testa funktionerna kan du exportera dem
// (Detta används normalt inte i produktion)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initSmoothScroll,
        initScrollAnimations,
        initCodeHighlight,
        trackUserInteraction,
        addPrintFunctionality,
        showNotification
    };
}

// ========== MODAL FUNCTIONALITY ==========
/**
 * Hanterar öppning och stängning av teknik-modalen
 * Uppdatering: Här skedde en uppdatering för att lägga till modal-funktionalitet
 */
function initTechModal() {
    const modal = document.getElementById('techModal');
    const btn = document.getElementById('techModalBtn');
    const span = document.getElementsByClassName('close')[0];
    
    // Öppna modal när knappen klickas
    btn.onclick = function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Förhindra scrollning i bakgrunden
        console.log('🛠️ Teknik-modal öppnad');
    }
    
    // Stäng modal när X klickas
    span.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Återställ scrollning
        console.log('❌ Teknik-modal stängd');
    }
    
    // Stäng modal när användaren klickar utanför modalen
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            console.log('❌ Teknik-modal stängd (klick utanför)');
        }
    }
    
    // Stäng modal med ESC-tangent
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            console.log('❌ Teknik-modal stängd (ESC-tangent)');
        }
    });
    
    console.log('🛠️ Teknik-modal initierad');
}

// Initiera modal när sidan laddas
initTechModal();

// ========== SLUTKOMMENTAR ==========
console.log('🎉 Alla script för "Hur Fredagsquizet Skapas" har laddats framgångsrikt!');

