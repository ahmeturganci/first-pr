import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users } from 'lucide-react';

interface StatsCardProps {
  userCount: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ userCount }) => {
  const { t } = useTranslation();

  return (
    <div className="stats-card">
      <div className="stats-content">
        <Users className="stats-icon" />
        <div className="stats-info">
          <span className="stats-number">{userCount}</span>
          <span className="stats-label">{t('warriors')}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;