/**
 * Service for handling land deal inquiry form submissions on Hostinger hosting
 */

// Use the PHP script URL for Hostinger
const API_URL = 'https://nestoriagroup.com/send-email.php';

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
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'land-deal'
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send inquiry');
      }
      
      return data;
    } catch (error) {
      console.error('Error sending land deal inquiry:', error);
      throw error;
    }
  },
};