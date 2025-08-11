'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import '../../../styles/global.css'

export default function FuncionesPage(){
    return(
        <Layout>
          <section>
            <h1>Funciones, Parámetros y Modularidad</h1>
            <p>
                Las funciones y la modularidad permiten dividir el código en bloques reutilizables, facilitando la comprensión, mantenimiento y escalabilidad de los programas.
            </p>
          </section>

          <section>
            <nav>
                <ul className='indice'>
                  <li><a href="#modular">¿Qué es Modularizar?</a></li>
                  <li><a href="#parametro">Parámetros de Entrada, Salida y Entrada/Salida</a></li>
                  <li><a href="#funcion">Funciones vs Procesos</a></li>
                  <li><a href="#pura">Funciones Puras vs Impuras</a></li>
                  <li><a href="#orden">Funciones de Orden Superior</a></li>
                  <li><a href="#closures">Closures</a></li>
                  <li><a href="#recursividad">Recursividad</a></li>
                  <li><a href="#imports">Módulos / Imports / Exports</a></li>
               </ul>
            </nav>
          </section>

          <section id='modular'>
            <h2>¿Qué es Modularizar?</h2>
            <p>
              Modularizar consiste en dividir un programa en partes pequeñas o módulos, cada uno responsable de una funcionalidad específica. Esto mejora la organización, el mantenimiento y la reutilización del código.
            </p>
          </section>

          <section id='parametro'>
            <h2>Parámetros de Entrada, Salida y Entrada/Salida</h2>
            <p>
              - <strong>Entrada (E)</strong>: datos que recibe la función.<br />
              - <strong>Salida (S)</strong>: datos que la función devuelve.<br />
              - <strong>Entrada/Salida (E/S)</strong>: parámetros que se leen y modifican dentro de la función.
            </p>
          </section>

          <section id='funcion'>
            <h2>Funciones vs Procesos</h2>
            <p>
              - <strong>Función</strong>: devuelve un valor (puede usarse en expresiones).<br />
              - <strong>Proceso</strong>: ejecuta acciones pero no retorna nada.
            </p>

            <pre><code>
{`// Función
function sumar(a, b) {
    return a + b;
}

 // Proceso
function mostrarResultado(resultado) {
    console.log("Resultado:", resultado);
}`}
            </code></pre>
          </section>

          <section id='pura'>
            <h2>Funciones Puras vs Impuras</h2>
            <p>
              - <strong>Pura</strong>: no tiene efectos secundarios y siempre retorna el mismo resultado para los mismos parámetros.<br />
              - <strong>Impura</strong>: puede modificar variables externas, acceder a IO, etc.
            </p>

            <pre><code>
{`// Función pura
function cuadrado(n) {
    return n * n;
}

// Función impura
let contador = 0;
function incrementar() {
    contador++;
}`}
              </code></pre>
          </section>

          <section id='orden'>
            <h2>Funciones de Orden Superior</h2>
            <p>Son funciones que reciben otras funciones como parámetros o devuelven una función como resultado.</p>
            <pre><code>
{`function operar(a, b, operacion) {
    return operacion(a, b);
}

console.log(operar(2, 3, (x, y) => x + y)); // 5`}
            </code></pre>
          </section>
            
          <section id='closures'>
            <h2>Closures</h2>
            <p>Un closure es una función que recuerda el ámbito en el que fue creada, incluso si se ejecuta fuera de ese ámbito.</p>
            <pre><code>
{`function contador() {
    let cuenta = 0;
    return function () {
        cuenta++;
        return cuenta;
    };
}

const incrementar = contador();
console.log(incrementar()); // 1
console.log(incrementar()); // 2`}
            </code></pre>
          </section>
          
          <section id='recursividad'>
            <h2>Recursividad</h2>
            <p>Es cuando una función se llama a sí misma para resolver un problema.</p>
            <pre><code>
{`function factorial(n) {
    if (n === 0) return 1;
        return n * factorial(n - 1);
}`}
            </code></pre>
          </section>
            
          <section id='imports'>
            <h2>Módulos / Imports / Exports</h2>
            <p>Permiten dividir el código en archivos separados y reutilizables.</p>
            <pre><code>
{`// archivo operaciones.js
export function sumar(a, b) {
    return a + b;
}

// archivo principal.js
import { sumar } from './operaciones.js';
console.log(sumar(2, 3)); // 5`}
            </code></pre>
          </section>  
          
          <section>
            <Link href="/programacion" style={{ color: 'var(--highlight-color)'}}>← Volver a conceptos de programación</Link>
          </section>

        </Layout>
    )
}