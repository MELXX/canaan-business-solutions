import { motion } from "motion/react";

export const Insights = () => {
  const articles = [
    {
      title: "Navigating ESG Integration in Emerging Markets",
      date: "May 2026",
      preview: "How businesses can align sustainability with performance without compromising on profitability.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Future of Scalable Finance Functions",
      date: "April 2026",
      preview: "Moving from bookkeeping to strategic insight: the evolution of the modern CFO and their role in scaling firms.",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Reporting Frameworks for Sustainable Scale",
      date: "March 2026",
      preview: "Effective data strategy is the foundation of transparency and trust with global investors.",
      img: "https://images.unsplash.com/photo-1454165833767-02a6ed8a687a?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-forest font-semibold mb-6 block">Insights & Perspectives</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-12">Knowledge Shared.</h1>
            <p className="text-xl text-muted font-light leading-relaxed">
               Our insights are designed to equip business leaders with practical knowledge, strategic thinking, and financial clarity for the road ahead.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {articles.map((article, i) => (
              <motion.article 
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden mb-8 border border-ink/5">
                  <img 
                    src={article.img} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-muted">{article.date}</span>
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-forest transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-muted font-light mb-8 leading-relaxed">
                  {article.preview}
                </p>
                <button className="text-[10px] uppercase tracking-widest font-bold border-b border-forest pb-1 hover:border-ink transition-colors">
                  Read More
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-ink text-cream mx-6 px-6 relative">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-8 italic">Stay Informed</h2>
            <p className="text-cream/60 mb-12 max-w-lg mx-auto font-light">
              Receive curated insights on finance, business strategy, ESG, and growth—delivered directly to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
               <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-cream/10 border border-cream/10 p-4 focus:border-forest outline-none transition-colors text-cream"
              />
               <button className="bg-cream text-ink px-10 py-4 font-bold uppercase tracking-widest hover:bg-forest hover:text-cream transition-all">
                  Subscribe
               </button>
            </form>
         </div>
      </section>
    </div>
  );
};
