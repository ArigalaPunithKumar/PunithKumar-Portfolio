import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30 glass">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 A Punith Kumar. Crafted with passion and modern technologies.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>🚀 Built with React & TypeScript</span>
              <span>•</span>
              <span>⭐ Deployed on Lovable</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;