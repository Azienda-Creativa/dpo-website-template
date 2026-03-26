import { BookOpen, FileText, ExternalLink } from 'lucide-react';

export default function Resources() {
  const articles = [
    {
      title: "Privacy and Diversity: Why bias in algorithms is a GDPR risk",
      excerpt: "How do you ensure your data analysis doesn't exclude groups? A practical guide to ethical data use for SMEs.",
      date: "October 12, 2023",
      category: "Ethics & Inclusion"
    },
    {
      title: "Writing Accessible Privacy Statements",
      excerpt: "Legal jargon excludes people. Learn how to write a privacy statement at a B1 level that everyone can understand.",
      date: "September 5, 2023",
      category: "Communication"
    },
    {
      title: "When is a Data Protection Officer (DPO) mandatory?",
      excerpt: "Not every organization needs a DPO. Discover the criteria of the Data Protection Authority and take the test.",
      date: "August 22, 2023",
      category: "Legislation"
    }
  ];

  return (
    <div className="bg-transparent min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-teal-900 mb-6">Resources</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Insights, articles, and guides on privacy legislation, ethics, and building an inclusive data culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <article key={index} className="bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-teal-700 bg-teal-50 px-4 py-1.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-stone-400">{article.date}</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-teal-900 mb-4 leading-snug group-hover:text-teal-700 transition-colors">
                  {article.title}
                </h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>
              <div className="px-8 py-5 border-t border-stone-100 bg-white/50">
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-teal-800 hover:text-teal-600 transition-colors">
                  Read full article <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 bg-white/80 backdrop-blur-sm rounded-[3rem] p-12 md:p-16 text-center shadow-sm border border-stone-200 flex flex-col items-center">
          <BookOpen className="w-16 h-16 text-rose-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-900 mb-6">Free Guide: Privacy in Plain English</h2>
          <p className="text-stone-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            No legal jargon, just clear examples. Download our most popular guide for conscious entrepreneurs.
          </p>
          <button className="bg-teal-800 text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-teal-700 transition-colors flex items-center gap-3 shadow-lg">
            <FileText className="w-5 h-5" /> Download PDF (2MB)
          </button>
        </div>

      </div>
    </div>
  );
}
