'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import '../../../styles/global.css';

export default function EstructuraControlPage() {
  return (
    <Layout>
      <h1>Estructura de Control</h1>
      <p>Las estructuras de control permiten modificar el flujo de ejecución de un programa, según condiciones o repeticiones.</p>

      <h2>Condicionales</h2>
      <p>Permiten ejecutar bloques de código dependiendo del cumplimiento de ciertas condiciones.</p>
      <pre>
        <code>
{`let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}`}
        </code>
      </pre>

      <h2>Switch</h2>
      <p>Útil para comparar una variable contra múltiples valores posibles.</p>
      <pre>
        <code>
{`let dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("Fin de semana cerca");
    break;
  default:
    console.log("Día común");
}`}
        </code>
      </pre>

      <h2>Bucles</h2>
      <p>Permiten repetir acciones mientras se cumplan ciertas condiciones.</p>

      <h3>For</h3>
      <pre>
        <code>
{`for (let i = 0; i < 5; i++) {
  console.log("Iteración " + i);
}`}
        </code>
      </pre>

      <h3>While</h3>
      <pre>
        <code>
{`let i = 0;
while (i < 5) {
  console.log("Iteración " + i);
  i++;
}`}
        </code>
      </pre>

      <h3>Do...While</h3>
      <pre>
        <code>
{`let i = 0;
do {
  console.log("Iteración " + i);
  i++;
} while (i < 5);`}
        </code>
      </pre>

      <h2>Control de Flujo</h2>
      <p>Instrucciones como <code>break</code> o <code>continue</code> permiten alterar el comportamiento de los bucles.</p>

      <pre>
        <code>
{`for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(i);
}`}
        </code>
      </pre>

      <Link href="/programacion">← Volver a conceptos de programación</Link>
    </Layout>
  );
}