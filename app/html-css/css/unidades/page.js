'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import '../../../../styles/global.css'

export default function CssUnidadesPage() {
  return (
    <Layout>
      <section>
        <h1>Unidades de Medida en CSS</h1>
        <p>
          Las unidades de medida en CSS permiten definir tamaños, espacios y posiciones de los elementos. Es importante entender las diferencias para usarlas correctamente.
        </p>
      </section>

      <section>
        <h2>Unidades Absolutas</h2>
        <ul>
          <li><code>px</code> (píxeles): Unidad fija, ideal para pantallas digitales. Ej: <code>font-size: 16px;</code></li>
          <li><code>cm</code> (centímetros), <code>mm</code> (milímetros), <code>in</code> (pulgadas): unidades físicas, usadas casi nunca en pantalla.</li>
          <li><code>pt</code> (puntos), <code>pc</code> (picas): usados principalmente en impresión.</li>
        </ul>
      </section>

      <section>
        <h2>Unidades Relativas</h2>
        <ul>
          <li><code>%</code> (porcentaje): relativo al elemento padre. Ej: <code>width: 50%;</code></li>
          <li><code>em</code>: relativo al tamaño de fuente del elemento padre. Ej: <code>font-size: 2em;</code></li>
          <li><code>rem</code>: relativo al tamaño de fuente raíz (<code>&lt;html&gt;</code>). Ej: <code>font-size: 1.5rem;</code></li>
          <li><code>vw</code> (viewport width): porcentaje del ancho de la ventana. Ej: <code>width: 50vw;</code></li>
          <li><code>vh</code> (viewport height): porcentaje del alto de la ventana. Ej: <code>height: 100vh;</code></li>
          <li><code>vmin</code> y <code>vmax</code>: porcentaje relativo al menor o mayor valor entre ancho y alto de la ventana.</li>
        </ul>
      </section>

      <section>
        <h2>Ejemplos Prácticos</h2>
        <pre><code>
{`/* Texto con tamaño relativo y fijo */
p {
  font-size: 16px;  /* tamaño fijo */
}

h1 {
  font-size: 2em;   /* el doble del tamaño del padre */
}

div {
  width: 50%;       /* la mitad del ancho del contenedor */
}

section {
  height: 100vh;    /* altura igual al alto de la ventana */
}`}
        </code></pre>
      </section>

      <section>
        <nav style={{ marginTop: '2rem' }}>
          <p>Explora más:</p>
          <ul>
            <li><Link href="/html-css/css" style={{ color: 'var(--highlight-color)'}}>Conceptos CSS</Link></li>
            <li><Link href="/html-css/css/propiedades" style={{ color: 'var(--highlight-color)'}}>Propiedades CSS</Link></li>
            <li><Link href="/html-css/css/display-posicionamiento" style={{ color: 'var(--highlight-color)'}}>Display y Posicionamiento</Link></li>
            <li><Link href="/html-css/css/flexbox-grid" style={{ color: 'var(--highlight-color)'}}>Flexbox y Grid</Link></li>
          </ul>
        </nav>
      </section>
    </Layout>
  );
}