/**
 * Cookie Banner UI Component
 * Displays GDPR-compliant cookie consent banner
 */

(function() {
    'use strict';

    const bannerId = 'cookie-banner';
    const modalId = 'cookie-modal';
    const settingsLinkId = 'cookie-settings-link';

    /**
     * Get translations based on current language
     */
    function getTranslations() {
        const htmlLang = document.documentElement.lang || 'pl';
        const isPolish = htmlLang === 'pl' || htmlLang.startsWith('pl');

        if (isPolish) {
            return {
                title: 'Pliki cookies',
                description: 'Używamy plików cookies, aby analizować ruch i poprawić Twoje doświadczenie. Kontynuując, zgadzasz się z naszą',
                necessary: 'Niezbędne',
                necessaryDesc: 'Wymagane do działania strony',
                necessaryAlwaysOn: 'Zawsze włączone',
                analytics: 'Analityka',
                analyticsDesc: 'Pomagają nam zrozumieć, jak odwiedzający korzystają ze strony',
                marketing: 'Marketing',
                marketingDesc: 'Używane do wyświetlania spersonalizowanych reklam',
                acceptAll: 'Zaakceptuj',
                rejectAll: 'Odrzuć',
                savePreferences: 'Zapisz preferencje',
                managePreferences: 'Ustawienia',
                cookieSettings: 'Ustawienia plików cookies',
                privacyPolicy: 'Polityka Prywatności',
                termsOfService: 'Regulamin',
                and: 'i'
            };
        } else {
            return {
                title: 'Cookies',
                description: 'We use cookies to analyze traffic and improve your experience. By continuing, you agree to our',
                necessary: 'Necessary',
                necessaryDesc: 'Required for the website to function',
                necessaryAlwaysOn: 'Always On',
                analytics: 'Analytics',
                analyticsDesc: 'Help us understand how visitors use the site',
                marketing: 'Marketing',
                marketingDesc: 'Used to display personalized ads',
                acceptAll: 'Accept',
                rejectAll: 'Decline',
                savePreferences: 'Save Preferences',
                managePreferences: 'Settings',
                cookieSettings: 'Cookie Settings',
                privacyPolicy: 'Privacy Policy',
                termsOfService: 'Terms of Service',
                and: 'and'
            };
        }
    }

    /**
     * Create banner HTML
     */
    function createBannerHTML() {
        const t = getTranslations();
        const htmlLang = document.documentElement.lang || 'pl';
        const isPolish = htmlLang === 'pl' || htmlLang.startsWith('pl');
        const privacyLink = isPolish ? '../pl/privacy-policy.html' : '../en/privacy-policy.html';
        const termsLink = isPolish ? '../pl/terms-of-service.html' : '../en/terms-of-service.html';
        
        return `
            <div id="${bannerId}" class="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:w-[400px] z-50 transform translate-y-full transition-all duration-500 ease-in-out opacity-0" style="display: none;">
                <div class="bg-[#FDFBF9] dark:bg-[#1E1C1A] p-7 rounded-3xl shadow-2xl shadow-gray-200/50 dark:shadow-black/50 border border-[#EBE5E0] dark:border-gray-800 backdrop-blur-sm">
                    <p class="text-sm text-gray-800 dark:text-gray-300 leading-relaxed mb-6 font-light">
                        ${t.description} 
                        <a class="font-medium text-gray-900 dark:text-white underline decoration-primary/40 underline-offset-2 hover:decoration-primary transition-colors" href="${privacyLink}">${t.privacyPolicy || 'Privacy Policy'}</a> 
                        ${t.and || 'and'} 
                        <a class="font-medium text-gray-900 dark:text-white underline decoration-primary/40 underline-offset-2 hover:decoration-primary transition-colors" href="${termsLink}">${t.termsOfService || 'Terms of Service'}</a>.
                    </p>
                    <div class="cookie-banner-actions flex flex-col sm:flex-row justify-end items-center gap-3">
                        <button id="cookie-reject-all" class="cookie-banner-button text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2">
                            ${t.rejectAll}
                        </button>
                        <button id="cookie-manage" class="cookie-banner-button text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2">
                            ${t.managePreferences}
                        </button>
                        <button id="cookie-accept-all" class="cookie-banner-accept bg-primary hover:bg-[#967d6f] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-0.5">
                            ${t.acceptAll}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Create preferences modal HTML
     */
    function createModalHTML() {
        const t = getTranslations();
        return `
            <div id="${modalId}" class="cookie-modal" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="cookie-modal__backdrop" id="${modalId}-backdrop"></div>
                <div class="cookie-modal__dialog">
                    <div class="cookie-modal__header">
                        <h3 class="cookie-modal__title" id="modal-title">${t.title}</h3>
                        <button id="${modalId}-close" class="cookie-modal__close" aria-label="Close">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="cookie-modal__body">
                        <p>${t.description}</p>
                        <div class="cookie-modal__sections">
                            <div class="cookie-modal__section cookie-modal__section--necessary">
                                <div>
                                    <h4>${t.necessary}</h4>
                                    <p>${t.necessaryDesc}</p>
                                </div>
                                <span class="cookie-modal__pill">${t.necessaryAlwaysOn}</span>
                            </div>
                            <div class="cookie-modal__section">
                                <div>
                                    <h4>${t.analytics}</h4>
                                    <p>${t.analyticsDesc}</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" id="cookie-toggle-analytics" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <div class="cookie-modal__section">
                                <div>
                                    <h4>${t.marketing}</h4>
                                    <p>${t.marketingDesc}</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" id="cookie-toggle-marketing" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="cookie-modal__footer">
                        <button id="cookie-save-preferences" class="cookie-modal__save">
                            ${t.savePreferences}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Show banner
     */
    function showBanner() {
        const banner = document.getElementById(bannerId);
        if (banner) {
            banner.style.display = 'block';
            // Trigger reflow
            banner.offsetHeight;
            // Remove translate-y-full and add fade-in classes
            banner.classList.remove('translate-y-full');
            banner.classList.add('fade-in-up', 'delay-1000');
            banner.style.opacity = '1';
        }
    }

    /**
     * Hide banner
     */
    function hideBanner() {
        const banner = document.getElementById(bannerId);
        if (banner) {
            // Add translate-y-full and fade out
            banner.classList.add('translate-y-full');
            banner.style.opacity = '0';
            setTimeout(() => {
                banner.style.display = 'none';
            }, 500);
        }
    }

    /**
     * Show modal
     */
    function showModal() {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('is-open');
            document.body.style.overflow = 'hidden';
            // Load current preferences
            const consent = window.CookieConsent.getConsent();
            if (consent) {
                document.getElementById('cookie-toggle-analytics').checked = consent.analytics;
                document.getElementById('cookie-toggle-marketing').checked = consent.marketing;
            }
        }
    }

    /**
     * Hide modal
     */
    function hideModal() {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('is-open');
            document.body.style.overflow = '';
        }
    }

    /**
     * Handle accept all
     */
    function handleAcceptAll() {
        window.CookieConsent.setConsent({
            analytics: true,
            marketing: true
        });
        if (typeof window.loadGTM === 'function') {
            window.loadGTM();
        }
        window.CookieConsent.updateGTMConsent(true, true);
        hideBanner();
        hideModal();
    }

    /**
     * Handle reject all
     */
    function handleRejectAll() {
        const consent = window.CookieConsent.setConsent({
            analytics: false,
            marketing: false
        });
        window.CookieConsent.updateGTMConsent(false, false);
        hideBanner();
        hideModal();
    }

    /**
     * Handle save preferences
     */
    function handleSavePreferences() {
        const analytics = document.getElementById('cookie-toggle-analytics').checked;
        const marketing = document.getElementById('cookie-toggle-marketing').checked;
        window.CookieConsent.setConsent({
            analytics: analytics,
            marketing: marketing
        });
        if ((analytics || marketing) && typeof window.loadGTM === 'function') {
            window.loadGTM();
        }
        window.CookieConsent.updateGTMConsent(analytics, marketing);
        hideBanner();
        hideModal();
    }

    /**
     * Attach modal event listeners
     */
    function attachModalListeners() {
        const saveBtn = document.getElementById('cookie-save-preferences');
        const closeBtn = document.getElementById(modalId + '-close');
        const backdrop = document.getElementById(modalId + '-backdrop');
        
        if (saveBtn) {
            saveBtn.addEventListener('click', handleSavePreferences);
        }
        if (closeBtn) {
            closeBtn.addEventListener('click', hideModal);
        }
        if (backdrop) {
            backdrop.addEventListener('click', hideModal);
        }
    }

    /**
     * Initialize banner
     */
    function init() {
        // Check if user has already made a decision
        if (window.CookieConsent.hasConsentDecision()) {
            return; // Don't show banner
        }

        // Create and insert banner HTML
        const bannerHTML = createBannerHTML();
        const modalHTML = createModalHTML();
        document.body.insertAdjacentHTML('beforeend', bannerHTML + modalHTML);

        // Attach event listeners
        document.getElementById('cookie-accept-all').addEventListener('click', handleAcceptAll);
        document.getElementById('cookie-reject-all').addEventListener('click', handleRejectAll);
        document.getElementById('cookie-manage').addEventListener('click', showModal);
        attachModalListeners();

        // Show banner after a short delay
        setTimeout(showBanner, 500);
    }

    /**
     * Add settings link to footer
     */
    function addSettingsLink() {
        const t = getTranslations();
        const footer = document.querySelector('footer');
        if (footer) {
            // Check if link already exists
            if (document.getElementById(settingsLinkId)) {
                return;
            }

            const link = document.createElement('a');
            link.id = settingsLinkId;
            link.href = '#';
            link.className = 'hover:text-primary transition-colors cursor-pointer';
            link.textContent = t.cookieSettings;
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Create modal if it doesn't exist
                if (!document.getElementById(modalId)) {
                    document.body.insertAdjacentHTML('beforeend', createModalHTML());
                    attachModalListeners();
                }
                showModal();
            });

            // Find footer links container
            const footerLinks = footer.querySelector('div.flex.space-x-6, div.flex.gap-4');
            if (footerLinks) {
                footerLinks.appendChild(link);
            } else {
                // Create container if it doesn't exist
                const container = document.createElement('div');
                container.className = 'flex space-x-6';
                container.appendChild(link);
                const footerContent = footer.querySelector('.max-w-7xl > div');
                if (footerContent) {
                    footerContent.appendChild(container);
                }
            }
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            init();
            addSettingsLink();
        });
    } else {
        init();
        addSettingsLink();
    }
})();
