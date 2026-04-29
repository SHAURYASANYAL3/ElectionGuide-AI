import { useState, useMemo, useCallback } from 'react';
import { CHECKLIST_DATA } from '../data/simulationData';
import { getContextualTip } from '../logic/smartAssistant';

/**
 * Checklist — Voter readiness tracker with progress.
 * Persists checked state within the session.
 */
export default function Checklist({ profile }) {
  const [checked, setChecked] = useState(new Set());

  const tip = useMemo(
    () => getContextualTip(profile.country, 'checklist'),
    [profile.country]
  );

  const totalItems = useMemo(
    () => CHECKLIST_DATA.reduce((acc, s) => acc + s.items.length, 0),
    []
  );

  const progress = totalItems > 0 ? Math.round((checked.size / totalItems) * 100) : 0;

  const toggleItem = useCallback((id) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <section className="section-page" aria-labelledby="checklist-title">
      <div className="section-container">
        <div className="section-header">
          <h1 id="checklist-title" className="section-title section-heading">✅ Checklist</h1>
          <p className="section-subtitle">Your voter readiness tracker</p>
        </div>

        {tip && (
          <div className="smart-tip" role="status" aria-live="polite">{tip}</div>
        )}

        {/* Progress */}
        <div className="checklist-progress card">
          <div className="checklist-progress-info" aria-live="polite">
            {checked.size}/{totalItems} completed ({progress}%)
          </div>
          <div className="checklist-progress-bar-bg">
            <div
              className="checklist-progress-bar"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>

        {/* Sections */}
        <div className="checklist-sections">
          {CHECKLIST_DATA.map((section, si) => (
            <div key={si} className="cl-section" role="group" aria-label={section.section}>
              <h2 className="cl-section-title">{section.section}</h2>
              {section.items.map((item, ii) => {
                const id = `${si}-${ii}`;
                const isChecked = checked.has(id);
                return (
                  <div
                    key={id}
                    className={`cl-item${isChecked ? ' checked' : ''}`}
                    onClick={() => toggleItem(id)}
                    onKeyDown={(e) => e.key === 'Enter' && toggleItem(id)}
                    role="checkbox"
                    aria-checked={isChecked}
                    aria-label={`${item.t} — ${item.d}`}
                    tabIndex={0}
                  >
                    <div className="cl-checkbox" aria-hidden="true" />
                    <div className="cl-text">
                      <strong>{item.t}</strong>
                      <span>{item.d}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
