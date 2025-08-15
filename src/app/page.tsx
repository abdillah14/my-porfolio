// app/page.tsx
import Hero from '@/components/Hero';
import Technologies from '@/components/Technologies';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutPage from './about/page';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPage />
      <Technologies />
      <FeaturedProjects />
    </>
  );
}