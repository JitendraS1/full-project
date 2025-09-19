# Nodemailer Setup Guide

## Overview

This project now uses Nodemailer for handling all form submissions. The server is configured to send emails through SMTP when forms are submitted.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# SMTP Configuration for Nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Configuration
RECIPIENT_EMAIL=info@nestoriagroup.com

# Server Configuration
PORT=5000
NODE_ENV=development
```

## Gmail Setup (Recommended)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password as `SMTP_PASS`

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev:all
   ```

   This will start both the React frontend and the Node.js backend.

3. Or start them separately:
   ```bash
   # Terminal 1 - Frontend
   npm run dev

   # Terminal 2 - Backend
   npm run server
   ```

## Form Endpoints

The server provides the following endpoints:

- `POST /api/send-email` - Generic email endpoint
- `POST /api/contact` - Contact form submissions
- `POST /api/land-deal` - Land deal inquiries
- `POST /api/about-dholera` - Dholera information requests
- `POST /api/testimonial` - Testimonial submissions

## Email Templates

All emails are sent with professional HTML templates that include:
- Form type identification
- Contact information
- Form-specific fields
- Timestamp and source information

## Troubleshooting

### Email Not Sending
1. Check your SMTP credentials
2. Verify the recipient email address
3. Check server logs for error messages
4. Ensure your email provider allows SMTP connections

### CORS Issues
The server is configured with CORS enabled for all origins. For production, consider restricting this to your domain.

### Port Conflicts
If port 5000 is in use, change the `PORT` environment variable or update the `package.json` scripts.
