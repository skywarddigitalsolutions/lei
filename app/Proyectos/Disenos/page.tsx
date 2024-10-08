'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavBar } from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';

const projectOptions = [
  { name: 'Diseños', href: '/Proyectos/Disenos' },
  { name: 'Producciones', href: '/Proyectos/Producciones' },
  { name: 'Tendencias', href: '/Proyectos/Tendencias' },
];

const images = [
  { src: '/alteracion.webp', alt: 'Alteración 1', className: 'md:col-span-2 md:row-span-3' },
  { src: '/alteracion2.webp', alt: 'Alteración 2', className: 'md:col-span-1 md:row-span-2' },
  { src: '/alteracion3.webp', alt: 'Alteración 3', className: 'md:col-span-1 md:row-span-2' },
  { src: '/alteracion4.webp', alt: 'Alteración 4', className: 'md:col-span-1 md:row-span-2' },
  { src: '/alteracion5.webp', alt: 'Alteración 5', className: 'md:col-span-2 md:row-span-3' },
];

export default function Disenos() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavBar />
      <nav className="flex px-4 bg-gris pt-12" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1">
          <li className="inline-flex items-center">
            <Link href="/" className="text-sm font-medium text-grisclaro hover:text-yellow-200">
              Inicio
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-grisclaro">/</span>
              <Link href="/Proyectos" className="text-sm font-medium text-grisclaro hover:text-yellow-200">
                Proyectos
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-grisclaro">/</span>
              <div className="relative">
                <button
                  type="button"
                  className="inline-flex items-center text-sm font-medium text-yellow-200 hover:text-yellow-50 focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Diseños
                  <ChevronDownIcon className="w-5 h-5 ml-1" aria-hidden="true" />
                </button>
                {isOpen && (
                  <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-gris ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {projectOptions.map((option) => (
                        <Link
                          key={option.name}
                          href={option.href}
                          className="block px-4 py-2 text-sm text-grisclaro hover:bg-yellow-200 hover:text-gris"
                          role="menuitem"
                        >
                          {option.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </li>
        </ol>
      </nav>

      <div className='min-h-screen bg-gris py-24 px-4'>
        <h4 className="text-5xl md:text-7xl lg:text-9xl font-bold text-left mb-2 lg:mb-4 text-yellow-200 tracking-wider break-words">ALTERACIÓN MOCHILA</h4>
        <h5 className='text-xl md:text-2xl lg:text-4xl text-yellow-200 mb-6 lg:mb-12 text-left lg:text-right'> Propuesta de Rebelión Temporal: Tribu Urbana </h5>
        <p className='text-lg md:text-xl lg:text-xl text-grisclaro mb-12 lg:mb-40'>Nuestra propuesta explora la noción de Tribu Urbana, buscando una rebelión contra el tiempo. Abrazamos el concepto de AQUÍ Y AHORA (HIC ET NUNC), enfatizando la importancia de estar presentes en el instante. Utilizamos la gravedad como símbolo de anclaje y las curvas modulares para evocar fluidez. Las siluetas ascendentes representan el potencial de crecimiento personal. Esta visión celebra la conexión con el presente, invitando a experiencias más conscientes y significativas.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:px-48">
          {images.map((image, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg ${image.className}`}>
              <div className="w-full h-0 pb-[150%] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>        
      </div>
      <Footer />
    </>
  );
}