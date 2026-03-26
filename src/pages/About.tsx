import { Award, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-transparent min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
             <div className="absolute inset-0 bg-teal-100 rounded-full blur-3xl opacity-60 transform -translate-x-10 translate-y-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Sarah Peters - DPO Consultant" 
              className="rounded-[2rem] shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-teal-900 mb-6">About Us</h1>
            <h2 className="text-2xl font-medium text-teal-700 mb-6">Driven by ethics, diversity, and privacy</h2>
            
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed mb-10">
              <p>
                My name is Sarah Peters, founder of Lumina Privacy. As a female entrepreneur in the tech and legal sector, I saw that privacy is often approached as a cold, bureaucratic checklist. That had to change.
              </p>
              <p>
                I believe that privacy is fundamentally about <strong>respect for people</strong>. In an inclusive society, the safe processing of personal data is essential to protect vulnerabilities and ensure equal opportunities. We help companies not only to comply with the law, but to build a culture of trust and inclusivity.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-5 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-stone-100">
                <Heart className="w-8 h-8 text-rose-400 shrink-0" />
                <div>
                  <h3 className="font-bold text-teal-900 text-lg">Inclusive Approach</h3>
                  <p className="text-stone-600 mt-1">We advise on ethical data collection, with an eye for diversity and preventing bias in algorithms.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-stone-100">
                <Award className="w-8 h-8 text-rose-400 shrink-0" />
                <div>
                  <h3 className="font-bold text-teal-900 text-lg">CIPP/E & CIPM Certified</h3>
                  <p className="text-stone-600 mt-1">Internationally recognized certifications for privacy professionals (IAPP), combined with a human perspective.</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-stone-100">
                <ShieldCheck className="w-8 h-8 text-rose-400 shrink-0" />
                <div>
                  <h3 className="font-bold text-teal-900 text-lg">Safe Space</h3>
                  <p className="text-stone-600 mt-1">We create an environment where your team can learn about data protection and security without judgment.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
