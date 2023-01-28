import Border from '../../../UI/Border';

const BRANCHES = [
  'Medicine',
  'Allergology',
  'Anesthesiology',
  'Cardiology',
  'Dermatology',
  'Emergency Medicine',
  'Gastroenterology',
  'Internal Medicine',
  'Orthopedics',
  'Pathology',
  'Pediatrics',
  'Psychiatry',
  'Radiology',
  'Surgery',
  'Research',
  'Public Health',
  'Family and General Practiceopology',
  'Obstetrics & Gynecology',
];

export default function MedicalFields() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s5 text-center">
        We Translate for{' '}
        <span className="gradient-text gradient-2">All Medical Fields</span>
      </h2>
      <div className="mx-auto flex max-w-[1100px] flex-row flex-wrap justify-center gap-s2 md:gap-s4">
        {BRANCHES.map((branch) => (
          <div className="w-[47%] md:w-[30%] xl:w-[20%]" key={branch}>
            <Border borderRadius="md" classes="text-center w-full">
              <div className="bg-black py-s1 px-1">
                <p className="body text-white">{branch}</p>
              </div>
            </Border>
          </div>
        ))}
      </div>
    </section>
  );
}
