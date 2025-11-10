'use client';
import {map} from 'leaflet' ;
import { useEffect, useRef } from "react";
import acrylic_toolbox from "./css/Toolkit_box.module.css";
import MarkerTools from "./utils/marker_tools";
import Image from 'next/image';
export default function Home() {
  const mapRef = useRef<ReturnType<typeof map> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tool_kit_map_buttons = [
    { icon: "add_location_alt"},
    { icon: "route"},
    { icon: "delete"},
  ]

  useEffect(() => {
    let mapInstance: ReturnType<typeof map> | undefined;
    let cssLink: HTMLLinkElement | null = null;

    // solo en cliente, carga leaflet dinámicamente
    (async () => {
      const L = await import('leaflet');
      // añadir CSS de leaflet al head (evita importar CSS global en componente)
      cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'; 
      document.head.appendChild(cssLink);

      
      // inicializar mapa solo si no está ya inicializado
      if (containerRef.current && !mapRef.current) {
        mapInstance = L.map(containerRef.current).setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstance);

        mapRef.current = mapInstance;

        // Inicializar MarkerTools
        const markerTools = new MarkerTools(mapInstance, tool_kit_map_buttons);
      }
    })();
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      if (cssLink && cssLink.parentNode) cssLink.parentNode.removeChild(cssLink);
    };
  }, []);

  return (

    <div className="flex w-screen min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w flex-col items-center justify-between py-5 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center sm:items-start w-full">
          <div className={`${acrylic_toolbox.map_container} map_container`}>
            <div className={`${acrylic_toolbox.map_header}`}>
              <h2 className={` ml-2 text-2xl font-bold text-green-900 dark:text-green-100 sm:text-2xl`}>
                Bienvenido a RicOpenStreetMap + Next.js! 
              </h2>
            </div>
            <div ref={containerRef} id="map" className={`${acrylic_toolbox.map}`}/>
            <div className={`${acrylic_toolbox.acrylic_toolbox} acrylic-toolbox`}>
              {tool_kit_map_buttons.map((button, index) => 
                (<button className={`${acrylic_toolbox.icon_button}`} key={index} id={button.icon} >
                  <span className="material-symbols-outlined "><Image src={`/img/${button.icon}_24dp.svg`} width={24} height={24} alt={button.icon} /></span>
                </button>))}
                
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
