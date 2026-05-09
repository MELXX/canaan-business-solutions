import { motion } from "motion/react";
import { Linkedin, Mail, Twitter } from "lucide-react";

export const Team = () => {
  return (
    <div className="pt-32">
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-forest font-semibold mb-6 block">Our Leadership</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-12 italic">Meet Our Team.</h1>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Managing Director */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-40">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="aspect-[3/4] bg-ink/5 border border-ink/10 relative overflow-hidden"
            >
              <img 
                src="/team/oyena.jpg" 
                alt="Oyena Dyasi" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-10 left-10 text-cream">
                 <h2 className="text-3xl font-serif italic">Oyena Dyasi</h2>
                 <span className="text-[10px] uppercase tracking-widest opacity-60">Managing Director</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                 <h3 className="text-4xl font-serif">A Strategic Visionary</h3>
                 <p className="text-muted leading-relaxed font-light text-lg italic">
                    Chartered Accountant CA(SA), Registered Tax Practitioner
                 </p>
              </div>

              <div className="prose prose-ink max-w-none space-y-6 text-muted font-light text-base leading-relaxed">
                <p>
                  Oyena Dyasi is a strategic finance professional with broad exposure across Insurance, Asset Management, Pension Funds, Medical Aids, and the Manufacturing sector. She brings a well-rounded understanding of complex financial ecosystems and regulated environments.
                </p>
                <p>
                  Her professional experience spans External Audit, IFRS 9 valuations, Corporate Finance, Internal Reviews, Credit Assessment, and strategic finance roles, including serving as Executive Assistant to a CFO and Financial Strategic Analyst within a consulting environment.
                </p>
                <p>
                  Oyena is currently a Masters candidate in Development Finance at Stellenbosch University, further strengthening her focus on sustainable finance, capital stewardship, and impact-driven growth. She leads Canaan Business House with a commitment to excellence, integrity, and purpose-aligned advisory.
                </p>
              </div>

              <div className="flex gap-4 pt-4 border-t border-ink/5">
                 <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-forest transition-colors">
                    <Linkedin size={16} /> LinkedIn Profile
                 </a>
                 <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-forest transition-colors">
                    <Mail size={16} /> Contact Oyena
                 </a>
              </div>
            </motion.div>
          </div>

          {/* Francis Godo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-40">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4">
                 <h3 className="text-4xl font-serif">Process & Operational Excellence</h3>
                 <p className="text-muted leading-relaxed font-light text-lg italic">
                    BEng, MBA, Lean Six Sigma Black Belt, SAFe Agile
                 </p>
              </div>

              <div className="prose prose-ink max-w-none space-y-6 text-muted font-light text-base leading-relaxed">
                <p>
                  Francis Godo is an experienced Process Engineer and Operational Excellence specialist in banking, pharmaceutical, FMCG, and regulated industries.
                </p>
                <p>
                  He focuses on end-to-end process design, automation, and digital transformation, with a track record of improving efficiency, reducing risk, and enhancing customer outcomes in compliance-heavy environments.
                </p>
                <p>
                  His core strengths include process re-engineering, workflow design, OCR/data integration, and connecting business strategy to operational delivery — all through a data-driven, systems-thinking lens.
                </p>
              </div>

              <div className="flex gap-4 pt-4 border-t border-ink/5">
                 <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-forest transition-colors">
                    <Linkedin size={16} /> LinkedIn Profile
                 </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="aspect-[3/4] bg-ink/5 border border-ink/10 relative overflow-hidden order-1 lg:order-2"
            >
              <img 
                src="/team/francis.jpg" 
                alt="Francis Godo" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-10 left-10 text-cream">
                 <h2 className="text-3xl font-serif italic">Francis Godo</h2>
                 <span className="text-[10px] uppercase tracking-widest opacity-60">Process Engineer & OpEx Specialist</span>
              </div>
            </motion.div>
          </div>

          {/* Phumlani Mancapha */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-40">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="aspect-[3/4] bg-ink/5 border border-ink/10 relative overflow-hidden"
            >
              <img 
                src="/team/phumlani.jpg" 
                alt="Phumlani Mancapha" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-10 left-10 text-cream">
                 <h2 className="text-3xl font-serif italic">Phumlani Mancapha</h2>
                 <span className="text-[10px] uppercase tracking-widest opacity-60">Commercial Strategy & Leadership</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                 <h3 className="text-4xl font-serif">Commercial Strategy & Leadership</h3>
                 <p className="text-muted leading-relaxed font-light text-lg italic">
                    Driving sustainable sales growth across the African healthcare ecosystem
                 </p>
              </div>

              <div className="prose prose-ink max-w-none space-y-6 text-muted font-light text-base leading-relaxed">
                <p>
                  Phumlani Mancapha is a seasoned commercial leader with nearly two decades of experience driving sustainable sales growth across the pharmaceutical and healthcare ecosystem in Africa. His career spans frontline sales, national sales leadership, and executive roles within multinational organisations, where he has led complex portfolios across private and public healthcare markets.
                </p>
                <p>
                  Most recently, Phumlani served as Biopharma Business Unit Director for AstraZeneca within the African Cluster, where he led multi-market teams through periods of restructuring, regulatory pressure, patent loss, and constrained resources, while consistently delivering growth, defending market share, and launching new therapies at scale.
                </p>
                <p>
                  His leadership is recognised for transforming sales cultures, strengthening execution discipline, and unlocking performance in highly regulated, resource-constrained environments.
                </p>
              </div>

              <div className="flex gap-4 pt-4 border-t border-ink/5">
                 <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-forest transition-colors">
                    <Linkedin size={16} /> LinkedIn Profile
                 </a>
              </div>
            </motion.div>
          </div>

          {/* Other Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-ink/5 pt-32">
             {[
               { title: "Group Financial Accountant", name: "Phelisa Dyasi", img: "/team/phelisa.png" },
               { title: "Executive Assistant to Managing Director", name: "Siphosethu Gushman", img: "/team/siphosethu.jpg" },
               { title: "Internal Audit Specialist", name: "Thabang Nawa", img: null },
             ].map((role, i) => (
               <div key={i} className="space-y-6 group cursor-pointer">
                  <span className="text-[10px] uppercase tracking-widest text-forest font-bold">{role.title}</span>
                  <div className="aspect-[4/3] bg-ink/5 border border-ink/5 overflow-hidden flex items-center justify-center relative">
                     {role.img ? (
                       <img 
                         src={role.img} 
                         alt={role.name} 
                         className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                       />
                     ) : (
                       <div className="text-muted text-sm italic">Image Placeholder</div>
                     )}
                  </div>
                  <h4 className="text-xl font-serif font-medium">{role.name}</h4>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-ink text-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
               <h2 className="text-2xl font-serif">Team Philosophy</h2>
            </div>
            {["Excellence", "Integrity", "Stewardship", "Impact"].map((phil, i) => (
              <motion.div 
                key={phil}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="h-px bg-cream/20" />
                <h3 className="text-xl font-serif italic">{phil}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
