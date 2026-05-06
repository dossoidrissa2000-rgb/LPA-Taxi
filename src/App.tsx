/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import BookingWidget from './components/booking/BookingWidget';
import MapContainer from './components/booking/MapContainer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" id="app-root">
      <Navbar />
      
      <main className="flex-grow">
        <div className="relative bg-slate-50 overflow-hidden">
          <Hero />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
               <div className="lg:col-span-5 mb-8 lg:mb-0">
                  <BookingWidget />
               </div>
               <div className="lg:col-span-7 h-full">
                  <MapContainer />
               </div>
            </div>
          </div>
        </div>

        <Features />
        
        {/* Value Prop Analysis Section (Draft from image) */}
        <section className="py-20 bg-slate-50" id="analysis-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-display text-base font-bold text-brand-blue uppercase tracking-widest mb-4">Análisis del Terreno</h2>
                <h3 className="text-3xl font-display font-bold mb-6">Expertos en la Ciudad Alta y Ciudad Baja</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Entendemos la orografía de Las Palmas. Desde los desniveles pronunciados de la Ciudad Alta 
                  hasta el corazón comercial de la Ciudad Baja (Triana, Santa Catalina, Puerto).
                </p>
                <div className="space-y-4">
                  {[
                    "Rutas optimizadas con IA para ahorrar combustible",
                    "Conductores locales que conocen horarios críticos",
                    "Zonas de alta demanda monitorizadas en tiempo real"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 mb-12 lg:mb-0">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1543783232-df794b6e0c40?auto=format&fit=crop&q=80&w=800" 
                    alt="Las Palmas Map Abstract"
                    className="w-full h-[400px] object-cover contrast-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand/Marketing Proud Canarian Section */}
        <section className="relative h-[600px] flex items-center justify-center text-white text-center overflow-hidden" id="marketing-section">
          <img 
            src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1200" 
            alt="Gran Canaria"
            className="absolute inset-0 w-full h-full object-cover transform scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-blue/80 backdrop-blur-[2px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <h2 className="text-brand-gold font-display text-lg font-bold mb-4">Orgullo Canario</h2>
            <h3 className="text-4xl sm:text-5xl font-display font-bold leading-tight mb-8">
              Somos de aquí. Conocemos lo nuestro. Te llevamos mejor.
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Trato Cercano", sub: "Como en casa" },
                { label: "Cultura Local", sub: "Anfitriones" },
                { label: "Orgullo", sub: "Apoyamos lo nuestro" },
                { label: "Impacto Local", sub: "Economía real" }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="text-brand-gold font-bold text-sm mb-1">{item.label}</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-70">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-blue text-white py-12 border-t border-white/10" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
             <div className="bg-brand-gold p-1.5 rounded-lg">
                <span className="text-brand-blue font-bold">LPA</span>
             </div>
             <span className="text-xl font-display font-bold tracking-tight">
               LPA <span className="text-brand-gold">CONNECT</span>
             </span>
          </div>
          <p className="text-white/60 text-sm max-w-md mx-auto mb-8">
            La plataforma definitiva para la movilidad sostenible y conectada en Gran Canaria.
          </p>
          <div className="flex justify-center gap-8 mb-8">
            {['Instagram', 'Twitter', 'Facebook', 'LinkedIn'].map(social => (
              <a key={social} href="#" className="text-white/40 hover:text-brand-gold transition-colors text-xs font-bold uppercase tracking-widest">{social}</a>
            ))}
          </div>
          <div className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
            © 2026 LPA CONNECT · CONSTRUIDO CON AMOR POR LA ISLA
          </div>
        </div>
      </footer>
    </div>
  );
}
