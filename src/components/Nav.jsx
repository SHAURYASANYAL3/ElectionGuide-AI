import GoogleTranslate from './GoogleTranslate';

/**
 * Navigation Bar — Notion-style frosted glass nav.
 * Includes Google Translate widget for multi-language support.
 */
export default function Nav({ page, navigate }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'learn', label: 'Learn' },
    { id: 'compare', label: 'Compare' },
    { id: 'simulate', label: 'Simulate' },
    { id: 'checklist', label: 'Checklist' },
  ];

  return (
    <nav className="top-nav" role="navigation" aria-label="Main navigation">
      <div className="nav-brand">
        <span className="nav-icon" role="img" aria-label="Election Guide logo">🗳️</span>
        ElectionGuide <span className="nav-ai">AI</span>
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <button
            key={link.id}
            className={`nav-link${page === link.id ? ' active' : ''}`}
            onClick={() => navigate(link.id)}
            aria-label={`Navigate to ${link.label}`}
            aria-current={page === link.id ? 'page' : undefined}
          >
            {link.label}
          </button>
        ))}
      </div>

      <div className="translate-wrapper">
        <GoogleTranslate />
      </div>
    </nav>
  );
}
