const BlogText = ({ sections }) => {
  return (
    <div className="mb-s10 md:mb-s20">
      {sections.map((section, i) => (
        <div
          className="pt-s5 md:pt-s10"
          key={`section-${i}`}
          id={section.link.slice(1)}
        >
          <h4 className="mb-s1 text-xl font-bold text-white md:text-3xl">
            {section.title}
          </h4>
          <div className="flex flex-col gap-s3">
            {section.content?.map((content, i) => {
              if (content.type === 'paragraph') {
                return (
                  <p
                    className="text-lg text-white md:text-xl"
                    key={`content-${i}`}
                  >
                    {content.text}
                  </p>
                );
              } else if (content.type === 'unordered list') {
                return (
                  <div>
                    {content.items.map((item, i) => (
                      <div
                        className="grid grid-cols-[auto_auto] justify-start gap-3"
                        key={`item-${i}`}
                      >
                        <div className="mt-2 h-2 w-2 rounded-full bg-white"></div>
                        <p className="text-lg text-white md:text-xl">{item}</p>
                      </div>
                    ))}
                  </div>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogText;
