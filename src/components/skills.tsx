'use client';

import { skills } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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

  const categoryColors = {
    backend: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    frontend: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    database: 'bg-green-500/10 text-green-600 border-green-500/20',
    devops: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    tools: 'bg-pink-500/10 text-pink-600 border-pink-500/20'
  };

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const categories = ['all', ...Object.keys(skillCategories)];

  return (
    <section
      id='skills'
      className='py-24 bg-background relative overflow-hidden'
    >
      {/* Background decoration */}
      <div className='absolute inset-0'>
        <div className='absolute top-40 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-warm' />
        <div className='absolute -top-20 right-40 w-96 h-96 bg-secondary-400/5 rounded-full blur-3xl animate-pulse-warm' style={{ animationDelay: '2s' }} />
        <div className='absolute bottom-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-warm' style={{ animationDelay: '1s' }} />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold gradient-text mb-4'>
              Technical Skills
            </h2>
            <p className='text-lg text-foreground/70 max-w-2xl mx-auto'>
              Expertise across the full stack with focus on scalable architectures and modern development practices
            </p>
          </div>

          {/* Category Filter */}
          <div className='flex flex-wrap justify-center gap-3 mb-12'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300',
                  'border hover:scale-105 active:scale-95',
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-warm border-primary'
                    : 'bg-card border-border text-foreground/70 hover:border-primary/30 hover:text-foreground'
                )}
              >
                {category === 'all' 
                  ? 'All Skills' 
                  : categoryLabels[category as keyof typeof categoryLabels]
                }
              </button>
            ))}
          </div>

          {/* Skills Display */}
          {selectedCategory === 'all' ? (
            /* Category-based layout for "All Skills" */
            <div className='space-y-12'>
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <div key={category} className='group'>
                  <div className='flex items-center gap-4 mb-8'>
                    <h3 className='text-2xl font-bold text-primary'>
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </h3>
                    <div className='flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent' />
                    <span className={cn(
                      'px-3 py-1 rounded-full text-xs font-medium border',
                      categoryColors[category as keyof typeof categoryColors]
                    )}>
                      {categorySkills.length} skills
                    </span>
                  </div>
                  
                  <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {categorySkills.map((skill, index) => (
                      <div 
                        key={skill.id}
                        className='bg-card border border-border rounded-xl p-6 hover:shadow-warm transition-all duration-300 hover:border-primary/30 group/skill'
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className='flex items-center justify-between mb-4'>
                          <div className='flex items-center gap-3'>
                            <span className='text-2xl group-hover/skill:scale-110 transition-transform' role='img' aria-label={skill.name}>
                              {skill.icon}
                            </span>
                            <span className='font-semibold text-lg'>{skill.name}</span>
                          </div>
                          <span className='text-2xl font-bold text-primary'>
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className='w-full h-3 bg-muted rounded-full overflow-hidden'>
                          <div 
                            className='h-full bg-gradient-warm transition-all duration-1000 ease-out rounded-full'
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${index * 0.1 + 0.5}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Grid layout for filtered category */
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {filteredSkills.map((skill, index) => (
                <div 
                  key={skill.id}
                  className='bg-card border border-border rounded-xl p-6 hover:shadow-warm transition-all duration-300 hover:border-primary/30 group/skill transform hover:-translate-y-2'
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className='text-center'>
                    <div className='text-4xl mb-4 group-hover/skill:scale-110 transition-transform'>
                      {skill.icon}
                    </div>
                    <h3 className='font-semibold text-lg mb-4'>{skill.name}</h3>
                    
                    {/* Circular progress */}
                    <div className='relative w-20 h-20 mx-auto mb-4'>
                      <svg className='w-20 h-20 transform -rotate-90' viewBox='0 0 80 80'>
                        <defs>
                          <linearGradient id={`gradient-${skill.id}`} x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset='0%' stopColor='#f59e0b' />
                            <stop offset='100%' stopColor='#f97316' />
                          </linearGradient>
                        </defs>
                        <circle
                          cx='40'
                          cy='40'
                          r='30'
                          stroke='currentColor'
                          strokeWidth='6'
                          fill='transparent'
                          className='text-muted'
                        />
                        <circle
                          cx='40'
                          cy='40'
                          r='30'
                          stroke={`url(#gradient-${skill.id})`}
                          strokeWidth='6'
                          fill='transparent'
                          strokeDasharray={`${2 * Math.PI * 30}`}
                          strokeDashoffset={`${2 * Math.PI * 30 * (1 - skill.level / 100)}`}
                          className='transition-all duration-1000 ease-out'
                          strokeLinecap='round'
                          style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                        />
                      </svg>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-2xl font-bold text-primary'>{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Summary */}
          <div className='mt-16 bg-gradient-warm-subtle border border-primary/20 rounded-2xl p-8'>
            <div className='text-center'>
              <h3 className='text-2xl font-bold mb-4'>Skill Overview</h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-primary mb-2'>7+</div>
                  <div className='text-foreground/70'>Years Experience</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-primary mb-2'>{skills.length}</div>
                  <div className='text-foreground/70'>Technical Skills</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-primary mb-2'>{Object.keys(skillCategories).length}</div>
                  <div className='text-foreground/70'>Specializations</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-primary mb-2'>{Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%</div>
                  <div className='text-foreground/70'>Average Proficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}