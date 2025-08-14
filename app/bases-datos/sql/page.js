'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import '@/styles/global.css';

export default function SQLPage() {
  return (
    <Layout>
      <section>
        <h1>Bases de Datos SQL</h1>
      </section>

      <section>
        <h2>Indice</h2>
          <nav>
            <ul className='indice'>
                <li><a href="#introduccion">Introducción a SQL</a></li>
                <li><a href="#basico">Conceptos básicos</a></li>
                <li><a href="#consultas">Consultas básicas</a></li>
                <li><a href="#joins">Joins y relaciones</a></li>
                <li><a href="#ordenamiento">Ordenamiento y agrupamiento</a></li>
                <li><a href='#funciones'>Funciones agregadas</a></li>
                <li><a href='#subconsultas'>Subconsultas y consultas anidadas</a></li>
                <li><a href='#operadores'>Operadores y condiciones</a></li>
                <li><a href='#limitacion'>Limitación de resultados</a></li>
                <li><a href='#operaciones'>Operaciones de inserción, actualización y borrado</a></li>            
                <li><a href='#avanzadas'>Consultas avanzadas</a></li>
                <li><a href='#explora'>Explora más:</a></li>       
            </ul>
          </nav>
      </section>

      <section id='introduccion'>
        <h2>Introducción a SQL</h2>
        <p>
          SQL (<strong>Structured Query Language</strong>) es el lenguaje estándar para interactuar con bases de datos
          relacionales, permitiendo crear, consultar, modificar y eliminar datos en tablas.
        </p>
      </section>

      <section id='basico'>
        <h2>Conceptos básicos</h2>
        <ul>
          <li><strong>Tablas:</strong> estructuras con filas (registros) y columnas (campos).</li>
          <li><strong>Filas y columnas:</strong> representan datos individuales y atributos de cada registro.</li>
          <li><strong>Clave primaria:</strong> identifica de manera única cada registro.</li>
          <li><strong>Clave foránea:</strong> establece relaciones entre tablas.</li>
        </ul>

        <h2>Operaciones básicas (CRUD)</h2>
        <pre><code>
{`-- Crear un registro
INSERT INTO usuarios (nombre, email) VALUES ('Juan', 'juan@mail.com');

-- Leer registros
SELECT * FROM usuarios;

-- Actualizar registros
UPDATE usuarios SET email = 'nuevo@mail.com' WHERE nombre = 'Juan';

-- Eliminar registros
DELETE FROM usuarios WHERE nombre = 'Juan';`}
        </code></pre>
      </section>

      <section id='consultas'>
        <h2>Consultas básicas</h2>
        <pre><code>
{`-- Seleccionar todos los registros
SELECT * FROM usuarios;

-- Seleccionar columnas específicas
SELECT nombre, email FROM usuarios;

-- Filtrar registros
SELECT nombre FROM usuarios WHERE edad > 18;`}
        </code></pre>
      </section>
      
      <section id='joins'>
        <h2>Joins y relaciones</h2>
        <pre><code>
{`-- INNER JOIN
SELECT pedidos.id, clientes.nombre
FROM pedidos
INNER JOIN clientes ON pedidos.cliente_id = clientes.id;

-- LEFT JOIN
SELECT pedidos.id, clientes.nombre
FROM pedidos
LEFT JOIN clientes ON pedidos.cliente_id = clientes.id;

-- RIGHT JOIN
SELECT pedidos.id, clientes.nombre
FROM pedidos
RIGHT JOIN clientes ON pedidos.cliente_id = clientes.id;

-- FULL OUTER JOIN
SELECT pedidos.id, clientes.nombre
FROM pedidos
FULL OUTER JOIN clientes ON pedidos.cliente_id = clientes.id;`}
       </code></pre>
      </section>

      <section id='ordenamiento'>
        <h2>Ordenamiento y agrupamiento</h2>
        <pre><code>
{`-- Ordenar resultados
SELECT nombre, edad FROM usuarios ORDER BY edad ASC;

-- Agrupar registros
SELECT categoria, COUNT(*) 
FROM productos
GROUP BY categoria
HAVING COUNT(*) > 5;`}
        </code></pre>
      </section>

      <section id='funciones'>
        <h2>Funciones agregadas</h2>
        <pre><code>
{`-- Sumar valores
SELECT SUM(total) FROM pedidos;

-- Promedio
SELECT AVG(precio) FROM productos;

-- Contar registros
SELECT COUNT(*) FROM usuarios;

-- Máximo y mínimo
SELECT MAX(edad), MIN(edad) FROM usuarios;`}
        </code></pre>
      </section>

      <section id='subconsultas'>
        <h2>Subconsultas y consultas anidadas</h2>
        <pre><code>
{`-- Subconsulta en WHERE
SELECT nombre FROM usuarios
WHERE id IN (SELECT usuario_id FROM pedidos WHERE total > 100);

-- Subconsulta en FROM
SELECT categoria, total
FROM (SELECT categoria, SUM(cantidad) AS total FROM productos GROUP BY categoria) AS sub;`}
        </code></pre>
      </section>

      <section id='operadores'>
        <h2>Operadores y condiciones</h2>
        <pre><code>
{`-- Comparaciones y operadores lógicos
SELECT * FROM usuarios WHERE edad > 18 AND ciudad = 'Buenos Aires';

-- Patrón de texto
SELECT * FROM productos WHERE nombre LIKE 'Camisa%';`}
        </code></pre>
      </section>

      <section id='limitacion'>
        <h2>Limitación de resultados</h2>
        <pre><code>
{`-- Limitar resultados en MySQL / PostgreSQL
SELECT * FROM usuarios LIMIT 5;

-- Limitar resultados en SQL Server
SELECT TOP 5 * FROM usuarios;`}
        </code></pre>
      </section>

      <section id='operaciones'>
        <h2>Operaciones de inserción, actualización y borrado</h2>
        <pre><code>
{`-- Insertar registros
INSERT INTO usuarios (nombre, email, edad) VALUES ('Juan', 'juan@mail.com', 25);

-- Actualizar registros
UPDATE usuarios SET email = 'nuevo@mail.com' WHERE nombre = 'Juan';

-- Eliminar registros
DELETE FROM usuarios WHERE nombre = 'Juan';`}
        </code></pre>
      </section>

      <section id='avanzadas'>
        <h2>Consultas avanzadas</h2>
        <pre><code>
{`-- Contar registros por categoría
SELECT categoria, COUNT(*) 
FROM productos
GROUP BY categoria
HAVING COUNT(*) > 5
ORDER BY categoria;`}
        </code></pre>
      </section>

      <section id='explora'>
        <p>Explora más:</p>
        <ul className='indice'>
          <li><Link href="/bases-datos">Conceptos Bases de Datos</Link></li>
          <li><Link href="/bases-datos/nosql">Bases de Datos NoSQL</Link></li>
          <li><Link href="/bases-datos/diseno">Diseño de Bases de Datos</Link></li>
          <li><Link href="/bases-datos/administracion">Administración y Mantenimiento</Link></li>
          <li><Link href="/bases-datos/conceptos-avanzados">Conceptos Avanzados</Link></li>
        </ul>
      </section>
    </Layout>
  );
}