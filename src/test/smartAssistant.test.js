import { describe, it, expect } from 'vitest';
import {
  getRecommendedTopics,
  getContextualTip,
  getDetailLevel,
  getSimulationFeedback,
  isCorrectChoice,
} from '../logic/smartAssistant';

describe('Smart Assistant — getRecommendedTopics', () => {
  it('returns beginner-friendly topics for Beginner level', () => {
    const topics = getRecommendedTopics('Beginner');
    expect(topics).toContain('overview');
    expect(topics).toContain('registration');
    expect(topics).toContain('voting');
    expect(topics).toHaveLength(3);
  });

  it('returns deeper topics for Intermediate level', () => {
    const topics = getRecommendedTopics('Intermediate');
    expect(topics).toContain('campaigns');
    expect(topics).toContain('counting');
    expect(topics).toContain('results');
  });

  it('returns advanced topics for Advanced level', () => {
    const topics = getRecommendedTopics('Advanced');
    expect(topics).toContain('counting');
    expect(topics).toContain('results');
  });

  it('defaults to Beginner for unknown levels', () => {
    const topics = getRecommendedTopics('Expert');
    expect(topics).toEqual(getRecommendedTopics('Beginner'));
  });

  it('defaults to Beginner for undefined', () => {
    const topics = getRecommendedTopics(undefined);
    expect(topics).toEqual(getRecommendedTopics('Beginner'));
  });
});

describe('Smart Assistant — getContextualTip', () => {
  it('returns India-specific tip for learn section', () => {
    const tip = getContextualTip('India', 'learn');
    expect(tip).toContain('India');
    expect(tip).toContain('900 million');
  });

  it('returns USA-specific tip for learn section', () => {
    const tip = getContextualTip('United States', 'learn');
    expect(tip).toContain('Electoral College');
  });

  it('returns default tip for unknown country', () => {
    const tip = getContextualTip('Narnia', 'learn');
    expect(tip).toBeTruthy();
    expect(tip).toContain('💡');
  });

  it('returns section-default tip for simulate', () => {
    const tip = getContextualTip('India', 'simulate');
    expect(tip).toContain('🎮');
  });

  it('returns generic tip for unknown section', () => {
    const tip = getContextualTip('India', 'unknown');
    expect(tip).toBeTruthy();
  });
});

describe('Smart Assistant — getDetailLevel', () => {
  it('shows terms for Beginner', () => {
    const detail = getDetailLevel('Beginner');
    expect(detail.showTerms).toBe(true);
    expect(detail.showTimeline).toBe(true);
  });

  it('hides terms for Advanced', () => {
    const detail = getDetailLevel('Advanced');
    expect(detail.showTerms).toBe(false);
    expect(detail.showTimeline).toBe(true);
  });

  it('defaults to Beginner for unknown', () => {
    const detail = getDetailLevel('');
    expect(detail.showTerms).toBe(true);
  });
});

describe('Smart Assistant — getSimulationFeedback', () => {
  it('returns A+ for perfect score', () => {
    const journal = [
      { correct: true }, { correct: true }, { correct: true },
      { correct: true }, { correct: true }, { correct: true },
    ];
    const result = getSimulationFeedback(journal);
    expect(result.grade).toBe('A+');
    expect(result.emoji).toBe('🌟');
  });

  it('returns A for 80%+ score', () => {
    const journal = [
      { correct: true }, { correct: true }, { correct: true },
      { correct: true }, { correct: false },
    ];
    const result = getSimulationFeedback(journal);
    expect(result.grade).toBe('A');
  });

  it('returns B for 60%+ score', () => {
    const journal = [
      { correct: true }, { correct: true }, { correct: true },
      { correct: false }, { correct: false },
    ];
    const result = getSimulationFeedback(journal);
    expect(result.grade).toBe('B');
  });

  it('returns C for low score', () => {
    const journal = [
      { correct: true }, { correct: false }, { correct: false },
      { correct: false }, { correct: false },
    ];
    const result = getSimulationFeedback(journal);
    expect(result.grade).toBe('C');
  });

  it('handles empty journal', () => {
    const result = getSimulationFeedback([]);
    expect(result.grade).toBe('C');
  });
});

describe('Smart Assistant — isCorrectChoice', () => {
  const mockStep = { correct: [0, 1] };

  it('returns true for correct choices', () => {
    expect(isCorrectChoice(mockStep, 0)).toBe(true);
    expect(isCorrectChoice(mockStep, 1)).toBe(true);
  });

  it('returns false for incorrect choices', () => {
    expect(isCorrectChoice(mockStep, 2)).toBe(false);
  });
});
