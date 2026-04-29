import { useEffect } from 'react';

/**
 * Google Translate Widget — mandatory Google Services integration.
 * Loads the Google Translate script and initializes the inline widget.
 */
export default function GoogleTranslate() {
  useEffect(() => {
    // Define the callback Google Translate looks for
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,es,fr,de,pt,ja,ar,zh-CN,bn',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // Dynamically load Google Translate script
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      aria-label="Language selector — powered by Google Translate"
    />
  );
}
