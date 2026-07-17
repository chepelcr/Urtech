import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, Language } from '../i18n/translations';

type TranslationKeys = typeof translations.en;

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('nocturn-lang') as Language;
    return saved === 'es' ? 'es' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('nocturn-lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const value = {
    lang,
    toggleLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLang must be used within a LanguageProvider');
  }
  return context;
}
