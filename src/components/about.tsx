'use client';

import { personalInfo, skills } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { MapPin, Mail, Phone, Download } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

export function About() {
  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryLabels = {
    backend: 'Backend Development',
    frontend: 'Frontend Development',
    database: 'Databases',
    devops: 'DevOps & Infrastructure',
    tools: 'Tools & Methodologies'
  };

  return (
    <section
      id='about'
      className='py-24 bg-background-secondary relative overflow-hidden'
    >
      {/* Background decoration */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-warm' />
        <div className='absolute bottom-20 left-20 w-80 h-80 bg-secondary-400/5 rounded-full blur-3xl animate-pulse-warm' style={{ animationDelay: '1s' }} />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold gradient-text mb-4'>
              About Me
            </h2>
            <p className='text-lg text-foreground/70 max-w-2xl mx-auto'>
              Passionate about creating scalable software solutions and leading technical teams to success
            </p>
          </div>

          <div className='grid lg:grid-cols-12 gap-12 items-start'>
            {/* Left Column - Photo and Personal Info */}
            <div className='lg:col-span-4'>
              <div className='sticky top-8'>
                {/* Avatar */}
                <div className='relative mb-8 group'>
                  <div className='relative w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-warm-lg group-hover:shadow-warm transition-shadow'>
                    <Image
                      src={personalInfo.avatar || '/avatar.jpg'}
                      alt={personalInfo.name}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-300'
                      priority
                    />
                  </div>
                  <div className='absolute -inset-4 bg-gradient-warm opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity' />
                </div>

                {/* Contact Info */}
                <div className='bg-card border border-border rounded-xl p-6 shadow-sm'>
                  <h3 className='text-xl font-semibold mb-4 text-primary'>Get In Touch</h3>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-3 text-foreground/80'>
                      <MapPin className='h-5 w-5 text-primary flex-shrink-0' />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className='flex items-center gap-3 text-foreground/80'>
                      <Mail className='h-5 w-5 text-primary flex-shrink-0' />
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className='hover:text-primary transition-colors'
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                    {personalInfo.phone && (
                      <div className='flex items-center gap-3 text-foreground/80'>
                        <Phone className='h-5 w-5 text-primary flex-shrink-0' />
                        <a 
                          href={`tel:${personalInfo.phone}`}
                          className='hover:text-primary transition-colors'
                        >
                          {personalInfo.phone}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {personalInfo.resumeUrl && (
                    <Button
                      variant='warm'
                      size='sm'
                      className='w-full mt-6'
                      onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                    >
                      <Download className='h-4 w-4 mr-2' />
                      Download Resume
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Bio and Skills */}
            <div className='lg:col-span-8 space-y-12'>
              {/* Bio */}
              <div>
                <h3 className='text-2xl font-bold mb-6'>
                  <span className='text-primary'>{personalInfo.title}</span>
                </h3>
                <div className='prose prose-lg max-w-none text-foreground/80'>
                  <p className='leading-relaxed'>
                    {personalInfo.bio}
                  </p>
                  
                  <p className='leading-relaxed mt-6'>
                    With a proven track record of evolution from part-time developer to architect, 
                    I specialize in designing and implementing microservices architectures that scale. 
                    My expertise spans across multiple technologies and methodologies, with a particular 
                    focus on Domain-Driven Design (DDD) and Test-Driven Development (TDD) principles.
                  </p>

                  <p className='leading-relaxed mt-6'>
                    Currently serving as a Software Architect at Hedlyner, I lead technical decisions 
                    and establish development best practices across multiple projects. My approach 
                    combines deep technical knowledge with strong leadership skills to deliver 
                    high-quality, maintainable software solutions.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className='text-2xl font-bold mb-8'>Technical Expertise</h3>
                <div className='space-y-8'>
                  {Object.entries(skillCategories).map(([category, categorySkills]) => (
                    <div key={category} className='bg-card border border-border rounded-xl p-6'>
                      <h4 className='text-lg font-semibold text-primary mb-4'>
                        {categoryLabels[category as keyof typeof categoryLabels] || category}
                      </h4>
                      <div className='grid sm:grid-cols-2 gap-4'>
                        {categorySkills.map((skill) => (
                          <div key={skill.id} className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                              <span className='text-xl' role='img' aria-label={skill.name}>
                                {skill.icon}
                              </span>
                              <span className='font-medium'>{skill.name}</span>
                            </div>
                            <div className='flex items-center gap-2'>
                              <div className='w-20 h-2 bg-muted rounded-full overflow-hidden'>
                                <div 
                                  className='h-full bg-gradient-warm transition-all duration-1000 ease-out'
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                              <span className='text-sm text-foreground/60 w-8 text-right'>
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className='bg-gradient-warm-subtle border border-primary/20 rounded-xl p-8 text-center'>
                <h3 className='text-2xl font-bold mb-4'>Let's Work Together</h3>
                <p className='text-foreground/80 mb-6 max-w-2xl mx-auto'>
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and ways to contribute to meaningful software solutions.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button
                    variant='warm'
                    size='lg'
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Start a Conversation
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='border-primary/30 hover:border-primary'
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View My Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}