function getRichText(richText) {
  return richText.map((text, i) => {
    if (text.href === null) {
      return <span key={`text-${i}`}>{text.plain_text}</span>;
    } else {
      return (
        <a
          href={text.href}
          target="_blank"
          rel="noreferrer"
          className="underline"
          key={`text-${i}`}
        >
          {text.plain_text}
        </a>
      );
    }
  });
}

export default function BlogBlock({ block }) {
    return (
      <p className="mt-s3 text-lg text-white md:text-xl" key={block.id}>
        {getRichText(block.richText)}
      </p>
    );
  } else if (block.type === 'h2') {
    return (
      <h2
        className="mt-s10 text-3xl font-bold text-white md:text-5xl"
        key={block.id}
      >
        {getRichText(block.richText)}
      </h2>
    );
  } else if (block.type === 'h3') {
    return (
      <h3
        className="mt-s6 text-xl font-semibold text-white md:text-3xl"
        key={block.id}
      >
        {getRichText(block.richText)}
      </h3>
    );
  } else if (block.type === 'ul') {
    return (
      <ul className="mt-s3" key={block.id}>
        {block.items.map((item, i) => (
          <li className={`${i !== 0 ? 'mt-s2' : ''}`} key={`item-${i}`}>
            <div className="grid grid-cols-[auto_auto] justify-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-white" />
              <p className="text-lg text-white md:text-xl">
                {item.map((text, j) => {
                  if (text.href === null) {
                    return <span key={`text-${j}`}>{text.plain_text}</span>;
                  } else {
                    return (
                      <a
                        href={text.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                        key={`text-${j}`}
                      >
                        {text.plain_text}
                      </a>
                    );
                  }
                })}
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  } else if (block.type === 'ol') {
    return (
      <ol className="mt-s3" key={block.id}>
        {block.items.map((item, i) => (
          <li className={`${i !== 0 ? 'mt-s2' : ''}`} key={`item-${i}`}>
            <div className="relative text-lg text-white md:text-xl">
              <p className="absolute left-0">{i + 1}.</p>
              <p className="ml-6 md:ml-8">
                {item.map((text, j) => {
                  if (text.href === null) {
                    return <span key={`text-${j}`}>{text.plain_text}</span>;
                  } else {
                    return (
                      <a
                        href={text.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                        key={`text-${j}`}
                      >
                        {text.plain_text}
                      </a>
                    );
                  }
                })}
              </p>
            </div>
          </li>
        ))}
      </ol>
    );
  }
}
