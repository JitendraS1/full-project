/**
 * Service for handling testimonial form submissions
 */

// PHP endpoint hosted on Hostinger
const PHP_ENDPOINT = '/send-email.php';

export const TestimonialService = {
  /**
   * Send testimonial form data to the server
   * @param {Object} formData - The form data to send
   * @returns {Promise} - The response from the server
   */
  sendTestimonial: async (formData) => {
    try {
      const response = await fetch(PHP_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, formType: 'testimonial' }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send testimonial');
      }
      
      return data;
    } catch (error) {
      console.error('Error sending testimonial:', error);
      throw error;
    }
  },
};