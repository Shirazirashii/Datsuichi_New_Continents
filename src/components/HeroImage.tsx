import { useState, useEffect } from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
}

export default function HeroImage({ src, alt }: HeroImageProps) {
  // Sync check is safe here because it's a client-side Vite React app
  const sessionKey = `hero_loaded_${src}`;
  const hasLoadedInitially = typeof window !== 'undefined' ? sessionStorage.getItem(sessionKey) : null;
  
  const [isFirstLoad] = useState(!hasLoadedInitially);
  const [isLoaded, setIsLoaded] = useState(!isFirstLoad);

  useEffect(() => {
    if (isFirstLoad && typeof window !== 'undefined') {
      sessionStorage.setItem(sessionKey, 'true');
    }
  }, [isFirstLoad, sessionKey]);

  return (
    <div className="w-full max-w-4xl mx-auto aspect-video md:aspect-[20/9] bg-transparent overflow-hidden relative border border-transparent">
      <img
        src={`/.netlify/images?url=${src}`}
        alt={alt}
        onLoad={() => {
          if (isFirstLoad) {
            setIsLoaded(true);
          }
        }}
        className={`absolute inset-0 w-full h-full object-cover z-10 transition-all ease-out ${
          isFirstLoad ? 'duration-[600ms]' : 'duration-0'
        } ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        fetchPriority="high"
      />
    </div>
  );
}
