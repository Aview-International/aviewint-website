import Shadow from '../../UI/Shadow';
import Border from '../../UI/Border';

export default function Videos({ title, description, videos }) {
  return (
    <div className="section m-horizontal md:text-center">
      <h2 className="h2 mb-s2">{title}</h2>
      <p
        className="body mb-s4"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="grid gap-s3 sm:grid-cols-2 xl:grid-cols-3">
        {videos.map((video, i) => (
          <Shadow key={`video-${i}`} classes="w-full">
            <Border classes="w-full" borderRadius="2xl">
              <iframe
                className="aspect-video w-full rounded-2xl"
                src={video}
              ></iframe>
            </Border>
          </Shadow>
        ))}
      </div>
    </div>
  );
}
