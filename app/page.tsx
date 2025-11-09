'use client';

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const mapRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mapInstance: any;
    let cssLink: HTMLLinkElement | null = null;

    // solo en cliente, carga leaflet dinámicamente
    (async () => {
      const L = await import('leaflet');

      // añadir CSS de leaflet al head (evita importar CSS global en componente)
      cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      // alternativa: usar CDN
      // cssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(cssLink);

      if (containerRef.current && !mapRef.current) {
        mapInstance = L.map(containerRef.current).setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstance);

        mapRef.current = mapInstance;
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
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="mb-6 text-4xl font-bold text-green-900 dark:text-green-100 sm:text-4xl">
            Welcome to OpenStreetMap + Next.js!
          </h1>

          <div ref={containerRef} id="map" style={{ height: '500px', width: '800px' }} />
        </div>
      </main>
    </div>


    // <div className="flex w-screen min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex min-h-screen w-full max-w flex-col items-center justify-between py-5 px-16 bg-white dark:bg-black sm:items-start">
    //     <div className="flex flex-col items-center sm:items-start">
    //       <h1 className="mb-6 text-4xl font-bold text-green-900 dark:text-green-100 sm:text-4xl">
    //         Welcome to OpenStreetMap + Next.js!
    //       </h1>

    //       <div
    //         ref={containerRef}
    //         className="h-[500px] w-[800px] border-4 border-green-900 dark:border-green-100"
    //       >
    //         {/* Mapa se renderiza aquí */}
    //       </div>
    //     </div>
    //   </main>
    // </div>

  );

}
