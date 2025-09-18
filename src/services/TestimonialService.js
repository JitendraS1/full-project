/**
 * Service for handling testimonial form submissions
 */

// Use relative URL in production for Vercel deployment
const API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api';

// External mail API URL as fallback
const MAIL_API_URL = 'https://nestoriagroupcom-mailapi.vercel.app/';

export const TestimonialService = {
  /**
   * Send testimonial form data to the server
   * @param {Object} formData - The form data to send
   * @returns {Promise} - The response from the server
   */
  sendTestimonial: async (formData) => {
    try {
      // First try the local API
      try {
        const response = await fetch(`${API_URL}/testimonial`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to send testimonial');
        }
        
        return data;
      } catch (localApiError) {
        console.log('Local API failed, trying external mail API:', localApiError);
        
        // If local API fails, try the external mail API
        const fallbackResponse = await fetch(MAIL_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            formType: 'testimonial'
          }),
        });

        const fallbackData = await fallbackResponse.json();
        
        if (!fallbackResponse.ok) {
          throw new Error(fallbackData.message || 'Failed to send testimonial');
        }
        
        return fallbackData;
      }
    } catch (error) {
      console.error('Error sending testimonial:', error);
      throw error;
    }
  },
};