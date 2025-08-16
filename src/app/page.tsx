// app/page.tsx
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPage />
      <FeaturedProjects projects={projects} />
      <ContactPage />
    </>
  );
}