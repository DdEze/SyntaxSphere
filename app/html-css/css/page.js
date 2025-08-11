'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import '../../../styles/global.css';

export default function CSSPage() {
  return (
    <Layout>
      <h1>CSS (Cascading Style Sheets)</h1>

      <section>
        <h2 >Índice </h2>
        <ul className='indice'>
            <li><a href="#aplicacion">¿Cómo se aplica CSS?</a></li>
            <li><a href="#sintaxis">Sintaxis de CSS</a></li>
            <li><a href="#selectores">Selectores Básicos</a></li>
            <li><a href="#comentarios">Comentarios en CSS</a></li>
            <li><a href="#modelo">Modelo de Caja (Box Model)</a></li>
        </ul>
      </section>

      <section>
        <h2 id='aplicacion'>¿Cómo se aplica CSS?</h2>
        <ul>
          <li><strong>En línea:</strong> dentro de la etiqueta HTML con el atributo <code>style</code>.</li>
          <li><strong>Interno:</strong> dentro de una etiqueta <code>&lt;style&gt;</code> en el <code>&lt;head&gt;</code> del documento HTML.</li>
          <li><strong>Externo:</strong> en un archivo separado con extensión <code>.css</code> enlazado con <code>&lt;link&gt;</code>.</li>
        </ul>

        <pre>
          <code>
                {`
<!-- En línea -->
<p style="color: blue;">Texto en azul</p>

<!-- Interno -->
<head>
    <style>
        p { color: red; }
    </style>
</head>

<!-- Externo -->
<link rel="stylesheet" href="styles.css">
`}
            </code>
        </pre>
      </section>

      <section>
        <h2 id='sintaxis'>Sintaxis de CSS</h2>
        <p>La estructura básica de una regla CSS es:</p>
        <pre>
          <code>
            {`
selector {
    propiedad: valor;
}
            `}
          </code>
        </pre>
        <p>Ejemplo:</p>
        <pre>
          <code>
            {`
h1 {
    color: green;
    font-size: 24px;
}
            `}
          </code>
        </pre>
      </section>

      <section>
        <h2 id='selectores'>Selectores Básicos</h2>
        <ul>
          <li><code>elemento</code> – Aplica a todas las etiquetas con ese nombre. Ej: <code>p</code>, <code>h1</code></li>
          <li><code>.clase</code> – Aplica a los elementos que tengan esa clase.</li>
          <li><code>#id</code> – Aplica al elemento con ese identificador.</li>
        </ul>

        <pre>
          <code>
            {`
p {
    color: gray;
}

.destacado {
    font-weight: bold;
}

#titulo {
    text-transform: uppercase;
}
            `}
         </code>
        </pre>
      </section>

      <section>
        <h2 id='comentarios'>Comentarios en CSS</h2>
        <p>Se usan para documentar el código:</p>
        <pre>
          <code>{`/* Esto es un comentario en CSS */`}</code>
        </pre>
      </section>

      <section>
        <h2 id='modelo'>Modelo de Caja (Box Model)</h2>
        <p>
          El modelo de caja es uno de los conceptos fundamentales en CSS. Cada elemento HTML se representa como una caja rectangular que contiene varias partes:
        </p>
        <ul>
          <li><strong>Contenido (Content):</strong> el área donde aparece el contenido, como texto o imágenes.</li>
          <li><strong>Relleno (Padding):</strong> el espacio entre el contenido y el borde.</li>
          <li><strong>Borde (Border):</strong> la línea que rodea el padding (si existe) y el contenido.</li>
          <li><strong>Margen (Margin):</strong> el espacio exterior entre el borde del elemento y los elementos vecinos.</li>
        </ul>

        <p>
          Comprender cómo interactúan estas partes es esencial para poder controlar el diseño y la disposición de los elementos en una página.
        </p>

        <p>
          A continuación exploraremos cada una de las propiedades clave del modelo de caja, así como unidades de medida, sistemas de posicionamiento y técnicas modernas como <strong>Flexbox</strong> y <strong>Grid</strong>.
        </p>

        <div>
            <ul>
                <li>
                    <Link href="/html-css/css/propiedades">
                        <p style={{ color: 'var(--highlight-color)'}}>👉 Ir a Propiedades CSS</p>
                    </Link>
                </li>
                <li>
                    <Link href="/html-css/css/unidades">
                        <p style={{ color: 'var(--highlight-color)'}}>👉 Ir a Unidades de Medida</p>
                    </Link>
                </li>
                <li>
                    <Link href="/html-css/css/display-posicionamiento">
                        <p style={{ color: 'var(--highlight-color)'}}>👉 Ir a Display y Posicionamiento</p>
                    </Link>
                </li>
                <li>
                    <Link href="/html-css/css/flexbox-grid" style={{ color: 'var(--highlight-color)'}}>
                        👉 Ir a Flexbox y Grid
                    </Link>
                </li>
            </ul>
        </div>
      </section>

    </Layout>
  );
}