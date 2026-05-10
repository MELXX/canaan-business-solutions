import { motion } from "motion/react";
import { Mail, Phone, Instagram, Linkedin, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 mb-12"
            >
              <span className="text-xs uppercase tracking-widest text-forest font-semibold">Contact Us</span>
              <h1 className="text-6xl font-serif mb-8 italic">Get in Touch</h1>
              <p className="text-lg text-muted font-light leading-relaxed max-w-md">
                We’d love to partner with you and help your organisation navigate growth and complexity.
              </p>
            </motion.div>

            <div className="space-y-10">
              {/* <div className="flex gap-6 items-start">
                <div className="w-12 h-12 border border-ink/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-forest" />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Phone</h4>
                  <p className="text-muted">078 576 3209</p>
                </div>
              </div> */}

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 border border-ink/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-forest" />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Email</h4>
                  <p className="text-muted">info@canaanbusinesshouse.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 border border-ink/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-forest" />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Location</h4>
                  <p className="text-muted">South Africa (National Reach)</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              <a href="https://www.linkedin.com/company/canaan-business-house/" target="_blank" className="text-muted hover:text-forest transition-colors uppercase text-[10px] tracking-widest font-bold flex items-center gap-2">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://www.instagram.com/_canaanbusinesshouse/" target="_blank" className="text-muted hover:text-forest transition-colors uppercase text-[10px] tracking-widest font-bold flex items-center gap-2">
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-ink p-12 text-cream"
          >
            <h2 className="text-3xl font-serif mb-8">Send an Enquiry</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-60">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-cream/5 border border-cream/10 p-4 focus:border-forest outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-60">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-cream/5 border border-cream/10 p-4 focus:border-forest outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-60">Nature of Enquiry</label>
                <select className="w-full bg-cream/5 border border-cream/10 p-4 focus:border-forest outline-none transition-colors appearance-none text-cream/60">
                   <option>Financial Strategy</option>
                   <option>Business Advisory</option>
                   <option>ESG Investing</option>
                   <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-60">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help?" 
                  className="w-full bg-cream/5 border border-cream/10 p-4 focus:border-forest outline-none transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-cream text-ink p-4 font-bold uppercase tracking-widest hover:bg-forest hover:text-cream transition-all flex items-center justify-center gap-3"
              >
                Submit Enquiry <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
