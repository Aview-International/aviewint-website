import LanguagePage from '../../components/layout/LanguagePage';
import french from '../../public/img/graphics/languages/french.png';
import fastAndAccurate from '../../public/img/graphics/languages/french.png';

export default function French() {
  return (
    <LanguagePage
      language="French"
      title="Fast and Accurate French <span class='gradient-text gradient-2'>Translations</span>"
      graphic1={french}
      graphic2={fastAndAccurate}
    />
  );
}
