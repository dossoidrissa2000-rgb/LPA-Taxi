/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';

const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY' && !API_KEY.includes('MY_GOOGLE_MAPS_KEY');

export default function MapContainer() {
  if (!hasValidKey) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] bg-slate-100 rounded-3xl p-8 text-center border-2 border-dashed border-slate-300" id="map-key-required">
        <h2 className="text-xl font-bold mb-4 font-display text-brand-blue">Se requiere la clave de Google Maps</h2>
        <p className="text-sm text-slate-500 mb-6 max-w-xs">
          Para mostrar el mapa interactivo y calcular rutas, por favor añade tu clave de API en los Secretos.
        </p>
        <div className="text-left text-xs bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="font-bold mb-2 uppercase tracking-wider text-brand-gold">Pasos:</p>
          <ol className="list-decimal list-inside space-y-1 text-slate-600">
            <li>Obtén una clave en Google Cloud Console.</li>
            <li>Añade el secreto <code>GOOGLE_MAPS_PLATFORM_KEY</code> en la configuración.</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-inner bg-slate-200 relative border border-slate-200" id="map-canvas-container">
      <APIProvider apiKey={API_KEY} version="weekly">
        <Map
          defaultCenter={{ lat: 28.1248, lng: -15.4300 }} // Las Palmas de Gran Canaria
          defaultZoom={13}
          mapId="LPA_CONNECT_MAP"
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          style={{ width: '100%', height: '100%' }}
          disableDefaultUI={true}
        >
          <AdvancedMarker position={{ lat: 28.1248, lng: -15.4300 }}>
            <Pin background="#002B5B" glyphColor="#FFC107" />
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
}
