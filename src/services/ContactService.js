/**
 * Service for handling contact form submissions
 */

// Use relative URL in production for Vercel deployment
const API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api';

// External mail API URL as fallback
const MAIL_API_URL = 'https://nestoriagroupcom-mailapi.vercel.app/';

export const ContactService = {
  /**
   * Send contact form data to the server
   * @param {Object} formData - The contact form data
   * @param {string} formData.name - The name of the sender
   * @param {string} formData.email - The email of the sender
   * @param {string} formData.phone - The phone number of the sender
   * @param {string} formData.subject - The subject of the message
   * @param {string} formData.message - The message content
   * @returns {Promise<Object>} - The response from the server
   */
  sendContactForm: async (formData) => {
    try {
      // First try the local API
      try {
        const response = await fetch(`${API_URL}/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to send message');
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
          body: JSON.stringify(formData),
        });

        const fallbackData = await fallbackResponse.json();
        
        if (!fallbackResponse.ok) {
          throw new Error(fallbackData.message || 'Failed to send message');
        }
        
        return fallbackData;
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      throw error;
    }
  },
};

export default ContactService;