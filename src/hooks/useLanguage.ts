import { useTranslation } from 'react-i18next';

export type Language = 'tr' | 'en';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const language = i18n.language as Language;

  const toggleLanguage = () => {
    const newLanguage = language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLanguage);
  };

  return {
    language,
    toggleLanguage,
    isTurkish: language === 'tr'
  };
};