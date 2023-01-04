import Button from '../../UI/Button';

export default function UpToDate({ title, description, buttons }) {
  return (
    <div className="section m-horizontal md:text-center">
      <h2 className="h2 md:title mb-s2">{title}</h2>
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className="body mb-s4"
      />
      <div className="flex flex-wrap gap-s2 md:justify-center">
        {buttons.map((button, i) => (
          <Button
            type={i === 0 ? 'primary' : 'secondary'}
            purpose="externalLink"
            externalLink={button.link}
            key={button.text}
          >
            {button.text}
          </Button>
        ))}
      </div>
    </div>
  );
}
