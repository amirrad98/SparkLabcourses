import { certRequirements } from '../data/courses'

export default function Certification() {
  return (
    <section className="certification">
      <div className="section-label">// Certification Requirements</div>
      <div className="cert-grid">
        {certRequirements.map(cert => (
          <div key={cert.title} className="cert-card">
            <div
              className="cert-card-bar"
              style={{ background: cert.accent }}
            />
            <h3>
              {cert.icon} {cert.title}
            </h3>
            <p>To unlock access, complete the following:</p>
            <div className="cert-req">
              {cert.requirements.map((req, i) => (
                <div key={i} className="cert-req-item">
                  <div
                    className="req-dot"
                    style={{ background: req.color }}
                  />
                  {req.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
