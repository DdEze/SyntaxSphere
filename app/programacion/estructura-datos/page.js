'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import '../../../styles/global.css';

export default function EstructuraDatosPage() {
  return (
    <Layout>
      <h1>Estructuras de Datos</h1>
      <p>
        Las estructuras de datos son formas de organizar y almacenar datos para facilitar su acceso y modificación eficiente.
      </p>

      <h2>Arreglos / Arrays / Listas</h2>
      <p>
        Permiten almacenar múltiples valores en una sola variable. Se accede a los elementos mediante índices.
      </p>
      <pre>
        <code>
{`let frutas = ["manzana", "banana", "naranja"];
console.log(frutas[1]); // banana`}
        </code>
      </pre>

      <h2>Pilas (Stacks)</h2>
      <p>
        Estructura LIFO (Last In, First Out). El último elemento en entrar es el primero en salir.
      </p>
      <pre>
        <code>
{`let pila = [];
pila.push(1);
pila.push(2);
console.log(pila.pop()); // 2`}
        </code>
      </pre>

      <h2>Colas (Queues)</h2>
      <p>
        Estructura FIFO (First In, First Out). El primer elemento en entrar es el primero en salir.
      </p>
      <pre>
        <code>
{`let cola = [];
cola.push(1);
cola.push(2);
console.log(cola.shift()); // 1`}
        </code>
      </pre>

      <h2>Listas Enlazadas (Linked Lists)</h2>
      <p>
        Conjunto de nodos donde cada uno apunta al siguiente. Útiles cuando se requiere insertar/eliminar elementos dinámicamente.
      </p>
      <pre>
        <code>
{`// Ejemplo básico de nodo
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

let nodo1 = new Nodo(1);
let nodo2 = new Nodo(2);
nodo1.siguiente = nodo2;`}
        </code>
      </pre>

      <h2>Mapas / Diccionarios / Objetos</h2>
      <p>
        Permiten almacenar pares clave-valor. Muy útiles para acceder rápidamente a datos por su nombre o clave.
      </p>
      <pre>
        <code>
{`let persona = {
  nombre: "Juan",
  edad: 30
};
console.log(persona["nombre"]); // Juan`}
        </code>
      </pre>

      <h2>Conjuntos (Sets)</h2>
      <p>
        Estructura que almacena valores únicos, sin duplicados.
      </p>
      <pre>
        <code>
{`let conjunto = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(1); // No se agrega de nuevo
console.log(conjunto); // Set {1, 2}`}
        </code>
      </pre>

      <h2>Árboles y Grafos (concepto general)</h2>
      <p>
        <strong>Árboles</strong> son estructuras jerárquicas donde cada nodo puede tener hijos. El más común es el árbol binario.
      </p>
      <p>
        <strong>Grafos</strong> son estructuras de nodos (vértices) conectados por aristas, útiles para representar redes o caminos.
      </p>
      <pre>
        <code>
{`// Nodo de árbol binario
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izq = null;
    this.der = null;
  }
}

let raiz = new Nodo(10);`}
        </code>
      </pre>

      <Link href="/programacion">← Volver a conceptos de programación</Link>
    </Layout>
  );
}