// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900/80 border-t border-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Abdillah Ally
            </Link>
            <p className="text-gray-500 mt-2 text-sm">
              Building exceptional digital experiences
            </p>
          </div>
          
          <div className="flex space-x-6">
            {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors"
                aria-label={social}
              >
                <div className="bg-gray-800 p-2 rounded-full">
                  <div className="bg-gray-700 border-2 border-dashed rounded-xl w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Abdillah Ally. All rights reserved.</p>
          {/* <p className="mt-2">Designed and built with Next.js and Tailwind CSS</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;