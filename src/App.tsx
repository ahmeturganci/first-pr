import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, RefreshCw } from 'lucide-react';

// Components
import TopControls from './components/TopControls';
import BackgroundEffects from './components/BackgroundEffects';
import GitFlowGuide from './components/GitFlowGuide';
import StatsCard from './components/StatsCard';
import UsersSection from './components/UsersSection';

// Hooks
import { useUsers } from './hooks/useUsers';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const { t } = useTranslation();
  const [showGuide, setShowGuide] = useState(false);
  
  // Custom hooks
  const { users, isLoading, refreshUsers, userCount } = useUsers();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const handleToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  const handleOpenGitHub = () => {
    window.open('https://github.com/ahmeturganci/first-pr.git', '_blank');
  };

  return (
    <div className="app">
      <TopControls
        theme={theme}
        language={language}
        onToggleTheme={toggleTheme}
        onToggleLanguage={toggleLanguage}
        onOpenGitHub={handleOpenGitHub}
      />

      <BackgroundEffects />

      <div className="container">
        {/* Header */}
        <div className="header">
          <h1 className="title">{t('title')}</h1>
          <p className="subtitle">{t('subtitle')}</p>
          
          <div className="button-group">
            <button
              onClick={handleToggleGuide}
              className="btn btn-primary"
              aria-expanded={showGuide}
            >
              <Plus className="btn-icon" />
              {showGuide ? t('hideGuide') : t('howToJoin')}
            </button>
            
            <button
              onClick={refreshUsers}
              disabled={isLoading}
              className={`btn btn-secondary ${isLoading ? 'loading' : ''}`}
              aria-label={t('refresh')}
            >
              <RefreshCw className={`btn-icon ${isLoading ? 'spinning' : ''}`} />
              {t('refresh')}
            </button>
          </div>
        </div>

        {/* Git Flow Guide */}
        {showGuide && <GitFlowGuide />}

        {/* Stats */}
        <StatsCard userCount={userCount} />

        {/* Users Section */}
        <UsersSection users={users} isLoading={isLoading} />

        {/* Footer */}
        <div className="footer">
          <p>{t('footerText')}</p>
        </div>
      </div>
    </div>
  );
}

export default App;