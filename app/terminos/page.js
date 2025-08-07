'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import '../../styles/global.css';

const terminos = [
  'Variable',
  'Algoritmo',
  'Lenguaje de Programación',
  'Testing',
  'Backend',
  'Frontend',
  'Base de datos',
  'API',
  'Cliente-servidor',  
  'HTML',
  'CSS',
  'JavaScript',
  'JSON',
  'DOM',  
  'Compilador',
  'Framework',
  'UI',
  'UX',
  'Git',
  'IDE',
  'HTTP',
  'REST',
  'Bug',
  'Machine Learning',
  'Sistema Operativo',
  'Versión'
];

export default function TerminosPage() {
  return (
    <Layout>
      <h1>Glosario de Términos Informáticos</h1>
      <ul className="mi-lista">
        {terminos.map((termino) => (
          <li key={termino} className="item-lista">
            <Link
              href={`/terminos/${encodeURIComponent(termino.toLowerCase())}`}
            >
              {termino}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}