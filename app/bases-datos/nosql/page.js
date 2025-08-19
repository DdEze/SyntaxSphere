'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import '@/styles/global.css';

export default function NoSQLPage() {
  return (
    <Layout>
      <section>
        <h1>Bases de Datos NoSQL</h1>
      </section>

      <section>
        <h2>¿Qué es NoSQL?</h2>
        <p>
          NoSQL (<strong>Not Only SQL</strong>) es un conjunto de sistemas de bases de datos no relacionales, diseñados
          para manejar grandes volúmenes de datos, alta escalabilidad y estructuras flexibles.  
          A diferencia de las bases SQL, NoSQL no sigue un esquema fijo de tablas y columnas.
        </p>
      </section>

            <section>
        <h2>Indice</h2>
          <nav>
            <ul className='indice'>
                <li><a href="#tipos">Tipos de Bases de Datos NoSQL</a></li>
                <li><a href="#ventajas">Ventajas</a></li>
                <li><a href="#desventajas">Desventajas</a></li>
                <li><a href="#casos">Casos de uso</a></li>
                <li><a href="#documentos">Bases de Datos orientadas a <strong>Documentos</strong></a></li>
                <li><a href='#familia'>Bases de Datos orientadas a <strong>Familia de Columnas</strong></a></li>
                <li><a href='#clave'>Bases de Datos orientadas a <strong>Clave-Valor</strong></a></li>
                <li><a href='#grafo'>Bases de Datos orientadas a <strong>Grafo</strong></a></li>
                <li><a href='#explora'>Explora más:</a></li>       
            </ul>
          </nav>
      </section>

      <section id='tipos'>
        <h2>Tipos de Bases de Datos NoSQL</h2>
        <ul>
          <li><strong>Clave-Valor:</strong> Almacenan datos como pares clave-valor (Ej: Redis, DynamoDB).</li>
          <li><strong>Documentos:</strong> Guardan datos en formato JSON o BSON (Ej: MongoDB, CouchDB).</li>
          <li><strong>Columnas:</strong> Optimizadas para lectura y escritura de grandes volúmenes (Ej: Cassandra, HBase).</li>
          <li><strong>Grafos:</strong> Modelan datos como nodos y relaciones (Ej: Neo4j, ArangoDB).</li>
        </ul>
      </section>

      <section id='ventajas'>
        <h2>Ventajas</h2>
        <ul>
          <li>Alta escalabilidad horizontal.</li>
          <li>Modelos de datos flexibles.</li>
          <li>Excelente rendimiento en datos no estructurados.</li>
          <li>Ideales para Big Data y tiempo real.</li>
        </ul>
      </section>

      <section id='desventajas'>
        <h2>Desventajas</h2>
        <ul>
          <li>No siempre garantizan transacciones ACID completas.</li>
          <li>Menos estandarización que SQL.</li>
          <li>Curva de aprendizaje en modelos complejos.</li>
        </ul>
      </section>

      <section id='casos'>
        <h2>Casos de uso</h2>
        <ul>
          <li>Aplicaciones en tiempo real (chat, seguimiento de ubicación).</li>
          <li>Analítica de grandes volúmenes de datos.</li>
          <li>Plataformas de redes sociales.</li>
          <li>Catálogos de productos con estructuras cambiantes.</li>
        </ul>
      </section>

      <section id='documentos'>
        <h2>Bases de Datos orientadas a <strong>Documentos</strong></h2>
        <p>
          Almacenan datos en documentos similares a JSON o BSON. Cada documento puede tener una estructura diferente, lo que permite flexibilidad en los esquemas.
        </p>
        <ul>
          <li>No maneja la noción de esquemas.</li>
          <li>Carece de lenguaje DDL.</li>
          <li>El formato de almacenamiento es BSON (Binary JSNO).</li>
          <li>BSON guarda tamaños de campo para mayor velocidad de lectura.</li>
        </ul>
      </section>

      <section id='familia'>
        <h2>Bases de Datos orientadas a <strong>Familia de Columnas</strong></h2>
        <p>
          Almacenan datos en columnas en lugar de filas. Esto permite una alta compresión y un rendimiento eficiente
          en consultas analítica y operaciones de lectura sobre grandes volúmenes de datos.
        </p>
        <p>Ejemplos: Apache Cassandra, HBase, ScyllaDB</p>
        <p>Uso comunes: Análisis de grandes datos, aplicaciones de gestión de grandes volúmenes de datos
          distribuidos, y sistemas que requieran alta disponibilidad.
        </p>
      </section>

      <section id='clave'>
        <h2>Bases de Datos orientadas a <strong>Clave-Valor</strong></h2>
        <p>
          Almacenan datos como pares clave-valor. Cada valor está asociado a una clave única
          y el valor puede ser cualquier tipo de datos.
        </p>
        <p>Ejemplos: Redis, DynamoDB, Riak</p>
        <p>Usos comunes: Cáches, sesiones de usuario y aplicaciones que requieran operaciones
          rápidas de lectura y escritura.
        </p>
      </section>

      <section id='grafo'>
        <h2>Bases de Datos orientadas a <strong>Grafo</strong></h2>
        <p>
          Están diseñadas para almacenar y consultar relaciones entre datos de manera eficiente. Utilizan
           nodos, aristas y propiedades para representar y navegar la conexiones entre datos. Suelen necesitar
           arquitectura monolítica, a diferencia del resto del mundo NoSQL. Resulven otro problema de los
           RDBMS, así que son diferentes de las otras NoSQL Inserts caros - Queries baratas.
        </p>
        <p>Ejemplos: Neo4j, Amazon Neptune, ArangoDB.</p>
        <p>Usos comunes: Redes de presonas, Redes de conocimiento, Web Semántica</p>
      </section>

      <section id='explora'>
        <p>Explora más:</p>
        <ul className='indice'>
          <li><Link href="/bases-datos">Conceptos Bases de Datos</Link></li>
          <li><Link href="/bases-datos/sql">Bases de Datos SQL</Link></li>
          <li><Link href="/bases-datos/diseno">Diseño de Bases de Datos</Link></li>
          <li><Link href="/bases-datos/administracion">Administración y Mantenimiento</Link></li>
          <li><Link href="/bases-datos/conceptos-avanzados">Conceptos Avanzados</Link></li>
        </ul>
      </section>
    </Layout>
  );
}