import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Linkedin, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-ink text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <Link to="/">
                <img src="/logo.jpg" alt="Canaan Business House" className="h-12 w-auto object-contain bg-cream/90 p-2 rounded-sm" />
              </Link>
            </div>
            <p className="font-sans text-sm text-cream/60 leading-relaxed mb-6">
              Strategic Advisory for Sustainable Growth. We partner with leaders to build financially sound, scalable, and impact-driven organisations.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4 text-sm text-cream/60">
              <li><Link to="/services" className="hover:text-cream transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-cream transition-colors">About Us</Link></li>
              <li><Link to="/insights" className="hover:text-cream transition-colors">Insights</Link></li>
              <li><Link to="/team" className="hover:text-cream transition-colors">Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-sm text-cream/60">
              <li>Financial Strategy</li>
              <li>Business Advisory</li>
              <li>ESG & Impact</li>
              <li>Tax & Compliance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Connect</h4>
            <ul className="flex flex-col gap-4 text-sm text-cream/60">
              <li className="flex items-center gap-3"><Mail size={16} /> info@canaanbusinesshouse.com</li>
              <li className="flex items-center gap-3"><Phone size={16} /> 078 576 3209</li>
              <li className="flex items-center gap-3"><MapPin size={16} /> South Africa (National reach)</li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 border border-cream/20 flex items-center justify-center rounded-full hover:bg-forest hover:border-forest transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-cream/20 flex items-center justify-center rounded-full hover:bg-forest hover:border-forest transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-cream/40">
            © {new Date().getFullYear()} Canaan Business House. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-cream/40">
            <a href="#" className="hover:text-cream">Privacy Policy</a>
            <a href="#" className="hover:text-cream">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
