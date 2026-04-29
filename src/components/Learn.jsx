import { useState, useMemo } from 'react';
import { LEARN_DATA, TIMELINE, KEY_TERMS } from '../data/learnData';
import { getContextualTip, getDetailLevel, getRecommendedTopics } from '../logic/smartAssistant';

const TOPICS = Object.keys(LEARN_DATA);

/**
 * Learn — Topic-based election education with smart tips.
 * Adapts detail level based on user's knowledge level.
 */
export default function Learn({ profile }) {
  const recommended = useMemo(
    () => getRecommendedTopics(profile.level),
    [profile.level]
  );
  const [activeTopic, setActiveTopic] = useState(recommended[0] || 'overview');

  const tip = useMemo(
    () => getContextualTip(profile.country, 'learn'),
    [profile.country]
  );

  const detail = useMemo(
    () => getDetailLevel(profile.level),
    [profile.level]
  );

  const topic = LEARN_DATA[activeTopic];

  return (
    <section className="section-page section-page--warm" aria-labelledby="learn-title">
      <div className="section-container">
        <div className="section-header">
          <h1 id="learn-title" className="section-title section-heading">📖 Learn</h1>
          <p className="section-subtitle">Step-by-step election education</p>
        </div>

        {/* Smart Tip */}
        {tip && (
          <div className="smart-tip" role="status" aria-live="polite">
            {tip}
          </div>
        )}

        {/* Topic Selector */}
        <div className="topic-selector" role="tablist" aria-label="Choose a topic">
          {TOPICS.map((key) => (
            <button
              key={key}
              className={`topic-btn${activeTopic === key ? ' active' : ''}`}
              onClick={() => setActiveTopic(key)}
              role="tab"
              aria-selected={activeTopic === key}
              aria-label={`${LEARN_DATA[key].title}${recommended.includes(key) ? ' (Recommended)' : ''}`}
            >
              {LEARN_DATA[key].icon} {LEARN_DATA[key].title}
              {recommended.includes(key) && <span className="recommended-badge">★</span>}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <article className="learn-panel card" role="tabpanel" aria-label={topic.title}>
          <h3>{topic.icon} {topic.title}</h3>
          <p className="overview-text">{topic.text}</p>
          <ol className="step-list" aria-label="Process steps">
            {topic.steps.map((s, i) => (
              <li key={i} className="step-item">
                <div className="step-num" aria-hidden="true">{i + 1}</div>
                <div className="step-body">
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>

        {/* Timeline */}
        {detail.showTimeline && (
          <div className="timeline-container" role="list" aria-label="Election timeline">
            <h2 className="timeline-title">📅 Election Timeline</h2>
            <div className="timeline">
              {TIMELINE.map((item, i) => (
                <div key={i} className="timeline-item" role="listitem">
                  <div className="tl-phase">{item.phase}</div>
                  <div className="tl-title">{item.title}</div>
                  <div className="tl-desc">{item.desc}</div>
                  <span className="tl-duration">{item.dur}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Terms */}
        {detail.showTerms && (
          <div className="key-terms card" role="glossary" aria-label="Key election terms">
            <h3>📘 Key Terms</h3>
            <div className="terms-grid">
              {KEY_TERMS.map((term, i) => (
                <div key={i} className="term-card">
                  <div className="term-word">{term.word}</div>
                  <div className="term-def">{term.def}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
