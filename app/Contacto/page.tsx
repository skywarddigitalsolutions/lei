"use client";
import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { FaBehance, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image';

export default function Contacto() {
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
                            <Link href="/Contacto" className="text-sm font-medium text-grisclaro hover:text-yellow-200">
                                Contacto
                            </Link>
                        </div>
                    </li>
                </ol>
            </nav>

            <h2 className="bg-gris text-4xl lg:text-7xl pt-12 font-bold text-center text-yellow-200 tracking-wide">¡TRABAJEMOS JUNTOS!</h2>
            <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gris py-12 px-4 space-y-6 md:space-y-0 md:space-x-6">
                
                {/* Imagen izquierda */}
                <div className="w-full md:w-1/3 lg:w-1/3 p-4 flex justify-center">
                    <Image
                        src="/fotocontacto.jpg"
                        alt="Foto de Proyecto"
                        width={400}
                        height={500}
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>

                <div className="w-full md:w-1/3 lg:w-auto flex flex-col items-center text-center space-y-6 px-4">
                    <div className="flex flex-col space-y-4 w-full px-8">
                        <Link
                            href="https://wa.me/+5491138717447?text=Hola%20Leila,%20trabajemos%20juntos"
                            className="flex items-center justify-center bg-yellow-200 text-gray-800 font-semibold rounded-lg py-3 px-2 w-full transition duration-300 hover:bg-yellow-300 shadow-lg"
                        >
                            <FaWhatsapp className="mr-2" />
                            WhatsApp
                        </Link>
                        <Link
                            href="mailto:leilaabalos1@gmail.com"
                            className="flex items-center justify-center bg-yellow-200 text-gray-800 font-semibold rounded-lg py-3 px-2 w-full transition duration-300 hover:bg-yellow-300 shadow-lg"
                        >
                            <CiMail className="mr-2" />
                            Correo Electrónico
                        </Link>
                        <Link
                            href="https://www.behance.net/leilaabalos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-yellow-200 text-gray-800 font-semibold rounded-lg py-3 px-2 w-full transition duration-300 hover:bg-yellow-300 shadow-lg"
                        >
                            <FaBehance className="mr-2" />
                           Behance
                        </Link>
                    </div>
                </div>

                <div className="w-full md:w-1/3 lg:w-1/3 p-4 flex justify-center">
                    <Image
                        src="/fotocontacto2.jpg"
                        alt="Proyecto de moda 2"
                        width={400}
                        height={500}
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>

            <Footer />
        </>
    );
}
