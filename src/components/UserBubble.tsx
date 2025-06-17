import React from 'react';
import { User } from '../types/User';

interface UserBubbleProps {
  user: User;
  index: number;
}

const UserBubble: React.FC<UserBubbleProps> = ({ user, index }) => {
  const colors = [
    'linear-gradient(135deg, #ff6b9d, #c44569)',
    'linear-gradient(135deg, #4facfe, #00f2fe)', 
    'linear-gradient(135deg, #43e97b, #38f9d7)',
    'linear-gradient(135deg, #fa709a, #fee140)',
    'linear-gradient(135deg, #667eea, #764ba2)',
    'linear-gradient(135deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #4ecdc4, #44a08d)',
    'linear-gradient(135deg, #ffecd2, #fcb69f)'
  ];

  const colorGradient = colors[index % colors.length];
  const animationDelay = `${index * 0.1}s`;

  return (
    <div 
      className="user-bubble"
      style={{ 
        background: colorGradient,
        animationDelay
      }}
    >
      <div className="bubble-content">
        <div className="bubble-name">{user.name}</div>
      </div>
      <div 
        className="bubble-glow"
        style={{ background: colorGradient }}
      />
    </div>
  );
};

export default UserBubble;