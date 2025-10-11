/**
 * Service for handling email submissions through the new Mail API
 * With fallback to PHP implementation if the API fails
 */

// New Mail API endpoint
const MAIL_API_ENDPOINT = 'https://nestoriagroupcom-mailapi.vercel.app/api';
// Fallback PHP endpoint (relative to the website root)
const PHP_ENDPOINT = '/send-email.php';

export const MailService = {
  /**
   * Send email data to the new Mail API with fallback to PHP
   * @param {Object} emailData - The email data to send
   * @returns {Promise<Object>} - The response from the server
   */
  sendEmail: async (emailData) => {
    // First, try the new API
    try {
      console.log('Trying new Mail API...');
      const response = await fetch(MAIL_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        
        if (response.ok && data.success) {
          return data;
        } else {
          throw new Error(data.message || 'New Mail API returned an error');
        }
      } else {
        // If not JSON, it's likely an error page
        throw new Error('New Mail API returned non-JSON response');
      }
    } catch (error) {
      console.warn('New Mail API failed:', error.message);
      
      // Fallback to PHP implementation
      try {
        console.log('Falling back to PHP implementation...');
        const phpResponse = await fetch(PHP_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });

        const phpData = await phpResponse.json();
        
        if (!phpResponse.ok) {
          throw new Error(phpData.message || 'PHP email service also failed');
        }
        
        return phpData;
      } catch (phpError) {
        console.error('PHP fallback also failed:', phpError);
        // If we're in a Node.js environment (testing), we can't use relative URLs
        // In a browser environment, the relative URL should work
        if (typeof window === 'undefined') {
          throw new Error('Testing in Node.js environment - cannot test PHP endpoint. Deploy to browser environment to test PHP fallback.');
        }
        throw new Error('Both new API and PHP fallback failed. ' + (phpError.message || ''));
      }
    }
  },
};

export default MailService;