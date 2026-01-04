/**
 * Google Analytics 4 (GA4) integration
 * Tracks page views and custom events
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: object
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Initialize Google Analytics
 * @param measurementId - GA4 Measurement ID (G-XXXXXXXXXX)
 */
export function initGoogleAnalytics(measurementId: string): void {
  if (!measurementId) {
    console.warn("Google Analytics: Measurement ID not provided");
    return;
  }

  // Prevent duplicate initialization
  if (window.gtag) {
    return;
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    if (window.dataLayer) {
      window.dataLayer.push(arguments);
    }
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false, // We'll send page views manually for SPA
  });

  // Load GA4 script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-25V3V5RKY7`;
  document.head.appendChild(script);
}

/**
 * Track page view
 * @param path - Page path
 * @param title - Page title
 */
export function trackPageView(path: string, title?: string): void {
  if (!window.gtag) {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title || document.title,
  });
}

/**
 * Track custom event
 * @param eventName - Event name
 * @param eventParams - Event parameters
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
): void {
  if (!window.gtag) {
    return;
  }

  window.gtag("event", eventName, eventParams);
}

/**
 * Set user properties
 * @param properties - User properties object
 */
export function setUserProperties(properties: Record<string, any>): void {
  if (!window.gtag) {
    return;
  }

  window.gtag("set", "user_properties", properties);
}

