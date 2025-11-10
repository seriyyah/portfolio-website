'use client';

import { workExperience } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';
import { Calendar, MapPin, ExternalLink, Award, Code, Users } from 'lucide-react';
import { Button } from './ui/button';

export function Experience() {
  const formatDateRange = (startDate: Date, endDate?: Date) => {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : 'Present';
    return `${start} - ${end}`;
  };

  const calculateDuration = (startDate: Date, endDate?: Date) => {
    const end = endDate || new Date();
    const diffTime = Math.abs(end.getTime() - startDate.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    
    if (diffMonths < 12) {
      return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
    }
    
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    
    if (months === 0) {
      return `${years} year${years > 1 ? 's' : ''}`;
    }
    
    return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
  };

  return (
    <section
      id='experience'
      className='py-24 bg-background-secondary relative overflow-hidden'
    >
      {/* Background decoration */}
      <div className='absolute inset-0'>
        <div className='absolute top-32 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-warm' />
        <div className='absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-400/5 rounded-full blur-3xl animate-pulse-warm' style={{ animationDelay: '2s' }} />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-warm' style={{ animationDelay: '1s' }} />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold gradient-text mb-4'>
              Work Experience
            </h2>
            <p className='text-lg text-foreground/70 max-w-2xl mx-auto'>
              7+ years journey from developer to architect, building scalable solutions and leading technical teams
            </p>
          </div>

          {/* Timeline */}
          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20' />
            
            <div className='space-y-12'>
              {workExperience.map((job, index) => (
                <div key={job.id} className='relative flex gap-8 group'>
                  {/* Timeline dot */}
                  <div className='flex-shrink-0 relative'>
                    <div className='w-16 h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center shadow-warm group-hover:shadow-warm-lg transition-shadow'>
                      <div className='w-6 h-6 bg-primary rounded-full animate-pulse' />
                    </div>
                    <div className='absolute -inset-2 bg-primary/20 rounded-full blur-md group-hover:bg-primary/30 transition-colors' />
                  </div>

                  {/* Content */}
                  <div className='flex-1 pb-12'>
                    <div className='bg-card border border-border rounded-xl p-8 hover:shadow-warm transition-all duration-300 hover:border-primary/30 group-hover:transform group-hover:-translate-y-1'>
                      {/* Header */}
                      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6'>
                        <div>
                          <h3 className='text-2xl font-bold text-primary mb-1'>
                            {job.position}
                          </h3>
                          <div className='flex items-center gap-2 mb-2'>
                            <h4 className='text-xl font-semibold'>
                              {job.company}
                            </h4>
                            {job.companyUrl && (
                              <a
                                href={job.companyUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-primary hover:text-primary/80 transition-colors'
                                aria-label={`Visit ${job.company} website`}
                              >
                                <ExternalLink className='h-4 w-4' />
                              </a>
                            )}
                          </div>
                        </div>
                        
                        <div className='flex flex-col sm:flex-row gap-4 text-sm text-foreground/70'>
                          <div className='flex items-center gap-2'>
                            <Calendar className='h-4 w-4 text-primary' />
                            <span>{formatDateRange(job.startDate, job.endDate)}</span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <MapPin className='h-4 w-4 text-primary' />
                            <span>{job.location}</span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <Users className='h-4 w-4 text-primary' />
                            <span>{calculateDuration(job.startDate, job.endDate)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className='text-foreground/80 mb-6 leading-relaxed'>
                        {job.description}
                      </p>

                      {/* Technologies */}
                      <div className='mb-6'>
                        <div className='flex items-center gap-2 mb-3'>
                          <Code className='h-4 w-4 text-primary' />
                          <span className='font-medium text-sm'>Technologies Used</span>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                          {job.technologies.map((tech) => (
                            <span
                              key={tech}
                              className='px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-colors'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <div className='flex items-center gap-2 mb-3'>
                          <Award className='h-4 w-4 text-primary' />
                          <span className='font-medium text-sm'>Key Achievements</span>
                        </div>
                        <ul className='space-y-2'>
                          {job.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className='flex items-start gap-3 text-foreground/80'
                            >
                              <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0' />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Summary */}
          <div className='mt-16 bg-gradient-warm-subtle border border-primary/20 rounded-2xl p-8'>
            <div className='text-center mb-8'>
              <h3 className='text-2xl font-bold mb-4'>Career Journey</h3>
              <p className='text-foreground/80 max-w-3xl mx-auto'>
                My career progression demonstrates continuous growth and increasing responsibility, 
                evolving from backend development roles to architectural leadership positions.
              </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>6</div>
                <div className='text-foreground/70 font-medium'>Companies</div>
                <div className='text-sm text-foreground/60 mt-1'>Diverse experience</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>7+</div>
                <div className='text-foreground/70 font-medium'>Years Experience</div>
                <div className='text-sm text-foreground/60 mt-1'>Continuous growth</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-primary mb-2'>3</div>
                <div className='text-foreground/70 font-medium'>Leadership Roles</div>
                <div className='text-sm text-foreground/60 mt-1'>Team & tech lead</div>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
              <Button
                variant='warm'
                size='lg'
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-primary/30 hover:border-primary'
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}