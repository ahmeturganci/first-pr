import React from 'react';
import { useTranslation } from 'react-i18next';

const LoadingSpinner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="loading-spinner">
      <div className="spinner" aria-label="Loading"></div>
      <p>{t('loadingWarriors')}</p>
    </div>
  );
};

export default LoadingSpinner;