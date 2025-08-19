'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import '@/styles/global.css';

export default function DisenoBasesDatosPage() {
  return(
    <Layout>
      <section>
        <h1>Diseño de Bases de Datos</h1>
        <p>
          El diseño de bases de datos busca estructurar la información de manera eficiente, 
          garantizando consistencia, integridad y rendimiento. Involucra procesos de normalización, 
          la creación de diagramas y la definición de relaciones.
        </p>
      </section>

      <section>
        <nav>
          <ul className='indice'>
              <li><a href="#normalizacion">Normalización</a></li>
              <li><a href="#entidad">Diagramas Entidad-Relación (ERD)</a></li>
              <li><a href="#clave">Claves Primarias y Foráneas</a></li>
              <li><a href="#integridad">Integridad Referencial</a></li>
              <li><a href="#vs">Diseño para SQL y NoSQL</a></li>
              <li><a href='#explora'>Explora más:</a></li>       
          </ul>
        </nav>
      </section>

      {/* Normalización */}
      <section id='normalizacion'>
        <h2>Normalización</h2>
        <p>
          La normalización es un proceso que organiza los datos en tablas para reducir redundancia 
          y mejorar la integridad. Se basa en formas normales:
        </p>
        <ul>
          <li><strong>1FN:</strong> Eliminar grupos repetitivos, cada campo debe ser atómico.</li>
          <li><strong>2FN:</strong> Todos los atributos dependen de la clave primaria completa.</li>
          <li><strong>3FN:</strong> Eliminar dependencias transitivas.</li>
          <li><strong>BCNF:</strong> Variante estricta de la 3FN.</li>
          <li><strong>4FN:</strong> Evita dependencias multivaluadas.</li>
          <li><strong>5FN:</strong> Elimina dependencias de unión complejas.</li>
        </ul>
      </section>

      {/* Diagramas entidad-relación */}
      <section id='entidad'>
        <h2>Diagramas Entidad-Relación (ERD)</h2>
        <p>
          Los diagramas ER son representaciones gráficas de las entidades, atributos y relaciones 
          dentro de una base de datos. Permiten planificar antes de implementar el esquema físico.
        </p>
      </section>

      {/* Claves */}
      <section id='clave'>
        <h2>Claves Primarias y Foráneas</h2>
        <p>
          Una <strong>clave primaria</strong> identifica de forma única un registro en una tabla.  
          Una <strong>clave foránea</strong> establece la relación con otra tabla, conectando registros 
          y asegurando consistencia en los datos.
        </p>
      </section>

      {/* Integridad referencial */}
      <section id='integridad'>
        <h2>Integridad Referencial</h2>
        <p>
          La integridad referencial garantiza que los registros relacionados entre tablas sean 
          válidos. Por ejemplo, no se puede asignar un pedido a un cliente que no exista en la base 
          de datos.
        </p>
      </section>

      {/* SQL vs NoSQL */}
      <section id='vs'>
        <h2>Diseño para SQL y NoSQL</h2>
        <p>
          El diseño varía según el tipo de base de datos:
        </p>
        <ul>
          <li><strong>SQL:</strong> Se centra en un esquema rígido, normalización y relaciones claras.</li>
          <li><strong>NoSQL:</strong> Puede priorizar la desnormalización, la escalabilidad y 
          estructuras flexibles (documentos, grafos, clave-valor).</li>
        </ul>
      </section>

      <section id='explora'>
        <p>Explora más:</p>
        <nav>
        <ul className='indice'>
          <li><Link href="/bases-datos">Conceptos Bases de Datos</Link></li>
          <li><Link href="/bases-datos/sql">Bases de Datos SQL</Link></li>
          <li><Link href="/bases-datos/nosql">Bases de Datos NoSQL</Link></li>
          <li><Link href="/bases-datos/administracion">Administración y Mantenimiento</Link></li>
          <li><Link href="/bases-datos/conceptos-avanzados">Conceptos Avanzados</Link></li>
        </ul>
        </nav>
      </section>
    </Layout>
  )
}