import React from 'react';
import styles from './banner.module.scss';

export interface BannerProps {
    description: string;
    className?: string;
    theme?: string;
}

export function Banner({ className, description, theme }: BannerProps) {
    const themeStyle = theme ? styles[theme] : null;
    return (
        <div className={`${styles.banner} ${className} ${themeStyle}`}>
            <h1>{description}</h1>
        </div>
    );
}