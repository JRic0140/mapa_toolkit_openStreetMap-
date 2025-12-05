'use client';
import React from 'react';

export default function LoginCard() {
  return (
    <div className="h-full flex items-center justify-center z-2000 absolute top-0 left-0">
      {/* Contenedor principal con sombra y redondeo */}
      <div className="w-full h-full flex flex-col justify-center max-w-md p-8 bg-white shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl">
        {/* Título */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">User Login</h1>

        {/* Formulario */}
        <form className="space-y-6">
          {/* Campo Email */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4-9h-1.5a2.5 2.5 0 00-5 0H6a2.5 2.5 0 00-5 0H1a2.5 2.5 0 00-5 0v4a2.5 2.5 0 005 0h.5a2.5 2.5 0 005 0h.5a2.5 2.5 0 005 0h1a2.5 2.5 0 005 0v-4a2.5 2.5 0 00-5-0z"></path>
              </svg>
            </div>
            <input
              type="email"
              placeholder="Email ID"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
            />
          </div>

          {/* Campo Password */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v3m0-3v-3a6 6 0 00-2.414-4.95L9 11.414a6 6 0 102.414 4.95l.015.016a6 6 0 007.071-7.071l-.015-.016a6 6 0 00-2.414-4.95l-1.268-1.269a6 6 0 00-2.414-4.95h.005a6 6 0 002.414 4.95l1.268 1.269a6 6 0 002.414 4.95h.005m-12 0h12M12 10.5h8m-8 0h-8m0 10h12m-12 0h-8m8 0h8m-7 9h-1.5a2.5 2.5 0 01-5 0H6a2.5 2.5 0 01-5-0H1.5a2.5 2.5 0 015-0h.5a2.5 2.5 0 002.5 2.5v1.5a2.5 2.5 0 002.5 2.5h1.5a2.5 2.5 0 002.5-2.5v-1.5a2.5 2.5 0 00-2.5-2.5H10m-10 0h10v4a2 2 0 002 2h4a2 2 0 002-2v-4H18a2 2 0 00-2-2a2 2 0 00-2-2h-5a2 2 0 00-2 2a2 2 0 00-2 2H8a2 2 0 00-2-2a2 2 0 00-2-2H4a2 2 0 00-2-2v4a2 2 0 002 2zm3 3s-1 0-1 1-1 1-1 1h1a1 1 0 001-1 1 1 0 001-1zm-1-4h1a1 1 0 001-1V8a1 1 0 00-1-1H6a1 1 0 00-1 1v1a1 1 0 001 1zm8-4h1a1 1 0 001-1V8a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 001 1zM2 20h1.5a1 1 0 001-1v-1a1 1 0 00-1-1H3a1 1 0 00-1 1v1a1 1 0 001 1zm8-10a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"></path>
              </svg>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
            />
          </div>

          {/* Recordar y Olvidé contraseña */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
              Forgot Password?
            </a>
          </div>

          {/* Botón Login */}
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            LOGIN
          </button>
        </form>

        {/* Líneas decorativas */}
        <div className="mt-10 text-center">
          <div className="border-t border-gray-200"></div>
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </div>
  );
};
