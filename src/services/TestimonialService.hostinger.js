/**
 * Service for handling Testimonial form submissions on Hostinger hosting
 */

// Use the PHP script URL for Hostinger
const API_URL = 'https://nestoriagroup.com/send-email.php';

export const TestimonialService = {
  /**
   * Send Testimonial form data to the server
   * @param {Object} formData - The Testimonial form data
   * @param {string} formData.name - The name of the sender
   * @param {string} formData.email - The email of the sender
   * @param {string} formData.rating - The rating given
   * @param {string} formData.testimonial - The testimonial content
   * @returns {Promise<Object>} - The response from the server
   */
  sendTestimonial: async (formData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'testimonial'
        }),
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