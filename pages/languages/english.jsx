import LanguagePage from '../../components/layout/LanguagePage';
import english from '../../public/img/graphics/languages/english.png';
import highQuality from '../../public/img/graphics/languages/high-quality-english.png';

export default function English() {
  return (
    <LanguagePage
      language="English"
      title="High-Quality English <span class='gradient-text gradient-2'>Translations</span>"
      graphic1={english}
      graphic2={highQuality}
    />
  );
}
