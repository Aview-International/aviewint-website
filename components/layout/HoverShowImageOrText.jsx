import Image from 'next/image';
import Border from '../UI/Border';

export default function HoverShowImageOrText({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title}>
          <Border classes="rounded-2xl group h-full">
            <div className="h-full rounded-2xl bg-black p-6">
              <div className="mx-auto mb-4 w-[75%] md:group-hover:hidden">
                <Image src={item.image} alt={item.title} />
              </div>
              <p className="mb-2 text-center text-5xl font-bold text-white">
                {item.title}
              </p>
              <p className="body hidden text-left group-hover:block mt-s4  cursor-pointer">
                {item.description}
              </p>
            </div>
          </Border>
        </div>
      ))}
    </div>
  );
}
