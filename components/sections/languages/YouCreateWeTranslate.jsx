import Banner from '../../layout/Banner';
import GlobalButton from '../../UI/GlobalButton';

export default function YouCreateWeTranslation() {
  return (
    <section className="section">
      <Banner>
        <div className="text-center">
          <h2 className="title mb-8">You Create. We Translate.</h2>
          <div className="inline-block">
            <GlobalButton type="tertiary" purpose="route" route="#generate-aview">
              Get a quote today
            </GlobalButton>
          </div>
        </div>
      </Banner>
    </section>
  );
}
