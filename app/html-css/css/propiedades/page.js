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
                
                <h2>Propiedades de texto</h2>
                <ul>
                    <li><code>color</code>: define el color del texto.</li>
                    <li><code>font-size</code>: tamaño de la fuente.</li>
                    <li><code>font-family</code>: tipo de letra.</li>
                    <li><code>text-align</code>: alineación del texto (left, right, center, justify).</li>
                    <li><code>font-weight</code>: grosor de la letra (normal, bold, valores numéricos).</li>
                </ul>
                <pre><code>{`
p {
  color: blue;
  font-size: 16px;
  text-align: justify;
}               
               `}</code></pre>
                 <h2>Propiedades de fondo</h2>
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
}
                `}</code></pre>

                <h2>Propiedades de borde</h2>
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

                <h2>Propiedades de tamaño y espaciado</h2>
                <ul>
                    <li><code>width</code> y <code>height</code>: ancho y alto.</li>
                    <li><code>margin</code>: espacio exterior.</li>
                    <li><code>padding</code>: espacio interior.</li>
                </ul>
                <pre><code>{`
.box {
  width: 200px;
  height: 150px;
  margin: 20px;
  padding: 10px;
}
                `}</code></pre>

                <h2>Propiedades de visualización</h2>
                <ul>
                    <li><code>display</code>: tipo de caja (block, inline, flex, grid, none).</li>
                    <li><code>visibility</code>: visibilidad del elemento.</li>
                </ul>
                <pre><code>{`
span {
  display: inline-block;
  visibility: visible;
}
                `}</code></pre>

            </section>
        </Layout>
    )
}