import { CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section className="bg-teal-900 text-stone-50 py-24 relative overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[100%] rounded-full bg-teal-800 blur-3xl opacity-50"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[80%] rounded-full bg-rose-900 blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Copy Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-400/20 text-rose-200 text-sm font-medium mb-8 border border-rose-400/30">
              <FileText className="w-4 h-4" /> Free E-book
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              The Inclusive GDPR Checklist for SMEs
            </h2>
            <p className="text-teal-50/80 text-lg mb-10 leading-relaxed">
              Privacy compliance doesn't have to be cold and legalistic. Download our free checklist and discover how to process data safely with respect for diversity and inclusion.
            </p>
            
            <ul className="space-y-5 mb-8">
              {[
                'Direct insight into your privacy risks',
                'Tips for ethical data collection and bias prevention',
                'Written in clear, accessible language'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-teal-50">
                  <CheckCircle2 className="w-6 h-6 text-rose-300 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form Side */}
          <div className="bg-[#FDFBF7] rounded-[2.5rem] p-10 shadow-2xl text-stone-800">
            <h3 className="text-2xl font-serif font-bold mb-3 text-teal-900">Download the Checklist</h3>
            <p className="text-stone-500 text-sm mb-8">Receive the PDF directly in your inbox.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-5 py-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all bg-white"
                  placeholder="Your first name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-5 py-4 rounded-xl border border-stone-200 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all bg-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 group mt-4"
              >
                Send me the Checklist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-stone-400 text-center mt-6">
                We respect your privacy. No spam, promised.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
