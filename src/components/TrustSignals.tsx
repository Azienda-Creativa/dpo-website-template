import { ShieldCheck, Award, HeartHandshake } from 'lucide-react';

export default function TrustSignals() {
  return (
    <section className="py-16 bg-transparent border-y border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-stone-400 uppercase tracking-widest">
            Trusted by conscious businesses
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-serif font-bold text-teal-900 mb-3">CIPP/E & CIPM</h3>
            <p className="text-stone-600 text-sm max-w-xs leading-relaxed">
              Officially recognized by the IAPP. Your guarantee for up-to-date and in-depth knowledge of European privacy legislation.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-serif font-bold text-teal-900 mb-3">DPA Guidelines</h3>
            <p className="text-stone-600 text-sm max-w-xs leading-relaxed">
              Our advice is 100% in line with the current guidelines of the Data Protection Authority, translated into practice.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
              <HeartHandshake className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-serif font-bold text-teal-900 mb-3">Inclusive & Ethical</h3>
            <p className="text-stone-600 text-sm max-w-xs leading-relaxed">
              We look beyond the law. We help you process data in a way that is respectful of every individual.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
