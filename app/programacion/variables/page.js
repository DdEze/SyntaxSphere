'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import '../../../styles/global.css';

export default function VariablesPage() {
  return (
    <Layout>
      <h1>Variables y Tipos de Datos</h1>
      <p>En este apartado vamos a introducir dos conceptos fundamentales en programación: las variables y los tipos de datos.</p>
      
      <section>
        <h2>¿Qué es una variable?</h2>
        <p>
          Una variable es un contenedor que permite almacenar datos que pueden cambiar durante la ejecución de un programa. Por ejemplo, en JavaScript:
        </p>
        <pre>
{`let edad = 25;
const nombre = "Juan";`}
        </pre>
        <p>
          En este ejemplo, <code>edad</code> es una variable cuyo valor puede cambiar, mientras que <code>nombre</code> es constante.
        </p>
      </section>

      <section>
        <h2>Tipos de datos</h2>
        <p>Los tipos de datos definen la clase de valores que puede almacenar una variable. Algunos ejemplos comunes son:</p>
        <ul>
          <li><strong>Números/Integer:</strong> <br/> <code>let x = 10;</code></li>
          <li><strong>Cadenas de texto/String:</strong> <br/> <code>let saludo = "Hola";</code></li>
          <li><strong>Booleanos:</strong> <br/> <code>let activo = true;</code></li>
          <li><strong>Arreglos:</strong> <br/> <code>let lista = [1, 2, 3];</code></li>
          <li><strong>Objetos:</strong> <br/> <code>let persona = &#123; nombre: "Ana", edad: 30 &#125;;</code></li>
        </ul>
      </section>

      <section>
        <h2>Ejemplo práctico</h2>
        <pre>
{`let nombre = "María";
let edad = 28;

console.log("Nombre:", nombre);
console.log("Edad:", edad);`}
        </pre>
        <p>Este código crea dos variables y las imprime por consola.</p>
      </section>

      <Link href="/programacion" style={{ color: 'var(--highlight-color)'}}>← Volver a conceptos de programación</Link>
    </Layout>
  );
}