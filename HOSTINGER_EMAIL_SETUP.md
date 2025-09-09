# Setting Up Email Functionality on Hostinger

## Overview

This guide explains how to set up the email functionality for the Nestoria website on Hostinger hosting. Since Hostinger may not support Node.js applications by default on all plans, we've created a PHP-based solution that can be used as an alternative to the Node.js/Express backend.

## Files Included

1. `public/send-email.php` - PHP script that handles email sending on Hostinger
2. `src/services/ContactService.hostinger.js` - Modified contact service for Hostinger
3. `src/services/LandDealService.hostinger.js` - Modified land deal service for Hostinger

## Deployment Steps

### 1. Upload Files to Hostinger

1. Build your React application:
   ```
   npm run build
   ```

2. Upload the contents of the `dist` folder to your Hostinger hosting (public_html or your chosen directory)

3. Make sure to upload the `send-email.php` file to the root of your website directory

### 2. Update Service Files

Before building your application, replace the original service files with the Hostinger versions:

1. Replace `src/services/ContactService.js` with `src/services/ContactService.hostinger.js`
2. Replace `src/services/LandDealService.js` with `src/services/LandDealService.hostinger.js`

### 3. Update API URL

In both service files, update the `API_URL` constant to match your actual domain:

```javascript
// Change this:
const API_URL = 'https://nestoriagroup.com/send-email.php';

// To your actual domain:
const API_URL = 'https://yourdomain.com/send-email.php';
```

### 4. Email Configuration

The PHP script is configured to use the following email settings:

- **From**: info@nestoriagroup.com
- **To**: info@nestoriagroup.com
- **BCC**: bhadoriyaji@myself.com

If you need to change these settings, edit the `send-email.php` file.

## Troubleshooting

### Email Not Sending

1. Check the `email_log.txt` file that will be created in the same directory as the PHP script
2. Verify that your Hostinger email account is properly set up
3. Make sure PHP's mail function is enabled on your hosting

### CORS Issues

If you encounter CORS issues, make sure the PHP script has the correct headers. The current script includes:

```php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
```

You may need to change `Access-Control-Allow-Origin` to your specific domain for better security.

## Testing

After deployment, test the contact and land deal forms to ensure emails are being sent correctly. Check both the success response in the browser and verify that emails are actually being received.