import React from 'react';

type Variant = 'critical' | 'warning' | 'note' | 'success' | 'default';

interface BadgeProps {
    variant?: Variant;
    children: React.ReactNode;
}

export function Badge({ variant = 'default', children }: BadgeProps) {
    let badgeClass = 'badge ';
    switch (variant) {
        case 'critical': badgeClass += 'badge-critical'; break;
        case 'warning': badgeClass += 'badge-warning'; break;
        case 'note': badgeClass += 'badge-note'; break;
        case 'success': badgeClass += 'badge-success'; break;
        default: badgeClass += 'badge-note'; break;
    }

    return (
        <span className={badgeClass}>
            {children}
        </span>
    );
}
