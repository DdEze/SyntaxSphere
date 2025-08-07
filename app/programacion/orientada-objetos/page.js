'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import '../../../styles/global.css';

export default function POOPage() {
  return (
    <Layout>
      <h1>Programación Orientada a Objetos (POO)</h1>
      <p>La <strong>Programación Orientada a Objetos (POO)</strong> es un paradigma que organiza el código en torno a "objetos" que combinan estado (datos) y comportamiento (funciones).</p>

      <h2>Clases y Objetos</h2>
      <p>
        Las clases son plantillas que definen las propiedades y métodos de un tipo de objeto. Los objetos son instancias de estas clases.
      </p>
      <pre><code>
        {`
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(\`Hola, soy \${this.nombre}\`);
  }
}

const p = new Persona("Ana");
p.saludar(); // Hola, soy Ana
         `}
      </code></pre>

      <h2>Encapsulamiento</h2>
      <p>
        Esconder la implementación interna de un objeto y exponer solo lo necesario a través de interfaces públicas.
      </p>

      <h2>Herencia</h2>
      <p>
        Permite que una clase (subclase) herede atributos y métodos de otra clase (superclase), promoviendo la reutilización de código.
      </p>
      <pre><code className="language-js">
        {`
class Animal {
  hablar() {
      console.log("Hace un sonido");
  }
}

class Perro extends Animal {
  hablar() {
      console.log("Guau!");
  }
}

class Gato extends Animal {
  hablar() {
      console.log("Miau!");
  }
}

const dog = new Perro();
const cat = new Gato();
dog.hablar(); // Guau!
cat.hablar(); // Miau!
        `}
      </code></pre>

      <h2>Herencia Múltiple</h2>
      <p>
        En lenguajes como Python, una clase puede heredar de múltiples clases. JavaScript no permite herencia múltiple directamente, pero puede simularse con mixins o composición.
      </p>

      <h2>Polimorfismo</h2>
      <p>
        Permite que diferentes clases implementen métodos con el mismo nombre pero comportamientos distintos.
      </p>

      <h2>Abstracción</h2>
      <p>
        Oculta los detalles complejos del funcionamiento interno y expone solo lo esencial al usuario.
      </p>

      <h2>Delegar</h2>
      <p>
        Implica derivar responsabilidad a otro objeto o función. Por ejemplo, un objeto puede delegar una operación a otro objeto especializado.
      </p>

      <h2>Diagrama UML</h2>
      <p>
        Los diagramas UML (Unified Modeling Language) se utilizan para representar visualmente las relaciones entre clases, sus métodos, atributos y jerarquías.
      </p>
      <p>Ejemplo:</p>
      <div>
        <img src="https://imgs.search.brave.com/zUk_Im5HUU7SNoyl9X1d-v7-CcegxtfCrLAVcXtlYTs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jbXMu/Ym9hcmRtaXguY29t/L2ltYWdlcy9lcy9h/cnRpY2xlcy9rbm93/bGVkZ2UvZGlhZ3Jh/bWEtZGUtY2xhc2Vz/LXVtbC5wbmc" alt="Ejemplo de diagrama UML de clases" style={{ maxWidth: '100%', margin: '1rem 0' }} />
      </div>

      <Link href="/programacion">← Volver a conceptos de programación</Link>
    </Layout>
  );
}