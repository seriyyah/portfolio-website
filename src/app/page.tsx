import { About } from '@/components/about';
import { Hero } from '@/components/hero';
import { Navigation } from '@/components/navigation';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <Navigation />
      <main>
        <Hero />
        
        {/* About Me Section */}
        <About />
        
        <section id='skills' className='min-h-screen flex items-center justify-center bg-background'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold gradient-text mb-4'>Skills</h2>
            <p className='text-foreground/70'>Skills section coming soon...</p>
          </div>
        </section>
        
        <section id='experience' className='min-h-screen flex items-center justify-center bg-background-secondary'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold gradient-text mb-4'>Experience</h2>
            <p className='text-foreground/70'>Experience section coming soon...</p>
          </div>
        </section>
        
        <section id='projects' className='min-h-screen flex items-center justify-center bg-background'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold gradient-text mb-4'>Projects</h2>
            <p className='text-foreground/70'>Projects section coming soon...</p>
          </div>
        </section>
        
        <section id='contact' className='min-h-screen flex items-center justify-center bg-background-secondary'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold gradient-text mb-4'>Contact</h2>
            <p className='text-foreground/70'>Contact section coming soon...</p>
          </div>
        </section>
      </main>
    </div>
  );
}
