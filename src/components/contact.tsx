'use client';

import { personalInfo } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Download, ExternalLink, Clock } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  const handleEmailClick = () => {
    window.open(`mailto:${personalInfo.email}`, '_blank');
  };

  const handlePhoneClick = () => {
    if (personalInfo.phone) {
      window.open(`tel:${personalInfo.phone}`, '_blank');
    }
  };

  // Get current time in Prague (UTC+1 standard, UTC+2 during daylight saving)
  const pragueTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Prague"});
  const pragueHour = new Date(pragueTime).getHours();
  const isBusinessHours = pragueHour >= 9 && pragueHour <= 17; // 9 AM to 5 PM Prague time
  
  // Format Prague time for display
  const pragueTimeFormatted = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Prague",
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return (
    <section
      id='contact'
      className='py-24 bg-background relative overflow-hidden'
    >
      {/* Background decoration */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-warm' />
        <div className='absolute -bottom-20 -right-20 w-96 h-96 bg-secondary-400/5 rounded-full blur-3xl animate-pulse-warm' style={{ animationDelay: '2s' }} />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-warm' style={{ animationDelay: '1s' }} />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Section Header */}
          <div className='mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold gradient-text mb-6'>
              Let's Work Together
            </h2>
            <p className='text-xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed'>
              Ready to discuss your next project, explore collaboration opportunities, 
              or need architectural guidance? I'm just one click away.
            </p>
            
            {/* Availability Status */}
            <div className='flex flex-col items-center gap-3 mb-12'>
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground/70'>
                <div className={cn(
                  'w-2 h-2 rounded-full',
                  isBusinessHours ? 'bg-green-500' : 'bg-yellow-500'
                )} />
                {isBusinessHours 
                  ? 'Available now (business hours in Prague)' 
                  : 'Outside business hours, but still responsive!'}
              </div>
              <div className='text-xs text-foreground/60 text-center'>
                <div>Business hours: 9:00 - 17:00 Prague time</div>
                <div className='mt-1'>Current time in Prague: <span className='font-mono text-primary'>{pragueTimeFormatted}</span></div>
              </div>
            </div>
          </div>

          {/* Primary Contact Actions */}
          <div className='grid sm:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto'>
            <div 
              onClick={handleEmailClick}
              className='group cursor-pointer bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-warm transition-all duration-300 hover:-translate-y-2'
            >
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors'>
                <Mail className='h-8 w-8 text-primary' />
              </div>
              <h3 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors'>
                Send an Email
              </h3>
              <p className='text-foreground/70 mb-4 text-sm'>
                Best for detailed discussions and project proposals
              </p>
              <div className='text-primary font-medium text-sm flex items-center justify-center gap-2'>
                {personalInfo.email}
                <ExternalLink className='h-4 w-4' />
              </div>
            </div>

            {personalInfo.phone && (
              <div 
                onClick={handlePhoneClick}
                className='group cursor-pointer bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-warm transition-all duration-300 hover:-translate-y-2'
              >
                <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors'>
                  <Phone className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors'>
                  Give me a Call
                </h3>
                <p className='text-foreground/70 mb-4 text-sm'>
                  For quick discussions and urgent matters
                </p>
                <div className='text-primary font-medium text-sm flex items-center justify-center gap-2'>
                  {personalInfo.phone}
                  <ExternalLink className='h-4 w-4' />
                </div>
              </div>
            )}
          </div>

          {/* Social & Additional Contact */}
          <div className='mb-16'>
            <h3 className='text-2xl font-bold mb-8'>Connect with Me</h3>
            <div className='flex justify-center gap-6 mb-8'>
              {personalInfo.socialLinks.map((social) => {
                const IconComponent = social.icon === 'Github' ? Github : 
                                   social.icon === 'Linkedin' ? Linkedin : 
                                   MessageCircle;
                
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target={social.platform !== 'Email' ? '_blank' : undefined}
                    rel={social.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                    className='group w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 hover:shadow-warm transition-all duration-300 hover:-translate-y-1'
                    aria-label={social.platform}
                  >
                    <IconComponent className='h-7 w-7 transition-colors group-hover:text-primary' />
                  </a>
                );
              })}
            </div>
            <p className='text-foreground/60 text-sm'>
              Follow my work and connect on professional platforms
            </p>
          </div>

          {/* Quick Info */}
          <div className='grid sm:grid-cols-3 gap-8 mb-16'>
            <div className='text-center'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <MapPin className='h-6 w-6 text-primary' />
              </div>
              <h4 className='font-semibold mb-2'>Location</h4>
              <p className='text-foreground/70 text-sm'>{personalInfo.location}</p>
              <p className='text-foreground/50 text-xs mt-1'>CET/CEST Timezone</p>
            </div>

            <div className='text-center'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Clock className='h-6 w-6 text-primary' />
              </div>
              <h4 className='font-semibold mb-2'>Response Time</h4>
              <p className='text-foreground/70 text-sm'>Within 24 hours</p>
              <p className='text-foreground/50 text-xs mt-1'>Usually much faster!</p>
            </div>

            <div className='text-center'>
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                <MessageCircle className='h-6 w-6 text-primary' />
              </div>
              <h4 className='font-semibold mb-2'>Languages</h4>
              <p className='text-foreground/70 text-sm'>English, Ukrainian</p>
              <p className='text-foreground/50 text-xs mt-1'>Fluent in both</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className='bg-gradient-warm-subtle border border-primary/20 rounded-2xl p-8'>
            <h3 className='text-2xl font-bold mb-4'>Ready to Get Started?</h3>
            <p className='text-foreground/80 mb-6 max-w-2xl mx-auto'>
              Whether you need architectural guidance, technical leadership, or development expertise 
              for your next project, I'm here to help bring your vision to life.
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                variant='warm'
                size='lg'
                onClick={handleEmailClick}
                className='group'
              >
                <Mail className='h-5 w-5 mr-2' />
                Start a Conversation
                <ExternalLink className='h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform' />
              </Button>
              
              {personalInfo.resumeUrl && (
                <Button
                  variant='outline'
                  size='lg'
                  className='border-primary/30 hover:border-primary group'
                  onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                >
                  <Download className='h-5 w-5 mr-2' />
                  Download Resume
                  <ExternalLink className='h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform' />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}