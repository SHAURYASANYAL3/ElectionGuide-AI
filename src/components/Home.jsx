import { useState, useMemo } from 'react';
import { getRecommendedTopics } from '../logic/smartAssistant';
import { LEARN_DATA } from '../data/learnData';

const COUNTRIES = ['India', 'United States', 'United Kingdom', 'Germany', 'France', 'Brazil', 'Japan', 'Australia'];
const ELECTION_TYPES = [
  { label: 'General / Parliamentary', icon: '🏛️' },
  { label: 'Presidential', icon: '🏅' },
  { label: 'Local / Municipal', icon: '🏘️' },
  { label: 'Referendum', icon: '📜' },
];
const LEVELS = [
  { label: 'Beginner', icon: '🌱', desc: 'New to elections' },
  { label: 'Intermediate', icon: '📘', desc: 'Know the basics' },
  { label: 'Advanced', icon: '🎓', desc: 'Deep understanding' },
];

/**
 * Home — Onboarding + feature cards.
 * Collects user profile for smart assistant personalization.
 */
export default function Home({ profile, updateProfile, navigate }) {
  const [step, setStep] = useState(profile.level ? 3 : 0);

  const recommended = useMemo(
    () => (profile.level ? getRecommendedTopics(profile.level) : []),
    [profile.level]
  );

  const onCountrySelect = (country) => {
    updateProfile({ country });
  };

  const handleContinueCountry = () => {
    if (profile.country) setStep(1);
  };

  const handleElectionType = (type) => {
    updateProfile({ electionType: type });
    setStep(2);
  };

  const handleLevel = (level) => {
    updateProfile({ level });
    setStep(3);
  };

  const isOnboarded = step >= 3 && profile.level;

  return (
    <section className="section-page" aria-labelledby="home-title">
      <div className="hero">
        <div className="hero-badge" role="status">
          <span role="img" aria-hidden="true">⚡</span> AI-Powered Election Guide
        </div>
        <h1 id="home-title" className="hero-title display-hero">
          Understand elections,<br />step by step
        </h1>
        <p className="hero-subtitle">
          Your personal guide to understanding how elections work — from registration to results.
        </p>
      </div>

      {/* Onboarding Card */}
      <div className="onboarding-card card card--featured" role="form" aria-label="Setup your profile">
        {step === 0 && (
          <div style={{ animation: 'fadeIn 0.35s ease' }}>
            <h2 className="onboarding-title">🌍 Where are you from?</h2>
            <label className="onboard-label" htmlFor="country-input">Country or Region</label>
            <input
              id="country-input"
              className="onboard-input"
              type="text"
              placeholder="Type your country…"
              value={profile.country}
              onChange={(e) => updateProfile({ country: e.target.value })}
              aria-describedby="country-tags"
            />
            <div className="popular-tags" id="country-tags" role="group" aria-label="Popular countries">
              {COUNTRIES.map((c) => (
                <button
                  key={c}
                  className={`tag${profile.country === c ? ' active' : ''}`}
                  onClick={() => onCountrySelect(c)}
                  aria-pressed={profile.country === c}
                >
                  {c}
                </button>
              ))}
            </div>
            <button
              className="btn btn-primary"
              onClick={handleContinueCountry}
              disabled={!profile.country}
              aria-label="Continue to election type selection"
            >
              Continue →
            </button>
          </div>
        )}

        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.35s ease' }}>
            <h2 className="onboarding-title">🗳️ What type of election?</h2>
            <div className="option-grid">
              {ELECTION_TYPES.map((et) => (
                <button
                  key={et.label}
                  className="option-card"
                  onClick={() => handleElectionType(et.label)}
                  aria-label={`Select ${et.label} election type`}
                >
                  <span className="option-icon" role="img" aria-hidden="true">{et.icon}</span>
                  <span className="option-text">{et.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ animation: 'fadeIn 0.35s ease' }}>
            <h2 className="onboarding-title">📊 Your knowledge level?</h2>
            <div className="option-grid option-grid--3">
              {LEVELS.map((l) => (
                <button
                  key={l.label}
                  className="option-card"
                  onClick={() => handleLevel(l.label)}
                  aria-label={`Select ${l.label} level — ${l.desc}`}
                >
                  <span className="option-icon" role="img" aria-hidden="true">{l.icon}</span>
                  <span className="option-text">{l.label}</span>
                  <span className="option-desc">{l.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {isOnboarded && (
          <div style={{ animation: 'fadeIn 0.35s ease' }}>
            <h2 className="onboarding-title">✅ Your Profile</h2>
            <div className="profile-summary">
              <div className="profile-header">
                <h3>Profile</h3>
                <button className="btn btn-ghost" onClick={() => setStep(0)} aria-label="Edit profile settings">
                  Edit
                </button>
              </div>
              <div className="profile-tags">
                <span className="profile-tag">{profile.country}</span>
                <span className="profile-tag">{profile.electionType}</span>
                <span className="profile-tag">{profile.level}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Smart Recommendations */}
      {isOnboarded && recommended.length > 0 && (
        <div className="smart-tip" role="status" aria-live="polite">
          💡 Recommended for you: start with&nbsp;
          <strong>{LEARN_DATA[recommended[0]]?.title}</strong>
          <span className="recommended-badge">AI Pick</span>
        </div>
      )}

      {/* Feature Cards */}
      <div className="feature-grid" role="navigation" aria-label="App sections">
        {[
          { id: 'learn', icon: '📖', title: 'Learn', desc: 'Step-by-step election education' },
          { id: 'compare', icon: '⚖️', title: 'Compare', desc: 'Compare election systems globally' },
          { id: 'simulate', icon: '🎮', title: 'Simulate', desc: 'Interactive voting experience' },
          { id: 'checklist', icon: '✅', title: 'Checklist', desc: 'Your voter readiness tracker' },
        ].map((f) => (
          <div
            key={f.id}
            className="feature-card card"
            onClick={() => navigate(f.id)}
            onKeyDown={(e) => e.key === 'Enter' && navigate(f.id)}
            role="button"
            tabIndex={0}
            aria-label={`Open ${f.title} — ${f.desc}`}
          >
            <div className="feature-icon" role="img" aria-hidden="true">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
