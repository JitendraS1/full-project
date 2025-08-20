# Nestoria Group Website

A modern, responsive website for Nestoria Group, a real estate company specializing in properties in Dholera SIR (Special Investment Region). Built with React, Vite, Tailwind CSS, and Express.js.

## Features

- Responsive design optimized for all devices
- Modern UI with animations and transitions
- Contact form with email functionality
- Interactive property listings
- Testimonials carousel
- SEO optimized
- Blog section

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Email**: Nodemailer
- **Styling**: Tailwind CSS, Font Awesome
- **Animations**: CSS animations, Tailwind transitions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/nestoria-project.git
   cd nestoria-project
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables
   - Create a `.env` file in the root directory based on the `.env.example` file
   - Update the email configuration for the contact form functionality

   ```
   # Server Configuration
   PORT=5000

   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

   Note: For Gmail, you need to use an App Password. Go to your Google Account > Security > 2-Step Verification > App passwords and generate a new app password for this application.

### Running the Application

#### Development Mode

Run both frontend and backend servers concurrently:

```bash
npm run dev:all
```

Or run them separately:

```bash
# Frontend only
npm run dev

# Backend only
npm run server
```

The frontend will be available at http://localhost:5173 (or another port if 5173 is in use).
The backend API will be available at http://localhost:5000.

#### Production Build

```bash
npm run build
```

## Contact Form Setup

The contact form uses Nodemailer to send emails. To enable this functionality:

1. Configure your email provider settings in the `.env` file
2. For Gmail users:
   - Enable 2-Step Verification in your Google account
   - Generate an App Password (Google Account > Security > App passwords)
   - Use this App Password in the `.env` file

3. Uncomment the email sending code in `src/pages/Contact.jsx`:
   ```javascript
   // Change from
   // await ContactService.sendContactForm(formData);
   
   // To
   await ContactService.sendContactForm(formData);
   ```

## Project Structure

```
├── public/              # Static files
├── server/              # Backend server code
│   └── server.js        # Express server setup
├── src/                 # Frontend source code
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── .env                 # Environment variables
├── package.json         # Dependencies and scripts
└── tailwind.config.js   # Tailwind CSS configuration
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express.js](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)
- [Font Awesome](https://fontawesome.com/)
