import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.tsx';
import AboutPage from './components/AboutPage.tsx';
import ContactPage from './components/ContactPage.tsx';
import PrivacyPage from './components/PrivacyPage.tsx';
import CookiePage from './components/CookiePage.tsx';
import TermsPage from './components/TermsPage.tsx';
import ServicesPage from './components/ServicesPage.tsx';
import MissionsPage from './components/MissionsPage.tsx';
import Layout from './components/Layout.tsx';
import './index.css';

// Ensure basename handles trailing slash correctly (Vite BASE_URL usually has one)
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiePage />} />
          <Route path="/terms" element={<TermsPage />} />
          {/* Catch-all route to redirect back to home if something goes wrong */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
);
