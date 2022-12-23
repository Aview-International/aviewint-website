import Border from '../../../UI/Border';

const BRANCHES = [
  'Physics',
  'Geology',
  'Zoology',
  'History',
  'Chemistry',
  'Economics',
  'Oceanography',
  'Psychology',
  'Geography',
  'Astronomy',
  'Paleontology',
  'Sociology',
  'Law',
  'Meteorology',
  'Politics',
  'Botany',
  'Anthropology',
];

export default function ScientificBranchesWeWorkWith() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s5 text-center">
        Scientific Branches{' '}
        <span className="gradient-text gradient-2">We Work With</span>
      </h2>
      <div className="mx-auto flex max-w-[1100px] flex-row flex-wrap justify-center gap-s2 md:gap-s4">
        {BRANCHES.map((branch) => (
          <div
            className="w-[40%] sm:w-[30%] md:w-[20%] xl:w-[15%]"
            key={branch}
          >
            <Border borderRadius="md" classes="text-center w-full">
              <div className="bg-black py-s1">
                <p className="body text-white">{branch}</p>
              </div>
            </Border>
          </div>
        ))}
      </div>
    </section>
  );
}
