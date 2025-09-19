/**
 * Service for handling land deal inquiry form submissions
 */

// Use relative URL in production for Vercel deployment
const API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api';

// External mail API URL as fallback
const MAIL_API_URL = 'https://nestoriagroupcom-mailapi.vercel.app/';

export const LandDealService = {
  /**
   * Send land deal inquiry form data to the server
   * @param {Object} formData - The land deal inquiry form data
   * @param {string} formData.name - The name of the sender
   * @param {string} formData.email - The email of the sender
   * @param {string} formData.phone - The phone number of the sender
   * @param {string} formData.propertyType - The type of property interested in
   * @param {string} formData.budget - The budget range
   * @param {string} formData.message - The specific requirements
   * @returns {Promise<Object>} - The response from the server
   */
  sendLandDealInquiry: async (formData) => {
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
          throw new Error(data.message || 'Failed to send inquiry');
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
          throw new Error(fallbackData.message || 'Failed to send inquiry');
        }
        
        return fallbackData;
      }
    } catch (error) {
      console.error('Error sending land deal inquiry:', error);
      throw error;
    }
  },
};

export default LandDealService;