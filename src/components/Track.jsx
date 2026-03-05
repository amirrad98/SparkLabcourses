import Module from './Module'

export default function Track({ track }) {
  const quizCount = track.modules.filter(m => m.quiz).length

  return (
    <section className="track">
      <div className="track-header">
        <div className="track-title-group">
          <span
            className="track-badge"
            style={{
              background: track.accentBg,
              color: track.accent,
              border: `1px solid ${track.accentBorder}`,
            }}
          >
            {track.code} / {track.label}
          </span>
          <h2>{track.title}</h2>
        </div>

        <div className="track-stats">
          <div className="track-stat">
            <div className="track-stat-num" style={{ color: track.accent }}>
              {track.modules.length}
            </div>
            <div className="track-stat-lbl">Modules</div>
          </div>
          <div className="track-stat">
            <div className="track-stat-num">{track.totalTime}</div>
            <div className="track-stat-lbl">Duration</div>
          </div>
          <div className="track-stat">
            <div className="track-stat-num" style={{ color: '#ffc800' }}>
              {quizCount}
            </div>
            <div className="track-stat-lbl">Quizzes</div>
          </div>
        </div>
      </div>

      <div className={`modules track-${track.id}`}>
        {track.modules.map(mod => (
          <Module key={mod.id} mod={mod} accent={track.accent} />
        ))}
      </div>
    </section>
  )
}
