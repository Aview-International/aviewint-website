import Link from 'next/link';

const TableOfContents = ({ sections }) => {
  return (
    <div className="mb-s5">
      <h4 className="mb-s2 text-xl font-bold text-white md:text-3xl">
        Skip to a section
      </h4>
      <ul>
        {sections.map((section, i) => (
          <li
            className="mb-s2 grid grid-cols-[auto_auto] justify-start gap-3"
            key={`section-${i}`}
          >
            <div className="mt-1.5 h-2 w-2 rounded-full bg-blue"></div>
            <Link href={section.link}>
              <a className="text-lg text-blue underline md:text-xl">
                {section.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
