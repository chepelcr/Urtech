import React from 'react';
import { ProximamentePage } from '../components/ProximamentePage';
import { useLang } from '../context/LanguageContext';

export default function Videos() {
  const { t } = useLang();
  return <ProximamentePage title={t.videos.title} />;
}
