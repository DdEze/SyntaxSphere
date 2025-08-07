'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import '../../../styles/global.css'

export default function HtmlPage() {
  return (
    <Layout>
      <h1>HTML</h1>
      <nav>
        <h2>Contenido</h2>
        <ul>
          <li><a href="#estructura">Etiquetas Básicas</a></li>
          <li><a href="#basicas">Etiquetas Básicas</a></li>
          <li><a href="#contenido">Etiquetas de Contenido</a></li>
          <li><a href="#enlaces">Enlaces e Imágenes</a></li>
          <li><a href="#listas">Lista</a></li>
          <li><a href="#tablas">Tablas</a></li>
          <li><a href="#formularios">Formularios</a></li>
          <li><a href="#otras">Otras Etiquetas</a></li>
        </ul>
      </nav>

      <h2 id="estructura">Estructura Básica de un Documento HTML</h2>
      <pre>
        {`
        <!DOCTYPE html>
        <html>
          <head>
              <meta charset="UTF-8">
              <title>Mi primera página</title>
          </head>
          <body>
              <h1>Hola Mundo</h1>
              <p>Este es un párrafo.</p>
          </body>
        </html>
          `}
      </pre>

      <h2 id="basicas">Etiquetas Básicas de Estructura</h2>
      <ul>
        <li><strong>&lt;!DOCTYPE html&gt;</strong>: Indica que el documento es HTML5.</li>
        <li><strong>&lt;html&gt;</strong>: Contenedor raíz del documento HTML.</li>
        <li><strong>&lt;head&gt;</strong>: Contiene metadatos como el título, codificación, y enlaces a estilos o scripts.</li>
        <li><strong>&lt;meta charset="UTF-8"&gt;</strong>: Define la codificación de caracteres para el documento (UTF-8).</li>
        <li><strong>&lt;title&gt;</strong>: Título de la página que aparece en la pestaña del navegador.</li>
        <li><strong>&lt;body&gt;</strong>: Contiene el contenido visible de la página.</li>
      </ul>

      <h2 id="contenido">Etiquetas de Contenido</h2>
      <ul>
        <li><strong>&lt;h1&gt; a &lt;h6&gt;</strong>: Encabezados, siendo &lt;h1&gt; el más importante y &lt;h6&gt; el menos.</li>
        <li><strong>&lt;p&gt;</strong>: Define un párrafo de texto.</li>
        <li><strong>&lt;br&gt;</strong>: Salto de línea.</li>
        <li><strong>&lt;hr&gt;</strong>: Línea horizontal de separación.</li>
        <li><strong>&lt;strong&gt;</strong>: Texto en negrita semántica.</li>
        <li><em>&lt;strong&gt;</em>:Texto en cursiva semántica.</li>
      </ul>

      <h2 id="enlaces">Enlaces e Imágenes</h2>
      <ul>
        <li><strong>&lt;a href=""&gt;</strong>: Crea un enlace.</li>
        <li><strong>&lt;img src="" alt=""&gt;</strong>: Crea un enlace.</li>
      </ul>

      <h2 id="listas">Lista</h2>
      <ul>
        <li><strong>&lt;ul&gt;</strong>: Lista desordenada.</li>
        <li><strong>&lt;ol&gt;</strong>: Lista ordenada.</li>
        <li><strong>&lt;li&gt;</strong>: Elemento de lista.</li>
      </ul>

      <h2 id="tablas">Tablas</h2>
      <ul>
        <li><strong>&lt;table&gt;</strong>: Crea una tabla.</li>
        <li><strong>&lt;tr&gt;</strong>: Fila de tabla.</li>
        <li><strong>&lt;th&gt;</strong>: Encabezado de columna.</li>
        <li><strong>&lt;td&gt;</strong>: Celda de tabla.</li>
      </ul>

      <h2 id="formularios">Formularios</h2>
      <ul>
        <li><strong>&lt;form&gt;</strong>: Define un formulario.</li>
        <li><strong>&lt;input&gt;</strong>: Campo de entrada (texto, checkbox, etc.).</li>
        <li><strong>&lt;label&gt;</strong>: Etiqueta para inputs.</li>
        <li><strong>&lt;textarea&gt;</strong>: Área de texto multilínea.</li>
        <li><strong>&lt;button&gt;</strong>: Botón clickeable.</li>
        <li><strong>&lt;select&gt; y &lt;option&gt;</strong>: Menú desplegable.</li>
      </ul>
      <h2 id="otras">Otras etiquetas comunes</h2>
      <ul>
        <li><strong>&lt;div&gt;</strong>: Contenedor genérico para contenido.</li>
        <li><strong>&lt;span&gt;</strong>: Contenedor en línea para aplicar estilos.</li>
        <li><strong>&lt;meta&gt;</strong>: Define metadatos.</li>
        <li><strong>&lt;link&gt;</strong>: Enlace a hojas de estilo u otros recursos.</li>
        <li><strong>&lt;script&gt;</strong>: Inserta código JavaScript.</li>
      </ul>

      <p>En las siguientes secciones, veremos en más detalle cómo se usan estas etiquetas en conjunto y cómo se combinan con CSS para diseñar páginas web.</p>

      <Link href="/html-css/css">
        <p style={{ color: 'blue', textDecoration: 'underline' }}>Ir a la sección de CSS</p>
      </Link>
    </Layout>
  );
}