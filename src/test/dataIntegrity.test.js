import { describe, it, expect } from 'vitest';
import { LEARN_DATA, TIMELINE, KEY_TERMS } from '../data/learnData';
import { COUNTRY_DATA, COMPARE_FIELDS } from '../data/countryData';
import { SIM_STEPS, CHECKLIST_DATA } from '../data/simulationData';

describe('Data Integrity — Learn Data', () => {
  it('has all required topic keys', () => {
    const required = ['overview', 'registration', 'campaigns', 'voting', 'counting', 'results'];
    required.forEach((key) => {
      expect(LEARN_DATA).toHaveProperty(key);
    });
  });

  it('each topic has title, icon, text, and steps', () => {
    Object.values(LEARN_DATA).forEach((topic) => {
      expect(topic.title).toBeTruthy();
      expect(topic.icon).toBeTruthy();
      expect(topic.text).toBeTruthy();
      expect(topic.steps.length).toBeGreaterThanOrEqual(3);
    });
  });

  it('each step has title (t) and description (d)', () => {
    Object.values(LEARN_DATA).forEach((topic) => {
      topic.steps.forEach((step) => {
        expect(step.t).toBeTruthy();
        expect(step.d).toBeTruthy();
      });
    });
  });
});

describe('Data Integrity — Timeline', () => {
  it('has at least 5 timeline items', () => {
    expect(TIMELINE.length).toBeGreaterThanOrEqual(5);
  });

  it('each item has phase, title, desc, and dur', () => {
    TIMELINE.forEach((item) => {
      expect(item.phase).toBeTruthy();
      expect(item.title).toBeTruthy();
      expect(item.desc).toBeTruthy();
      expect(item.dur).toBeTruthy();
    });
  });
});

describe('Data Integrity — Key Terms', () => {
  it('has at least 5 terms', () => {
    expect(KEY_TERMS.length).toBeGreaterThanOrEqual(5);
  });

  it('each term has word and def', () => {
    KEY_TERMS.forEach((term) => {
      expect(term.word).toBeTruthy();
      expect(term.def).toBeTruthy();
    });
  });
});

describe('Data Integrity — Country Data', () => {
  it('has at least 8 countries', () => {
    expect(Object.keys(COUNTRY_DATA).length).toBeGreaterThanOrEqual(8);
  });

  it('each country has all compare fields', () => {
    Object.values(COUNTRY_DATA).forEach((country) => {
      COMPARE_FIELDS.forEach((field) => {
        expect(country).toHaveProperty(field.key);
        expect(country[field.key]).toBeTruthy();
      });
    });
  });

  it('each country has a flag emoji', () => {
    Object.values(COUNTRY_DATA).forEach((country) => {
      expect(country.flag).toBeTruthy();
    });
  });
});

describe('Data Integrity — Simulation Steps', () => {
  it('has exactly 6 steps', () => {
    expect(SIM_STEPS).toHaveLength(6);
  });

  it('each step has required fields', () => {
    SIM_STEPS.forEach((step) => {
      expect(step.emoji).toBeTruthy();
      expect(step.title).toBeTruthy();
      expect(step.text).toBeTruthy();
      expect(step.options.length).toBeGreaterThanOrEqual(2);
      expect(step.feedback.length).toBe(step.options.length);
      expect(step.correct.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('correct indices are within range', () => {
    SIM_STEPS.forEach((step) => {
      step.correct.forEach((idx) => {
        expect(idx).toBeGreaterThanOrEqual(0);
        expect(idx).toBeLessThan(step.options.length);
      });
    });
  });
});

describe('Data Integrity — Checklist', () => {
  it('has at least 3 sections', () => {
    expect(CHECKLIST_DATA.length).toBeGreaterThanOrEqual(3);
  });

  it('each section has title and items', () => {
    CHECKLIST_DATA.forEach((section) => {
      expect(section.section).toBeTruthy();
      expect(section.items.length).toBeGreaterThanOrEqual(2);
    });
  });

  it('each item has title (t) and description (d)', () => {
    CHECKLIST_DATA.forEach((section) => {
      section.items.forEach((item) => {
        expect(item.t).toBeTruthy();
        expect(item.d).toBeTruthy();
      });
    });
  });
});
