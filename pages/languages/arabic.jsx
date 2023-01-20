import LanguagePage from '../../components/layout/LanguagePage';
import arabic from '../../public/img/graphics/languages/arabic.png';
import fastAndReliable from '../../public/img/graphics/languages/fast-and-reliable-arabic.png';

export default function Arabic() {
  return (
    <LanguagePage
      language="Arabic"
      title="Fast and Reliable Arabic <span class='gradient-text gradient-2'>Translations</span>"
      graphic1={arabic}
      graphic2={fastAndReliable}
    />
  );
}
