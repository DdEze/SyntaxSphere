import Link from 'next/link';
import Layout from '@/components/Layout';
import '../../styles/global.css';

const subcategorias = [
  { slug: 'variables', titulo: 'Variables y Tipo de Datos' },
  { slug: 'estructura-control', titulo: 'Estructura de Control' },  
  { slug: 'estructura-datos', titulo: 'Estructura de Datos' },
  { slug: 'funciones', titulo: 'Funciones, Parámetros y Modularidad' },
  { slug: 'excepciones', titulo: 'Excepciones' },
  { slug: 'orientada-objetos', titulo: 'Programación Orientada a Objetos (POO)' },
  { slug: 'depuracion-pruebas', titulo: 'Depuración y Pruebas' },
  // { slug: 'Otros-temas', titulo: 'Otros temas útiles' },
];

export default function ProgramacionPage() {
  return (
    <Layout>
      <h1>Conceptos de Programación</h1>
      <ul className='mi-lista'>
        {subcategorias.map(({ slug, titulo }) => (
          <li key={slug} className='item-lista'>
            <Link href={`/programacion/${slug}`}>
              {titulo}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}