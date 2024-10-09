import Image from "next/image";

export default function Sobremi() {
    return (
        <>
            <div className="py-24 flex flex-col lg:flex-row bg-gris px-4 lg:px-20 gap-12  justify-center">
                <Image 
                    src="/lei.jpg" 
                    alt="Leila" 
                    width={390} 
                    height={390} 
                    className="rounded-2xl object-cover" 
                />
                <p className="text-yellow-200 text-xl lg:text-5xl font-bold tracking-wide leading-relaxed text-center lg:text-left max-w-5xl">
                    Soy Leila Abalos, estudiante de Diseño Y Gestión para la Moda. <br />
                    A mis 22 años, navego el mundo de la moda como un espacio de exploración estética y conceptual. 
                    Fusionando elementos dispares para crear resultados que trascienden lo convencional.
                </p>
            </div>
        </>
    );
}
