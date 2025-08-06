import { notFound } from 'next/navigation';
import {terminos} from '../../../data/terminos';
import Link from 'next/link';
import Layout from '@/components/Layout';
import '../../../styles/global.css'

export default async function TerminoPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const termino = terminos[slug];

  if (!termino) return notFound();

  return (
    <Layout>
      <h1>{termino.titulo}</h1>
      <p>{termino.definicion}</p>
      <p>{termino.descripcion}</p>
      {termino.relacionados && termino.relacionados.length > 0 && (
        <>
          <h2>Términos relacionados</h2>
          <ul>
            {termino.relacionados.map((rel) => (
              <li key={rel}>
                <Link href={`/terminos/${rel}`}>
                  {terminos[rel]?.titulo || rel}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  );
}