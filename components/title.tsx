import React from 'react';
import styles from './title.module.scss';

export interface TitleProps {
  title: string;
  className?: string;
  theme?: string;
}

export function Title({ className, title, theme }: TitleProps) {
  const themeStyle = theme ? styles[theme] : null;
  return (
    <div className={`${styles.title} ${className} ${themeStyle}`}>
      <h1>{title}</h1>
    </div>
  );
}