import React from 'react';

interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    glow?: boolean;
    style?: React.CSSProperties;
}

export function Card({ title, children, className = '', glow = false, style = {} }: CardProps) {
    return (
        <div
            className={`glass-panel ${className}`}
            style={{
                padding: '1.5rem',
                marginBottom: '1.5rem',
                boxShadow: glow ? 'var(--glow-primary)' : undefined,
                borderColor: glow ? 'var(--accent-blue)' : undefined,
                ...style
            }}
        >
            {title && <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--panel-border)', paddingBottom: '0.5rem' }}>{title}</h3>}
            {children}
        </div>
    );
}
