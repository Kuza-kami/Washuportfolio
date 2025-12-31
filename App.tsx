import React, { useEffect, useState, useRef } from 'react';
import { SideNav, MusicPlayer, FallingRoses, FlowingLines, TwinklingStars } from './components/UI';
import { 
  HeroSection, 
  IntroSection, 
  TimelineSection, 
  QualificationsSection, 
  GallerySection, 
  TestimonialsSection,
  ServicesSection, 
  AboutSection, 
  ContactSection 
} from './components/Sections';

const SECTION_IDS = [
  'hero', 
  'intro', 
  'timeline', 
  'qualifications', 
  'gallery', 
  'testimonials',
  'services', 
  'about', 
  'contact'
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isPlaying, setIsPlaying] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Handle Scroll Spy
  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    const handleScroll = () => {
      // Find the section closest to the center of the viewport
      let current = SECTION_IDS[0];
      let minDist = Infinity;

      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Distance of element center to viewport center
          const dist = Math.abs(rect.top + rect.height/2 - window.innerHeight/2);
          if (dist < minDist) {
            minDist = dist;
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    mainEl.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => mainEl.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-vintage-dark text-vintage-cream min-h-screen font-sans overflow-hidden">
      {/* Texture Overlays */}
      <div className="paper-overlay"></div>
      <div className="grain-overlay"></div>
      <FallingRoses />
      <FlowingLines />
      <TwinklingStars />
      
      {/* Fixed UI Elements */}
      <MusicPlayer isPlaying={isPlaying} onPlayStateChange={setIsPlaying} />
      <SideNav 
        sections={SECTION_IDS} 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />

      {/* Main Content Scroll Container - REMOVED SNAP, ADDED PERSPECTIVE */}
      <main id="main-scroll-container" ref={mainRef} className="h-screen w-full overflow-y-scroll overflow-x-hidden scroll-smooth perspective-1000">
        <HeroSection isPlaying={isPlaying} />
        <div className="relative z-10 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
            <IntroSection isPlaying={isPlaying} />
            <TimelineSection />
            <QualificationsSection />
            <GallerySection />
            <TestimonialsSection />
            <ServicesSection />
            <AboutSection />
            <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App;