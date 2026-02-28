interface ProgressBarProps {
    label: string;
    value: number;
    max?: number;
    color?: string;
}

export function ProgressBar({ label, value, max = 100, color = 'var(--accent-blue)' }: ProgressBarProps) {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div style={{ marginBottom: '1rem' }}>
            <div className="flex justify-between text-sm" style={{ marginBottom: '0.5rem' }}>
                <span>{label}</span>
                <span className="font-bold">{value}/{max}</span>
            </div>
            <div
                style={{
                    height: '8px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '999px',
                    overflow: 'hidden'
                }}
            >
                <div
                    style={{
                        height: '100%',
                        width: `${percentage}%`,
                        background: color,
                        boxShadow: `0 0 10px ${color}`,
                        transition: 'width 1s ease-in-out'
                    }}
                />
            </div>
        </div>
    );
}
