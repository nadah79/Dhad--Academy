import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationAR from "./translate/ar.json"
import translationEN from "./translate/en.json"
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    react:{
        useSuspense:false
    },
    
    resources: {
      en: {
        translation:translationEN
      },
      ar: {
        translation:translationAR
      },
      
    }
  });

export default i18n;

    // translation:{
    // description: {
    //     part1: 'Edit <1>src/App.js</1> and save to reload.',
    //     part2: 'Learn React'
    //   }
    // }