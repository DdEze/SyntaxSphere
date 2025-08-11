'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import '@/styles/global.css';

export default function FlexGridPage() {
  return (
    <Layout>
      <section>
        <h1>Flexbox y Grid en CSS</h1>
        <p>
          Flexbox y Grid son dos sistemas de diseño en CSS que nos permiten
          distribuir elementos en la pantalla de forma flexible y eficiente.
        </p>
      </section>

      <section>
        <h2>Flexbox</h2>
        <p>
          Flexbox (Flexible Box Layout) es ideal para organizar elementos en una
          sola dimensión (fila o columna). Facilita la alineación y distribución
          del espacio.
        </p>
        <ul>
          <li><code>flex-direction</code> — dirección de los elementos (row, column)</li>
          <li><code>justify-content</code> — alineación horizontal</li>
          <li><code>align-items</code> — alineación vertical</li>
          <li><code>flex-wrap</code> — control de salto de línea</li>
        </ul>
        <pre><code>
{`.container {
  display: flex;
  justify-content: center; /* Alinea horizontalmente */
  align-items: center; /* Alinea verticalmente */
  height: 200px;
  background: lightgray;
}
.item {
  background: steelblue;
  color: white;
  padding: 10px;
  margin: 5px;
}`}
        </code></pre>
      </section>

      <section>
      <h2>Grid</h2>
        <p>
          Grid Layout es un sistema de dos dimensiones que nos permite organizar
          elementos en filas y columnas.
        </p>
        <ul>
          <li><code>grid-template-columns</code> — define columnas</li>
          <li><code>grid-template-rows</code> — define filas</li>
          <li><code>gap</code> — espacio entre filas y columnas</li>
          <li><code>grid-column / grid-row</code> — controlan el tamaño y posición de cada celda</li>
        </ul>
        <pre><code>
{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales */
  gap: 10px;
  background: lightgray;
}
.item {
  background: darkorange;
  color: white;
  padding: 10px;
}`}
        </code></pre>
      </section>

      <section>
        <h2>Flexbox vs Grid</h2>
        <ul>
          <li>Flexbox: diseño en <b>una dimensión</b> (fila o columna)</li>
          <li>Grid: diseño en <b>dos dimensiones</b> (filas y columnas)</li>
        </ul>
      </section>

      <section>
        <nav style={{ marginTop: '2rem' }}>
            <p>Explora más:</p>
            <ul>
                <li><Link href="/html-css/css" style={{ color: 'var(--highlight-color)'}}>Conceptos CSS</Link></li>
                <li><Link href="/html-css/css/propiedades" style={{ color: 'var(--highlight-color)'}}>Propiedades CSS</Link></li>
                <li><Link href="/html-css/css/unidades" style={{ color: 'var(--highlight-color)'}}>Unidades de Medida</Link></li>
                <li><Link href="/html-css/css/display-posicionamiento" style={{ color: 'var(--highlight-color)'}}>Display y Posicionamiento</Link></li>
            </ul>
        </nav>
      </section>
    </Layout>
  );
}