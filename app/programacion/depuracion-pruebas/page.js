'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import '../../../styles/global.css';

export default function DepuracionPruebasPage() {
  return (
    <Layout>
      <div>
        <h1>Depuración y Pruebas</h1>

        <section>
          <h2>Logs / Consola</h2>
          <p>
            Los logs permiten al desarrollador rastrear el comportamiento de una aplicación durante su ejecución.
            Utilizar la consola para imprimir valores, mensajes de error o el estado de las variables ayuda a detectar
            errores y comprender el flujo del programa. Es una herramienta fundamental para la depuración básica.
          </p>
        </section>

        <section>
          <h2>Pruebas unitarias</h2>
          <p>
            Las pruebas unitarias evalúan pequeñas partes del código, normalmente funciones individuales, de forma aislada.
            Ayudan a verificar que cada componente del sistema se comporte como se espera. Son la base para garantizar
            la calidad y facilitar el mantenimiento del software.
          </p>
        </section>

        <section>
          <h2>Pruebas de integración</h2>
          <p>
            Estas pruebas se enfocan en verificar que los diferentes módulos del sistema funcionen correctamente al integrarse.
            Es útil para detectar errores en la comunicación entre componentes, bases de datos, o servicios externos.
          </p>
        </section>

        <section>
          <h2>Assertions</h2>
          <p>
            Las "assertions" o afirmaciones son declaraciones que verifican si una condición se cumple durante la ejecución
            del código. Si la condición es falsa, se lanza un error. Son fundamentales en pruebas automatizadas para
            validar los resultados esperados.
          </p>
        </section>
        <Link href="/programacion">← Volver a conceptos de programación</Link>
      </div>
    </Layout>
  );
}