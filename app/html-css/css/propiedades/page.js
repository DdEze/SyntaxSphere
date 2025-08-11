'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import '@/styles/global.css';

export default function CSSPropPage() {
    return(
        <Layout>
            <section>
                <h1>Propiedades CSS</h1>
                <p>En esta sección aprenderás las propiedades más comunes de CSS, que permiten modificar el aspecto de los elementos HTML, como el color, tamaño, espaciado, tipografía y más.</p>
            </section>

            <section>
                <h2 >Índice </h2>
                <ul className='indice'>
                    <li><a href="#texto">Propiedades de texto</a></li>
                    <li><a href="#fondo">Propiedades de fondo</a></li>
                    <li><a href="#borde">Propiedades de borde</a></li>
                    <li><a href="#tamaño">Propiedades de tamaño y espaciado</a></li>
                    <li><a href="#visualizacion">Propiedades de visualización</a></li>
                    <li><a href='#posicion'>Propiedades de posición</a></li>
                </ul>
            </section>

            <section>
                <h2 id='texto'>Propiedades de texto</h2>
                <ul>
                    <li><code>color</code>: define el color del texto.</li>
                    <li><code>font-size</code>: tamaño de la fuente.</li>
                    <li><code>font-family</code>: tipo de letra.</li>
                    <li><code>text-align</code>: alineación del texto (left, right, center, justify).</li>
                    <li><code>font-weight</code>: grosor de la letra (normal, bold, valores numéricos).</li>
                    <li><code>text-decoration</code>: subrayado, tachado, etc..</li>
                    <li><code>line-height</code>: altura de línea.</li>
                </ul>
                <pre><code>{`
p {
  color: blue;
  font-size: 16px;
  text-align: justify;
}               
               `}</code></pre>
                 <h2 id='fondo'>Propiedades de fondo</h2>
                 <ul>
                    <li><code>background-color</code>: color de fondo.</li>
                    <li><code>background-image</code>: imagen de fondo.</li>
                    <li><code>background-size</code>: tamaño del fondo (cover, contain, auto).</li>
                    <li><code>background-repeat</code>: repetición (repeat, no-repeat, repeat-x, repeat-y).</li>
                    <li><code>background-position</code>: posición del fondo.</li>
                </ul>
                <pre><code>{`
body {
  background-color: lightgray;
  background-image: url('fondo.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  text-decoration: underline;
  line-height: 1.5;
}
                `}</code></pre>
                <h2 id='borde'>Propiedades de borde</h2>
                <ul>
                    <li><code>border</code>: borde completo (ancho, estilo, color).</li>
                    <li><code>border-radius</code>: esquinas redondeadas.</li>
                </ul>
                <pre><code>{`
div {
  border: 2px solid black;
  border-radius: 10px;
}
                 `}</code></pre>
                <h2 id='tamaño'>Propiedades de tamaño y espaciado</h2>
                <ul>
                    <li><code>width</code> y <code>height</code>: ancho y alto.</li>
                    <li><code>margin</code>: espacio exterior.</li>
                    <li><code>padding</code>: espacio interior.</li>
                    <li><code>border</code>: borde del elemento.</li>
                    <li><code>box-shadow</code>: sombra de la caja.</li>
                    <li><code>border-radius</code>: esquinas redondeadas.</li>
                </ul>
                <pre><code>{`
.box {
  width: 200px;
  height: 150px;
  margin: 20px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 3px 3px 5px gray;
}
                `}</code></pre>
                <h2 id='visualizacion'>Propiedades de visualización</h2>
                <ul>
                    <li><code>display</code>: tipo de caja (block, inline, flex, grid, none).</li>
                    <li><code>visibility</code>: visibilidad del elemento.</li>
                    <li><code>opacity</code>: transparencia.</li>
                </ul>
                <pre><code>{`
span {
  display: inline-block;
  visibility: visible;
  opacity: 0.8;
}
                `}</code></pre>
                <h2 id='posicion'>Propiedades de posición</h2>
                <ul>
                    <li><code>position</code>: tipo de posicionamiento (static, relative, absolute, fixed, sticky).</li>
                    <li><code>top</code> <code>down</code> <code>left</code> <code>right</code>: ubicación relativa.</li>
                    <li><code>z-index</code>: orden de apilamiento.</li>
                </ul>
                <pre><code>{`
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}`}
                </code></pre>

            </section>
            <section>
                <nav style={{ marginTop: '2rem' }}>
                    <p>Explora más:</p>
                    <ul>
                        <li><Link href="/html-css/css" style={{ color: 'var(--highlight-color)'}}>Conceptos CSS</Link></li>
                        <li><Link href="/html-css/css/unidades" style={{ color: 'var(--highlight-color)'}}>Unidades de Medida</Link></li>
                        <li><Link href="/html-css/css/display-posicionamiento" style={{ color: 'var(--highlight-color)'}}>Display y Posicionamiento</Link></li>
                        <li><Link href="/html-css/css/flexbox-grid" style={{ color: 'var(--highlight-color)'}}>Flexbox y Grid</Link></li>
                    </ul>
                </nav>
            </section>
        </Layout>
    )
}