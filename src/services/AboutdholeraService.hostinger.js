/**
 * Service for handling About Dholera form submissions on Hostinger hosting
 */

// Use the PHP script URL for Hostinger
const API_URL = 'https://nestoriagroup.com/send-email.php';

export const AboutdholeraService = {
  /**
   * Send About Dholera form data to the server
   * @param {Object} formData - The About Dholera form data
   * @param {string} formData.name - The name of the sender
   * @param {string} formData.email - The email of the sender
   * @param {string} formData.phone - The phone number of the sender
   * @param {string} formData.subject - The subject of the message
   * @param {string} formData.message - The message content
   * @returns {Promise<Object>} - The response from the server
   */
  sendAboutdholeraRequest: async (formData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'about-dholera'
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send request');
      }
      
      return data;
    } catch (error) {
      console.error('Error sending About Dholera request:', error);
      throw error;
    }
  },
};