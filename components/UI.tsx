import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronDown, ChevronRight } from 'lucide-react';

// --- Parallax Image Component (Scroll Driven) ---
export const ParallaxImage: React.FC<{ 
  src: string; 
  alt: string; 
  className?: string; 
  imgClassName?: string;
  speed?: number; 
  children?: React.ReactNode;
}> = ({ src, alt, className = "", imgClassName = "", speed = 0.2, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Access the main scroll container defined in App.tsx
    const scrollContainer = document.getElementById('main-scroll-container');
    if (!scrollContainer) return;

    let requestRef: number;

    const updateParallax = () => {
      if (!containerRef.current || !parallaxWrapperRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only animate if element is roughly in view to save resources
      if (rect.bottom > -100 && rect.top < viewportHeight + 100) {
        // Calculate the distance of the element's center from the viewport's center
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distanceFromCenter = elementCenter - viewportCenter;

        const translateY = distanceFromCenter * speed * -1;
        
        parallaxWrapperRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(requestRef);
      requestRef = requestAnimationFrame(updateParallax);
    };

    scrollContainer.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    
    // Initial calculation to set position before first scroll
    updateParallax();

    return () => {
      scrollContainer.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(requestRef);
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 w-full h-full">
         <div 
           ref={parallaxWrapperRef}
           className="relative w-full h-[140%] -top-[20%] will-change-transform"
         >
            <img
              src={src}
              alt={alt}
              className={`w-full h-full object-cover ${imgClassName}`}
            />
         </div>
      </div>
      <div className="relative z-10 w-full h-full pointer-events-none">
          {/* Overlay content container */}
      </div>
      {children}
    </div>
  );
};

// --- Scroll Reveal Component ---
export const ScrollReveal: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  animation?: 'up' | 'left' | 'right' | 'pulse' | 'scale-up';
}> = ({ children, className = "", delay = 0, animation = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0) scale(1)';
    switch(animation) {
      case 'up': return 'translateY(40px)';
      case 'left': return 'translateX(-40px)';
      case 'right': return 'translateX(40px)';
      case 'scale-up': return 'scale(0.85)';
      case 'pulse': return 'scale(0.9)';
      default: return 'translateY(40px)';
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  };

  return (
    <div ref={ref} className={`${className} ${isVisible && animation === 'pulse' ? 'animate-pulse-slow' : ''}`} style={style}>
      {children}
    </div>
  );
};

// --- Vintage UI Components ---

export const VintageFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative p-2 border-2 border-vintage-gold/60 rounded-sm ${className}`}>
    {/* Corner Decorations */}
    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-vintage-gold rotate-0"></div>
    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-vintage-gold rotate-0"></div>
    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-vintage-gold rotate-0"></div>
    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-vintage-gold rotate-0"></div>
    
    <div className="w-full h-full border border-vintage-gold/30 p-1">
      {children}
    </div>
  </div>
);

export const TornPaperDivider: React.FC<{ isInverted?: boolean, className?: string, fillClass?: string }> = ({ 
  isInverted = false, 
  className = '', 
  fillClass = 'fill-vintage-dark' 
}) => (
  <div className={`absolute left-0 w-full z-20 pointer-events-none overflow-hidden leading-none ${isInverted ? 'rotate-180 -bottom-1' : '-top-1'} ${className}`}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]">
        <path d="M0,0V46.29c47,0,47,32,98,32,49,0,49-16,98-16,51,0,51,33,101,33,52,0,52-33,104-33,50,0,50,22,99,22,50,0,50-13,100-13,50,0,50,26,100,26,49,0,49-13,99-13,50,0,50,26,101,26,49,0,49-20,99-20,50,0,50,13,99,13,51,0,51-24,102-24,49,0,49,15,99,15v-92H0Z" className="fill-black/30"></path>
        <path d="M0,0V15.81c13,0,13,28,40,28,26,0,26-14,53-14,25,0,25,28,51,28,27,0,27-22,54-22,25,0,25,19,51,19,27,0,27-22,54-22,25,0,25,19,51,19,27,0,27-22,54-22,25,0,25,19,51,19,27,0,27-22,54-22,25,0,25,19,51,19,27,0,27-22,54-22,26,0,26,22,53,22,27,0,27-28,54-28,25,0,25,22,52,22,27,0,27-28,53-28,27,0,27,22,54,22,25,0,25-14,52-14,27,0,27,19,54,19,25,0,25-22,52-22,27,0,27,28,54,28,26,0,26-28,53-28V0H0Z" className={fillClass}></path>
    </svg>
  </div>
);

export const WaxSeal: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`rounded-full bg-[#8a0303] flex items-center justify-center shadow-lg border-2 border-[#6d0202] ${className}`}>
     <div className="w-[70%] h-[70%] rounded-full border border-[#b32424] flex items-center justify-center">
        <span className="font-display font-bold text-[#5c0101] text-xs">WR</span>
     </div>
  </div>
);

export const WaxStampOverlay: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    // Wait for animation to finish then call complete
    const timer = setTimeout(() => {
      onComplete();
    }, 1500); // 1.5s total duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
       {/* Dark overlay that fades in */}
       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in-up duration-300"></div>
       
       {/* The Stamp */}
       <div className="relative animate-stamp-impact z-10 drop-shadow-2xl">
          <div className="w-64 h-64 rounded-full bg-[#8a0303] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-[#6d0202] ring-8 ring-[#4a0101]/30">
             {/* Inner detail */}
             <div className="w-[80%] h-[80%] rounded-full border-2 border-[#b32424] flex items-center justify-center bg-[#8a0303] shadow-inner">
                 <div className="text-center transform -rotate-12">
                   <span className="font-display font-bold text-[#5c0101] text-7xl block drop-shadow-md">WR</span>
                   <span className="font-serif text-[#5c0101] text-sm tracking-[0.4em] uppercase block mt-2">Certified</span>
                 </div>
             </div>
             {/* Specular highlight */}
             <div className="absolute top-10 left-10 w-16 h-8 bg-white/10 rounded-full rotate-[-45deg] blur-md"></div>
          </div>
       </div>
    </div>
  );
};

export const ScrollDownIndicator: React.FC = () => (
  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60 z-20 pointer-events-none">
     <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-vintage-gold">Scroll</span>
     <ChevronDown className="text-vintage-gold" />
  </div>
);

// --- Background Effects ---

export const FlowingLines: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden mix-blend-screen">
    <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
       <path d="M30,-10 C 50,30 20,70 40,110" vectorEffect="non-scaling-stroke" stroke="#c5a059" strokeWidth="1" fill="none" className="animate-sway" style={{ animationDuration: '15s' }} />
       <path d="M70,-10 C 50,30 80,70 60,110" vectorEffect="non-scaling-stroke" stroke="#c5a059" strokeWidth="1" fill="none" className="animate-sway" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
       <path d="M10,-10 Q 40,50 10,110" vectorEffect="non-scaling-stroke" stroke="#c5a059" strokeWidth="0.5" fill="none" className="animate-sway" style={{ animationDuration: '25s' }} />
       <path d="M90,-10 Q 60,50 90,110" vectorEffect="non-scaling-stroke" stroke="#c5a059" strokeWidth="0.5" fill="none" className="animate-sway" style={{ animationDuration: '22s', animationDirection: 'reverse' }} />
       <path d="M20,-10 C 40,40 10,60 30,110" vectorEffect="non-scaling-stroke" stroke="#c5a059" strokeWidth="0.7" fill="none" className="animate-sway" style={{ animationDuration: '18s', opacity: 0.6 }} />
       <path d="M80,-10 C 60,40 90,60 70,110" vectorEffect="non-scaling-stroke" stroke="#c5a059" strokeWidth="0.7" fill="none" className="animate-sway" style={{ animationDuration: '23s', animationDirection: 'reverse', opacity: 0.6 }} />
    </svg>
  </div>
);

export const TwinklingStars: React.FC = () => {
  const starCount = 60;
  const stars = useRef(Array.from({ length: starCount }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 5
  }))).current;

  return (
    <div className="fixed inset-0 pointer-events-none z-[30]">
       {stars.map(star => (
          <div 
             key={star.id}
             className="absolute bg-vintage-gold rounded-full animate-twinkle"
             style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: 0.4,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`
             }}
          />
       ))}
    </div>
  );
};

export const FallingRoses: React.FC = () => {
  const [roses] = useState(() => Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 12 + Math.random() * 8, 
    scale: 0.4 + Math.random() * 0.4,
    rotation: Math.random() * 360
  })));

  return (
    <div className="fixed inset-0 pointer-events-none z-[45] overflow-hidden">
      {roses.map((rose) => (
        <div
          key={rose.id}
          className="absolute top-[-10%]"
          style={{
            left: `${rose.left}%`,
            animation: `fall ${rose.duration}s linear infinite`,
            animationDelay: `-${rose.delay}s`,
            opacity: 0.9,
            transform: `rotate(${rose.rotation}deg)`
          }}
        >
          <svg
            width={40 * rose.scale}
            height={40 * rose.scale}
            viewBox="0 0 24 24"
            fill="#8a0303"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
          >
             <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" transform="scale(0.8) translate(3,3)" />
             <path d="M12 2C12 2 13 4 14 5C16 4 18 3 19 4C20 5 19 8 17 9C18 10 20 12 19 14C18 16 15 17 14 16C14 18 15 20 14 21C13 22 11 22 10 21C9 20 10 18 10 16C9 17 6 16 5 14C4 12 6 10 7 9C5 8 4 5 5 4C6 3 8 4 10 5C11 4 12 2 12 2Z" fillOpacity="0.8" />
          </svg>
        </div>
      ))}
    </div>
  );
};

// --- Buttons & Interactive ---

export const GoldButton: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void; 
  variant?: 'filled' | 'outline';
  className?: string; 
}> = ({ 
  children, 
  onClick, 
  variant = 'filled',
  className = ""
}) => {
  const baseClasses = "px-8 py-3 rounded-full font-serif tracking-wider transition-all duration-300 flex items-center justify-center gap-2 uppercase text-sm transform hover:scale-105 hover:-translate-y-1 active:scale-95";
  const filledClasses = "bg-[#d4af37] text-vintage-dark hover:bg-[#b08d2b] shadow-lg shadow-black/20 hover:shadow-xl";
  const outlineClasses = "border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10";

  return (
    <button onClick={onClick} className={`${baseClasses} ${variant === 'filled' ? filledClasses : outlineClasses} ${className}`}>
      {children}
    </button>
  );
};

const SONGS = [
  { title: "Nocturne in Eb Major", artist: "Frédéric Chopin", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { title: "Symphony No. 5", artist: "Beethoven", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { title: "Moonlight Sonata", artist: "Beethoven", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { title: "The Four Seasons", artist: "Vivaldi", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
];

export const MusicPlayer: React.FC<{ isPlaying: boolean; onPlayStateChange: (playing: boolean) => void }> = ({ isPlaying, onPlayStateChange }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    onPlayStateChange(!isPlaying);
  };

  const selectSong = (index: number) => {
    setCurrentSongIndex(index);
    onPlayStateChange(true);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
        if (isPlaying) {
            audioRef.current.play().catch(e => console.error("Auto-play failed:", e));
        }
    }
  }, [currentSongIndex]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center w-full px-4 md:px-0">
        <audio 
            ref={audioRef} 
            src={SONGS[currentSongIndex].url} 
            onEnded={() => onPlayStateChange(false)} 
        />
        <div className="bg-vintage-dark/90 backdrop-blur-md border border-vintage-gold/60 rounded-full pl-6 pr-2 py-2 flex items-center gap-4 shadow-2xl relative z-20 w-full max-w-[320px] md:max-w-none md:w-auto md:min-w-[500px] justify-between">
            <div className="flex items-end gap-[3px] h-6 w-8 pb-1 flex-shrink-0">
                {[1, 2, 3, 4].map((i) => (
                    <div 
                        key={i} 
                        className={`w-1.5 bg-vintage-gold rounded-t-sm transition-all duration-300 ${isPlaying ? 'animate-music-bar' : 'h-1'}`}
                        style={{ 
                          animationDelay: `${i * 0.15}s`,
                          height: isPlaying ? 'auto' : '4px' 
                        }}
                    />
                ))}
            </div>
            <div className="flex flex-col flex-1 px-4 overflow-hidden text-center cursor-pointer min-w-0" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span className="font-serif text-[10px] text-vintage-gold uppercase tracking-widest opacity-80 block">Now Playing</span>
                <div className="font-sans text-sm text-vintage-cream truncate w-full">
                    {SONGS[currentSongIndex].title}
                </div>
                <div className="font-sans text-[10px] text-gray-400 truncate">
                    {SONGS[currentSongIndex].artist}
                </div>
            </div>
            <div className="flex items-center gap-2 border-l border-vintage-gold/20 pl-2 flex-shrink-0">
                 <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`p-2 rounded-full hover:bg-white/5 transition-all duration-300 ${isDropdownOpen ? 'rotate-180 text-vintage-gold' : 'text-gray-400'}`}
                 >
                    <ChevronDown size={14} />
                 </button>
                 <button 
                    onClick={togglePlay}
                    className="p-2 text-vintage-gold hover:text-vintage-cream hover:scale-110 transition-all flex items-center justify-center"
                 >
                    {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
                 </button>
            </div>
        </div>
        {isDropdownOpen && (
            <div className="absolute top-[calc(100%+8px)] w-[90%] max-w-[320px] md:max-w-[500px] bg-vintage-dark/95 backdrop-blur-xl border border-vintage-gold/40 rounded-xl overflow-hidden shadow-2xl z-10 transition-all duration-300 origin-top">
                <div className="max-h-64 overflow-y-auto py-2">
                    {SONGS.map((song, idx) => (
                        <button
                            key={idx}
                            onClick={() => selectSong(idx)}
                            className={`w-full px-4 py-3 flex items-center justify-between hover:bg-vintage-gold/10 transition-colors text-left group border-b border-white/5 last:border-0 ${currentSongIndex === idx ? 'bg-vintage-gold/5' : ''} opacity-0 animate-fade-in-up`}
                            style={{ animationDelay: `${idx * 0.05}s`, animationFillMode: 'forwards' }}
                        >
                            <div className="flex flex-col overflow-hidden mr-4">
                                <span className={`font-serif text-sm truncate ${currentSongIndex === idx ? 'text-vintage-gold' : 'text-vintage-cream group-hover:text-vintage-gold'}`}>
                                    {song.title}
                                </span>
                                <span className="text-xs text-gray-500 truncate">{song.artist}</span>
                            </div>
                            
                            {currentSongIndex === idx && isPlaying ? (
                                <div className="flex gap-[2px] items-end h-3">
                                   <div className="w-0.5 h-full bg-vintage-gold animate-music-bar" style={{ animationDuration: '0.6s' }}></div>
                                   <div className="w-0.5 h-full bg-vintage-gold animate-music-bar" style={{ animationDuration: '0.8s' }}></div>
                                   <div className="w-0.5 h-full bg-vintage-gold animate-music-bar" style={{ animationDuration: '0.7s' }}></div>
                                </div>
                            ) : (
                                <div className="w-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Play size={12} className="text-vintage-gold" />
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        )}
    </div>
  );
};

export const StarDivider: React.FC = () => (
  <div className="flex items-center justify-center my-4">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-vintage-gold">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
    </svg>
  </div>
);

// --- Vertical Navigation with Tooltips ---
export const SideNav: React.FC<{ sections: string[]; activeSection: string; onNavigate: (id: string) => void }> = ({ 
  sections, 
  activeSection,
  onNavigate 
}) => {
  return (
    <div className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 p-3 rounded-2xl border border-vintage-gold/30 bg-vintage-dark/30 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-vintage-gold/60">
      {sections.map((id, index) => {
        const label = id.charAt(0).toUpperCase() + id.slice(1);
        const isActive = activeSection === id;
        
        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`group relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg border transition-all duration-300 font-mono text-xs md:text-sm ${
              isActive 
                ? 'bg-vintage-gold text-vintage-dark border-vintage-gold scale-110 shadow-[0_0_15px_rgba(197,160,89,0.4)]' 
                : 'bg-transparent border-vintage-gold/20 text-vintage-gold/40 hover:border-vintage-gold/60 hover:text-vintage-gold hover:bg-vintage-gold/5'
            }`}
            aria-label={`Navigate to ${label}`}
          >
            <span className="relative z-10">{index + 1}</span>
            
            {/* Tooltip */}
            <div className="absolute left-full ml-4 px-3 py-1 bg-vintage-gold/90 text-vintage-dark text-xs font-serif rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg backdrop-blur-sm">
                {label}
                {/* Arrow */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-vintage-gold/90"></div>
            </div>
          </button>
        )
      })}
    </div>
  );
};