const BlogText = ({ sections }) => {
  return (
    <div className="mb-s10 md:mb-s20">
      {sections.map((section, i) => (
        <div className="pt-s10" key={`section-${i}`} id={section.link.slice(1)}>
          <h4 className="mb-s1 text-xl font-bold text-white md:mb-s2 md:text-3xl">
            {section.title}
          </h4>
          <div className="flex flex-col gap-s3">
            {section.content?.map((content, i) => {
              if (content.type === 'paragraph') {
                return (
                  <p
                    className="text-lg text-white md:text-xl"
                    key={`content-${i}`}
                    dangerouslySetInnerHTML={{ __html: content.text }}
                  />
                );
              } else if (content.type === 'unordered list') {
                return (
                  <div key={`section-${i}`}>
                    {content.items.map((item, i) => (
                      <div
                        className="grid grid-cols-[auto_auto] justify-start gap-3"
                        key={`item-${i}`}
                      >
                        <div className="mt-2 h-2 w-2 rounded-full bg-white"></div>
                        <p
                          className="text-lg text-white md:text-xl"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </div>
                    ))}
                  </div>
                );
              } else if (content.type === 'ordered list') {
                return (
                  <ul key={`section-${i}`}>
                    {content.items.map((item, i) => {
                      const listItem = (
                        <div
                          className="relative text-lg text-white md:text-xl"
                          key={`item-${i}`}
                        >
                          <p className="absolute left-0">{i + 1}.</p>
                          <p
                            className="ml-6 md:ml-8"
                            dangerouslySetInnerHTML={{
                              __html: item,
                            }}
                            key={`item-${i}`}
                          />
                        </div>
                      );

                      return listItem;
                    })}
                  </ul>
                );
              } else if (content.type === 'youtube') {
                return (
                  <div
                    className="my-4 text-center"
                    key={`section-${i}`}
                    dangerouslySetInnerHTML={{ __html: content.code }}
                  ></div>
                );
              } else if (content.type === 'twitter') {
                return (
                  <div
                    className="mx-auto"
                    key={`section-${i}`}
                    dangerouslySetInnerHTML={{ __html: content.code }}
                  ></div>
                );
              } else if (content.type === 'subtitle') {
                return (
                  <h5 className="-mb-3 mt-2 text-lg font-bold text-white md:mt-4 md:text-2xl">
                    {content.text}
                  </h5>
                );
              } else if (content.type === 'quote') {
                return (
                  <div className="mx-auto my-8 max-w-[400px]">
                    <p
                      className="mb-s3 text-lg text-white md:text-xl"
                      key={`content-${i}`}
                      dangerouslySetInnerHTML={{ __html: content.quote }}
                    />
                    <p
                      className="text-base font-[350] italic text-white md:text-lg"
                      key={`content-${i}`}
                      dangerouslySetInnerHTML={{ __html: content.author }}
                    />
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
