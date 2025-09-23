/**
 * Service for handling Aboutdholera form submissions
 */

// PHP endpoint hosted on Hostinger
const PHP_ENDPOINT = '/send-email.php';

export const AboutdholeraService = {
  /**
   * Send Aboutdholera form data to the server
   * @param {Object} formData - The form data to send
   * @returns {Promise} - The response from the server
   */
  sendAboutdholeraRequest: async (formData) => {
    try {
      const response = await fetch(PHP_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, formType: 'about-dholera' }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send request');
      }
      
      return data;
    } catch (error) {
      console.error('Error sending Aboutdholera request:', error);
      throw error;
    }
  },
};