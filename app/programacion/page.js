import Link from 'next/link';
import Layout from '@/components/Layout';
import '../../styles/global.css';

const subcategorias = [
  { slug: 'variables', titulo: 'Variables y Tipo de Datos' },
  { slug: 'estructura-control', titulo: 'Estructura de Control' },  
  { slug: 'estructura-datos', titulo: 'Estructura de Datos' },
  { slug: 'funciones', titulo: 'Funciones y Modularidad' },
  { slug: 'orientada-objetos', titulo: 'Programación Orientada a Objetos (POO)' },
  { slug: 'depuración-pruebas', titulo: 'Depuración y Pruebas' },
  { slug: 'Otros-temas', titulo: 'Otros temas útiles' },
];

export default function ProgramacionPage() {
  return (
    <Layout>
      <h1>Conceptos de Programación</h1>
      <ul>
        {subcategorias.map(({ slug, titulo }) => (
          <li key={slug}>
            <Link href={`/programacion/${slug}`}>
              {titulo}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}