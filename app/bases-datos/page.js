import Link from 'next/link';
import Layout from '@/components/Layout';
import '../../styles/global.css';

const subcategorias = [
  { slug: 'sql', titulo: 'Bases de Datos SQL' },
  { slug: 'nosql', titulo: 'Bases de Datos NoSQL' },
  { slug: 'diseno', titulo: 'Diseño de Bases de Datos' },
  { slug: 'administracion', titulo: 'Administración y Mantenimiento' },
  { slug: 'conceptos-avanzados', titulo: 'Conceptos Avanzados' },
];

export default function BasesDatosPage() {
  return (
    <Layout>
      <section>
      <h1>Bases de Datos</h1>
      <p>
        En esta sección encontrarás información sobre conceptos fundamentales y avanzados en bases de datos, 
        abarcando tanto modelos relacionales (SQL) como no relacionales (NoSQL), así como técnicas de diseño, 
        administración y optimización.
      </p>
      </section>

      <section>
        <h2>¿Qué es una Base de Datos?</h2>
        <p>
          Una <strong>base de datos</strong> es un conjunto de datos organizados y almacenados de forma estructurada, 
          de manera que puedan ser consultados, modificados y administrados eficientemente.
        </p>
      </section>

      <section>
        <h2>Tipos de Bases de Datos</h2>
        <ul>
          <li><strong>Relacionales (SQL):</strong> Datos organizados en tablas con filas y columnas.</li>
          <li><strong>No Relacionales (NoSQL):</strong> Datos almacenados en documentos, clave-valor, columnas o grafos.</li>
          {/* <li><strong>Orientadas a grafos:</strong> Especializadas en relaciones entre datos, como Neo4j.</li> */}
        </ul>
      </section>

      <section>
        <h2>Ventajas de usar Bases de Datos</h2>
        <ul>
          <li>Acceso eficiente a grandes volúmenes de datos.</li>
          <li>Mantenimiento centralizado y control de seguridad.</li>
          <li>Integridad y consistencia de los datos.</li>
        </ul>
        <br/>
      </section>

      <section>
        <p>Explora más:</p>
        <nav>
          <ul className='indice'>
            {subcategorias.map(({ slug, titulo }) => (
              <li key={slug}>
                <Link href={`/bases-datos/${slug}`}>
                  {titulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </Layout>
  );
}