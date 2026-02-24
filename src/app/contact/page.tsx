'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, User, Send } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const inputClasses =
    `w-full bg-gray-800 border border-gray-700
     rounded-lg pl-12 pr-4 py-3
     focus:outline-none focus:ring-2 focus:ring-blue-500
     text-gray-200 placeholder-gray-500`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatusMessage('✅ Message sent successfully!');
        form.reset();
      } else {
        setStatusMessage('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatusMessage('❌ An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl lg:text-4xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <Info icon={Mail} title="Email" text="abdillahally378@gmail.com" />
              <Info icon={Phone} title="Phone" text="+257 69 088 722" />
              <Info icon={MapPin} title="Location" text="Bujumbura, Burundi" />
            </div>

            <div className="mt-10 flex gap-4">
              <Social href="https://github.com/abdillah14" icon={Github} />
              <Social href="https://www.linkedin.com/in/abdillah-ally-50a347269" icon={Linkedin} />
              <Social href="https://x.com/Abdillahally10" icon={Twitter} />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send me a message</h2>

            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/abdillahally378@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {/* Name */}
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className={inputClasses}
                />
              </div>

              {/* Message */}
              <div className="relative">
                <Send className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
                <textarea
                  name="message"
                  rows={5}
                  minLength={10}
                  required
                  placeholder="Your message here..."
                  className={inputClasses}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2
                           bg-gradient-to-r from-blue-500 to-purple-600
                           text-white font-medium py-3 rounded-lg
                           hover:opacity-90 transition
                           disabled:opacity-50`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </button>

              {/* Status Toast */}
              {statusMessage && (
                <div className="p-4 rounded-lg text-white bg-green-600 mt-4">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Helpers */
function Info({ icon: Icon, title, text }: any) {
  return (
    <div className="flex items-start">
      <div className="bg-blue-500/10 p-3 rounded-full mr-4 text-blue-400">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
}

function Social({ href, icon: Icon }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white transition"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}