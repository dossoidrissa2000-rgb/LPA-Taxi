/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-blue text-white shadow-lg" id="main-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-brand-gold p-1.5 rounded-lg" id="logo-icon">
              <MapPin className="w-6 h-6 text-brand-blue" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight" id="logo-text">
              LPA <span className="text-brand-gold">CONNECT</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#residentes" className="hover:text-brand-gold transition-colors">Para Residentes</a>
            <a href="#turistas" className="hover:text-brand-gold transition-colors">Para Turistas</a>
            <a href="#servicios" className="hover:text-brand-gold transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-brand-gold transition-colors">Contacto</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-semibold transition-all border border-white/10" id="btn-login">
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
            <button className="bg-brand-gold text-brand-blue hover:bg-yellow-400 px-4 py-2 rounded-full text-sm font-bold shadow-md transition-all sm:flex hidden items-center gap-2" id="btn-cta-nav">
              <Phone className="w-4 h-4" />
              <span>Pedir Taxi</span>
            </button>
            <button className="md:hidden p-2" id="btn-mobile-menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
