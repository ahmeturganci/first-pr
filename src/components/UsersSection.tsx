import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users } from 'lucide-react';
import { User } from '../types/User';
import UserBubble from './UserBubble';
import LoadingSpinner from './LoadingSpinner';

interface UsersSectionProps {
  users: User[];
  isLoading: boolean;
}

const UsersSection: React.FC<UsersSectionProps> = ({
  users,
  isLoading
}) => {
  const { t } = useTranslation();

  return (
    <div className="users-section">
      <h2 className="section-title">{t('conflictWarriors')}</h2>
      
      {isLoading ? (
        <LoadingSpinner />
      ) : users.length > 0 ? (
        <div className="users-container">
          {users.map((user, index) => (
            <UserBubble key={`${user.name}-${index}`} user={user} index={index} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Users className="empty-icon" />
          <p>{t('noOneJoined')}</p>
        </div>
      )}
    </div>
  );
};

export default UsersSection;