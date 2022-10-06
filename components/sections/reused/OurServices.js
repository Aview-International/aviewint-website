import Row3 from '../../layout/Row3';
import GraphicCard from '../../../components/UI/GraphicCard';
import { OUR_SERVICES } from '../../../constants/constants';

const OurServices = () => {
  return (
    <section
      className="section m-horizontal md:text-center"
      data-aos="fade-right"
    >
      <h2 className="title mb-s2">
        Our <span className="gradient-2 gradient-text">Services</span>
      </h2>
      <p className="mb-s3 text-xl text-white md:mb-s10">
        We tailor our approach to fit your audience growth goals.
      </p>
      <Row3>
        {OUR_SERVICES.map((service) => (
          <GraphicCard
            key={service.id}
            title={service.title}
            description={service.description}
            graphic={service.graphic}
            direction="vertical"
          />
        ))}
      </Row3>
    </section>
  );
};

export default OurServices;
