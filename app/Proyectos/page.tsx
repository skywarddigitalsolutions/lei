import Image from 'next/image'
import Link from 'next/link'
import { NavBar } from '../components/NavBar'
import Footer from '../components/Footer'

const categories = [
  {
    id: 'Disenos',
    title: "Diseños",
    imageUrl: "/alteracion.jpeg",
  },
  {
    id: 'Producciones',
    title: "Producciones",
    imageUrl: "/zwarp.jpeg",
  },
  {
    id: 'Tendencias',
    title: "Detección de Tendencias",
    imageUrl: "/fotoejemplo.jpg",
  },
]

export default function Proyectos() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <section className="py-16 bg-gris">
          <div className="container mx-auto px-4">
            <h2 className="text-9xl font-bold text-left mb-2 lg:mb-12 text-yellow-200 tracking-wider break-words">PROYECTOS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link href={`/Proyectos/${category.id}`} key={category.id} className="block group">
                  <div className="relative h-[70vh] overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={category.imageUrl}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex items-end justify-center p-6">
                      <h3 className="text-3xl lg:text-4xl font-light text-grisclaro text-center ">{category.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}