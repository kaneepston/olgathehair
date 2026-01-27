/**
 * GDPR Cookie Consent Management Module
 * Handles user consent for analytics and marketing cookies
 */

(function() {
    'use strict';

    const CONSENT_KEY = 'cookieConsent';
    const CONSENT_VERSION = '1';

    /**
     * Get current consent state from localStorage
     * @returns {Object|null} Consent object or null if not set
     */
    function getConsent() {
        try {
            const stored = localStorage.getItem(CONSENT_KEY);
            if (!stored) return null;
            const consent = JSON.parse(stored);
            // Validate version
            if (consent.version !== CONSENT_VERSION) {
                return null;
            }
            return consent;
        } catch (e) {
            console.warn('Error reading consent:', e);
            return null;
        }
    }

    /**
     * Set consent state in localStorage
     * @param {Object} consentObj - Consent object
     */
    function setConsent(consentObj) {
        try {
            const consent = {
                necessary: true, // Always true
                analytics: consentObj.analytics || false,
                marketing: consentObj.marketing || false,
                timestamp: new Date().toISOString(),
                version: CONSENT_VERSION
            };
            localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
            return consent;
        } catch (e) {
            console.error('Error saving consent:', e);
            return null;
        }
    }

    /**
     * Reset/clear consent from localStorage
     */
    function resetConsent() {
        try {
            localStorage.removeItem(CONSENT_KEY);
        } catch (e) {
            console.error('Error resetting consent:', e);
        }
    }

    /**
     * Check if user has made a consent decision
     * @returns {boolean}
     */
    function hasConsentDecision() {
        const consent = getConsent();
        return consent !== null;
    }

    /**
     * Initialize GTM consent defaults (denied) - must run before GTM loads
     */
    function initGTMConsentDefaults() {
        // Initialize dataLayer if it doesn't exist
        window.dataLayer = window.dataLayer || [];
        
        // Set default consent to denied before GTM loads using dataLayer
        // This must happen before GTM script executes
        window.dataLayer.push({
            'event': 'consent_default',
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
        });

        // Also set via gtag if available (for immediate use)
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
            });
        } else {
            // Set up gtag when it becomes available
            window.gtag = window.gtag || function() {
                (window.dataLayer = window.dataLayer || []).push(arguments);
            };
            // Queue the consent default for when gtag is fully loaded
            window.gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
            });
        }
    }

    /**
     * Update GTM consent based on user choices
     * @param {boolean} analytics - Analytics consent
     * @param {boolean} marketing - Marketing consent
     */
    function updateGTMConsent(analytics, marketing) {
        const consentState = {
            'analytics_storage': analytics ? 'granted' : 'denied',
            'ad_storage': marketing ? 'granted' : 'denied',
            'ad_user_data': marketing ? 'granted' : 'denied',
            'ad_personalization': marketing ? 'granted' : 'denied'
        };

        // Update via gtag consent API
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', consentState);
        }

        // Push to dataLayer for GTM debugging
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'consent_update',
            'consent_analytics': analytics,
            'consent_marketing': marketing,
            ...consentState
        });
    }

    /**
     * Apply stored consent on page load
     */
    function applyStoredConsent() {
        const consent = getConsent();
        if (consent) {
            updateGTMConsent(consent.analytics, consent.marketing);
        }
    }

    /**
     * Wait for gtag to be available, then apply stored consent
     */
    function waitForGtagAndApply() {
        let attempts = 0;
        const maxAttempts = 50; // 5 seconds max wait
        
        const checkGtag = function() {
            attempts++;
            if (typeof gtag !== 'undefined' && typeof gtag === 'function') {
                applyStoredConsent();
            } else if (attempts < maxAttempts) {
                setTimeout(checkGtag, 100);
            } else {
                // Fallback: use dataLayer directly
                const consent = getConsent();
                if (consent) {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        'event': 'consent_update',
                        'consent_analytics': consent.analytics,
                        'consent_marketing': consent.marketing,
                        'analytics_storage': consent.analytics ? 'granted' : 'denied',
                        'ad_storage': consent.marketing ? 'granted' : 'denied',
                        'ad_user_data': consent.marketing ? 'granted' : 'denied',
                        'ad_personalization': consent.marketing ? 'granted' : 'denied'
                    });
                }
            }
        };
        
        checkGtag();
    }

    // Initialize consent defaults immediately (before GTM loads)
    initGTMConsentDefaults();

    // Apply stored consent when gtag is available
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForGtagAndApply);
    } else {
        waitForGtagAndApply();
    }

    // Expose public API
    window.CookieConsent = {
        getConsent: getConsent,
        setConsent: setConsent,
        resetConsent: resetConsent,
        hasConsentDecision: hasConsentDecision,
        updateGTMConsent: updateGTMConsent,
        applyStoredConsent: applyStoredConsent
    };

    // QA helper: reset consent for testing
    window.__resetConsentForTest = function() {
        resetConsent();
        // Reset GTM consent to denied
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
            });
        }
        window.location.reload();
    };

    // Log consent state in dev mode
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.includes('localhost')) {
        setTimeout(function() {
            const consent = getConsent();
            console.log('[Cookie Consent] Current state:', consent || 'No decision made');
        }, 500);
    }
})();
