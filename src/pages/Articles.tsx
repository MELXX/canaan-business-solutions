import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export const Articles = () => {
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
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/articles/${article.id}`} className="block">
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
                  <span className="inline-block text-[10px] uppercase tracking-widest font-bold border-b border-forest pb-1 group-hover:border-ink transition-colors">
                    Read More
                  </span>
                </Link>
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
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-cream/10 border border-cream/10 p-4 focus:border-forest outline-none transition-colors text-cream"
              />
               <button type="submit" className="bg-cream text-ink px-10 py-4 font-bold uppercase tracking-widest hover:bg-forest hover:text-cream transition-all">
                  Subscribe
               </button>
            </form>
         </div>
      </section>
    </div>
  );
};
