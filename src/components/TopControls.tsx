import React from 'react';
import { Moon, Sun, Globe, Github } from 'lucide-react';
import { Theme } from '../hooks/useTheme';
import { Language } from '../hooks/useLanguage';

interface TopControlsProps {
  theme: Theme;
  language: Language;
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
  onOpenGitHub: () => void;
}

const TopControls: React.FC<TopControlsProps> = ({
  theme,
  language,
  onToggleTheme,
  onToggleLanguage,
  onOpenGitHub
}) => {
  return (
    <div className="top-controls">
      <button
        onClick={onToggleTheme}
        className="control-btn"
        title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <Sun className="control-icon" /> : <Moon className="control-icon" />}
      </button>
      
      <button
        onClick={onToggleLanguage}
        className="control-btn"
        title={language === 'tr' ? 'English' : 'Türkçe'}
        aria-label={`Switch to ${language === 'tr' ? 'English' : 'Turkish'}`}
      >
        <Globe className="control-icon" />
        <span className="control-text">{language === 'tr' ? 'EN' : 'TR'}</span>
      </button>
      
      <button
        onClick={onOpenGitHub}
        className="control-btn"
        title="GitHub"
        aria-label="Open GitHub"
      >
        <Github className="control-icon" />
      </button>
    </div>
  );
};

export default TopControls;