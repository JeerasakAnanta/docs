import React from 'react';
import * as LucideIcons from 'lucide-react';

/**
 * LucideIcon component for rendering Lucide icons in markdown
 * Usage: <LucideIcon name="BookOpen" size={16} />
 */
export default function LucideIcon({ name, size = 16, className = '', style = {} }) {
  const IconComponent = LucideIcons[name];

  if (!IconComponent) {
    console.warn(`Lucide icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={className}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '4px',
        ...style
      }}
    />
  );
}
