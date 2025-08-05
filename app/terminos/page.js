'use client';

import Link from 'next/link';

const terminos = [
  'Algoritmo',
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
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Glosario de Términos Informáticos</h1>
      <ul className="list-disc pl-5 space-y-2">
        {terminos.map((termino) => (
          <li key={termino}>
            <Link
              href={`/terminos/${encodeURIComponent(termino.toLowerCase())}`}
              className="text-blue-600 hover:underline"
            >
              {termino}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}