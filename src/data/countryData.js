/** Country election system data for comparison */
export const COUNTRY_DATA = {
  India: { flag: '🇮🇳', system: 'Parliamentary', head: 'Prime Minister', body: 'Election Commission of India', method: 'First-Past-The-Post', age: '18+', compulsory: 'No', freq: 'Every 5 years', parties: 'Multi-party' },
  'United States': { flag: '🇺🇸', system: 'Presidential', head: 'President', body: 'Federal Election Commission', method: 'Electoral College', age: '18+', compulsory: 'No', freq: 'Every 4 years', parties: 'Two-party dominant' },
  'United Kingdom': { flag: '🇬🇧', system: 'Parliamentary', head: 'Prime Minister', body: 'Electoral Commission', method: 'First-Past-The-Post', age: '18+', compulsory: 'No', freq: 'Every 5 years', parties: 'Multi-party' },
  Germany: { flag: '🇩🇪', system: 'Parliamentary', head: 'Chancellor', body: 'Federal Returning Officer', method: 'Mixed-Member Proportional', age: '18+', compulsory: 'No', freq: 'Every 4 years', parties: 'Multi-party' },
  France: { flag: '🇫🇷', system: 'Semi-Presidential', head: 'President', body: 'Constitutional Council', method: 'Two-Round System', age: '18+', compulsory: 'No', freq: 'Every 5 years', parties: 'Multi-party' },
  Brazil: { flag: '🇧🇷', system: 'Presidential', head: 'President', body: 'Superior Electoral Court', method: 'Two-Round + Proportional', age: '16+ (mandatory 18-70)', compulsory: 'Yes', freq: 'Every 4 years', parties: 'Multi-party' },
  Japan: { flag: '🇯🇵', system: 'Parliamentary', head: 'Prime Minister', body: 'Election Administration Commission', method: 'Parallel Voting', age: '18+', compulsory: 'No', freq: 'Every 4 years', parties: 'Multi-party' },
  Australia: { flag: '🇦🇺', system: 'Parliamentary', head: 'Prime Minister', body: 'Australian Electoral Commission', method: 'Preferential (Ranked)', age: '18+', compulsory: 'Yes', freq: 'Every 3 years', parties: 'Multi-party' },
};

export const COMPARE_FIELDS = [
  { key: 'system', label: 'System' },
  { key: 'head', label: 'Head of Govt' },
  { key: 'body', label: 'Election Body' },
  { key: 'method', label: 'Voting Method' },
  { key: 'age', label: 'Voting Age' },
  { key: 'compulsory', label: 'Compulsory' },
  { key: 'freq', label: 'Frequency' },
  { key: 'parties', label: 'Party System' },
];
