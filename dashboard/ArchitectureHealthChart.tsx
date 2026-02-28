import { Card } from '../ui/Card';

interface ArchitectureHealthChartProps {
  criticalCount: number;
  highCount: number;
}

export function ArchitectureHealthChart({ criticalCount, highCount }: ArchitectureHealthChartProps) {
  const total = criticalCount + highCount;
  const criticalPct = total ? Math.round((criticalCount / total) * 100) : 0;
  const highPct = total ? 100 - criticalPct : 0;

  return (
    <Card glow>
      <h3 className="text-lg text-gradient" style={{ marginBottom: '1rem' }}>
        Component Centrality Distribution
      </h3>
      <p className="text-muted" style={{ marginBottom: '1rem' }}>
        Visual overview of how many core components are marked as <strong>Critical</strong> versus
        <strong> High</strong> importance.
      </p>
      <div
        className="glass-panel"
        style={{
          padding: '0.75rem',
          background: 'rgba(0,0,0,0.4)',
          borderRadius: '999px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '18px',
            borderRadius: '999px',
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.04)',
          }}
        >
          <div
            style={{
              width: `${criticalPct}%`,
              background: 'linear-gradient(90deg, var(--severity-critical), #f0938b)',
            }}
          />
          <div
            style={{
              width: `${highPct}%`,
              background: 'linear-gradient(90deg, var(--accent-yellow), #f5d08a)',
            }}
          />
        </div>
      </div>
      <div
        className="flex justify-between"
        style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}
      >
        <div className="flex items-center gap-2">
          <span
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              borderRadius: '999px',
              background: 'var(--severity-critical)',
            }}
          />
          <span className="text-muted">
            Critical: <strong>{criticalCount}</strong> ({criticalPct}%)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              borderRadius: '999px',
              background: 'var(--accent-yellow)',
            }}
          />
          <span className="text-muted">
            High: <strong>{highCount}</strong> ({highPct}%)
          </span>
        </div>
      </div>
    </Card>
  );
}

