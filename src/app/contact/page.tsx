// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Dribbble, User, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (hasError: boolean) =>
    `w-full bg-gray-800 border ${hasError ? 'border-red-500' : 'border-gray-700'} 
     rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 
     text-gray-200 placeholder-gray-500`;

  return (
    <section className="py-20" id='contact'>
      <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h1 className="text-3xl lg:text-4xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent relative">
              Get In Touch
                <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 blur-2xl -z-10"></div>
              </h1>
            </div>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>
        {/* Header */}
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div> */}

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email', text: 'abdillahally378@gmail.com', color: 'bg-blue-500/10 text-blue-400' },
                { icon: Phone, title: 'Phone', text: '+257 (69) 088-722', color: 'bg-purple-500/10 text-purple-400' },
                { icon: MapPin, title: 'Location', text: 'Bujumbura, Burundi', color: 'bg-green-500/10 text-green-400' },
              ].map(({ icon: Icon, title, text, color }, i) => (
                <div key={i} className="flex items-start">
                  <div className={`${color} p-3 rounded-full mr-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-gray-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: 'https://github.com/abdillah14', hover: 'hover:text-gray-300' },
                  { icon: Linkedin, href: '#', hover: 'hover:text-blue-500' },
                  { icon: Twitter, href: 'https://x.com/Abdillahally10', hover: 'hover:text-blue-400' },
                  // { icon: Dribbble, href: '#', hover: 'hover:text-pink-500' },
                ].map(({ icon: Icon, href, hover }, i) => (
                  <a
                    key={i}
                    href={href}
                    className={`bg-gray-800 p-3 rounded-full text-gray-400 transition-colors ${hover}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit} action="https://formsubmit.co/abdillahally378@email.com" method="POST" className="space-y-6">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClasses(!!errors.name)}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={inputClasses(!!errors.email)}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div className="relative">
                <Send className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message here..."
                  className={inputClasses(!!errors.message)}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-900/30 border border-green-800 rounded-lg text-green-400">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-900/30 border border-red-800 rounded-lg text-red-400">
                  ❌ There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
