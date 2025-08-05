'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import '../../styles/global.css';

const terminos = [
  'Algoritmo',
  'Lenguaje de Programación',
  'API',
  'Backend',
  'Base de datos',
  'Bug',
  'Cliente-servidor',
  'Compilador',
  'CSS',
  'DOM',
  'Framework',
  'Frontend',
  'Git',
  'HTML',
  'HTTP',
  'IDE',
  'JavaScript',
  'JSON',
  'Machine Learning',
  'REST',
  'Sistema Operativo',
  'Testing',
  'UI',
  'UX',
  'Variable',
  'Versión'
];

export default function TerminosPage() {
  return (
    <Layout>
      <h1>Glosario de Términos Informáticos</h1>
      <ul>
        {terminos.map((termino) => (
          <li key={termino}>
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