import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';
import { Navigation } from '@/components/navigation';
import { Skills } from '@/components/skills';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <Navigation />
      <main>
        <Hero />
        
        {/* About Me Section */}
        <About />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Experience Section */}
        <Experience />
        
        <section id='projects' className='min-h-screen flex items-center justify-center bg-background'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold gradient-text mb-4'>Projects</h2>
            <p className='text-foreground/70'>Projects section coming soon...</p>
          </div>
        </section>
        
        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}
