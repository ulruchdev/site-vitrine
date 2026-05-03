import { useSEO } from '../hooks/useSEO';
import { HeroSection } from '../features/home/HeroSection';
import { AboutSection } from '../features/home/AboutSection';
import { SectorsSection } from '../features/home/SectorsSection';
import { FeaturedProjectsSection } from '../features/home/FeaturedProjectsSection';

export function Home() {
  useSEO({
    title: `Smart Solutions for African Innovation`,
    description:
      'Locow Tech — Leading provider of intelligent solutions, consulting, cybersecurity, technological services, eco-construction, finance, and agricultural technology across Cameroon and Africa.',
    path: '/',
    schemaType: 'WebPage',
  });

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SectorsSection />
      <FeaturedProjectsSection />
    </div>
  );
}
