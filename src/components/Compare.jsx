import { useState, useMemo } from 'react';
import { COUNTRY_DATA, COMPARE_FIELDS } from '../data/countryData';
import { getContextualTip } from '../logic/smartAssistant';

const COUNTRIES = Object.keys(COUNTRY_DATA);

/**
 * Compare — Side-by-side country election system comparison.
 * Pre-selects the user's onboarded country for smart context.
 */
export default function Compare({ profile }) {
  const [countryA, setCountryA] = useState(
    profile.country && COUNTRY_DATA[profile.country] ? profile.country : 'India'
  );
  const [countryB, setCountryB] = useState(
    countryA === 'United States' ? 'India' : 'United States'
  );

  const tip = useMemo(
    () => getContextualTip(profile.country, 'compare'),
    [profile.country]
  );

  const dataA = COUNTRY_DATA[countryA];
  const dataB = COUNTRY_DATA[countryB];

  return (
    <section className="section-page" aria-labelledby="compare-title">
      <div className="section-container">
        <div className="section-header">
          <h1 id="compare-title" className="section-title section-heading">⚖️ Compare</h1>
          <p className="section-subtitle">Compare election systems worldwide</p>
        </div>

        {tip && (
          <div className="smart-tip" role="status" aria-live="polite">{tip}</div>
        )}

        {/* Country Selectors */}
        <div className="compare-selectors">
          <div className="compare-select-group">
            <label htmlFor="country-a-select">Country A</label>
            <select
              id="country-a-select"
              className="compare-select"
              value={countryA}
              onChange={(e) => setCountryA(e.target.value)}
              aria-label="Select first country to compare"
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{COUNTRY_DATA[c].flag} {c}</option>
              ))}
            </select>
          </div>
          <span className="compare-vs" aria-hidden="true">VS</span>
          <div className="compare-select-group">
            <label htmlFor="country-b-select">Country B</label>
            <select
              id="country-b-select"
              className="compare-select"
              value={countryB}
              onChange={(e) => setCountryB(e.target.value)}
              aria-label="Select second country to compare"
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{COUNTRY_DATA[c].flag} {c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="compare-table-wrapper card">
          <table className="compare-table" aria-label="Election system comparison">
            <thead>
              <tr>
                <th scope="col">Aspect</th>
                <th scope="col">{dataA.flag} {countryA}</th>
                <th scope="col">{dataB.flag} {countryB}</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_FIELDS.map((field) => (
                <tr key={field.key}>
                  <td>{field.label}</td>
                  <td>{dataA[field.key]}</td>
                  <td>{dataB[field.key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
