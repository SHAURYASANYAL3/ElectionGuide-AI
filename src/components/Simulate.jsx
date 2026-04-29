import { useState, useCallback, useMemo } from 'react';
import { SIM_STEPS } from '../data/simulationData';
import { isCorrectChoice, getSimulationFeedback, getContextualTip } from '../logic/smartAssistant';

/**
 * Simulate — Interactive 6-step voting simulation.
 * Tracks choices, provides feedback, and scores performance.
 */
export default function Simulate({ profile }) {
  const [step, setStep] = useState(0);
  const [journal, setJournal] = useState([]);

  const tip = useMemo(
    () => getContextualTip(profile.country, 'simulate'),
    [profile.country]
  );

  const isComplete = step >= SIM_STEPS.length;
  const current = SIM_STEPS[step];

  const handleChoice = useCallback((choiceIdx) => {
    const s = SIM_STEPS[step];
    const correct = isCorrectChoice(s, choiceIdx);
    setJournal((prev) => [
      ...prev,
      {
        step: s.title,
        choice: s.options[choiceIdx],
        feedback: s.feedback[choiceIdx],
        correct,
      },
    ]);
    setStep((prev) => prev + 1);
  }, [step]);

  const restart = useCallback(() => {
    setStep(0);
    setJournal([]);
  }, []);

  const result = isComplete ? getSimulationFeedback(journal) : null;
  const progress = Math.round((step / SIM_STEPS.length) * 100);

  return (
    <section className="section-page section-page--warm" aria-labelledby="sim-title">
      <div className="section-container">
        <div className="section-header">
          <h1 id="sim-title" className="section-title section-heading">🎮 Simulate</h1>
          <p className="section-subtitle">Interactive voting experience</p>
        </div>

        {tip && (
          <div className="smart-tip" role="status" aria-live="polite">{tip}</div>
        )}

        <div className="sim-container card card--featured">
          {/* Progress */}
          <div className="sim-progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div className="sim-progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <div className="sim-step-indicator" aria-live="polite">
            Step {Math.min(step + 1, SIM_STEPS.length)} of {SIM_STEPS.length}
          </div>

          {!isComplete ? (
            <>
              <div className="sim-content">
                <div className="sim-emoji" role="img" aria-hidden="true">{current.emoji}</div>
                <h3>{current.title}</h3>
                <p>{current.text}</p>
              </div>
              <div className="sim-actions" role="group" aria-label="Choose an option">
                {current.options.map((opt, i) => (
                  <button
                    key={i}
                    className="sim-btn"
                    onClick={() => handleChoice(i)}
                    aria-label={`Option ${i + 1}: ${opt}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="sim-content" aria-live="polite">
              <div className="sim-emoji" role="img" aria-hidden="true">{result.emoji}</div>
              <h3>Simulation Complete!</h3>
              <p>
                Grade: <strong>{result.grade}</strong> — {result.message}
              </p>
              <p style={{ marginTop: 8, color: 'var(--text-muted)' }}>
                Score: {journal.filter((j) => j.correct).length}/{journal.length}
              </p>
              <button className="btn btn-primary" onClick={restart} style={{ marginTop: 24 }} aria-label="Restart simulation">
                Try Again →
              </button>
            </div>
          )}
        </div>

        {/* Journal */}
        {journal.length > 0 && (
          <div className="sim-journal card" role="log" aria-label="Your journey so far">
            <h3>📝 Your Journey</h3>
            {journal.map((j, i) => (
              <div key={i} className="journal-entry">
                <div className="je-step">{j.correct ? '✅' : '⚠️'} {j.step}</div>
                <div className="je-choice">Your choice: {j.choice}</div>
                <div className="je-feedback">{j.feedback}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
