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
                    dangerouslySetInnerHTML={{ __html: content.text }}
                  />
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
                  <ul>
                    {content.items.map((item, i) => {
                      const listItem = (
                        <div className="relative text-lg text-white md:text-xl">
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
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogText;
