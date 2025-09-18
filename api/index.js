import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.hostinger.com',
  port: process.env.EMAIL_PORT || 587,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Generic email sending endpoint (legacy support)
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, subject, message, propertyType, budget, formType } = req.body;

  try {
    // Determine form type
    const formTypeValue = formType || (propertyType !== undefined ? 'land-deal' : 'contact');
    
    // Email content based on form type
    let emailSubject = 'Website Form Submission';
    let emailHtml = '';
    
    switch(formTypeValue) {
      case 'land-deal':
        emailSubject = 'Land Deal Inquiry';
        emailHtml = `
          <h3>New Land Deal Inquiry</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Property Type:</strong> ${propertyType}</p>
          <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Requirements:</strong> ${message}</p>
        `;
        break;
      case 'contact':
      default:
        emailSubject = `Contact Form: ${subject || 'Website Inquiry'}`;
        emailHtml = `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
        break;
      case 'about-dholera':
        emailSubject = `Dholera Information Request: ${subject || 'Website Inquiry'}`;
        emailHtml = `
          <h3>New Dholera Information Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `;
        break;
      case 'testimonial':
        emailSubject = 'New Testimonial Submission';
        emailHtml = `
          <h3>New Testimonial Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Rating:</strong> ${req.body.rating || 'Not specified'}</p>
          <p><strong>Testimonial:</strong> ${req.body.testimonial || message}</p>
        `;
        break;
    }
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      bcc: process.env.BCC_EMAIL,
      subject: emailSubject,
      html: emailHtml
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      bcc: process.env.BCC_EMAIL,
      subject: `Contact Form: ${subject || 'Website Inquiry'}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ success: false, message: 'Failed to submit contact form', error: error.message });
  }
});

// Land Deal form endpoint
app.post('/api/land-deal', async (req, res) => {
  try {
    const { name, email, phone, propertyType, budget, message } = req.body;
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      bcc: process.env.BCC_EMAIL,
      subject: 'Land Deal Inquiry',
      html: `
        <h3>New Land Deal Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Requirements:</strong> ${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Land deal inquiry submitted successfully' });
  } catch (error) {
    console.error('Error submitting land deal inquiry:', error);
    res.status(500).json({ success: false, message: 'Failed to submit land deal inquiry', error: error.message });
  }
});

// About Dholera form endpoint
app.post('/api/about-dholera', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      bcc: process.env.BCC_EMAIL,
      subject: `Dholera Information Request: ${subject || 'Website Inquiry'}`,
      html: `
        <h3>New Dholera Information Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Dholera information request submitted successfully' });
  } catch (error) {
    console.error('Error submitting Dholera information request:', error);
    res.status(500).json({ success: false, message: 'Failed to submit Dholera information request', error: error.message });
  }
});

// Testimonial form endpoint
app.post('/api/testimonial', async (req, res) => {
  try {
    const { name, email, rating, testimonial } = req.body;
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      bcc: process.env.BCC_EMAIL,
      subject: 'New Testimonial Submission',
      html: `
        <h3>New Testimonial Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Rating:</strong> ${rating || 'Not specified'}</p>
        <p><strong>Testimonial:</strong> ${testimonial}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Testimonial submitted successfully' });
  } catch (error) {
    console.error('Error submitting testimonial:', error);
    res.status(500).json({ success: false, message: 'Failed to submit testimonial', error: error.message });
  }
});

// Export the Express API
export default app;