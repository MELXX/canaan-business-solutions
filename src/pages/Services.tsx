import { motion } from "motion/react";
import { BarChart3, Briefcase, Leaf, PlusCircle } from "lucide-react";

export const Services = () => {
  const categories = [
    {
      title: "Financial Strategy & Transaction Advisory",
      icon: BarChart3,
      desc: "We provide high-level financial insight to support critical business decisions.",
      items: [
        "Financial modelling & business valuations",
        "Business transaction support",
        "Due diligence & independent financial reviews",
        "Revenue, cost & profitability diagnostics",
        "Finance process and control enhancement"
      ]
    },
    {
      title: "Business Advisory",
      icon: Briefcase,
      desc: "Helping businesses build strong foundations and scale effectively.",
      items: [
        "Start-up end-to-end process implementation",
        "Compliance & risk assessments",
        "Process automation & Digital transformation",
        "IT Audit Solutions",
        "Strategic growth advisory"
      ]
    },
    {
      title: "ESG Investing & Reporting",
      icon: Leaf,
      desc: "Supporting businesses in aligning with sustainable and responsible practices.",
      items: [
        "ESG readiness assessments",
        "ESG strategy development",
        "ESG reporting"
      ]
    },
    {
      title: "Add-On Services",
      icon: PlusCircle,
      desc: "Supplementary support to ensure operational excellence.",
      items: [
        "Tax advisory services",
        "Bookkeeping & financial management support",
        "Internal audit services",
        "Capital support & funding readiness",
        "Annual Financial Statements"
      ]
    }
  ];

  return (
    <div className="pt-32">
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-forest font-semibold mb-6 block">What We Deliver</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-12">Core Services.</h1>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream p-12 lg:p-20 hover:bg-forest transition-all duration-700 group hover:text-cream"
            >
              <cat.icon className="text-forest mb-8 group-hover:text-cream" size={48} strokeWidth={1.5} />
              <h2 className="text-3xl font-serif mb-6 leading-tight">{cat.title}</h2>
              <p className="text-muted group-hover:text-cream/70 mb-10 text-lg leading-relaxed">{cat.desc}</p>
              <ul className="space-y-4">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex gap-4 items-start text-sm">
                    <div className="w-1.5 h-1.5 bg-forest rounded-full mt-1.5 group-hover:bg-cream" />
                    <span className="opacity-80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-ink text-cream text-center px-6">
         <p className="max-w-3xl mx-auto italic font-serif text-2xl lg:text-3xl opacity-80">
           "We assist organisations in aligning sustainability initiatives with performance, compliance, and long-term value creation."
         </p>
      </section>
    </div>
  );
};
