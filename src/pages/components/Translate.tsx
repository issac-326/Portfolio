// TranslatedComponent.tsx
import React from 'react';
import { useTranslations } from '../../i18n/util';

const Translate: React.FC = () => {
  const lang = 'en'; // Aquí deberías obtener el idioma de alguna manera
  const t = useTranslations(lang);

  return (
    <div>
      <h1 className="text-gradient mt-12" id="aboutMe">{t('nav.aboutMe')}</h1>
      <p className="dark:text-slate-200 text-gray-800">
        {t('text.aboutMe')}
        <br />
        {t('text.aboutMe2')}
        <br />
        {t('text.aboutMe3')}
      </p>
      <h1 className="text-gradient mt-12" id="skills">{t('nav.skills')}</h1>
      {/* Otros elementos */}
    </div>
  );
};

export default Translate;
