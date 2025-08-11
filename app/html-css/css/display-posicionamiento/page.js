'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import '@/styles/global.css';

export default function DisplayPosicionamiento() {
  return (
    <Layout>
      <section>
        <h1>Display y Posicionamiento en CSS</h1>
      </section>
      
      <section>
        <h2>Display</h2>
        <p>
          La propiedad <code>display</code> controla cómo se muestra un elemento en la página y
          cómo interactúa con los demás elementos en el flujo del documento.
        </p>
        <ul>
          <li><code>block</code>: Ocupa todo el ancho disponible y empieza en una nueva línea.</li>
          <li><code>inline</code>: Solo ocupa el ancho de su contenido y no fuerza salto de línea.</li>
          <li><code>inline-block</code>: Similar a inline, pero permite ajustar alto y ancho.</li>
          <li><code>flex</code>: Permite crear contenedores flexibles para alinear y distribuir elementos.</li>
          <li><code>grid</code>: Crea una cuadrícula bidimensional.</li>
          <li><code>none</code>: Oculta el elemento.</li>
        </ul>
        <pre><code>
{`div {
  display: flex;
  justify-content: center;
  align-items: center;
}`}     </code></pre>
      </section>

      <section>
        <h2>Posicionamiento</h2>
        <p>
          La propiedad <code>position</code> define cómo se coloca un elemento en el documento.
          Permite moverlo usando las propiedades <code>top</code>, <code>right</code>, <code>bottom</code> y <code>left</code>.
        </p>
        <ul>
          <li><code>static</code>: Posición por defecto, sigue el flujo normal.</li>
          <li><code>relative</code>: Se posiciona en relación a su posición original.</li>
          <li><code>absolute</code>: Se posiciona en relación a su contenedor posicionado más cercano.</li>
          <li><code>fixed</code>: Se mantiene fijo en la pantalla al hacer scroll.</li>
          <li><code>sticky</code>: Se comporta como relative hasta que llega a un punto y queda fijo.</li>
        </ul>
        <pre><code>
{`.elemento {
  position: absolute;
  top: 50px;
  left: 20px;
}`}
        </code></pre>
      </section>

      <section>
        <h2>Propiedades relacionadas</h2>
        <ul>
          <li><code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>: Ajustan la posición.</li>
          <li><code>z-index</code>: Define la profundidad de apilamiento.</li>
          <li><code>float</code> y <code>clear</code>: Controlan el flujo de elementos flotantes.</li>
        </ul>
      </section>

      <section>
          <nav style={{ marginTop: '2rem' }}>
              <p>Explora más:</p>
              <ul>
                  <li><Link href="/html-css/css" style={{ color: 'var(--highlight-color)'}}>Conceptos CSS</Link></li>
                  <li><Link href="/html-css/css/propiedades" style={{ color: 'var(--highlight-color)'}}>Propiedades CSS</Link></li>
                  <li><Link href="/html-css/css/unidades" style={{ color: 'var(--highlight-color)'}}>Unidades de Medida</Link></li>
                  <li><Link href="/html-css/css/flexbox-grid" style={{ color: 'var(--highlight-color)'}}>Flexbox y Grid</Link></li>
              </ul>
          </nav>
      </section>

    </Layout>
  );
}