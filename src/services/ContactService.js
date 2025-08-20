/**
 * Service for handling contact form submissions
 */

const API_URL = 'http://localhost:5000/api';

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
    } catch (error) {
      console.error('Error sending contact form:', error);
      throw error;
    }
  },
};

export default ContactService;