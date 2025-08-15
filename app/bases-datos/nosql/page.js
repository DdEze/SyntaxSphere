'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import '@/styles/global.css';

export default function NoSQLPage() {
  return (
    <Layout>
      <section className="prose lg:prose-xl max-w-4xl mx-auto px-4 py-8">
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
        <h2>Tipos de Bases de Datos NoSQL</h2>
        <ul>
          <li><strong>Clave-Valor:</strong> Almacenan datos como pares clave-valor (Ej: Redis, DynamoDB).</li>
          <li><strong>Documentos:</strong> Guardan datos en formato JSON o BSON (Ej: MongoDB, CouchDB).</li>
          <li><strong>Columnas:</strong> Optimizadas para lectura y escritura de grandes volúmenes (Ej: Cassandra, HBase).</li>
          <li><strong>Grafos:</strong> Modelan datos como nodos y relaciones (Ej: Neo4j, ArangoDB).</li>
        </ul>
      </section>

      <section>
        <h2> Bases de Datos orientadas a <strong>Documentos</strong></h2>
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

      <section>
        <h2>Ejemplos con MongoDB</h2>
        <pre><code>
{`// Insertar un documento
db.usuarios.insertOne({ nombre: "Juan", edad: 25, ciudad: "Buenos Aires" });

// Buscar todos los documentos
db.usuarios.find();

// Buscar con filtro
db.usuarios.find({ edad: { $gt: 18 } });

// Actualizar documentos
db.usuarios.updateOne({ nombre: "Juan" }, { $set: { ciudad: "Córdoba" } });

// Eliminar documentos
db.usuarios.deleteOne({ nombre: "Juan" });`}
        </code></pre>
      </section>

      <section>
        <h2>Ventajas</h2>
        <ul>
          <li>Alta escalabilidad horizontal.</li>
          <li>Modelos de datos flexibles.</li>
          <li>Excelente rendimiento en datos no estructurados.</li>
          <li>Ideales para Big Data y tiempo real.</li>
        </ul>
      </section>

      <section>
        <h2>Desventajas</h2>
        <ul>
          <li>No siempre garantizan transacciones ACID completas.</li>
          <li>Menos estandarización que SQL.</li>
          <li>Curva de aprendizaje en modelos complejos.</li>
        </ul>
      </section>

      <section>
        <h2>Casos de uso</h2>
        <ul>
          <li>Aplicaciones en tiempo real (chat, seguimiento de ubicación).</li>
          <li>Analítica de grandes volúmenes de datos.</li>
          <li>Plataformas de redes sociales.</li>
          <li>Catálogos de productos con estructuras cambiantes.</li>
        </ul>
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