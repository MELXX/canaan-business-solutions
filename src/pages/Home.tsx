import { motion } from "motion/react";
import { ArrowRight, BarChart3, Briefcase, Leaf, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Financial Strategy",
    desc: "High-level financial insight to support strategic decisions and growth acceleration.",
    icon: BarChart3,
  },
  {
    title: "Business Advisory",
    desc: "Building strong foundations and scalable business models for founders and executives.",
    icon: Briefcase,
  },
  {
    title: "ESG & Impact",
    desc: "Embedding sustainable and responsible business practices into your core strategy.",
    icon: Leaf,
  },
  {
    title: "Support Services",
    desc: "Tax & Accounting Compliance. Internal Reviews and annual financial statement preparation.",
    icon: CheckCircle2,
  }
];

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,79,46,0.05)_0%,transparent_50%)]" />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-forest font-semibold mb-6 block drop-shadow-sm">
              Canaan Business House
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.95] mb-8 lg:-mr-40 relative z-10">
              Strategic Advisory <br />
              <span className="text-forest italic font-normal">for Sustainable</span> <br />
              Growth.
            </h1>
            <p className="text-lg text-muted max-w-lg mb-10 leading-relaxed font-light">
              A multidisciplinary business solutions hub delivering tailored advisory across the full business lifecycle, from foundation to sustainable scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-3">
                Book a Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-outline">
                Our Services
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink/80 bg-ink/5 w-fit px-4 py-2 rounded-sm border border-ink/10">
              <Shield size={14} className="text-forest" />
              Level 1 B-BBEE Contributor
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] bg-ink/5 border border-ink/10 relative overflow-hidden group">
               <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Office" 
                className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center p-8 bg-cream/90 backdrop-blur shadow-2xl border border-ink/5 max-w-xs">
                    <span className="font-serif italic text-2xl mb-2 block">Strategic.</span>
                    <span className="font-serif italic text-2xl mb-2 block">Practical.</span>
                    <span className="font-serif italic text-2xl block">Measurable.</span>
                 </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-forest/20 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Intro Snapshot */}
      <section className="py-32 bg-ink text-cream relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20 text-reveal">
            <motion.h2 
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl mb-8 leading-tight"
            >
              We don’t just advise — we partner, implement, and grow with you.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border border-cream/10">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-ink p-10 hover:bg-forest transition-colors duration-500 group"
              >
                <service.icon className="mb-6 text-forest group-hover:text-cream transition-colors" size={32} />
                <h3 className="text-xl mb-4">{service.title}</h3>
                <p className="text-sm text-cream/50 leading-relaxed font-light">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-5xl">Our Value Proposition</h2>
                  <p className="text-muted text-lg font-light leading-relaxed">
                    We combine deep financial expertise with strategic insight to help our clients make confident decisions and navigate complexity with clarity.
                  </p>
               </div>
               
               <div className="space-y-8">
                  {[
                    "End-to-end involvement (diagnostics → execution → support)",
                    "Tailored, not templated solutions",
                    "Strong finance + strategy + impact integration",
                    "Trusted long-term partner"
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-1.5 h-1.5 bg-forest rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-lg font-medium">{item}</span>
                    </motion.div>
                  ))}
               </div>
            </div>

            <div className="relative">
                <div className="aspect-video bg-ink/5 border border-ink/10 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                      alt="Strategy Meeting" 
                      className="w-full h-full object-cover scale-110 grayscale" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-forest/20 mix-blend-overlay" />
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-ink/10 pt-12">
                   <div>
                      <span className="block text-4xl font-serif mb-2">100%</span>
                      <span className="text-[10px] uppercase tracking-widest text-muted">Bespoke Solutions</span>
                   </div>
                   <div>
                      <span className="block text-4xl font-serif mb-2">Level 1</span>
                      <span className="text-[10px] uppercase tracking-widest text-muted">B-BBEE Contributor</span>
                   </div>
                   <div>
                      <span className="block text-4xl font-serif mb-2">Impact</span>
                      <span className="text-[10px] uppercase tracking-widest text-muted">Driven Growth</span>
                   </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest text-cream">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
           <h2 className="text-4xl md:text-6xl leading-tight">Ready to build a resilient, future-ready business?</h2>
           <div className="flex justify-center gap-6">
              <Link to="/contact" className="bg-cream text-forest px-10 py-4 font-medium transition-all hover:bg-ink hover:text-cream">
                Start Your Journey
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};
