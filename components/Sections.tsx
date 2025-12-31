import React, { useState } from 'react';
import { VintageFrame, GoldButton, StarDivider, ScrollReveal, ParallaxImage, TornPaperDivider, WaxSeal, ScrollDownIndicator, WaxStampOverlay } from './UI';
import { Instagram, Mail, Phone, ArrowLeft, ArrowRight, Settings, Code, PenTool, Layout, Send, Download, X, Quote, Briefcase, Linkedin, Globe, Check } from 'lucide-react';

// --- Assets Placeholders ---
const IMAGES = {
  profileArt: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop", 
  gymnastics: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop",
  nature: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
  space: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  abstract: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop",
  sculpture: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=600&auto=format&fit=crop",
  daNang: "https://images.unsplash.com/photo-1559592413-7cec430aa669?q=80&w=800&auto=format&fit=crop",
};

// --- Data: Qualifications ---
const QUALIFICATIONS = [
  {
    id: 1,
    title: "Hardcore Tumbling & Gymnastics",
    period: "2008 - 2015",
    description: "Developed core physical discipline, spatial awareness, and resilience—qualities directly translating to complex engineering problem-solving.",
    cardLabel: "LocalDog",
    cardSub: "TATTOO",
    cardTitle: "Clear Supply"
  },
  {
    id: 2,
    title: "Bachelor of Design (Honors)",
    period: "2016 - 2020",
    description: "Specialized in Digital Media and Interactive Design at the University of Arts. Focused on user-centered design principles, motion graphics, and visual storytelling.",
    cardLabel: "UniArts",
    cardSub: "DEGREE",
    cardTitle: "Design BDes"
  },
  {
    id: 3,
    title: "Advanced 3D Modeling",
    period: "2021 - Present",
    description: "Mastered high-fidelity rendering pipelines using Blender, Maya, and Substance Painter. Created photorealistic textures and complex lighting environments for indie game projects.",
    cardLabel: "Blender",
    cardSub: "CERTIFIED",
    cardTitle: "3D Master"
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    period: "2023",
    description: "Intensive bootcamp covering React, TypeScript, Node.js, and modern web architecture. Built scalable web applications with a focus on performant, accessible UI.",
    cardLabel: "TechStack",
    cardSub: "DEV",
    cardTitle: "Full Stack"
  }
];

// --- Data: Gallery Items ---
const GALLERY_ITEMS = [
  { title: "Mellow Dreams", img: IMAGES.sculpture, type: "Illustration", ratio: "aspect-[3/4]" },
  { title: "Deep Space", img: IMAGES.space, type: "Minimalist", ratio: "aspect-[16/9]" },
  { title: "Storm Front", img: IMAGES.abstract, type: "Concept Art", ratio: "aspect-[3/5]" },
  { title: "The Voyage", img: IMAGES.nature, type: "Atmospheric", ratio: "aspect-square" },
  { title: "Orbit", img: IMAGES.space, type: "Vector", ratio: "aspect-[4/5]" },
  { title: "Ruins", img: IMAGES.profileArt, type: "Environment", ratio: "aspect-[3/2]" },
  { title: "Neon Nights", img: IMAGES.daNang, type: "Photography", ratio: "aspect-[3/4]" },
  { title: "Human Motion", img: IMAGES.gymnastics, type: "Study", ratio: "aspect-[1/1]" },
];

// --- Data: Testimonials ---
const TESTIMONIALS = [
    {
        name: "Eleanor Vance",
        role: "Art Director, Studio Ghibli",
        text: "Washu possesses a rare ability to bridge the gap between technical constraints and artistic ambition. The textures he creates are not just visual; they feel tangible.",
        contact: { email: "eleanor.v@ghibli.jp", phone: "+81 3-555-0199", linkedin: "linkedin.com/in/eleanorvance" }
    },
    {
        name: "Marcus Thorne",
        role: "Senior Dev, TechNova",
        text: "I've never worked with a designer who understands the React component lifecycle so intimately. His code is as clean as his typography.",
        contact: { email: "m.thorne@technova.io", phone: "+1 415-555-0123", linkedin: "linkedin.com/in/marcusthorne" }
    },
    {
        name: "Sarah Jenkins",
        role: "Founder, Wildflower Co.",
        text: "The branding package was exquisite. It captured a sense of nostalgia I didn't think was possible in a digital format. Highly recommended.",
        contact: { email: "sarah@wildflower.co", phone: "+44 20 7946 0999", linkedin: "linkedin.com/in/sarahjenkins" }
    },
    {
        name: "Dr. Aris Hemlock",
        role: "Professor, University of Arts",
        text: "A student who became a master. His dedication to the craft of 3D modeling is unparalleled in his cohort.",
        contact: { email: "a.hemlock@uniarts.edu", phone: "+1 212-555-0188", linkedin: "linkedin.com/in/arishemlock" }
    }
];

// --- Hero Section (UPDATED: STICKY) ---
export const HeroSection: React.FC<{ isPlaying?: boolean }> = ({ isPlaying = false }) => (
  // Added sticky positioning and z-0. This makes it stay in place while the intro slides over it.
  <section id="hero" className="h-screen w-full flex items-center justify-center sticky top-0 z-0 overflow-hidden bg-vintage-dark">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-vintage-dark/80 via-vintage-dark to-vintage-dark z-0" />
    
    <div className="container mx-auto px-12 relative z-10 flex flex-col md:flex-row items-center justify-between">
      {/* Text Content */}
      <div className="flex flex-col items-start z-20 md:w-2/3">
        <ScrollReveal>
          <h1 className="font-display text-[15vw] md:text-[160px] leading-none tracking-tighter text-[#e6e1d3] opacity-90 mix-blend-screen transition-all duration-700 ease-out hover:-translate-y-4 hover:[text-shadow:0_0_50px_rgba(197,160,89,0.5)] cursor-default select-none">
            PORTFOLIO
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.3} animation="scale-up" className="md:ml-2 mt-4 md:-mt-8">
           <h2 className="font-serif text-3xl md:text-6xl text-vintage-cream font-light tracking-wide">
            Washu Raliwedza
          </h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="h-px w-24 bg-vintage-gold"></div>
             <span className="font-script text-5xl md:text-7xl text-vintage-gold">Designer</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Vinyl Record Graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-1/4 opacity-90 md:opacity-100 pointer-events-none">
        <ScrollReveal delay={0.4} className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">
            {/* The Record Disc */}
            <div 
              className="w-full h-full rounded-full animate-spin-slow shadow-2xl border-4 border-vintage-charcoal bg-[#111] relative overflow-hidden flex items-center justify-center z-10 pointer-events-auto"
              style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
            >
                <div 
                  className="absolute inset-0 rounded-full opacity-40"
                  style={{
                    background: 'repeating-radial-gradient(#222 0, #222 2px, #111 3px, #111 4px)'
                  }}
                ></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 pointer-events-none"></div>
                <div className="relative z-10 w-1/3 h-1/3 bg-[#d4af37] rounded-full flex items-center justify-center border-4 border-vintage-charcoal shadow-inner transition-all duration-300 hover:brightness-110 hover:scale-105">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
            </div>

            {/* Stylus Arm */}
            <div 
              className="absolute -top-16 -right-4 md:-top-24 md:-right-10 w-24 h-48 md:w-48 md:h-96 z-20 transition-transform duration-1000 ease-in-out origin-[75%_12.5%] drop-shadow-2xl"
              style={{ transform: isPlaying ? 'rotate(25deg)' : 'rotate(0deg)' }}
            >
               <svg viewBox="0 0 100 200" className="w-full h-full overflow-visible">
                  <circle cx="75" cy="25" r="12" fill="#1a1a1a" stroke="#c5a059" strokeWidth="2" />
                  <circle cx="75" cy="25" r="5" fill="#c5a059" />
                  <path d="M75 25 L85 15" stroke="#8c7648" strokeWidth="6" strokeLinecap="round" />
                  <rect x="80" y="8" width="14" height="12" rx="2" fill="#1a1a1a" stroke="#c5a059" strokeWidth="1" transform="rotate(-45 87 14)" />
                  <path d="M75 25 Q 75 60 65 100 T 35 170" fill="none" stroke="#8c7648" strokeWidth="5" strokeLinecap="round" />
                  <path d="M75 25 Q 75 60 65 100 T 35 170" fill="none" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" transform="translate(-1.5, -0.5)" />
                  <g transform="translate(35, 170) rotate(20)">
                      <rect x="-10" y="-2" width="20" height="30" rx="2" fill="#1a1a1a" stroke="#c5a059" strokeWidth="1.5" />
                      <rect x="-6" y="20" width="12" height="6" rx="1" fill="#c5a059" />
                      <path d="M0 26 L0 32" stroke="#e6e1d3" strokeWidth="1" />
                  </g>
               </svg>
            </div>
        </ScrollReveal>
      </div>

      <ScrollDownIndicator />
    </div>
  </section>
);

// --- Intro Section ---
export const IntroSection: React.FC<{ isPlaying?: boolean }> = ({ isPlaying = false }) => (
  // Removed snap-start, added bg-vintage-charcoal explicitly to cover the sticky hero
  <section id="intro" className="min-h-screen w-full flex items-center justify-center relative py-20 bg-vintage-charcoal rounded-t-3xl border-t border-vintage-gold/10">
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
      {/* Left: Portrait */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
         <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 rounded-full animate-spin-slow" 
            style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
         />
         
         <ScrollReveal className="relative rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            <VintageFrame className="w-[280px] md:w-[400px] h-[380px] md:h-[500px] bg-vintage-charcoal/50 backdrop-blur-sm">
                <img src={IMAGES.profileArt} alt="Profile Art" className="w-full h-full object-cover grayscale contrast-125" />
            </VintageFrame>
            <h1 className="absolute -bottom-10 -left-10 font-script text-6xl md:text-8xl text-vintage-gold drop-shadow-lg z-20">
              Washu Raliwedza
            </h1>
         </ScrollReveal>
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 space-y-8 text-center md:text-left z-10">
        <ScrollReveal delay={0.2}>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-vintage-gold">
            Hardware, Human <br />
            <span className="text-vintage-cream">Performance, & High-</span> <br />
            <span className="text-vintage-gold">Fidelity Art</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <h3 className="font-sans text-xl tracking-[0.2em] text-gray-400 font-light uppercase">
            UI/UX Designer
          </h3>
        </ScrollReveal>
        <ScrollReveal delay={0.4} className="flex flex-col md:flex-row gap-6 pt-4 justify-center md:justify-start">
          <GoldButton>Download CV <Download size={16}/></GoldButton>
          <GoldButton variant="outline">Get in Touch <Mail size={16}/></GoldButton>
        </ScrollReveal>
      </div>
    </div>

    <TornPaperDivider isInverted fillClass="fill-vintage-charcoal" />
  </section>
);

// --- Timeline Section ---
export const TimelineSection: React.FC = () => (
  <section id="timeline" className="min-h-screen w-full flex flex-col justify-center relative py-20 bg-vintage-dark">
    <div className="container mx-auto px-6 relative z-10">
      <ScrollReveal>
        <h2 className="font-serif text-3xl md:text-5xl text-center text-vintage-gold mb-16">
          Generational Timeline & Skill Progression
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-vintage-gold/30 -translate-x-1/2 hidden md:block"></div>

        {/* Item 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8 relative">
          <ScrollReveal delay={0.2} animation="left" className="w-full md:w-1/2 text-center md:text-right pr-0 md:pr-16 order-2 md:order-1">
            <h3 className="font-serif text-2xl text-vintage-cream mb-2">Hardcore Tumbling & Gymnastics</h3>
            <span className="text-vintage-gold font-sans tracking-widest block mb-4">2008 - 2015</span>
            <p className="font-sans text-gray-400 leading-relaxed max-w-md ml-auto">
              Developed core physical discipline, spatial awareness, and resilience—qualities directly translating to complex engineering problem-solving and 3D modeling spatial logic.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4} animation="pulse" className="absolute left-1/2 top-0 -translate-x-1/2 text-vintage-gold hidden md:block z-10">
            <StarDivider />
          </ScrollReveal>

          <ScrollReveal delay={0.2} animation="right" className="w-full md:w-1/2 pl-0 md:pl-16 order-1 md:order-2">
             <div className="border border-vintage-gold/50 p-2 rounded-lg max-w-md mx-auto md:mx-0">
                <ParallaxImage src={IMAGES.nature} alt="Gymnastics Metaphor" className="w-full h-48 md:h-64 rounded shadow-lg" speed={0.1} />
             </div>
          </ScrollReveal>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8 relative">
          <ScrollReveal delay={0.4} animation="left" className="w-full md:w-1/2 pr-0 md:pr-16 flex justify-end">
             <div className="border border-vintage-gold/50 p-2 rounded-lg max-w-md w-full">
                 <ParallaxImage src={IMAGES.gymnastics} alt="Forest Art" className="w-full h-48 md:h-64 rounded shadow-lg" speed={0.15} />
             </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6} animation="pulse" className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-vintage-gold hidden md:block z-10">
            <StarDivider />
          </ScrollReveal>

          <ScrollReveal delay={0.4} animation="right" className="w-full md:w-1/2 text-center md:text-left pl-0 md:pl-16">
            <h3 className="font-serif text-2xl text-vintage-cream mb-2">High-Fidelity 3D Art & Animation</h3>
            <span className="text-vintage-gold font-sans tracking-widest block mb-4">2014 - Present</span>
            <p className="font-sans text-gray-400 leading-relaxed max-w-md">
              Proficiency in <strong className="text-vintage-cream">Blender / Maya / Substance Painter</strong>, focusing on realistic rendering and complex PBR material pipelines.
            </p>
          </ScrollReveal>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8 relative">
          <ScrollReveal delay={0.2} animation="left" className="w-full md:w-1/2 text-center md:text-right pr-0 md:pr-16 order-2 md:order-1">
            <h3 className="font-serif text-2xl text-vintage-cream mb-2">Bachelor of Design (Honors)</h3>
            <span className="text-vintage-gold font-sans tracking-widest block mb-4">2016 - 2020</span>
            <p className="font-sans text-gray-400 leading-relaxed max-w-md ml-auto">
              Specialized in Digital Media and Interactive Design. Focused on user-centered design principles, motion graphics, and visual storytelling foundations.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4} animation="pulse" className="absolute left-1/2 top-0 -translate-x-1/2 text-vintage-gold hidden md:block z-10">
            <StarDivider />
          </ScrollReveal>

          <ScrollReveal delay={0.2} animation="right" className="w-full md:w-1/2 pl-0 md:pl-16 order-1 md:order-2">
             <div className="border border-vintage-gold/50 p-2 rounded-lg max-w-md mx-auto md:mx-0">
                <ParallaxImage src={IMAGES.sculpture} alt="Design Degree" className="w-full h-48 md:h-64 object-cover rounded shadow-lg" speed={0.1} />
             </div>
          </ScrollReveal>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          <ScrollReveal delay={0.4} animation="left" className="w-full md:w-1/2 pr-0 md:pr-16 flex justify-end">
             <div className="border border-vintage-gold/50 p-2 rounded-lg max-w-md w-full">
                 <ParallaxImage src={IMAGES.space} alt="Full Stack" className="w-full h-48 md:h-64 rounded shadow-lg" speed={0.15} />
             </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6} animation="pulse" className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-vintage-gold hidden md:block z-10">
            <StarDivider />
          </ScrollReveal>

          <ScrollReveal delay={0.4} animation="right" className="w-full md:w-1/2 text-center md:text-left pl-0 md:pl-16">
            <h3 className="font-serif text-2xl text-vintage-cream mb-2">Full Stack Architecture</h3>
            <span className="text-vintage-gold font-sans tracking-widest block mb-4">2023 - Present</span>
            <p className="font-sans text-gray-400 leading-relaxed max-w-md">
              Bridging the gap between visual fidelity and functional code. Mastering React, TypeScript, and modern web architecture to build immersive digital experiences.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
    
    <TornPaperDivider isInverted fillClass="fill-vintage-dark" />
  </section>
);

// --- Qualifications Carousel ---
export const QualificationsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % QUALIFICATIONS.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + QUALIFICATIONS.length) % QUALIFICATIONS.length);
  };

  const current = QUALIFICATIONS[activeSlide];
  const prevItem = QUALIFICATIONS[(activeSlide - 1 + QUALIFICATIONS.length) % QUALIFICATIONS.length];
  const nextItem = QUALIFICATIONS[(activeSlide + 1) % QUALIFICATIONS.length];

  const renderCardGraphic = (index: number) => {
    switch (index % 4) {
      case 0:
        return (
           <svg viewBox="0 0 100 100" className="w-32 h-32 animate-spin-slow text-vintage-dark">
              <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="currentColor" />
           </svg>
        );
      case 1:
        return (
           <svg viewBox="0 0 100 100" className="w-32 h-32 animate-pulse-slow text-vintage-dark">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="20" fill="currentColor" />
           </svg>
        );
      case 2:
        return (
           <svg viewBox="0 0 100 100" className="w-32 h-32 animate-float text-vintage-dark">
              <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(45 50 50)" />
              <rect x="30" y="30" width="40" height="40" fill="currentColor" transform="rotate(45 50 50)" />
           </svg>
        );
      case 3:
        return (
           <svg viewBox="0 0 100 100" className="w-32 h-32 animate-spin-slow text-vintage-dark">
              <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="10" fill="currentColor" />
           </svg>
        );
      default:
        return null;
    }
  }

  return (
    <section id="qualifications" className="min-h-screen w-full flex flex-col justify-center relative py-20 overflow-hidden bg-vintage-charcoal">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl text-center text-vintage-gold mb-12 uppercase tracking-widest">
            Qualifications & Certifications
          </h2>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center gap-12">
           {/* Left: Carousel mockup */}
           <div className="w-full md:w-1/2 flex justify-center items-center gap-4 relative h-[500px]">
              {/* Previous Card (Ghost) */}
              <div className="absolute left-0 opacity-40 scale-90 blur-[1px] transform -translate-x-12 hidden md:block">
                 <div className="w-[200px] h-[350px] bg-vintage-cream/10 border border-vintage-gold/30 p-4">
                    <div className="w-full h-full border border-vintage-gold/10 flex items-center justify-center relative overflow-hidden">
                       <span className="font-serif text-vintage-gold rotate-90 absolute text-xl tracking-widest whitespace-nowrap opacity-50">{prevItem.cardTitle}</span>
                    </div>
                 </div>
              </div>

              {/* Active Card */}
              <div key={current.id} className="z-10 relative animate-fade-in-up">
                 <VintageFrame className="w-[260px] md:w-[320px] h-[420px] md:h-[450px] bg-vintage-cream/90 text-vintage-dark">
                    <div className="h-full flex flex-col justify-between p-4">
                       <div className="flex justify-between items-start">
                          <span className="text-xs font-mono">{current.cardLabel}</span>
                          <span className="text-xs font-mono">{current.cardSub}</span>
                       </div>
                       <div className="flex-1 flex items-center justify-center">
                           {renderCardGraphic(activeSlide)}
                       </div>
                       <div className="text-center">
                          <h4 className="font-serif font-bold text-lg">{current.cardTitle}</h4>
                       </div>
                    </div>
                 </VintageFrame>
              </div>

               {/* Next Card (Ghost) */}
               <div className="absolute right-0 opacity-40 scale-90 blur-[1px] transform translate-x-12 hidden md:block">
                 <div className="w-[200px] h-[350px] bg-vintage-cream/10 border border-vintage-gold/30 p-4 flex items-center justify-center">
                    <div className="w-full h-full border border-vintage-gold/10 flex items-center justify-center relative overflow-hidden">
                        <span className="font-serif text-vintage-gold -rotate-90 absolute text-xl tracking-widest whitespace-nowrap opacity-50">{nextItem.cardTitle}</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right: Context */}
           <div className="w-full md:w-1/2 bg-vintage-charcoal/40 p-8 rounded-2xl border border-vintage-gold/20 backdrop-blur-sm min-h-[400px] flex flex-col justify-center">
              <ScrollReveal delay={0.3}>
                <h3 className="font-serif text-4xl text-vintage-cream mb-4">The designer behind the design</h3>
              </ScrollReveal>
              <div key={current.id} className="space-y-6 animate-fade-in-up">
                 <div>
                    <h4 className="text-vintage-gold font-serif text-xl">{current.title}</h4>
                    <span className="text-gray-500 text-sm">{current.period}</span>
                 </div>
                 <p className="text-gray-300 font-sans leading-relaxed">
                    {current.description}
                 </p>
              </div>
              
              {/* Navigation Controls */}
              <div className="mt-8 flex gap-4">
                 <button 
                   onClick={prevSlide}
                   className="w-16 h-10 border border-vintage-gold/50 rounded flex items-center justify-center hover:bg-vintage-gold/20 transition-colors"
                 >
                    <ArrowLeft className="text-vintage-gold" />
                 </button>
                 <button 
                   onClick={nextSlide}
                   className="w-16 h-10 border border-vintage-gold/50 rounded flex items-center justify-center bg-vintage-gold/10 hover:bg-vintage-gold/30 transition-colors"
                 >
                    <ArrowRight className="text-vintage-gold" />
                 </button>
              </div>
           </div>
        </div>
      </div>
      
      <TornPaperDivider isInverted fillClass="fill-vintage-charcoal" />
    </section>
  );
};

// --- Gallery Section ---
export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedItem(null);
      setIsClosing(false);
    }, 300); // Matches animation duration
  };

  const handleDownload = async (e: React.MouseEvent, url: string, title: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed, opening in new tab:', error);
      window.open(url, '_blank');
    }
  };

  const relatedWorks = selectedItem ? [
      GALLERY_ITEMS[(GALLERY_ITEMS.indexOf(selectedItem) + 1) % GALLERY_ITEMS.length],
      GALLERY_ITEMS[(GALLERY_ITEMS.indexOf(selectedItem) + 2) % GALLERY_ITEMS.length]
  ] : [];

  return (
    <section id="gallery" className="min-h-screen w-full flex flex-col pt-24 pb-12 relative bg-vintage-dark">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl text-center text-vintage-gold mb-2">GALLERY</h2>
          <p className="text-center font-serif text-2xl text-vintage-cream mb-12">The designer behind the design</p>
        </ScrollReveal>

        {/* Pinterest-style Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
           {GALLERY_ITEMS.map((item, idx) => (
             <ScrollReveal key={idx} delay={idx * 0.1} className="break-inside-avoid relative group">
                <div 
                  className="mb-6 cursor-pointer" 
                  onClick={() => { setIsClosing(false); setSelectedItem(item); }}
                >
                  <ParallaxImage 
                    src={item.img} 
                    alt={item.title} 
                    className={`w-full rounded-lg border border-vintage-gold/20 ${item.ratio} z-0 overflow-hidden bg-vintage-charcoal`}
                    imgClassName="transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    speed={0.05}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                        <span className="font-serif text-vintage-gold text-2xl italic">{item.title}</span>
                        <div className="h-px w-12 bg-vintage-cream my-2"></div>
                        <span className="font-sans text-xs text-gray-300 tracking-[0.2em] uppercase">{item.type}</span>
                    </div>
                  </ParallaxImage>
                  
                  {/* External interaction bar (Pinterest style) */}
                  <div className="flex justify-between items-center mt-2 px-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-vintage-gold border border-vintage-dark"></div>
                          <div className="w-6 h-6 rounded-full bg-gray-500 border border-vintage-dark"></div>
                      </div>
                      <div className="flex gap-3">
                          <span className="text-xs text-vintage-cream font-sans">1.2k</span>
                      </div>
                  </div>
                </div>
             </ScrollReveal>
           ))}
        </div>
      </div>

      {/* Expanded Details Modal */}
      {selectedItem && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-opacity duration-300 ${isClosing ? 'pointer-events-none' : ''}`}>
            <div 
              className={`absolute inset-0 bg-vintage-dark/95 backdrop-blur-md transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`} 
              onClick={closeModal} 
            />
            <div className={`relative z-10 w-full max-w-6xl h-full max-h-[90vh] bg-vintage-charcoal border border-vintage-gold/30 rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden ${isClosing ? 'animate-fade-out-down' : 'animate-fade-in-up'}`}>
                {/* Close Button */}
                <button onClick={closeModal} className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-vintage-cream hover:text-vintage-gold transition-colors">
                    <X size={24} />
                </button>

                {/* Image Side */}
                <div className="w-full md:w-2/3 h-1/2 md:h-full bg-black/40 flex items-center justify-center p-4 md:p-8 relative">
                    <img src={selectedItem.img} alt={selectedItem.title} className="max-w-full max-h-full object-contain shadow-xl" />
                </div>

                {/* Details Side */}
                <div className="w-full md:w-1/3 h-1/2 md:h-full p-8 overflow-y-auto border-l border-vintage-gold/10 bg-vintage-charcoal">
                    <h3 className="font-display text-3xl md:text-4xl text-vintage-gold mb-2">{selectedItem.title}</h3>
                    <span className="font-sans text-xs tracking-[0.2em] uppercase text-gray-400 block mb-8">{selectedItem.type}</span>
                    
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-serif text-lg text-vintage-cream mb-2">About the Piece</h4>
                            <p className="font-sans text-gray-400 leading-relaxed text-sm">
                            A detailed exploration of form and texture, pushing the boundaries of digital composition. 
                            This piece utilizes complex PBR materials and dramatic lighting to evoke a sense of mystery and depth, showcasing the intersection of technical precision and artistic vision.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-vintage-gold/10">
                            <div>
                            <span className="block text-xs text-vintage-gold mb-1">Year</span>
                            <span className="font-serif text-vintage-cream">2024</span>
                            </div>
                            <div>
                            <span className="block text-xs text-vintage-gold mb-1">Tools</span>
                            <span className="font-serif text-vintage-cream">Blender, Octane</span>
                            </div>
                            <div>
                            <span className="block text-xs text-vintage-gold mb-1">Role</span>
                            <span className="font-serif text-vintage-cream">Art Direction</span>
                            </div>
                            <div>
                            <span className="block text-xs text-vintage-gold mb-1">Client</span>
                            <span className="font-serif text-vintage-cream">Personal</span>
                            </div>
                        </div>

                        <button 
                            onClick={(e) => selectedItem && handleDownload(e, selectedItem.img, selectedItem.title)}
                            className="w-full py-4 border border-vintage-gold/30 text-vintage-gold font-serif hover:bg-vintage-gold hover:text-vintage-dark transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2"
                        >
                            <Download size={18} /> Download High Res
                        </button>
                    </div>

                    {/* Related Works Section */}
                    <div className="mt-12 pt-8 border-t border-vintage-gold/10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h4 className="font-serif text-lg text-vintage-cream mb-4">Related Works</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {relatedWorks.map((item, idx) => (
                                <div key={idx} className="cursor-pointer group" onClick={(e) => { e.stopPropagation(); setIsClosing(false); setSelectedItem(item); }}>
                                    <div className="aspect-square overflow-hidden rounded mb-2 border border-vintage-gold/20 relative">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                    <p className="text-xs text-vintage-gold font-serif truncate group-hover:text-vintage-cream transition-colors">{item.title}</p>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{item.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
      )}

      {/* Torn Paper Divider - Torn of Dark over Charcoal */}
      <TornPaperDivider isInverted fillClass="fill-vintage-dark" />
    </section>
  );
};

// --- Testimonials Section (New) ---
export const TestimonialsSection: React.FC = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState<typeof TESTIMONIALS[0] | null>(null);

    return (
        <section id="testimonials" className="min-h-screen w-full flex flex-col justify-center relative py-20 bg-vintage-dark">
            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <h2 className="font-serif text-3xl md:text-5xl text-center text-vintage-gold mb-2">Client Letters</h2>
                    <div className="h-px w-24 bg-vintage-gold/50 mx-auto mb-16"></div>
                </ScrollReveal>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory px-4 md:px-0 scrollbar-hide">
                    {TESTIMONIALS.map((item, idx) => (
                        <div key={idx} className="flex-none w-[85vw] md:w-[400px] snap-center cursor-pointer group" onClick={() => setSelectedTestimonial(item)}>
                            <ScrollReveal delay={idx * 0.1} animation="up">
                                <div className="bg-vintage-cream text-vintage-charcoal p-8 rounded-sm shadow-2xl relative transform transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] duration-300 h-full flex flex-col group-hover:ring-2 ring-vintage-gold/50">
                                    {/* Paper Texture Overlay */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-50 rounded-sm pointer-events-none"></div>
                                    
                                    {/* Wax Seal */}
                                    <div className="absolute -top-4 -right-4 z-10 group-hover:scale-110 transition-transform duration-300">
                                        <WaxSeal className="w-16 h-16" />
                                    </div>

                                    <Quote className="text-vintage-gold/40 mb-6 w-10 h-10" />
                                    
                                    <p className="font-serif text-lg leading-relaxed mb-8 flex-grow relative z-10">
                                        "{item.text}"
                                    </p>

                                    <div className="border-t border-vintage-charcoal/20 pt-4 relative z-10 flex justify-between items-end">
                                        <div>
                                            <p className="font-script text-3xl text-vintage-dark mb-1">{item.name}</p>
                                            <p className="font-sans text-xs tracking-widest uppercase text-gray-600">{item.role}</p>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-vintage-gold-dim text-xs uppercase font-sans tracking-wider">
                                            View Card
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    ))}
                    
                    {/* Padding div for scroll end */}
                    <div className="flex-none w-4 md:w-0"></div>
                </div>
                
                <p className="text-center font-sans text-xs text-vintage-gold/50 tracking-widest uppercase mt-4 animate-pulse-slow">
                    Tap a letter to connect
                </p>
            </div>
            
            {/* Modal for Contact Info */}
            {selectedTestimonial && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedTestimonial(null)}></div>
                    <div className="relative z-10 bg-[#e6e1d3] w-full max-w-md p-8 rounded shadow-2xl animate-fade-in-up border-4 border-vintage-dark transform rotate-1">
                        {/* Paper Texture */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-50 rounded pointer-events-none"></div>
                        
                        <button 
                            onClick={() => setSelectedTestimonial(null)}
                            className="absolute top-4 right-4 text-vintage-charcoal/50 hover:text-vintage-dark z-20"
                        >
                            <X size={24} />
                        </button>

                        <div className="relative z-10 flex flex-col items-center text-center">
                             <div className="w-20 h-20 bg-vintage-dark rounded-full flex items-center justify-center mb-6 border-4 border-double border-vintage-gold">
                                <span className="font-serif text-3xl text-vintage-gold">{selectedTestimonial.name.charAt(0)}</span>
                             </div>

                             <h3 className="font-display text-2xl text-vintage-dark mb-1">{selectedTestimonial.name}</h3>
                             <p className="font-sans text-xs tracking-[0.2em] uppercase text-vintage-gold-dim mb-8">{selectedTestimonial.role}</p>
                             
                             <div className="w-full space-y-4">
                                <div className="flex items-center gap-4 p-3 bg-white/50 border border-vintage-dark/10 rounded hover:bg-white/80 transition-colors">
                                    <Mail className="text-vintage-gold-dim" size={20} />
                                    <span className="font-serif text-vintage-dark">{selectedTestimonial.contact.email}</span>
                                </div>
                                <div className="flex items-center gap-4 p-3 bg-white/50 border border-vintage-dark/10 rounded hover:bg-white/80 transition-colors">
                                    <Phone className="text-vintage-gold-dim" size={20} />
                                    <span className="font-serif text-vintage-dark">{selectedTestimonial.contact.phone}</span>
                                </div>
                                <div className="flex items-center gap-4 p-3 bg-white/50 border border-vintage-dark/10 rounded hover:bg-white/80 transition-colors">
                                    <Linkedin className="text-vintage-gold-dim" size={20} />
                                    <span className="font-serif text-vintage-dark">{selectedTestimonial.contact.linkedin}</span>
                                </div>
                             </div>

                             <div className="mt-8 pt-6 border-t border-vintage-dark/10 w-full flex justify-between items-center">
                                <span className="font-script text-2xl text-vintage-dark/60 rotate-[-5deg]">Verified Client</span>
                                <WaxSeal className="w-12 h-12" />
                             </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Torn Paper Divider - Torn of Dark over Charcoal */}
            <TornPaperDivider isInverted fillClass="fill-vintage-charcoal" />
        </section>
    );
};

// --- Services Section ---
export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="min-h-screen w-full flex flex-col justify-center relative py-20 bg-vintage-charcoal">
      <div className="container mx-auto px-6 relative z-10">
         <ScrollReveal>
           <h2 className="font-display text-5xl md:text-7xl text-center text-vintage-gold mb-16 uppercase italic">Services</h2>
         </ScrollReveal>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            {/* Service 1 */}
            <ScrollReveal delay={0.2} className="flex gap-6 group cursor-default hover:bg-white/5 p-4 rounded-xl transition-colors duration-300">
               <div className="hidden md:block w-1/3 aspect-[3/4] bg-vintage-charcoal rounded-lg overflow-hidden border border-vintage-gold/20 shadow-lg group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full bg-vintage-cream flex items-center justify-center p-4">
                      <div className="text-black font-black text-6xl leading-none tracking-tighter mix-blend-difference">
                          UX<br/>UI
                      </div>
                  </div>
               </div>
               <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                     <Layout className="text-vintage-gold w-8 h-8" />
                     <h3 className="font-serif text-2xl text-vintage-cream uppercase group-hover:text-vintage-gold transition-colors">UX/UI Design</h3>
                  </div>
                  <p className="font-sans text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                     Crafting intuitive, user-centered interfaces that blend aesthetics with functionality. Specializing in high-fidelity prototyping and design systems.
                  </p>
               </div>
            </ScrollReveal>

            {/* Service 2 */}
            <ScrollReveal delay={0.3} className="flex gap-6 group cursor-default hover:bg-white/5 p-4 rounded-xl transition-colors duration-300">
               <div className="hidden md:block w-1/3 aspect-[3/4] bg-vintage-charcoal rounded-lg overflow-hidden border border-vintage-gold/20 relative shadow-lg group-hover:scale-105 transition-transform duration-500">
                   <img src={IMAGES.sculpture} className="w-full h-full object-cover grayscale opacity-60" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Code className="w-16 h-16 text-vintage-gold" />
                   </div>
               </div>
               <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                     <Code className="text-vintage-gold w-8 h-8" />
                     <h3 className="font-serif text-2xl text-vintage-cream uppercase group-hover:text-vintage-gold transition-colors">Web Development</h3>
                  </div>
                  <p className="font-sans text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                     Full-stack development using modern frameworks like <strong className="text-vintage-cream">React, TypeScript, and Tailwind</strong>. Building performant, accessible, and scalable web applications.
                  </p>
               </div>
            </ScrollReveal>

             {/* Service 3 */}
             <ScrollReveal delay={0.4} className="flex gap-6 group cursor-default hover:bg-white/5 p-4 rounded-xl transition-colors duration-300">
               <div className="hidden md:block w-1/3 aspect-[3/4] bg-vintage-charcoal rounded-lg overflow-hidden border border-vintage-gold/20 shadow-lg group-hover:scale-105 transition-transform duration-500">
                   <img src={IMAGES.profileArt} className="w-full h-full object-cover sepia" />
               </div>
               <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                     <PenTool className="text-vintage-gold w-8 h-8" />
                     <h3 className="font-serif text-2xl text-vintage-cream uppercase group-hover:text-vintage-gold transition-colors">Illustration</h3>
                  </div>
                  <p className="font-sans text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                     Digital illustration and concept art. Focusing on realistic rendering and complex PBR material pipelines using Blender and Substance Painter.
                  </p>
               </div>
            </ScrollReveal>

            {/* In Progress Status */}
            <ScrollReveal delay={0.5} className="flex flex-col items-center justify-center relative group">
               <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                   <Settings size={200} className="animate-spin-slow text-vintage-gold" />
               </div>
               <div className="relative z-10 text-center">
                  <h3 className="font-serif text-4xl text-vintage-cream">STILL</h3>
                  <h3 className="font-serif text-4xl text-vintage-cream">IN</h3>
                  <h3 className="font-serif text-4xl text-vintage-cream">PROGRESS</h3>
               </div>
               <Settings size={64} className="text-vintage-gold mt-6 animate-spin-slow" />
            </ScrollReveal>

         </div>
      </div>
      
      {/* Torn Paper Divider - Torn of Charcoal over Dark */}
      <TornPaperDivider isInverted fillClass="fill-vintage-charcoal" />
    </section>
  );
};

// --- About Me Section ---
export const AboutSection: React.FC = () => (
  <section id="about" className="min-h-screen w-full flex items-center justify-center relative py-20 bg-vintage-dark">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
       {/* Left: Image Frame */}
       <div className="w-full md:w-1/3 flex justify-center">
          <ScrollReveal>
            <VintageFrame className="w-[300px] h-[400px] bg-vintage-charcoal/50 rotate-3 transition-transform hover:rotate-0 duration-500">
              <img src={IMAGES.profileArt} alt="About Me" className="w-full h-full object-cover grayscale contrast-125" />
            </VintageFrame>
          </ScrollReveal>
       </div>

       {/* Right: Text */}
       <div className="w-full md:w-2/3 space-y-6 relative">
          <ScrollReveal delay={0.2}>
            <h2 className="font-display text-4xl md:text-6xl text-vintage-gold font-light">ABOUT ME</h2>
            <h3 className="font-serif text-2xl text-vintage-cream">The designer behind the design</h3>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3} className="font-sans text-gray-300 leading-8 text-lg space-y-4 relative z-10 bg-vintage-dark/80 p-4 rounded-lg backdrop-blur-sm border-l-2 border-vintage-gold">
             <p>
                Long time no see! I just returned from my trip to Da Nang a few days ago. It was pretty interesting. On the first day, we went to Hoi An old town, and on the second day, we went to Ba Na Hills.
             </p>
             <p>
                From the second day, it was raining quite often, making me feel a bit down. At Ba Na Hills, there is also heavy fog and rain. It made the scenery hard to see.
             </p>
             <p>
                The Wax Museum was quite interesting, even though some statues aren't good-looking. Overall, it was an amazing trip.
             </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="flex justify-between items-end border-t border-vintage-gold/30 pt-4 mt-8">
             <span className="font-display text-vintage-gold tracking-widest uppercase text-xl">UPDATED</span>
             <span className="font-serif text-vintage-cream/60 italic text-4xl">2025</span>
          </ScrollReveal>

          {/* Feather Pen Decorative */}
          <div className="absolute -right-10 top-1/2 w-48 h-48 opacity-60 hidden md:block">
             <img src="https://images.unsplash.com/photo-1550616663-88898950d87a?q=80&w=400&png=true" className="rotate-12 filter sepia contrast-150" alt="quill" />
          </div>
       </div>
    </div>
    
    {/* Torn Paper Divider - Torn of Dark over Charcoal */}
    <TornPaperDivider isInverted fillClass="fill-vintage-dark" />
  </section>
);

// --- Contact Section ---
export const ContactSection: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'stamping' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'High-Fidelity Art',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: false }));
        }
    };

    const handleSend = () => {
        const newErrors = {
            name: !formData.name.trim(),
            email: !formData.email.trim(),
            message: !formData.message.trim()
        };

        if (newErrors.name || newErrors.email || newErrors.message) {
            setErrors(newErrors);
            return;
        }

        setFormStatus('stamping');
    };

    const handleAnimationComplete = () => {
        setFormStatus('success');
        setFormData({
            name: '',
            email: '',
            subject: 'High-Fidelity Art',
            message: ''
        });
    };

    return (
      <section id="contact" className={`min-h-screen w-full flex items-center justify-center relative py-20 bg-vintage-charcoal ${formStatus === 'success' ? 'animate-shake' : ''}`}>
        
        {/* Full Screen Stamping Overlay */}
        {formStatus === 'stamping' && (
            <WaxStampOverlay onComplete={handleAnimationComplete} />
        )}

        {/* Success Modal */}
        {formStatus === 'success' && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setFormStatus('idle')}></div>
                <div className="relative z-10 bg-[#e6e1d3] w-full max-w-md p-10 rounded shadow-2xl animate-fade-in-up border-4 border-vintage-dark text-center">
                    {/* Paper Texture */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-50 rounded pointer-events-none"></div>
                    
                    <div className="relative z-20 flex flex-col items-center">
                        <div className="mb-6 scale-110">
                            <WaxSeal className="w-24 h-24" />
                        </div>
                        <h3 className="font-display text-3xl text-vintage-dark mb-4">Sealed & Sent</h3>
                        <p className="font-serif text-vintage-charcoal/80 mb-8 text-lg">
                            Your letter has been dispatched to Washu Raliwedza.
                        </p>
                        <button 
                            onClick={() => setFormStatus('idle')}
                            className="bg-vintage-dark text-vintage-gold px-8 py-3 rounded-full font-serif uppercase tracking-widest text-sm hover:bg-black transition-colors"
                        >
                            Return to Portfolio
                        </button>
                    </div>
                </div>
            </div>
        )}

        <div className="container mx-auto px-6 relative z-10">
           <ScrollReveal>
            <h2 className="font-display text-4xl md:text-6xl text-center text-vintage-gold mb-12 font-light">
                CONTACT / SOCIALS
            </h2>
           </ScrollReveal>

           <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
              {/* Left: Form */}
              <div className="w-full md:w-1/2 space-y-8">
                 <ScrollReveal delay={0.2} className="space-y-2">
                    <label className="font-serif text-vintage-cream text-lg">Name and Surname</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Mr. Pervet" 
                        className={`w-full bg-vintage-cream rounded px-4 py-3 text-vintage-charcoal font-sans focus:outline-none focus:ring-2 focus:ring-vintage-gold ${errors.name ? 'ring-2 ring-red-500' : ''}`} 
                    />
                    {errors.name && <span className="text-red-400 text-xs font-sans">Name is required</span>}
                 </ScrollReveal>

                 {/* New Email Input */}
                 <ScrollReveal delay={0.25} className="space-y-2">
                    <label className="font-serif text-vintage-cream text-lg">Email Address</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com" 
                        className={`w-full bg-vintage-cream rounded px-4 py-3 text-vintage-charcoal font-sans focus:outline-none focus:ring-2 focus:ring-vintage-gold ${errors.email ? 'ring-2 ring-red-500' : ''}`} 
                    />
                    {errors.email && <span className="text-red-400 text-xs font-sans">Email is required</span>}
                 </ScrollReveal>

                 <ScrollReveal delay={0.3} className="space-y-2">
                    <label className="font-serif text-vintage-cream text-lg">Subject</label>
                    <div className="relative">
                       <select 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-white rounded px-4 py-3 text-vintage-gold-dim font-serif appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-vintage-gold border-b-4 border-vintage-gold"
                       >
                          <option>High-Fidelity Art</option>
                          <option>UI/UX Design</option>
                          <option>Web Development</option>
                       </select>
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-vintage-gold-dim"></div>
                       </div>
                    </div>
                 </ScrollReveal>

                 <ScrollReveal delay={0.4} className="space-y-2">
                    <label className="font-serif text-vintage-cream text-lg">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Send me details..." 
                      className={`w-full bg-white rounded px-4 py-3 text-vintage-charcoal font-sans h-48 resize-none focus:outline-none focus:ring-2 focus:ring-vintage-gold ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                    ></textarea>
                    {errors.message && <span className="text-red-400 text-xs font-sans">Message is required</span>}
                 </ScrollReveal>

                 <ScrollReveal delay={0.5} className="flex justify-center w-full">
                    <button 
                        onClick={handleSend}
                        className="bg-[#c5a059] text-[#1a2c32] px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#b08d2b] transition-colors shadow-lg"
                    >
                        <Send size={18} /> Send Message
                    </button>
                 </ScrollReveal>
              </div>

              {/* Right: Socials */}
              <div className="w-full md:w-1/2 relative">
                 <h3 className="font-script text-6xl md:text-8xl text-vintage-cream absolute -top-24 right-0 opacity-80 rotate-[-5deg]">
                    Washu Raliwedza
                 </h3>

                 <ScrollReveal delay={0.6} className="mt-12 bg-white/5 border border-vintage-gold/20 rounded-3xl p-8 backdrop-blur-sm flex flex-col gap-8">
                    {/* Horizontal Row for Social Icons - Replacing Text with pure Icons */}
                    <div className="flex items-center justify-center gap-6">
                        <a href="#" className="group relative">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-vintage-gold transition-colors shadow-lg relative z-10">
                                <Instagram size={32} className="text-black" />
                            </div>
                        </a>

                        <a href="#" className="group">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-vintage-gold transition-colors shadow-lg">
                                <Phone size={32} className="text-black" />
                            </div>
                        </a>

                        <a href="#" className="group">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-vintage-gold transition-colors shadow-lg">
                                {/* Pinterest SVG */}
                               <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="text-black">
                                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                               </svg>
                            </div>
                        </a>
                    </div>

                    {/* Email separate */}
                    <a href="#" className="flex items-center gap-6 group justify-center border-t border-vintage-gold/10 pt-6">
                       <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-vintage-gold transition-colors shadow-lg">
                          <Mail size={32} className="text-black" />
                       </div>
                       <span className="font-serif text-xl md:text-2xl text-vintage-cream group-hover:text-vintage-gold transition-colors break-all">washu@gmail.com</span>
                    </a>
                 </ScrollReveal>
                 
                 <p className="text-center text-gray-500 text-sm mt-8 font-serif">©2025 Washu Raliwedza All rights are reserved</p>
              </div>
           </div>
        </div>
      </section>
    );
};