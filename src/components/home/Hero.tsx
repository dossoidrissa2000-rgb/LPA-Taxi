/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, Clock, Map } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden" id="hero-section">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 -skew-x-12 transform translate-x-1/4 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6" id="hero-tag">
              <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              <span>Movilidad que nos conecta</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6" id="hero-title">
              De aquí, <span className="text-brand-blue underline decoration-brand-gold decoration-4 underline-offset-8">para todos.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed" id="hero-desc">
              La plataforma líder en Las Palmas de Gran Canaria.
              Calidad canaria, cercanía local y tecnología de vanguardia.
            </p>
            
            <div className="flex items-center gap-6 border-t border-slate-100 pt-8" id="hero-features">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-gold" />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-tight">Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-gold" />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-tight">24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Map className="w-5 h-5 text-brand-gold" />
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-tight">Local</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
