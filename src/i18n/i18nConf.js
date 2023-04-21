import i18n from 'i18next'
import {languageDetector, languageDetectorOptions} from './lang-detector'
import { initReactI18next } from 'react-i18next'
import { resources } from './language-features'

i18n.use(languageDetector)
  
  .use(initReactI18next)
 
  .init({
    
    detection: languageDetectorOptions,
    resources,
    fallbackLng: ["pt","en"],

    interpolation: {
      escapeValue: false
    }
  })

export default i18n;