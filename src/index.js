import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './root';
import 'antd/dist/reset.css';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18nextOptions from 'i18next-browser-languagedetector';
// import i18next from 'i18next';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  // .init(i18nextOptions)
  .init({
    supportedLngs: ['en', 'uz', 'ru'],
    fallbackLng: "en",
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'subdomain', 'path'],
      caches: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    // react: { useSuspense: false },
    interpolation: {
      escapeValue: false
    }
  }, i18nextOptions);

const loading = <div>loading...</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  <Suspense fallback={loading} >
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Suspense>
  // </React.StrictMode>
);
