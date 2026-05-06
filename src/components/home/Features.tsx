/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, CreditCard, Calendar, ShieldCheck, MessageSquare, BarChart3 } from 'lucide-react';

const features = [
  {
    title: "Reserva Anticipada",
    desc: "Reserva con hasta 30 días de antelación. Ideal para aeropuertos y eventos.",
    icon: Calendar,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Pagos Flexibles",
    desc: "Tarjeta, Google Pay, Apple Pay, Bizum e incluso Criptomonedas.",
    icon: CreditCard,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Seguridad Avanzada",
    desc: "Comparte tu viaje, botón de emergencia y verificación de identidad.",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Chat con Traducción",
    desc: "Comunicación directa con el conductor con traducción integrada.",
    icon: MessageSquare,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Orgullo Canario",
    desc: "Conductores locales que conocen cada rincón de la isla.",
    icon: Users,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Panel de Control",
    desc: "Estadísticas, ingresos y valoraciones para conductores.",
    icon: BarChart3,
    color: "bg-slate-50 text-slate-600"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display text-base font-bold text-brand-blue uppercase tracking-widest mb-4">Estrategia Tecnológica</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold" id="features-title">Funcionalidades Clave</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:border-brand-gold/30 hover:shadow-xl hover:shadow-brand-blue/5 transition-all group" id={`feature-${i}`}>
              <div className={`${f.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-3">{f.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
