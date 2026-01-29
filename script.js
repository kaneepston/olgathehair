// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon between menu and close
            const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.textContent = 'menu';
                } else {
                    icon.textContent = 'close';
                }
            }
        });
        
        // Close menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
                if (icon) {
                    icon.textContent = 'menu';
                }
            });
        });
    }
    
    // Determine current language from URL path - more robust detection
    // Make it globally accessible for rendering functions
    window.getCurrentLanguage = function() {
        const currentPath = window.location.pathname;
        const currentUrl = window.location.href;
        
        // Check for explicit language paths first (most specific check)
        // Check pathname first - most reliable
        // Use indexOf to be more precise
        if (currentPath.indexOf('/en/') === 0 || currentPath === '/en' || currentPath === '/en/index.html' || currentPath.indexOf('/en') === 0) {
            return 'en';
        }
        if (currentPath.indexOf('/pl/') === 0 || currentPath === '/pl' || currentPath === '/pl/index.html' || currentPath.indexOf('/pl') === 0) {
            return 'pl';
        }
        
        // Check full URL as fallback (for cases where pathname might not show subdirectory correctly)
        // Use regex to be more precise
        const hasEn = /\/en(\/|$|index\.html)/.test(currentUrl);
        const hasPl = /\/pl(\/|$|index\.html)/.test(currentUrl);
        
        if (hasEn && !hasPl) {
            return 'en';
        }
        if (hasPl && !hasEn) {
            return 'pl';
        }
        
        // Check HTML lang attribute as additional fallback
        const htmlLang = document.documentElement ? document.documentElement.lang : null;
        if (htmlLang === 'en') return 'en';
        if (htmlLang === 'pl') return 'pl';
        
        // If on root, default to Polish (but should redirect)
        if (currentPath === '/' || currentPath === '/index.html') {
            return 'pl';
        }
        
        // Default to Polish if uncertain
        return 'pl';
    }
    
    const currentLang = window.getCurrentLanguage();
    const isPolish = currentLang === 'pl';
    const isEnglish = currentLang === 'en';
    
    // Only redirect if we're actually on root (not in a subdirectory)
    // This check should be very specific to avoid breaking subdirectory pages
    const redirectPath = window.location.pathname;
    const redirectUrl = window.location.href;
    
    // Only redirect if we're on actual root - be very specific
    // Don't redirect if we're already in /pl/ or /en/ subdirectories
    const isInSubdirectory = redirectPath.startsWith('/pl/') || 
                              redirectPath.startsWith('/en/') || 
                              redirectPath === '/pl' || 
                              redirectPath === '/en' ||
                              redirectUrl.includes('/pl/') || 
                              redirectUrl.includes('/en/') ||
                              redirectUrl.includes('/pl/index.html') ||
                              redirectUrl.includes('/en/index.html');
    
    // Only redirect if we're on actual root and NOT in a subdirectory
    if (!isInSubdirectory && (redirectPath === '/' || redirectPath === '/index.html')) {
        window.location.href = '/pl/';
        return; // Exit early only if we're actually redirecting
    }
    
    const langBtnEn = document.getElementById('lang-btn-en');
    const langBtnPl = document.getElementById('lang-btn-pl');

    // Update button states based on current language
    function updateLanguageButtonStates() {
        const lang = window.getCurrentLanguage();
        if (langBtnEn && langBtnPl) {
            if (lang === 'pl') {
                // Polish is active
                langBtnPl.classList.add('bg-white', 'dark:bg-surface-dark', 'text-primary', 'dark:text-white', 'shadow-sm', 'font-bold');
                langBtnPl.classList.remove('text-gray-500', 'dark:text-gray-400', 'font-medium');
                langBtnEn.classList.remove('bg-white', 'dark:bg-surface-dark', 'text-primary', 'dark:text-white', 'shadow-sm', 'font-bold');
                langBtnEn.classList.add('text-gray-500', 'dark:text-gray-400', 'font-medium');
            } else if (lang === 'en') {
                // English is active
                langBtnEn.classList.add('bg-white', 'dark:bg-surface-dark', 'text-primary', 'dark:text-white', 'shadow-sm', 'font-bold');
                langBtnEn.classList.remove('text-gray-500', 'dark:text-gray-400', 'font-medium');
                langBtnPl.classList.remove('bg-white', 'dark:bg-surface-dark', 'text-primary', 'dark:text-white', 'shadow-sm', 'font-bold');
                langBtnPl.classList.add('text-gray-500', 'dark:text-gray-400', 'font-medium');
            }
        }
    }
    
    // Set initial button states
    updateLanguageButtonStates();
    
    // Language toggle - always navigate to the target language URL
    // Use event delegation to catch clicks even if buttons are added dynamically
    document.addEventListener('click', function(e) {
        // Check if clicked element is a language button or inside one (works with both ID and class)
        const langBtnEn = e.target.closest('#lang-btn-en, .lang-btn-en');
        const langBtnPl = e.target.closest('#lang-btn-pl, .lang-btn-pl');
        
        if (langBtnEn) {
            e.preventDefault();
            e.stopPropagation();
            // Always navigate to English version
            window.location.href = '/en/';
            return false;
        }
        
        if (langBtnPl) {
            e.preventDefault();
            e.stopPropagation();
            // Always navigate to Polish version
            window.location.href = '/pl/';
            return false;
        }
    });
    
    // Set initial language based on URL
    if (isPolish && typeof setLanguage !== 'undefined') {
        setLanguage('pl');
    } else if (isEnglish && typeof setLanguage !== 'undefined') {
        setLanguage('en');
    }
    
    // Initialize translations - language is now set based on URL above
    
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 96; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Intersection Observer for fade-in animations on scroll
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
    
    // Observe elements with fade-in-up class
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
    
    // Dark mode toggle (if you want to add a dark mode button)
    // This is optional - the site uses Tailwind's dark mode class system
    // You can add a button to toggle dark mode if needed
    function initDarkMode() {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else if (savedTheme === 'light') {
            document.documentElement.classList.remove('dark');
        }
        // If no preference, respect system preference
        else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
    }
    
    initDarkMode();
    
    // Initialize translations on page load
    if (typeof updateTranslations !== 'undefined' && typeof updateLanguageButtons !== 'undefined') {
        updateTranslations();
        updateLanguageButtons();
    }
    
    // Render wedding packages
    function renderPackages() {
        const packagesGrid = document.getElementById('packages-grid');
        if (!packagesGrid) {
            console.warn('packages-grid element not found');
            return;
        }
        
        const packages = [
            { id: 1, isPopular: false },
            { id: 2, isPopular: true },
            { id: 3, isPopular: false },
            { id: 4, isPopular: false }
        ];
        
        // Use getCurrentLanguage() to determine language from URL, with fallbacks
        let lang = 'pl'; // default
        if (typeof window.getCurrentLanguage === 'function') {
            lang = window.getCurrentLanguage();
        } else {
            // Fallback: check HTML lang attribute or URL
            const htmlLang = document.documentElement ? document.documentElement.lang : null;
            const path = window.location.pathname;
            const url = window.location.href;
            if (htmlLang === 'en' || path.includes('/en') || url.includes('/en/')) {
                lang = 'en';
            } else {
                lang = 'pl';
            }
        }
        
        // Get translations - wait for it if needed
        let t = {};
        if (typeof translations !== 'undefined' && translations[lang]) {
            t = translations[lang];
        } else if (typeof translations !== 'undefined' && translations.en) {
            t = translations.en; // fallback to English
        } else {
            // Translations not loaded yet - retry
            console.warn('Translations not loaded for packages, retrying...');
            setTimeout(() => {
                if (typeof renderPackages === 'function') {
                    renderPackages();
                }
            }, 200);
            return; // Exit early, will retry
        }
        
        packagesGrid.innerHTML = packages.map(pkg => {
            // Get translation keys with fallbacks
            const badge = t[`package${pkg.id}Badge`] || '';
            const title = t[`package${pkg.id}Title`] || '';
            const subtitle = t[`package${pkg.id}Subtitle`] || '';
            const price = t[`package${pkg.id}Price`] || '';
            const button = t[`package${pkg.id}Button`] || '';
            const bullets = [
                { text: t[`package${pkg.id}Bullet1`] || '', align: 'center' }, // hairstyles - center aligned
                { text: t[`package${pkg.id}Bullet2`] || '', align: 'start' }  // exclusive availability - top aligned
            ];
            
            // Validate that we have the essential data
            if (!title || !price) {
                console.warn(`Missing translation data for package ${pkg.id}`);
                return ''; // Skip this package if essential data is missing
            }
            
            const cardClass = pkg.isPopular 
                ? 'bg-primary text-white rounded-3xl p-6 shadow-xl shadow-primary/20 flex flex-col relative z-10'
                : 'bg-white dark:bg-surface-dark rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col hover:shadow-xl transition-shadow duration-300';
            
            const textClass = pkg.isPopular ? 'text-white' : 'text-gray-800 dark:text-white';
            const subtitleClass = pkg.isPopular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400';
            const priceClass = pkg.isPopular ? 'text-white' : 'text-gray-900 dark:text-white';
            const priceSubClass = pkg.isPopular ? 'text-white/70' : 'text-gray-500';
            const bulletClass = pkg.isPopular ? 'text-white/90' : 'text-gray-600 dark:text-gray-300';
            const iconClass = pkg.isPopular ? 'text-white' : 'text-primary';
            const buttonClass = pkg.isPopular
                ? 'block w-full py-3 rounded-2xl bg-white text-primary text-center font-medium hover:bg-gray-100 transition-colors mt-auto'
                : 'block w-full py-3 rounded-2xl border border-primary text-primary text-center font-medium hover:bg-primary hover:text-white transition-colors mt-auto';
            
            return `
                <div class="${cardClass}">
                    <div class="mb-4">
                        <span class="text-xs font-bold ${pkg.isPopular ? 'text-white/80' : 'text-primary'} uppercase tracking-widest">${badge}</span>
                        <h3 class="font-display text-xl ${textClass} mt-1">${title}</h3>
                        <p class="text-sm ${subtitleClass} mt-1">${subtitle}</p>
                    </div>
                    <div class="text-3xl font-bold ${priceClass} mb-6">${price} <span class="text-sm font-normal ${priceSubClass}">PLN</span></div>
                    <ul class="space-y-2.5 mb-6 flex-grow text-sm ${bulletClass}">
                        ${bullets.map(bullet => {
                            const alignClass = bullet.align === 'center' ? 'items-center' : 'items-start';
                            const iconMargin = bullet.align === 'center' ? '' : 'mt-0.5';
                            return `
                            <li class="flex ${alignClass}">
                                <span class="material-symbols-outlined ${iconClass} text-sm mr-2 flex-shrink-0 ${iconMargin}">check_circle</span>
                                <span class="leading-tight">${bullet.text}</span>
                            </li>
                        `;
                        }).join('')}
                    </ul>
                    <a class="${buttonClass}" href="#contact">${button}</a>
                </div>
            `;
        }).filter(html => html !== '').join(''); // Filter out empty strings from skipped packages
        
        // Debug log to confirm rendering
        console.log('Packages rendered for language:', lang, 'Count:', packages.length);
        
        // Verify that content was actually rendered
        if (packagesGrid.innerHTML.trim() === '') {
            console.error('Packages grid is empty after rendering!');
        }
    }
    
    
    // Render services pricing — 3 columns: Studio Styling | Bridal Styling | Add-ons & Travel
    function priceRow(name, duration, price, last) {
        const borderClass = last ? 'pb-0' : 'border-b border-gray-100 dark:border-gray-700 pb-3';
        return `
            <div class="flex justify-between items-end ${borderClass}">
                <div>
                    <p class="font-bold text-gray-900 dark:text-white">${name}</p>
                    <p class="text-xs text-gray-500 mt-0.5">${duration}</p>
                </div>
                <span class="font-display font-medium text-2xl text-primary whitespace-nowrap">${price} <span class="text-xs font-sans text-gray-400 ml-0.5">PLN</span></span>
            </div>
        `;
    }

    function priceRowAddon(name, desc, priceOrLabel, last, opts) {
        const borderClass = last ? 'pb-0' : 'border-b border-gray-100 dark:border-gray-700 pb-3';
        let right = '';
        if (opts && opts.onDemand) {
            right = `<span class="font-sans text-sm font-medium uppercase tracking-wider text-gray-500 whitespace-nowrap">${priceOrLabel}</span>`;
        } else if (opts && opts.plus) {
            right = `<span class="font-display font-medium text-2xl text-primary whitespace-nowrap">${priceOrLabel} <span class="text-xs font-sans text-gray-400 ml-0.5">PLN</span></span>`;
        } else {
            right = `<span class="font-display font-medium text-2xl text-primary whitespace-nowrap">${priceOrLabel} <span class="text-xs font-sans text-gray-400 ml-0.5">PLN</span></span>`;
        }
        return `
            <div class="flex justify-between items-end ${borderClass}">
                <div class="pr-2">
                    <p class="font-bold text-gray-900 dark:text-white">${name}</p>
                    <p class="text-xs text-gray-500 mt-0.5">${desc}</p>
                </div>
                ${right}
            </div>
        `;
    }

    function renderServicesPricing() {
        const pricingContainer = document.getElementById('services-pricing-content');
        if (!pricingContainer) {
            console.warn('services-pricing-content element not found');
            return;
        }
        
        // Use getCurrentLanguage() to determine language from URL, with fallbacks
        let lang = 'pl'; // default
        if (typeof window.getCurrentLanguage === 'function') {
            lang = window.getCurrentLanguage();
        } else {
            // Fallback: check HTML lang attribute or URL
            const htmlLang = document.documentElement ? document.documentElement.lang : null;
            const path = window.location.pathname;
            const url = window.location.href;
            if (htmlLang === 'en' || path.includes('/en') || url.includes('/en/')) {
                lang = 'en';
            } else {
                lang = 'pl';
            }
        }
        
        // Get translations - wait for it if needed
        let t = {};
        if (typeof translations !== 'undefined' && translations[lang]) {
            t = translations[lang];
        } else if (typeof translations !== 'undefined' && translations.en) {
            t = translations.en; // fallback to English
        } else {
            // Translations not loaded yet - retry
            console.warn('Translations not loaded for services pricing, retrying...');
            setTimeout(() => {
                if (typeof renderServicesPricing === 'function') {
                    renderServicesPricing();
                }
            }, 200);
            return; // Exit early, will retry
        }
        
        const studioRows = [
            { name: t.servicesStudioShort, duration: t.servicesStudioShortDuration, price: t.servicesStudioShortPrice },
            { name: t.servicesStudioMedium, duration: t.servicesStudioMediumDuration, price: t.servicesStudioMediumPrice },
            { name: t.servicesStudioLong, duration: t.servicesStudioLongDuration, price: t.servicesStudioLongPrice }
        ];
        
        const bridalRows = [
            { name: t.servicesBridalShort, duration: t.servicesBridalShortDuration, price: t.servicesBridalShortPrice },
            { name: t.servicesBridalMedium, duration: t.servicesBridalMediumDuration, price: t.servicesBridalMediumPrice },
            { name: t.servicesBridalLong, duration: t.servicesBridalLongDuration, price: t.servicesBridalLongPrice },
            { name: t.servicesTrial, duration: t.servicesTrialDesc, price: t.servicesTrialPrice }
        ];
        
        const studioCol = `
            <div class="flex flex-col">
                <div class="mb-8 min-h-[80px]">
                    <h3 class="font-display text-2xl text-gray-900 dark:text-white mb-2">${t.servicesStudioHeading}</h3>
                    <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">${t.servicesStudioNote}</p>
                </div>
                <div class="space-y-6">
                    ${studioRows.map((r, i) => priceRow(r.name, r.duration, r.price, i === studioRows.length - 1)).join('')}
                </div>
            </div>
        `;
        const bridalCol = `
            <div class="flex flex-col">
                <div class="mb-8 min-h-[80px]">
                    <h3 class="font-display text-2xl text-gray-900 dark:text-white mb-2">${t.servicesBridalHeading}</h3>
                </div>
                <div class="space-y-6">
                    ${bridalRows.map((r, i) => priceRow(r.name, r.duration, r.price, i === bridalRows.length - 1)).join('')}
                </div>
            </div>
        `;
        const addonsCol = `
            <div class="flex flex-col">
                <div class="mb-8 min-h-[80px]">
                    <h3 class="font-display text-2xl text-gray-900 dark:text-white mb-2">${t.servicesAddonsHeading}</h3>
                </div>
                <div class="space-y-6">
                    ${priceRowAddon(t.servicesEarlyHours, t.servicesEarlyHoursDesc, t.servicesEarlyHoursPrice, false, { plus: true })}
                    ${priceRowAddon(t.servicesTravelKrakow, t.servicesTravelKrakowDesc, t.servicesTravelKrakowPrice, false, { plus: true })}
                    ${priceRowAddon(t.servicesPolandInternational, t.servicesPolandInternationalDesc, t.servicesOnDemand, true, { onDemand: true })}
                </div>
            </div>
        `;
        
        pricingContainer.innerHTML = studioCol + bridalCol + addonsCol;
        
        // Debug log to confirm rendering
        console.log('Services pricing rendered for language:', lang);
    }
    
    // Make functions globally available for translation updates
    window.renderPackages = renderPackages;
    window.renderServicesPricing = renderServicesPricing;
    
    // Render packages and services pricing - ensure they always run
    function initRendering() {
        // Wait for translations to be available, but don't wait forever
        if (typeof translations === 'undefined') {
            setTimeout(initRendering, 50);
            return;
        }
        
        try {
            if (typeof renderPackages === 'function') {
                renderPackages();
            }
            if (typeof renderServicesPricing === 'function') {
                renderServicesPricing();
            }
        } catch (error) {
            console.error('Error rendering packages/services:', error);
            // Retry once after a longer delay
            setTimeout(() => {
                try {
                    if (typeof renderPackages === 'function') {
                        renderPackages();
                    }
                    if (typeof renderServicesPricing === 'function') {
                        renderServicesPricing();
                    }
                } catch (e) {
                    console.error('Retry failed:', e);
                }
            }, 300);
        }
    }
    
    // Start rendering - ensure it runs after DOM is ready and translations are loaded
    function startRendering() {
        // Wait for both DOM and translations
        let attempts = 0;
        const maxAttempts = 100; // Stop after 5 seconds (100 * 50ms)
        
        const checkAndRender = function() {
            attempts++;
            const domReady = document.readyState === 'complete' || document.readyState === 'interactive';
            const translationsReady = typeof translations !== 'undefined';
            
            if (domReady && translationsReady) {
                setTimeout(initRendering, 100);
            } else if (attempts < maxAttempts) {
                // Keep checking until both are ready
                setTimeout(checkAndRender, 50);
            } else {
                // Timeout - try to render anyway
                console.warn('Timeout waiting for DOM/translations, attempting to render anyway...');
                setTimeout(initRendering, 100);
            }
        };
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', checkAndRender);
        } else {
            checkAndRender();
        }
    }
    
    startRendering();
    
    // Also try to render when window loads (fallback)
    window.addEventListener('load', function() {
        setTimeout(function() {
            if (typeof renderPackages === 'function' && typeof translations !== 'undefined') {
                console.log('Fallback: Attempting to render packages on window load');
                renderPackages();
            }
            if (typeof renderServicesPricing === 'function' && typeof translations !== 'undefined') {
                console.log('Fallback: Attempting to render services pricing on window load');
                renderServicesPricing();
            }
        }, 500);
    });
    
    // Portfolio Gallery Modal: main image + preview images (001, 032, 025, 004) + all others 5–44 (skip 25, 32)
    // Determine base path based on current URL
    const galleryPath = window.location.pathname;
    const isSubdirectory = galleryPath.startsWith('/pl/') || galleryPath.startsWith('/en/');
    const basePath = isSubdirectory ? '../img/' : 'img/';
    const responsiveDir = basePath + 'responsive/';
    const RESPONSIVE_WIDTHS = [320, 480, 640, 800, 960, 1200];

    function pathToBase(path) {
        const m = path.match(/([^/]+)\.webp$/);
        if (!m) return null;
        return m[1].replace(/\s+/g, '-');
    }
    function getResponsiveSrc(base, width) {
        return responsiveDir + base + '-' + width + 'w.webp';
    }
    function getResponsiveSrcset(base, widths) {
        return widths.map(function (w) { return getResponsiveSrc(base, w) + ' ' + w + 'w'; }).join(', ');
    }

    const portfolioImages = [`${basePath}main.webp`];
    portfolioImages.push(`${basePath}portfolio_001.webp`, `${basePath}portfolio_032.webp`, `${basePath}portfolio_025.webp`, `${basePath}portfolio_004.webp`);
    const previewIds = new Set([1, 4, 25, 32]);
    for (let i = 5; i <= 44; i++) {
        if (previewIds.has(i)) continue;
        portfolioImages.push(`${basePath}portfolio_${String(i).padStart(3, '0')}.webp`);
    }
    
    // All portfolio images including main + preview ones for lightbox navigation
    const allPortfolioImages = [`${basePath}main.webp`];
    for (let i = 1; i <= 44; i++) {
        allPortfolioImages.push(`${basePath}portfolio_${String(i).padStart(3, '0')}.webp`);
    }
    
    const galleryModal = document.getElementById('portfolio-gallery-modal');
    const galleryGrid = document.getElementById('gallery-grid');
    const viewAllBtn = document.getElementById('view-all-portfolio');
    const viewAllHeroBtn = document.getElementById('view-all-portfolio-hero');
    const closeGalleryBtn = document.getElementById('close-gallery');
    
    // Populate gallery with images (only once to avoid reloading)
    let isGalleryPopulated = false;
    var thumbWidths = [320, 480, 640];
    var thumbSizes = '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw';
    function populateGallery() {
        if (!galleryGrid || isGalleryPopulated) return;
        portfolioImages.forEach((imageSrc, index) => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'group relative overflow-hidden rounded-2xl cursor-pointer aspect-square gallery-image';
            imgContainer.style.minHeight = '250px';
            imgContainer.dataset.image = imageSrc;
            const base = pathToBase(imageSrc);
            const img = document.createElement('img');
            img.src = base ? getResponsiveSrc(base, 640) : imageSrc;
            img.srcset = base ? getResponsiveSrcset(base, thumbWidths) : '';
            img.sizes = base ? thumbSizes : '';
            img.alt = 'Portfolio image ' + (index + 1);
            img.className = 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-110';
            img.style.objectPosition = 'center top';
            img.loading = 'lazy';
            img.decoding = 'async';
            img.width = 800;
            img.height = 800;
            imgContainer.appendChild(img);
            galleryGrid.appendChild(imgContainer);
        });
        isGalleryPopulated = true;
    }
    
    // Open gallery
    let openedFromHero = false;
    let heroScrollY = 0;

    function openGallery() {
        if (galleryModal) {
            galleryModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            populateGallery();
        }
    }
    
    // Close gallery
    function closeGallery() {
        if (galleryModal) {
            galleryModal.classList.add('hidden');
            document.body.style.overflow = '';
            if (openedFromHero) {
                window.scrollTo({ top: heroScrollY, behavior: 'auto' });
                openedFromHero = false;
            }
        }
    }
    
    // Event listeners
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openGallery();
        });
    }

    if (viewAllHeroBtn) {
        viewAllHeroBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openedFromHero = true;
            heroScrollY = window.scrollY || window.pageYOffset || 0;
            openGallery();
        });
    }
    
    if (closeGalleryBtn) {
        closeGalleryBtn.addEventListener('click', closeGallery);
    }
    
    // Close on background click
    if (galleryModal) {
        galleryModal.addEventListener('click', function(e) {
            if (e.target === galleryModal) {
                closeGallery();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && galleryModal && !galleryModal.classList.contains('hidden')) {
            closeGallery();
        }
    });
    
    // Full Screen Lightbox
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeLightboxBtn = document.getElementById('close-lightbox');
    const lightboxPrevBtn = document.getElementById('lightbox-prev');
    const lightboxNextBtn = document.getElementById('lightbox-next');
    const currentIndexSpan = document.getElementById('current-index');
    const totalImagesSpan = document.getElementById('total-images');
    let currentLightboxIndex = 0;
    let currentImageSet = [];
    
    function openLightbox(imageSrc, imageSet) {
        currentImageSet = imageSet;
        currentLightboxIndex = currentImageSet.indexOf(imageSrc);
        if (currentLightboxIndex === -1) currentLightboxIndex = 0;
        
        updateLightboxImage();
        if (lightboxModal) {
            lightboxModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeLightbox() {
        if (lightboxModal) {
            lightboxModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }
    
    var lightboxWidths = [640, 800, 960, 1200];
    var lightboxSizes = '100vw';
    function updateLightboxImage() {
        if (!lightboxImage || currentImageSet.length === 0) return;
        var path = currentImageSet[currentLightboxIndex];
        var base = pathToBase(path);
        if (base) {
            lightboxImage.src = getResponsiveSrc(base, 1200);
            lightboxImage.srcset = getResponsiveSrcset(base, lightboxWidths);
            lightboxImage.sizes = lightboxSizes;
        } else {
            lightboxImage.src = path;
            lightboxImage.removeAttribute('srcset');
            lightboxImage.removeAttribute('sizes');
        }
        if (currentIndexSpan) currentIndexSpan.textContent = currentLightboxIndex + 1;
        if (totalImagesSpan) totalImagesSpan.textContent = currentImageSet.length;
    }
    
    function nextImage() {
        if (currentLightboxIndex < currentImageSet.length - 1) {
            currentLightboxIndex++;
        } else {
            currentLightboxIndex = 0;
        }
        updateLightboxImage();
    }
    
    function prevImage() {
        if (currentLightboxIndex > 0) {
            currentLightboxIndex--;
        } else {
            currentLightboxIndex = currentImageSet.length - 1;
        }
        updateLightboxImage();
    }
    
    // Event listeners for lightbox
    if (closeLightboxBtn) {
        closeLightboxBtn.addEventListener('click', closeLightbox);
    }
    
    if (lightboxPrevBtn) {
        lightboxPrevBtn.addEventListener('click', prevImage);
    }
    
    if (lightboxNextBtn) {
        lightboxNextBtn.addEventListener('click', nextImage);
    }
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        }
    });
    
    // Click on gallery images to open lightbox
    document.addEventListener('click', function(e) {
        const galleryImage = e.target.closest('.gallery-image');
        if (galleryImage) {
            const imageSrc = galleryImage.dataset.image;
            openLightbox(imageSrc, portfolioImages);
        }
        
        const portfolioImage = e.target.closest('.portfolio-image');
        if (portfolioImage) {
            const imageSrc = portfolioImage.dataset.image;
            openLightbox(imageSrc, allPortfolioImages);
        }
    });

    // Reviews Slider - Dynamic rendering
    function renderReviews() {
        const reviewsSlider = document.getElementById('reviews-slider');
        const reviewsDots = document.getElementById('reviews-dots');
        
        if (!reviewsSlider || !reviewsDots) {
            console.warn('reviews-slider or reviews-dots element not found');
            return;
        }
        
        // Use getCurrentLanguage() to determine language from URL, with fallbacks
        let lang = 'pl'; // default
        if (typeof window.getCurrentLanguage === 'function') {
            lang = window.getCurrentLanguage();
        } else {
            // Fallback: check HTML lang attribute or URL
            const htmlLang = document.documentElement ? document.documentElement.lang : null;
            const path = window.location.pathname;
            const url = window.location.href;
            if (htmlLang === 'en' || path.includes('/en') || url.includes('/en/')) {
                lang = 'en';
            } else {
                lang = 'pl';
            }
        }
        
        // Get translations - wait for it if needed
        let t = {};
        if (typeof translations !== 'undefined' && translations[lang]) {
            t = translations[lang];
        } else if (typeof translations !== 'undefined' && translations.en) {
            t = translations.en; // fallback to English
        } else {
            // Translations not loaded yet - retry
            console.warn('Translations not loaded for reviews, retrying...');
            setTimeout(() => {
                if (typeof renderReviews === 'function') {
                    renderReviews();
                }
            }, 200);
            return; // Exit early, will retry
        }
        
        // Get all reviews (review1 through review12)
        const reviews = [];
        for (let i = 1; i <= 12; i++) {
            const text = t[`review${i}Text`];
            const author = t[`review${i}Author`];
            if (text && author) {
                reviews.push({ text, author });
            }
        }
        
        // Render review slides with data attribute for reliable selection
        reviewsSlider.innerHTML = reviews.map((review, index) => `
            <div class="snap-center shrink-0 w-full flex flex-col items-center justify-center text-center mx-auto px-4 min-h-[400px]" data-review-slide="true" data-slide-index="${index}">
                <blockquote class="font-display text-2xl md:text-3xl leading-relaxed text-gray-800 dark:text-gray-100 mb-8 max-w-2xl">"${review.text}"</blockquote>
                <cite class="not-italic text-sm font-bold tracking-widest uppercase text-primary">${review.author}</cite>
            </div>
        `).join('');
        
        // Render dots
        reviewsDots.innerHTML = reviews.map((_, index) => `
            <div class="w-2 h-2 rounded-full ${index === 0 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'} cursor-pointer transition-colors" data-review-index="${index}"></div>
        `).join('');
        
        // Initialize slider functionality AFTER DOM insertion
        // Use setTimeout to ensure DOM is fully updated and elements are accessible
        setTimeout(() => {
            initReviewsSlider(reviews.length);
        }, 100);
        
        // Debug log for renderReviews completion
        console.log('Reviews rendered for language:', lang, 'Count:', reviews.length);
    }
    
    // Store slider state globally to prevent multiple initializations
    let reviewsSliderState = {
        interval: null,
        currentSlide: 0,
        handlers: []
    };

    function cleanupReviewsSlider() {
        if (reviewsSliderState.interval) {
            clearInterval(reviewsSliderState.interval);
            reviewsSliderState.interval = null;
        }
        // Remove all event listeners
        reviewsSliderState.handlers.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        reviewsSliderState.handlers = [];
    }

    function initReviewsSlider(totalReviews) {
        // Clean up any existing slider initialization
        cleanupReviewsSlider();
        
        const reviewsSlider = document.getElementById('reviews-slider');
        const reviewsPrev = document.getElementById('reviews-prev');
        const reviewsNext = document.getElementById('reviews-next');
        const reviewsDots = document.getElementById('reviews-dots');
        
        if (!reviewsSlider || !reviewsDots) {
            console.warn('Reviews slider elements not found, retrying...');
            setTimeout(() => initReviewsSlider(totalReviews), 200);
            return;
        }
        
        // Log for debugging
        console.log('Initializing reviews slider:', {
            slider: !!reviewsSlider,
            prev: !!reviewsPrev,
            next: !!reviewsNext,
            dots: !!reviewsDots,
            totalReviews: totalReviews
        });
        
        // Use data attribute for reliable selection
        const reviewSlides = reviewsSlider.querySelectorAll('[data-review-slide="true"]');
        const dots = reviewsDots.querySelectorAll('div');
        
        // Safety check: if no slides found, set up MutationObserver to re-init when slides appear
        if (reviewSlides.length === 0) {
            const observer = new MutationObserver((mutations, obs) => {
                const slides = reviewsSlider.querySelectorAll('[data-review-slide="true"]');
                if (slides.length > 0) {
                    obs.disconnect();
                    initReviewsSlider(slides.length);
                }
            });
            observer.observe(reviewsSlider, { childList: true, subtree: true });
            return;
        }
        
        reviewsSliderState.currentSlide = 0;

        function updateSlider(index) {
            if (index < 0 || index >= reviewSlides.length) return;
            
            // Use offsetLeft for accurate scroll position relative to container
            const targetSlide = reviewSlides[index];
            if (!targetSlide) return;
            
            // Calculate scroll position: slide's offsetLeft relative to container
            const scrollPosition = targetSlide.offsetLeft - reviewsSlider.offsetLeft;
            
            reviewsSlider.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
            
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.remove('bg-gray-200', 'dark:bg-gray-700');
                    dot.classList.add('bg-primary');
                } else {
                    dot.classList.remove('bg-primary');
                    dot.classList.add('bg-gray-200', 'dark:bg-gray-700');
                }
            });
            
            reviewsSliderState.currentSlide = index;
        }

        function nextSlide() {
            const next = (reviewsSliderState.currentSlide + 1) % reviewSlides.length;
            updateSlider(next);
        }

        function prevSlide() {
            const prev = (reviewsSliderState.currentSlide - 1 + reviewSlides.length) % reviewSlides.length;
            updateSlider(prev);
        }

        function startAutoSlide() {
            stopAutoSlide();
            if (reviewSlides.length > 0) {
                reviewsSliderState.interval = setInterval(() => {
                    nextSlide();
                }, 3000); // 3 seconds autoscroll interval
            }
        }

        function stopAutoSlide() {
            if (reviewsSliderState.interval) {
                clearInterval(reviewsSliderState.interval);
                reviewsSliderState.interval = null;
            }
        }

        // Helper to add event listener and track it for cleanup
        function addTrackedListener(element, event, handler) {
            element.addEventListener(event, handler);
            reviewsSliderState.handlers.push({ element, event, handler });
        }

        // Manual navigation
        if (reviewsNext) {
            const nextHandler = () => {
                stopAutoSlide();
                nextSlide();
                startAutoSlide();
            };
            addTrackedListener(reviewsNext, 'click', nextHandler);
        }

        if (reviewsPrev) {
            const prevHandler = () => {
                stopAutoSlide();
                prevSlide();
                startAutoSlide();
            };
            addTrackedListener(reviewsPrev, 'click', prevHandler);
        }

        // Dot navigation
        dots.forEach((dot, index) => {
            const dotHandler = () => {
                stopAutoSlide();
                updateSlider(index);
                startAutoSlide();
            };
            addTrackedListener(dot, 'click', dotHandler);
        });

        // Pause on hover
        const mouseEnterHandler = stopAutoSlide;
        const mouseLeaveHandler = startAutoSlide;
        addTrackedListener(reviewsSlider, 'mouseenter', mouseEnterHandler);
        addTrackedListener(reviewsSlider, 'mouseleave', mouseLeaveHandler);

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        const touchStartHandler = (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoSlide();
        };
        addTrackedListener(reviewsSlider, 'touchstart', touchStartHandler);

        const touchEndHandler = (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
            startAutoSlide();
        };
        addTrackedListener(reviewsSlider, 'touchend', touchEndHandler);

        // Initialize
        updateSlider(0);
        startAutoSlide();
        
        // Debug log to confirm initialization
        console.log('Reviews slider initialized:', {
            currentSlide: reviewsSliderState.currentSlide,
            totalSlides: reviewSlides.length,
            autoscrollActive: !!reviewsSliderState.interval,
            arrowsFound: { prev: !!reviewsPrev, next: !!reviewsNext }
        });
    }
    
    // Render reviews on page load and when language changes
    let isRenderingReviews = false;
    const safeRenderReviews = function() {
        if (isRenderingReviews) return;
        isRenderingReviews = true;
        try {
            renderReviews();
        } catch (error) {
            console.error('Error rendering reviews:', error);
        } finally {
            isRenderingReviews = false;
        }
    };
    
    // Ensure DOM is ready and dependencies are loaded before rendering reviews
    function initReviews() {
        // Wait for both DOM and translations
        let attempts = 0;
        const maxAttempts = 100; // Stop after 5 seconds (100 * 50ms)
        
        const checkAndRenderReviews = function() {
            attempts++;
            const domReady = document.readyState === 'complete' || document.readyState === 'interactive';
            const translationsReady = typeof translations !== 'undefined';
            
            if (domReady && translationsReady) {
                setTimeout(safeRenderReviews, 150);
            } else if (attempts < maxAttempts) {
                setTimeout(checkAndRenderReviews, 50);
            } else {
                // Timeout - try to render anyway
                console.warn('Timeout waiting for DOM/translations for reviews, attempting to render anyway...');
                setTimeout(safeRenderReviews, 150);
            }
        };
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', checkAndRenderReviews);
        } else {
            checkAndRenderReviews();
        }
    }
    
    initReviews();
    
    // Also try to render reviews when window loads (fallback)
    window.addEventListener('load', function() {
        setTimeout(function() {
            if (typeof renderReviews === 'function' && typeof translations !== 'undefined') {
                console.log('Fallback: Attempting to render reviews on window load');
                safeRenderReviews();
            }
        }, 500);
    });
    
    // Make renderReviews available globally for language switching
    window.renderReviews = safeRenderReviews;

    // Training Background Video - Ensure autoplay
    const trainingBackgroundVideo = document.getElementById('training-background-video');
    if (trainingBackgroundVideo) {
        // Set video properties
        trainingBackgroundVideo.muted = true;
        trainingBackgroundVideo.playsInline = true;
        trainingBackgroundVideo.loop = true;
        
        // Simple play function that only tries once per event
        let hasTriedPlay = false;
        function tryPlayVideo() {
            if (hasTriedPlay) return;
            hasTriedPlay = true;
            
            trainingBackgroundVideo.play().catch(() => {
                hasTriedPlay = false; // Reset on failure so we can retry
            });
        }
        
        // Try to play when video is ready
        if (trainingBackgroundVideo.readyState >= 2) {
            tryPlayVideo();
        } else {
            trainingBackgroundVideo.addEventListener('canplay', tryPlayVideo, { once: true });
        }
        
        // Fallback: try on first user interaction if still not playing
        setTimeout(() => {
            if (trainingBackgroundVideo.paused) {
                document.addEventListener('click', function playOnInteraction() {
                    tryPlayVideo();
                    document.removeEventListener('click', playOnInteraction);
                }, { once: true });
            }
        }, 1000);
    }
});
