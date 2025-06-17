import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GitBranch, GitMerge, AlertTriangle, CheckCircle, GitFork } from 'lucide-react';

const GitFlowGuide: React.FC = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      title: t('steps.step1.title'),
      command: t('steps.step1.command'),
      description: t('steps.step1.description'),
      icon: <GitFork className="step-icon" />
    },
    {
      title: t('steps.step2.title'),
      command: t('steps.step2.command'),
      description: t('steps.step2.description'),
      icon: <GitBranch className="step-icon" />
    },
    {
      title: t('steps.step3.title'),
      command: t('steps.step3.command'),
      description: t('steps.step3.description'),
      icon: <AlertTriangle className="step-icon warning" />
    },
    {
      title: t('steps.step4.title'),
      command: t('steps.step4.command'),
      description: t('steps.step4.description'),
      icon: <CheckCircle className="step-icon" />
    },
    {
      title: t('steps.step5.title'),
      command: t('steps.step5.command'),
      description: t('steps.step5.description'),
      icon: <GitMerge className="step-icon success" />
    }
  ];

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <div className="git-guide">
      <h2 className="guide-title">
        <GitBranch className="guide-icon" />
        {t('gitFlowGuide')}
      </h2>
      
      <div className="steps-container">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`step ${activeStep === index ? 'active' : ''}`}
            onClick={() => toggleStep(index)}
          >
            <div className="step-header">
              {step.icon}
              <h3>{step.title}</h3>
            </div>
            
            {activeStep === index && (
              <div className="step-content">
                <p>{step.description}</p>
                <code>{step.command}</code>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="warning-box">
        <div className="warning-header">
          <AlertTriangle className="warning-icon" />
          <h3>{t('conflictStrategy')}</h3>
        </div>
        <p>{t('conflictDescription')}</p>
      </div>
    </div>
  );
};

export default GitFlowGuide;