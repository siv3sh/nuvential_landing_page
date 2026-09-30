import { useLenis } from '@/hooks/useLenis';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { Services } from '@/components/sections/Services';
import { Work } from '@/components/sections/Work';
import { Process } from '@/components/sections/Process';
import { WhyNuential } from '@/components/sections/WhyNuential';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

function App() {
  useLenis();

  return (
    <div className="relative min-h-screen bg-bg-base">
      <GradientMesh />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Work />
        <Services />
        <Process />
        <WhyNuential />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
