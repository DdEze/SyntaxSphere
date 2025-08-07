'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';

export default function HtmlCssPage() {
  return (
    <Layout>
      <h1>HTML y CSS</h1>
      <p>
        HTML y CSS son tecnologías fundamentales para el desarrollo web. Juntas permiten estructurar y dar estilo a las páginas que vemos en Internet.
      </p>

      <section>
        <h2>¿Qué es HTML?</h2>
        <p>
          HTML (<strong>HyperText Markup Language</strong>) es un lenguaje de marcado que se utiliza para definir la estructura básica de una página web. Con HTML, se pueden crear encabezados, párrafos, listas, enlaces, imágenes, formularios y más.
        </p>
        <p>
          Cada elemento HTML se representa mediante etiquetas, que indican al navegador cómo debe mostrarse cada parte del contenido.
        </p>
        <Link href="/html-css/html">
          <strong>→ Ver más sobre HTML</strong>
        </Link>
      </section>

      <section>
        <h2>¿Qué es CSS?</h2>
        <p>
          CSS (<strong>Cascading Style Sheets</strong>) es un lenguaje de hojas de estilo que permite definir la presentación visual de los elementos HTML. Gracias a CSS, podemos cambiar colores, tamaños, posiciones y realizar diseños responsivos.
        </p>
        <p>
          CSS trabaja en conjunto con HTML para mejorar la experiencia visual del usuario sin modificar la estructura del contenido.
        </p>
        <Link href="/html-css/css">
          <strong>→ Ver más sobre CSS</strong>
        </Link>
      </section>
    </Layout>
  );
}