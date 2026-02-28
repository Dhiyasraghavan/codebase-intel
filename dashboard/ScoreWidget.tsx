import { Card } from '../ui/Card';
import { ProgressBar } from '../ui/ProgressBar';

interface ScoreWidgetProps {
    healthScore: number;
    maturity: string;
    readiness: string;
}

export function ScoreWidget({ healthScore, maturity, readiness }: ScoreWidgetProps) {
    const getScoreColor = (score: number) => {
        if (score >= 80) return 'var(--accent-green)';
        if (score >= 60) return 'var(--accent-yellow)';
        return 'var(--severity-critical)';
    };

    return (
        <Card glow className="flex-col justify-center h-full">
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <h3 className="text-muted text-sm uppercase tracking-widest">Health Score</h3>
                <div
                    className="text-gradient"
                    style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1, textShadow: `0 0 20px ${getScoreColor(healthScore)}` }}
                >
                    {healthScore}
                </div>
            </div>

            <ProgressBar label="Overall Architecture Health" value={healthScore} color={getScoreColor(healthScore)} />

            <div className="flex-col gap-2" style={{ marginTop: '1.5rem' }}>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-muted">Maturity Level</span>
                    <span className="badge badge-note">{maturity}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-muted">Production Status</span>
                    <span className="badge badge-warning">{readiness}</span>
                </div>
            </div>
        </Card>
    );
}
