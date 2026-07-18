import React from 'react';
import { ProximamentePage } from '../components/ProximamentePage';
import { useLang } from '../context/LanguageContext';

export default function Music() {
  const { t } = useLang();
  return <ProximamentePage title={t.music.title} />;
}
