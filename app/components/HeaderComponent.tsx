'use client';
import Image from 'next/image';
import React from 'react';
import HeaderStyles from './css/header.module.css'
export default function HeaderComponent() {
    
  return (

    
    <header className={`${HeaderStyles.map_header}`}>
      {/* Logo y botón retroceso */}
      <div className={HeaderStyles.leftsection}>
        <Image src="/img/logo.jfif"  alt="logo" className={`${HeaderStyles.logo}`} width={40} height={40} />
      </div>

      {/* Botones y opciones */}
      <div className={HeaderStyles.middlesection}>
        <button className={`${HeaderStyles.button} ${HeaderStyles.savebutton}`}>
          <span className={`${HeaderStyles.icon}`}></span> Recorridos
        </button>
        <button className={`${HeaderStyles.button} ${HeaderStyles.exportbutton}`}>
          <span className={`${HeaderStyles.icon}`}></span> Opciones <span className={`${HeaderStyles.dropdownicon}`}>▼</span>
        </button>
        <button className={`${HeaderStyles.button} ${HeaderStyles.languagebutton}`}>
          <span className={`${HeaderStyles.icon}`}></span>  Exportar
        </button>
      </div>

      {/* Usuario */}
      <div className={`${HeaderStyles.rightsection}`}>
        <button className={`${HeaderStyles.profilebutton}`}>
          <span className={`${HeaderStyles.username}`}>Invitado</span>
          <img
            src="https://via.placeholder.com/40?text=👤"
            alt="Perfil"
            className={`${HeaderStyles.profileicon}`}
          />
          <span className={`${HeaderStyles.dropdownicon}`}>▼</span>
        </button>
      </div>
    </header>

  );

    
}