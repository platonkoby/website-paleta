import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import common_en from "./translations/en/common.json"
import common_pt from "./translations/pt/common.json"
import { getPreferedLanguage } from './extras/localStorageFuncs';


i18next.init({
  interpolation: { escapeValue: false },
  lng: getPreferedLanguage('en'),
  resources: {
    en: {
      common: common_en
    },
    pt: {
      common: common_pt
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
  //</React.StrictMode>
);

