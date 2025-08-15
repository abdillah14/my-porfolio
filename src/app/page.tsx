// app/page.tsx
import Hero from '@/components/Hero';
import Technologies from '@/components/Technologies';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutPage from './about/page';
import Portfolio from '@/components/Portfolio';
import ContactPage from './contact/page';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPage />
      <FeaturedProjects />
      <ContactPage />
    </>
  );
}