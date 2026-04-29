/**
 * Smart Assistant Logic — adapts content based on user profile.
 * Provides personalized recommendations, tips, and difficulty-adjusted content.
 */

/**
 * Get recommended topics based on user's knowledge level.
 * Beginners get fundamentals first; advanced users get deeper topics.
 */
export function getRecommendedTopics(level) {
  const recommendations = {
    Beginner: ['overview', 'registration', 'voting'],
    Intermediate: ['campaigns', 'counting', 'results'],
    Advanced: ['counting', 'results', 'campaigns'],
  };
  return recommendations[level] || recommendations.Beginner;
}

/**
 * Get contextual tips based on the user's country and current section.
 */
export function getContextualTip(country, section) {
  const tips = {
    learn: {
      India: '💡 India has the largest electorate in the world — over 900 million voters.',
      'United States': '💡 The U.S. uses an Electoral College, not direct popular vote for president.',
      'United Kingdom': '💡 UK elections use a First-Past-The-Post system with 650 constituencies.',
      Germany: '💡 Germany uses Mixed-Member Proportional — you get two votes!',
      France: '💡 France uses a two-round system: if no one gets 50%, a runoff occurs.',
      Brazil: '💡 Voting is mandatory in Brazil for citizens aged 18-70.',
      Japan: '💡 Japan uses parallel voting — combining single-member districts and proportional lists.',
      Australia: '💡 Australia has compulsory voting with preferential (ranked-choice) ballots.',
    },
    simulate: {
      _default: '🎮 Walk through each step carefully — each choice teaches you something!',
    },
    compare: {
      _default: '⚖️ Compare two countries to see how different democracies approach elections.',
    },
    checklist: {
      _default: '✅ Check off each item as you complete it to track your readiness.',
    },
  };

  const sectionTips = tips[section] || {};
  return sectionTips[country] || sectionTips._default || '💡 Explore each section to build your election knowledge.';
}

/**
 * Adapt content detail level based on knowledge level.
 */
export function getDetailLevel(level) {
  switch (level) {
    case 'Advanced':
      return { showTimeline: true, showTerms: false, stepDetail: 'full' };
    case 'Intermediate':
      return { showTimeline: true, showTerms: true, stepDetail: 'full' };
    case 'Beginner':
    default:
      return { showTimeline: true, showTerms: true, stepDetail: 'simplified' };
  }
}

/**
 * Calculate simulation score and provide performance feedback.
 */
export function getSimulationFeedback(journal) {
  const score = journal.filter((j) => j.correct).length;
  const total = journal.length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  if (pct === 100) return { grade: 'A+', message: 'Perfect! You aced every step.', emoji: '🌟' };
  if (pct >= 80) return { grade: 'A', message: 'Excellent — you know your stuff!', emoji: '🎉' };
  if (pct >= 60) return { grade: 'B', message: 'Good effort — review the steps you missed.', emoji: '👍' };
  return { grade: 'C', message: 'Keep learning — try the simulation again!', emoji: '📚' };
}

/**
 * Check whether a simulation choice is correct.
 */
export function isCorrectChoice(step, choiceIndex) {
  return step.correct.includes(choiceIndex);
}
