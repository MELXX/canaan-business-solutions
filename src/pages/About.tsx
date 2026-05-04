import { motion } from "motion/react";

export const About = () => {
  return (
    <div className="pt-32">
      {/* Intro */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs uppercase tracking-widest text-forest font-semibold mb-6 block"
            >
              Who We Are
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-serif mb-12 leading-none"
            >
              We steward capital responsibly & enable <span className="italic text-forest">growth with clarity.</span>
            </motion.h1>
            <p className="text-xl text-muted font-light leading-relaxed">
              Canaan Business House is a multidisciplinary advisory firm specialising in Financial Strategy, Business Advisory, ESG Investing, and complementary support services that enable sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-32 bg-ink text-cream">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-5xl mb-20 text-center font-serif">Our Approach</h2>
           <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              {[
                { step: "01", name: "Understand", desc: "We deeply engage with your business, challenges, and goals" },
                { step: "02", name: "Diagnose", desc: "We identify gaps, risks, and opportunities" },
                { step: "03", name: "Design", desc: "We develop tailored strategies and solutions" },
                { step: "04", name: "Implement", desc: "We support execution and delivery" },
                { step: "05", name: "Sustain", desc: "We provide ongoing advisory and optimisation" }
              ].map((item, i) => (
                <motion.div 
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-6"
                >
                  <span className="block text-4xl font-serif italic text-forest">{item.step}</span>
                  <div className="h-px bg-cream/10 w-full" />
                  <h3 className="text-xl font-serif">{item.name}</h3>
                  <p className="text-sm opacity-60 leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
           <div className="space-y-10">
              <h2 className="text-4xl font-serif">Our Purpose</h2>
              <p className="text-lg text-muted leading-relaxed">
                To steward capital responsibly, strengthen financial foundations, and enable businesses to grow with clarity, integrity and impact.
              </p>
              <div className="italic text-forest text-2xl font-serif px-6 py-4 border-l-4 border-forest">
                "Our work is grounded in excellence, integrity, and a commitment to building financially resilient and impact-driven businesses."
              </div>
           </div>
           
           <div className="space-y-10">
              <h2 className="text-4xl font-serif">Why Choose Us</h2>
              <ul className="space-y-6">
                 {[
                   "Tailored, client-specific solutions",
                   "Strong finance and advisory expertise",
                   "Hands-on implementation support",
                   "Long-term partnership mindset",
                   "Trusted, ethical, and impact-driven"
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4 items-center border-b border-ink/5 pb-4">
                      <div className="w-1.5 h-1.5 bg-forest rounded-full" />
                      <span className="font-medium">{item}</span>
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>
    </div>
  );
};
