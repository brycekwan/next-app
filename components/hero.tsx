import React from 'react';
import styles from './hero.module.scss';

export interface HeroProps {
    title: string;
    className?: string;
    imagePath: string;
    description: string;
    theme?: string;
}

export function Hero({ className, title, description, imagePath, theme }: HeroProps) {
    const themeStyle = theme ? styles[theme] : null;
    return (
        <div className={`${styles.hero} ${className} ${themeStyle}`}>
            <img src={imagePath} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}