'use client';
import Image from 'next/image';
import './header.css'; // Archivo CSS para estilos
export default function Header (){



    return (
        <header className="app-header">
      {/* Logo y botón retroceso */}
      <div className="left-section">
        <Image src="https://img.icons8.com/color/48/000000/tiktok.png" alt="TikTok" className="logo" />
        <button className="back-button">←</button>
      </div>

      {/* Botones y opciones */}
      <div className="middle-section">
        <button className="button save-button">
          <span className="icon">📖</span> Guardar en la biblioteca
        </button>
        <button className="button export-button">
          <span className="icon">📤</span> Exportar <span className="dropdown-icon">▼</span>
        </button>
        <button className="button language-button">
          <span className="icon">🌍</span> Español
        </button>
      </div>

      {/* Usuario */}
      <div className="right-section">
        <button className="profile-button">
          <Image
            src="https://via.placeholder.com/40?text=👤"
            alt="Perfil"
            className="profile-icon"
          />
          <span className="username">user8915007669...</span>
          <span className="dropdown-icon">▼</span>
        </button>
      </div>
    </header>
    )       
}