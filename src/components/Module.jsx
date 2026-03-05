import { useState } from 'react'

const typeStyles = {
  Theory:    { bg: 'rgba(123,92,240,0.15)', color: '#7b5cf0' },
  Practical: { bg: 'rgba(255,92,53,0.15)',  color: '#ff5c35' },
  Mixed:     { bg: 'rgba(0,212,170,0.15)',  color: '#00d4aa' },
  Policy:    { bg: 'rgba(0,212,170,0.15)',  color: '#00d4aa' },
  Safety:    { bg: 'rgba(255,92,53,0.15)',  color: '#ff5c35' },
}

export default function Module({ mod, accent }) {
  const [open, setOpen] = useState(false)
  const typeStyle = typeStyles[mod.type] || typeStyles.Theory

  return (
    <div
      className="module"
      style={{ '--accent': accent }}
      data-open={open}
    >
      <button className="module-header" onClick={() => setOpen(o => !o)}>
        <span className="module-num">{mod.id}</span>

        <div className="module-info">
          <div className="module-title">{mod.title}</div>
          <div className="module-desc">{mod.desc}</div>
        </div>

        <div className="module-meta">
          <span
            className="module-tag"
            style={{ background: typeStyle.bg, color: typeStyle.color }}
          >
            {mod.type}
          </span>
          <span className="module-time">⏱ {mod.time}</span>
          <span className="chevron" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            ▾
          </span>
        </div>
      </button>

      {open && (
        <div className="module-body">
          <ul>
            {mod.topics.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
          {mod.quiz && (
            <div className="quiz-note">
              📋 {mod.quiz}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
