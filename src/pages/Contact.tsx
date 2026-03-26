import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div className="bg-transparent min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-teal-900 mb-6">Contact Us</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Do you have questions about ethical GDPR compliance or want to get acquainted? Fill out the form or call us directly. We are ready for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="bg-white/80 backdrop-blur-sm p-12 rounded-[3rem] border border-stone-100 shadow-sm">
            <h2 className="text-3xl font-serif font-bold text-teal-900 mb-10">Direct Contact</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-teal-900">Phone</h3>
                  <p className="text-stone-500 mt-1">Mon to Fri, 09:00 - 17:00</p>
                  <a href="tel:0201234567" className="text-teal-600 font-medium text-lg mt-2 block hover:underline">020 - 123 45 67</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-teal-900">Email</h3>
                  <p className="text-stone-500 mt-1">We respond within 24 hours.</p>
                  <a href="mailto:hallo@luminaprivacy.nl" className="text-teal-600 font-medium text-lg mt-2 block hover:underline">hallo@luminaprivacy.nl</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-teal-900">Office</h3>
                  <p className="text-stone-600 mt-2 leading-relaxed">
                    Zuidas 123<br />
                    1082 AB Amsterdam<br />
                    Netherlands
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-stone-100">
              <h3 className="text-sm font-medium text-stone-400 uppercase tracking-widest mb-4">Company Details</h3>
              <p className="text-stone-600">CoC: 12345678</p>
              <p className="text-stone-600 mt-2">VAT: NL123456789B01</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-teal-900 p-12 rounded-[3rem] shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-400 rounded-full blur-[100px] opacity-30"></div>
            
            <div className="relative z-10">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-24 h-24 bg-teal-500/20 rounded-full flex items-center justify-center mb-8 border border-teal-500/30">
                    <Send className="w-10 h-10 text-teal-300" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Thank you for your message!</h2>
                  <p className="text-lg text-teal-100 mb-10 leading-relaxed">
                    We have received your request in good order and will contact you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-teal-300 font-medium hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-serif font-bold mb-10">Send a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-teal-100 mb-2">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          required
                          className="w-full px-5 py-4 rounded-xl bg-teal-800/50 border border-teal-700 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition-all text-white placeholder-teal-300/50"
                          placeholder="Sarah"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-teal-100 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          required
                          className="w-full px-5 py-4 rounded-xl bg-teal-800/50 border border-teal-700 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition-all text-white placeholder-teal-300/50"
                          placeholder="Peters"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-teal-100 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-teal-800/50 border border-teal-700 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition-all text-white placeholder-teal-300/50"
                        placeholder="hello@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-teal-100 mb-2">Message</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-teal-800/50 border border-teal-700 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition-all text-white placeholder-teal-300/50 resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-500 text-white font-medium py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-3 mt-4 shadow-lg"
                    >
                      Send Message <Send className="w-5 h-5" />
                    </button>
                    
                    <p className="text-xs text-teal-200/60 text-center mt-6">
                      Your data is processed securely in accordance with our privacy statement.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
