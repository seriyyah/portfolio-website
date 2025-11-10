'use client';

import { personalInfo } from '@/data/portfolio';
import { useTypewriter } from '@/hooks/useTypewriter';
import { cn } from '@/lib/utils';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const roles = [
  'Software Engineer',
  'Software Architect',
  'DevOps Engineer', 
  'Backend Specialist',
  'Microservices Expert',
  'Team Lead',
  'Senior Developer',
];

interface Particle {
  id: number;
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
}

export function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);
  
  const { displayText } = useTypewriter({
    words: roles,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  
  useEffect(() => {
    setIsClient(true);
    // Generate particles only on client-side
    const generateParticles = () => {
      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 2,
        animationDuration: 2 + Math.random() * 3,
      }));
    };
    
    setParticles(generateParticles());
  }, []);

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      {/* Animated background */}
      <div className='absolute inset-0 bg-gradient-to-br from-background via-background to-background-secondary'>
        {/* Animated particles/dots */}
        <div className='absolute inset-0'>
          {isClient && particles.map((particle) => (
            <div
              key={particle.id}
              className={cn(
                'absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse',
                'opacity-0 animate-fade-in'
              )}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.animationDuration}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient orbs */}
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-warm' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-400/10 rounded-full blur-3xl animate-pulse-warm' style={{ animationDelay: '1s' }} />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-warm' style={{ animationDelay: '0.5s' }} />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center max-w-4xl mx-auto'>
          {/* Main heading */}
          <div className='space-y-6 mb-8'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight'>
              <span className='block mb-2'>Hi, I'm</span>
              <span className='gradient-text block'>{personalInfo.name}</span>
            </h1>
            
            <div className='text-xl md:text-2xl lg:text-3xl text-foreground/80 h-12 flex items-center justify-center'>
              <span>I'm a </span>
              <span className='ml-2 text-primary font-semibold min-w-[280px] text-left'>
                {displayText}
                <span className='animate-pulse'>|</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className='text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed'>
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mb-16'>
            <Button
              variant='warm'
              size='xl'
              className='group'
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown className='ml-2 h-5 w-5 transition-transform group-hover:translate-y-1' />
            </Button>
            
            <Button
              variant='outline'
              size='xl'
              className='group border-primary/30 hover:border-primary text-foreground hover:text-primary'
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
            >
              Download Resume
              <Download className='ml-2 h-5 w-5 transition-transform group-hover:scale-110' />
            </Button>
          </div>

          {/* Social Links */}
          <div className='flex items-center justify-center space-x-6'>
            {personalInfo.socialLinks.map((social) => {
              const IconComponent = social.icon === 'Github' ? Github : social.icon === 'Linkedin' ? Linkedin : Mail;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target={social.platform !== 'Email' ? '_blank' : undefined}
                  rel={social.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                  className='group p-3 rounded-full border border-border hover:border-primary/50 transition-all hover:shadow-warm'
                  aria-label={social.platform}
                >
                  <IconComponent className='h-6 w-6 transition-colors group-hover:text-primary' />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer hover:scale-110 transition-transform'
        aria-label='Scroll to about section'
      >
        <div className='flex flex-col items-center space-y-2 animate-bounce group-hover:text-primary transition-colors'>
          <span className='text-sm text-foreground/50 group-hover:text-primary/80'>Scroll down</span>
          <ArrowDown className='h-5 w-5 text-primary group-hover:scale-110 transition-transform' />
        </div>
      </button>
    </section>
  );
}
