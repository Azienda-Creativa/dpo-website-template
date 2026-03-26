import { ArrowRight, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadMagnet from '../components/LeadMagnet';
import TrustSignals from '../components/TrustSignals';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-transparent py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-800 text-sm font-medium mb-6 border border-teal-100">
                <HeartHandshake className="w-4 h-4" /> Human-Centric Privacy Compliance
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-teal-900 tracking-tight mb-6 leading-tight">
                Privacy is more than rules. It's <span className="text-rose-400 italic">respect</span> for people.
              </h1>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                We help conscious and inclusive businesses become GDPR-proof. No cold bureaucracy, but a warm, practical approach that builds trust with your diverse audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-teal-800 text-stone-50 px-8 py-4 rounded-full font-medium text-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Schedule an Intro <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/diensten" 
                  className="bg-white/80 backdrop-blur-sm text-teal-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-white transition-all border border-stone-200 flex items-center justify-center"
                >
                  Our Approach
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-teal-100 rounded-full blur-3xl opacity-40 transform translate-x-10 translate-y-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Diverse professionals in overleg" 
                className="rounded-[2rem] shadow-2xl relative z-10 object-cover h-[600px] w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Value Proposition */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Inclusieve werkomgeving" 
                className="rounded-[2rem] shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-teal-800 text-white p-8 rounded-[2rem] shadow-xl hidden md:block max-w-xs">
                <p className="text-2xl font-serif font-bold mb-2">Inclusive & Safe</p>
                <p className="text-sm text-teal-100">We protect data so you can create a safe environment for everyone.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-900 mb-6">
                Why choose an inclusive Privacy Officer?
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                The GDPR affects everyone. We believe that good privacy policy takes diversity into account. Whether it's processing gender data, accessibility of privacy statements, or training a diverse team.
              </p>
              <ul className="space-y-5">
                {[
                  'Independent, empathetic, and objective advice',
                  'Focus on ethics and inclusivity in data processing',
                  'Direct access to specialist knowledge (CIPP/E)',
                  'Understandable language, accessible to your entire team'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-rose-400" />
                    </div>
                    <span className="text-stone-700 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LeadMagnet />

    </div>
  );
}
