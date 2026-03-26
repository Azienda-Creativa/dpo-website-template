import { ShieldCheck, Mail, Phone, MapPin, Award, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-stone-300 py-16 border-t border-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="h-8 w-8 text-rose-300" />
              <span className="font-serif font-bold text-2xl text-white tracking-tight">Lumina <span className="text-teal-200/60 font-sans font-medium text-lg">Privacy</span></span>
            </div>
            <p className="text-teal-100/70 leading-relaxed mb-8 max-w-sm">
              Specialized in ethical and inclusive GDPR compliance for SMEs. We make privacy human, understandable, and workable.
            </p>
            <div className="flex items-center gap-6 text-sm font-medium">
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-rose-300"/> CIPP/E</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-rose-300"/> CIPM</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold mb-6 text-lg">Contact</h3>
            <ul className="space-y-4 text-teal-100/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-300 shrink-0 mt-0.5" />
                <span>Zuidas 123<br/>1082 AB Amsterdam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-300 shrink-0" />
                <span>020 - 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-300 shrink-0" />
                <span>hallo@luminaprivacy.nl</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-bold mb-6 text-lg">Company Details</h3>
            <ul className="space-y-4 text-teal-100/70">
              <li>CoC: 12345678</li>
              <li>VAT: NL123456789B01</li>
              <li>
                <a href="#" className="hover:text-rose-300 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-300 transition-colors">Terms & Conditions</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-teal-900 text-sm text-center text-teal-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Lumina Privacy. All rights reserved.</p>
          <p className="flex items-center gap-1">Developed by aziendacreativa.nl</p>
        </div>
      </div>
    </footer>
  );
}
