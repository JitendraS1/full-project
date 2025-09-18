import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// External mail API URL
const MAIL_API_URL = 'https://nestoriagroupcom-mailapi.vercel.app/';

// For testing purposes, we'll use a mock response
const USE_MOCK_RESPONSE = true;

// Generic email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    // Forward the request to the external mail API
    const response = await fetch(MAIL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email');
    }

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Contact form submission received:', req.body);
    
    if (USE_MOCK_RESPONSE) {
      // For testing purposes, just log the data and return success
      console.log('Using mock response for contact form');
      console.log('Form data:', req.body);
      
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.status(200).json({ success: true, message: 'Contact form submitted successfully (mock)' });
      return;
    }
    
    // Forward the request to the external mail API
    const response = await fetch(MAIL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...req.body,
        formType: 'contact'
      }),
    });

    // Check if response is ok first
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API response error:', errorText);
      throw new Error('Failed to send contact form');
    }

    // Try to parse as JSON, but handle case where it might not be JSON
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.log('Non-JSON response:', text);
      data = { message: 'Received non-JSON response' };
    }

    res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ success: false, message: 'Failed to submit contact form', error: error.message });
  }
});

// Land Deal form endpoint
app.post('/api/land-deal', async (req, res) => {
  try {
    console.log('Land deal form submission received:', req.body);
    
    if (USE_MOCK_RESPONSE) {
      // For testing purposes, just log the data and return success
      console.log('Using mock response for land deal form');
      console.log('Form data:', req.body);
      
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.status(200).json({ success: true, message: 'Land deal inquiry submitted successfully (mock)' });
      return;
    }
    
    // Forward the request to the external mail API
    const response = await fetch(MAIL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...req.body,
        formType: 'landDeal'
      }),
    });

    // Check if response is ok first
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API response error:', errorText);
      throw new Error('Failed to send land deal inquiry');
    }

    // Try to parse as JSON, but handle case where it might not be JSON
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.log('Non-JSON response:', text);
      data = { message: 'Received non-JSON response' };
    }

    res.status(200).json({ success: true, message: 'Land deal inquiry submitted successfully' });
  } catch (error) {
    console.error('Error submitting land deal inquiry:', error);
    res.status(500).json({ success: false, message: 'Failed to submit land deal inquiry', error: error.message });
  }
});

// About Dholera form endpoint
app.post('/api/about-dholera', async (req, res) => {
  try {
    console.log('About Dholera form submission received:', req.body);
    
    if (USE_MOCK_RESPONSE) {
      // For testing purposes, just log the data and return success
      console.log('Using mock response for about dholera form');
      console.log('Form data:', req.body);
      
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.status(200).json({ success: true, message: 'Dholera information request submitted successfully (mock)' });
      return;
    }
    
    // Forward the request to the external mail API
    const response = await fetch(MAIL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...req.body,
        formType: 'aboutDholera'
      }),
    });

    // Check if response is ok first
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API response error:', errorText);
      throw new Error('Failed to send Dholera information request');
    }

    // Try to parse as JSON, but handle case where it might not be JSON
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.log('Non-JSON response:', text);
      data = { message: 'Received non-JSON response' };
    }

    res.status(200).json({ success: true, message: 'Dholera information request submitted successfully' });
  } catch (error) {
    console.error('Error submitting Dholera information request:', error);
    res.status(500).json({ success: false, message: 'Failed to submit Dholera information request', error: error.message });
  }
});

// Testimonial form endpoint
app.post('/api/testimonial', async (req, res) => {
  try {
    console.log('Testimonial form submission received:', req.body);
    
    if (USE_MOCK_RESPONSE) {
      // For testing purposes, just log the data and return success
      console.log('Using mock response for testimonial form');
      console.log('Form data:', req.body);
      
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.status(200).json({ success: true, message: 'Testimonial submitted successfully (mock)' });
      return;
    }
    
    // Forward the request to the external mail API
    const response = await fetch(MAIL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...req.body,
        formType: 'testimonial'
      }),
    });

    // Check if response is ok first
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API response error:', errorText);
      throw new Error('Failed to submit testimonial');
    }

    // Try to parse as JSON, but handle case where it might not be JSON
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.log('Non-JSON response:', text);
      data = { message: 'Received non-JSON response' };
    }

    res.status(200).json({ success: true, message: 'Testimonial submitted successfully' });
  } catch (error) {
    console.error('Error submitting testimonial:', error);
    res.status(500).json({ success: false, message: 'Failed to submit testimonial', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});