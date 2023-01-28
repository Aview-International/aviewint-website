import LanguagePage from '../../components/layout/LanguagePage';
import hindi from '../../public/img/graphics/languages/hindi.png';
import accurateAndEngaging from '../../public/img/graphics/languages/accurate-and-engaging-hindi.png';

export default function Hindi() {
  return (
    <LanguagePage
      language="Hindi"
      title="Accurte and Engaging Hindi <span class='gradient-text gradient-2'>Translations</span>"
      graphic1={hindi}
      graphic2={accurateAndEngaging}
    />
  );
}
