import React, { useEffect, useRef, useState } from 'react';

const sections = [
  {
    id: 1,
    title: "Full Width Section",
    content: "This section spans across both columns in the grid layout",
    backgroundColor: "bg-blue-500"
  },
  {
    id: 2,
    title: "Grid Item 1",
    content: "Left overlay content (from top)",
    backgroundColor: "bg-green-500"
  },
  {
    id: 3,
    title: "Grid Item 2",
    content: "Right overlay content (from bottom)",
    backgroundColor: "bg-yellow-500"
  },
  {
    id: 4,
    title: "Grid Item 3",
    content: "Left overlay content (from top)",
    backgroundColor: "bg-red-500"
  },
  {
    id: 5,
    title: "Grid Item 4",
    content: "Right overlay content (from bottom)",
    backgroundColor: "bg-purple-500"
  }
];

const StickyScroll = () => {
  const triggerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(-1);
  const [isInView, setIsInView] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setTimeout(() => setCurrentSection(0), 800);
        } else {
          setIsInView(false);
          setCurrentSection(-1);
        }
      },
      { threshold: 0.1 }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, []);
`   

`
  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current || !isInView) return;

      const scrollPosition = window.scrollY;
      
      const triggerTop = triggerRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollHeight = triggerRef.current.scrollHeight;

      const progress = (scrollPosition - triggerTop + windowHeight) / scrollHeight;
      
      if (progress > 0.95) {
        setIsExiting(true);
      } else {
        setIsExiting(false);
      }

      const sectionIndex = Math.min(
        sections.length - 1,
        Math.floor(progress * sections.length)
      );

      setCurrentSection(sectionIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView]);



  return (
    <div className=''>
      {/* Content before sticky section */}
      <div className="h-screen flex items-center justify-center  text-white">
        <h1 className="text-4xl font-bold">Scroll Down</h1>
      </div>

      {/* Main sticky section */}
      <div ref={triggerRef} style={{ height: '300vh', backgroundColor: '#ff3939' }}>
        <div className={`
          w-full h-screen
          transition-all duration-1000
          bg-green
          ${isInView ? 'fixed top-0 left-0' : 'relative'}
          ${isExiting ? 'opacity-0 translate-y-[-10%]' : 'opacity-100 translate-y-0'}
        `}>
          {/* Base layer - Full width */}
          <div className={`
            absolute inset-0
            bg-facebook
          
            transition-all duration-1000
            transform
            ${currentSection >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}>
            <div className="h-full flex items-center justify-center text-white p-8">
              <div>
                <h2 className="text-4xl font-bold">{sections[0].title}</h2>
                <p className="text-xl mt-4">{sections[0].content}</p>
              </div>
            </div>
          </div>

          {/* Grid Item 1 - Left from top */}
          <div className={`
            absolute top-0 left-0 w-1/2 h-full
            ${sections[1].backgroundColor}
            transition-all duration-1000 delay-200
            transform
            ${currentSection == 1 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          `}>
            <div className="h-full flex items-center justify-center text-white p-8">
              <div>
                <h2 className="text-3xl font-bold">{sections[1].title}</h2>
                <p className="text-lg mt-4">{sections[1].content}</p>
              </div>
            </div>
          </div>

          {/* Grid Item 2 - Right from bottom */}
          <div className={`
            absolute top-0 right-0 w-1/2 h-full
            ${sections[2].backgroundColor}
            transition-all duration-1000 delay-500
            transform
            ${currentSection == 2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
          `}>
            <div className="h-full flex items-center justify-center text-white p-8">
              <div>
                <h2 className="text-3xl font-bold">{sections[2].title}</h2>
                <p className="text-lg mt-4">{sections[2].content}</p>
              </div>
            </div>
          </div>

          {/* Grid Item 3 - Left from top */}
          <div className={`
            absolute top-0 left-0 w-1/2 h-full
            ${sections[3].backgroundColor}
            transition-all duration-1000 delay-700
            transform
            ${currentSection >= 3 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          `}>
            <div className="h-full flex items-center justify-center text-white p-8">
              <div>
                <h2 className="text-3xl font-bold">{sections[3].title}</h2>
                <p className="text-lg mt-4">{sections[3].content}</p>
              </div>
            </div>
          </div>

          {/* Grid Item 4 - Right from bottom */}
          <div className={`
            absolute top-0 right-0 w-1/2 h-full
            ${sections[4].backgroundColor}
            transition-all duration-1000 delay-1000
            transform
            ${currentSection >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
          `}>
            <div className="h-full flex items-center justify-center text-white p-8">
              <div>
                <h2 className="text-3xl font-bold">{sections[4].title}</h2>
                <p className="text-lg mt-4">{sections[4].content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content after sticky section */}
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">End of Animation</h1>
      </div>
    </div>
  );
};

export default StickyScroll;