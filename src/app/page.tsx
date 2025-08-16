// app/page.tsx
import Hero from '@/components/Hero';
import Technologies from '@/components/Technologies';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutPage from './about/page';
import Portfolio from '@/components/Portfolio';
import ContactPage from './contact/page';
import ProjectFilter from '@/components/ProjectFilter';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPage />
      <ProjectFilter projects={projects} />
      <ContactPage />
    </>
  );
}