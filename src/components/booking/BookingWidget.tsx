/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, Navigation, Calendar, Clock, Car, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BookingWidget() {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState<'now' | 'later'>('now');
  const [isSearching, setIsSearching] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBooking = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowSuccess(true);
    }, 2000);
  };

  if (showSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-brand-blue text-white rounded-3xl p-8 text-center shadow-2xl"
        id="booking-success"
      >
        <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
          <Car className="w-10 h-10 text-brand-blue" />
        </div>
        <h3 className="text-2xl font-display font-bold mb-2">¡Vehículo en camino!</h3>
        <p className="text-white/70 mb-6 text-sm">
          Tu conductor (Canario de Corazón) llegará en aproximadamente 5 minutos.
        </p>
        <button 
          onClick={() => setShowSuccess(false)}
          className="bg-white text-brand-blue px-6 py-2 rounded-full font-bold text-sm tracking-wide"
        >
          Aceptar
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100" id="booking-widget">
      <div className="flex border-b border-slate-100" id="booking-tabs">
        <button 
          onClick={() => setBookingType('now')}
          disabled={isSearching}
          className={`flex-1 py-4 text-sm font-bold transition-all ${bookingType === 'now' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:text-brand-blue'}`}
        >
          Pedir Ahora
        </button>
        <button 
          onClick={() => setBookingType('later')}
          disabled={isSearching}
          className={`flex-1 py-4 text-sm font-bold transition-all ${bookingType === 'later' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:text-brand-blue'}`}
        >
          Reservar
        </button>
      </div>
      
      <div className="p-6 space-y-4" id="booking-form">
        <div className="relative group" id="pickup-field">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors">
            <MapPin className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            disabled={isSearching}
            placeholder="¿Dónde te recogemos?"
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:bg-white transition-all text-sm"
          />
        </div>
        
        <div className="relative group" id="dropoff-field">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-gold transition-colors">
            <Navigation className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            disabled={isSearching}
            placeholder="¿A dónde vas?"
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:bg-white transition-all text-sm"
          />
        </div>

        <AnimatePresence mode="wait">
          {bookingType === 'later' && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="grid grid-cols-2 gap-4 overflow-hidden"
              id="later-fields"
            >
              <div className="relative" id="date-field">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input type="date" className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs focus:outline-none" />
              </div>
              <div className="relative" id="time-field">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input type="time" className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs focus:outline-none" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pt-4" id="vehicle-types">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Selecciona Vehículo</label>
          <div className="grid grid-cols-3 gap-2">
            {['Standard', 'Van', 'Lujo'].map((v) => (
              <button 
                key={v}
                disabled={isSearching}
                className="flex flex-col items-center gap-1 p-2 rounded-xl border border-slate-100 hover:border-brand-gold hover:bg-brand-gold/5 transition-all outline-none disabled:opacity-50"
              >
                <Car className="w-5 h-5 text-brand-blue" />
                <span className="text-[10px] font-bold">{v}</span>
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={handleBooking}
          disabled={isSearching}
          className="w-full bg-brand-gold text-brand-blue hover:bg-yellow-400 py-4 rounded-xl font-bold mt-4 shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none" 
          id="btn-search-taxi"
        >
          {isSearching ? (
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
              <span>Buscando conductor...</span>
            </div>
          ) : (
            <>
              <span>{bookingType === 'now' ? 'Pedir Ahora' : 'Confirmar Reserva'}</span>
              <ChevronRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
      
      <div className="bg-slate-50 p-4 border-t border-slate-100" id="booking-footer">
        <p className="text-[10px] text-slate-400 text-center uppercase tracking-tighter">
          Precios estimados sujetos a tráfico · Sin sorpresas
        </p>
      </div>
    </div>
  );
}
