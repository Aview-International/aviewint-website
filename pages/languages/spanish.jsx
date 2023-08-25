import LanguagePage from '../../components/layout/LanguagePage';
import spanish from '../../public/img/graphics/languages/spanish.png';
import fastAndEasy from '../../public/img/graphics/languages/fast-and-easy-spanish.png';

export default function Spanish() {
  return (
    <LanguagePage
      language="Spanish"
      title="Fast and Easy Spanish <span class='gradient-text gradient-2'>Translations</span>"
      graphic1={spanish}
      graphic2={fastAndEasy}
    />
  );
}
