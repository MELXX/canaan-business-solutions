import { motion } from "motion/react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { articles } from "../data/articles";

export const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <div className="pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-6">
        <Link 
          to="/articles" 
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-muted hover:text-forest transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Articles
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs uppercase tracking-widest text-forest font-semibold mb-6 block">
            {article.date}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-muted font-light mb-12 leading-relaxed border-l-4 border-forest pl-6">
            {article.preview}
          </p>
          
          <div className="aspect-video w-full overflow-hidden mb-16">
            <img 
              src={article.img} 
              alt={article.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-lg prose-stone max-w-none">
            {article.content.map((paragraph, idx) => {
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-2xl font-serif mt-12 mb-6 text-ink">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("• ")) {
                return (
                  <ul key={idx} className="list-disc pl-6 mb-4 text-ink/80 font-light leading-relaxed">
                    <li>{paragraph.replace("• ", "")}</li>
                  </ul>
                );
              }
              return (
                <p key={idx} className="mb-6 text-ink/80 font-light leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </motion.div>
      </article>

      <section className="mt-32 pt-20 border-t border-ink/5 px-6">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-8 italic">Ready to transform your business?</h2>
            <Link to="/contact" className="inline-block bg-ink text-cream px-10 py-4 font-bold uppercase tracking-widest hover:bg-forest hover:text-cream transition-all">
               Get in Touch
            </Link>
         </div>
      </section>
    </div>
  );
};
