import { ShieldCheck, FileSearch, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-teal-600" />,
      title: "External Data Protection Officer (DPO)",
      description: "Hire us as your independent, external supervisor. We advise, inform, and monitor your GDPR compliance with an empathetic, human-centric approach.",
      features: ["Independent supervision", "Inclusive team training", "Contact point for the DPA", "Advising on DPIAs"]
    },
    {
      icon: <FileSearch className="w-10 h-10 text-teal-600" />,
      title: "Ethical GDPR Audit & Implementation",
      description: "We review your processes with an eye for both the law and ethics. Prevent bias in data and ensure transparent, understandable privacy statements for everyone.",
      features: ["Ethical Gap analysis", "Inclusive Processing Register", "Data breach protocol", "Accessible documentation"]
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-teal-600" />,
      title: "Privacy by Design & Inclusivity",
      description: "Are you developing new services? We advise on how to build privacy-friendly and inclusively, so your product is safe and respectful for every user.",
      features: ["Data Protection Impact Assessment", "Bias & Ethics review", "Data minimization", "Security by Default"]
    }
  ];

  return (
    <div className="bg-transparent min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-teal-900 mb-6">Our Services</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Practical solutions for complex privacy issues, with a focus on ethics, diversity, and the people behind the data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-10 border border-stone-100 hover:shadow-xl transition-all duration-300 group">
              <div className="mb-8 w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-teal-900 mb-4">{service.title}</h3>
              <p className="text-stone-600 mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-rose-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-teal-900 rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-400 rounded-full blur-[100px] opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to make privacy human?</h2>
            <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a free introductory meeting. We will discuss your current situation and see how we can set up your organization safely and inclusively.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-teal-700 text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-teal-600 transition-colors shadow-lg"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
