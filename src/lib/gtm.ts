// Google Tag Manager Data Layer Helper
// Similar to GTM4WP plugin functionality

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const GTM = {
  // Push event to data layer
  pushEvent: (event: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event,
        ...data,
      });
    }
  },

  // Track page view
  pageView: (pagePath: string, pageTitle: string) => {
    GTM.pushEvent('page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  },

  // Track form submission
  formSubmit: (formName: string, formData?: Record<string, any>) => {
    GTM.pushEvent('form_submit', {
      form_name: formName,
      ...formData,
    });
  },

  // Track button clicks
  buttonClick: (buttonName: string, buttonLocation?: string) => {
    GTM.pushEvent('button_click', {
      button_name: buttonName,
      button_location: buttonLocation,
    });
  },

  // Track outbound links
  outboundClick: (url: string, linkText?: string) => {
    GTM.pushEvent('outbound_click', {
      link_url: url,
      link_text: linkText,
    });
  },

  // Track WhatsApp clicks
  whatsappClick: (location?: string) => {
    GTM.pushEvent('whatsapp_click', {
      click_location: location,
    });
  },

  // Track service view
  serviceView: (serviceName: string) => {
    GTM.pushEvent('service_view', {
      service_name: serviceName,
    });
  },

  // Track project view
  projectView: (projectName: string) => {
    GTM.pushEvent('project_view', {
      project_name: projectName,
    });
  },

  // Track scroll depth
  scrollDepth: (percentage: number) => {
    GTM.pushEvent('scroll_depth', {
      scroll_percentage: percentage,
    });
  },

  // Custom event
  customEvent: (eventName: string, eventData?: Record<string, any>) => {
    GTM.pushEvent(eventName, eventData);
  },

  // E-commerce events (if needed)
  ecommerce: {
    viewItem: (itemName: string, itemCategory: string, price?: number) => {
      GTM.pushEvent('view_item', {
        ecommerce: {
          items: [{
            item_name: itemName,
            item_category: itemCategory,
            price: price,
          }]
        }
      });
    },
    
    addToCart: (itemName: string, itemCategory: string, price?: number, quantity?: number) => {
      GTM.pushEvent('add_to_cart', {
        ecommerce: {
          items: [{
            item_name: itemName,
            item_category: itemCategory,
            price: price,
            quantity: quantity || 1,
          }]
        }
      });
    },

    purchase: (transactionId: string, value: number, items: any[]) => {
      GTM.pushEvent('purchase', {
        ecommerce: {
          transaction_id: transactionId,
          value: value,
          currency: 'SAR',
          items: items,
        }
      });
    },
  },

  // User data
  setUserData: (userId?: string, userEmail?: string, userData?: Record<string, any>) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      user_id: userId,
      user_email: userEmail,
      ...userData,
    });
  },
};

// Auto track page views on route change
export const initGTMTracking = () => {
  // Track initial page view
  GTM.pageView(window.location.pathname, document.title);

  // Track route changes (for SPAs)
  let lastPath = window.location.pathname;
  setInterval(() => {
    if (window.location.pathname !== lastPath) {
      lastPath = window.location.pathname;
      GTM.pageView(window.location.pathname, document.title);
    }
  }, 500);

  // Track scroll depth
  let scrollDepths = [25, 50, 75, 100];
  let trackedDepths: number[] = [];
  
  window.addEventListener('scroll', () => {
    const scrollPercentage = Math.round(
      ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
    );
    
    scrollDepths.forEach(depth => {
      if (scrollPercentage >= depth && !trackedDepths.includes(depth)) {
        trackedDepths.push(depth);
        GTM.scrollDepth(depth);
      }
    });
  });
};
