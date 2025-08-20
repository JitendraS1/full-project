import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'owl.carousel/dist/assets/owl.carousel.css'; 
// import 'owl.carousel/dist/assets/owl.theme.default.css'; 
// Bootstrap styles are now handled by Tailwind CSS
import App from './App.jsx'
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
