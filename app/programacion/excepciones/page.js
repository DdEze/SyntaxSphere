'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import '@/styles/global.css';

export default function ExcepcionesPage() {
  return (
    <Layout>
      <section>
        <h1>Excepciones en Programación</h1>

        <h2>¿Qué es una Excepción?</h2>
        <p>
          Una <strong>excepción</strong> es un mecanismo que permite a un programa manejar errores o condiciones
          inusuales que ocurren durante la ejecución. En lugar de finalizar abruptamente, el flujo del programa puede
          ser redirigido a una rutina que se encarga de gestionar el problema.
        </p>

        <h2>¿Cómo se usa?</h2>
        <p>
          La mayoría de los lenguajes modernos (como Java, Python, JavaScript o C++) implementan el manejo de
          excepciones mediante bloques <code>try</code>, <code>catch</code> (o <code>except</code>), y
          opcionalmente <code>finally</code>.
        </p>

        <pre>
            {`
try {
  // Código que puede lanzar una excepción
}catch (error) {
  // Manejo de la excepción
}finally {
  // Código que se ejecuta siempre, ocurra o no la excepción
}
            `}
        </pre>

        <h2>Modelos de Ejecución</h2>
        <p>Existen principalmente dos modelos para el manejo de excepciones:</p>

        <h3>1. Modelo de Reasunción (Resumption)</h3>
        <p>
          En este modelo, luego de que la excepción es capturada y manejada, la ejecución del programa puede continuar
          justo después del punto donde se generó la excepción. Es común en lenguajes como Smalltalk.
        </p>

        <p><strong>Ejemplo:</strong> se intenta abrir un archivo; si no existe, se crea, y luego se continúa con la lectura.</p>

        <h3>2. Modelo de Terminación (Termination)</h3>
        <p>
          En este enfoque, cuando ocurre una excepción, se abandona completamente la ejecución del bloque donde se
          produjo el error y se transfiere el control a un bloque de manejo. Es el modelo más común en lenguajes como
          Java, Python y JavaScript.
        </p>

        <p>
          Este modelo asume que el flujo de ejecución no puede continuar normalmente después de un error.
        </p>

        <h2>Conclusión</h2>
        <p>
          Las excepciones son herramientas fundamentales para construir aplicaciones robustas, permitiendo que los
          programas manejen fallos de manera controlada y segura. Elegir el modelo adecuado depende del lenguaje y del
          tipo de problema que se esté resolviendo.
        </p>
        <Link href="/programacion" style={{ color: 'var(--highlight-color)'}}>← Volver a conceptos de programación</Link>
      </section>
    </Layout>
  );
}