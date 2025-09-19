import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create Nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'your-email@gmail.com',
      pass: process.env.SMTP_PASS || 'your-app-password'
    }
  });
};

// Email templates
const getEmailTemplate = (formData, formType) => {
  const baseTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
        New ${formType} Form Submission
      </h2>
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${formData.name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${formData.phone || formData.mobile || 'Not provided'}</p>
  `;

  let specificFields = '';
  
  if (formType === 'Contact') {
    specificFields = `
        <p><strong>Subject:</strong> ${formData.subject || 'Not provided'}</p>
    `;
  } else if (formType === 'Land Deal') {
    specificFields = `
        <p><strong>Property Type:</strong> ${formData.propertyType || 'Not provided'}</p>
        <p><strong>Budget Range:</strong> ${formData.budget || 'Not provided'}</p>
    `;
  } else if (formType === 'About Dholera') {
    specificFields = `
        <p><strong>Property Type:</strong> ${formData.propertyType || 'Not provided'}</p>
    `;
  } else if (formType === 'Testimonial') {
    specificFields = `
        <p><strong>Property Type:</strong> ${formData.propertyType || 'Not provided'}</p>
    `;
  }

  const messageField = formData.message || formData.testimonial || 'Not provided';
  
  return baseTemplate + specificFields + `
        <h3 style="color: #1e40af;">Message</h3>
        <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
          ${messageField}
        </p>
      </div>
      <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
        <p style="margin: 0; color: #1e40af; font-size: 14px;">
          <strong>Submitted on:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        </p>
        <p style="margin: 5px 0 0 0; color: #1e40af; font-size: 14px;">
          <strong>Source:</strong> Nestoria Group Website
        </p>
      </div>
    </div>
  `;
};

// Generic email sending function
const sendEmail = async (formData, formType, subject) => {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: `"Nestoria Group Website" <${process.env.SMTP_USER || 'your-email@gmail.com'}>`,
    to: process.env.RECIPIENT_EMAIL || 'info@nestoriagroup.com',
    subject: subject,
    html: getEmailTemplate(formData, formType)
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Generic email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    console.log('Generic email endpoint called with data:', req.body);
    
    const result = await sendEmail(req.body, 'Contact', 'New Contact Form Submission - Nestoria Group');
    
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
    
    const result = await sendEmail(req.body, 'Contact', 'New Contact Form Submission - Nestoria Group');
    
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
    
    const result = await sendEmail(req.body, 'Land Deal', 'New Land Deal Inquiry - Nestoria Group');
    
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
    
    const result = await sendEmail(req.body, 'About Dholera', 'New Dholera Information Request - Nestoria Group');
    
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
    
    const result = await sendEmail(req.body, 'Testimonial', 'New Testimonial Submission - Nestoria Group');
    
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