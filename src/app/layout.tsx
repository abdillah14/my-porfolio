// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticleBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abdillah Ally | Software Engineer',
  description: 'Senior Software Engineer specializing in modern web technologies',
  keywords: 'software engineer, web developer, react, next.js, portfolio',
  openGraph: {
    title: 'Abdillah Ally | Software Engineer',
    description: 'Senior Software Engineer specializing in modern web technologies',
    url: 'https://alexmorgan.dev',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen flex flex-col`}>
        <ParticlesBackground />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}