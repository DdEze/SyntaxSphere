'user client';


import Layout from "@/components/Layout";
import '../../styles/global.css';

export default function GitPage() {

  const comandos = [
    { comando: 'git init', descripcion: 'Inicializa un nuevo repositorio Git en el directorio actual.' },
    { comando: 'git clone <url>', descripcion: 'Clona un repositorio remoto en tu máquina local.' },
    { comando: 'git status', descripcion: 'Muestra el estado actual del repositorio y los archivos modificados.' },
    { comando: 'git add <archivo>', descripcion: 'Añade un archivo específico al área de preparación (staging).' },
    { comando: 'git add .', descripcion: 'Añade todos los archivos modificados al área de preparación.' },
    { comando: 'git commit -m "mensaje"', descripcion: 'Crea un nuevo commit con los cambios preparados y un mensaje descriptivo.' },
    { comando: 'git log', descripcion: 'Muestra el historial de commits del repositorio.' },
    { comando: 'git branch', descripcion: 'Lista las ramas existentes o crea una nueva.' },
    { comando: 'git checkout <rama>', descripcion: 'Cambia a la rama especificada.' },
    { comando: 'git merge <rama>', descripcion: 'Fusiona la rama especificada en la rama actual.' },
    { comando: 'git pull', descripcion: 'Actualiza el repositorio local con los últimos cambios del remoto.' },
    { comando: 'git push', descripcion: 'Envía los commits locales al repositorio remoto.' },
    { comando: 'git stash', descripcion: 'Guarda temporalmente los cambios no confirmados para limpiar el área de trabajo.' },
    { comando: 'git reset --soft <commit>', descripcion: 'Deshace commits pero mantiene los cambios en el área de preparación.' },
    { comando: 'git reset --hard <commit>', descripcion: 'Deshace commits y descarta todos los cambios posteriores.' },
    { comando: 'git revert <commit>', descripcion: 'Crea un nuevo commit que deshace los cambios de un commit anterior.' },
    { comando: 'git diff', descripcion: 'Muestra las diferencias entre los archivos en el directorio y el área de preparación.' },
    { comando: 'git tag <nombre>', descripcion: 'Marca un commit con una etiqueta específica (versión, release, etc.).' },
  ];

  return (
    <Layout>

      <section>
        <h1>Git y Control de Versiones</h1>

        <h2>¿Qué es el Control de Versiones?</h2>
        <p>
          El control de versiones es un sistema que registra los cambios realizados sobre un archivo
          o conjunto de archivos a lo largo del tiempo, de modo que puedas recuperar versiones específicas más adelante.
          Git es un sistema de control de versiones distribuido, lo que significa que cada copia del repositorio contiene
          todo el historial de cambios.
        </p>

        <h2>¿Qué es Git?</h2>
        <p>
          Git es un sistema de control de versiones distribuido que permite a
          desarrolladores colaborar y llevar un registro de los cambios en el
          código fuente de un proyecto. Es ampliamente usado en la industria del
          software gracias a su flexibilidad, velocidad y robustez.
        </p>
      </section>

      <section>
        <h2 >Índice </h2>
        <ul className='indice'>
            <li><a href="#conceptos">Conceptos básicos</a></li>
            <li><a href="#comandos">Comandos Básicos de Git</a></li>
            <li><a href="#practicas">Buenas Prácticas</a></li>
            <li><a href="#flujo">Flujo de Trabajo con Git</a></li>
            <li><a href="#recursos">Recursos para Aprender Git</a></li>
        </ul>
      </section>

      <section id="conceptos">
        <h2>Conceptos básicos</h2>
        <ul>
          <li><strong>Repositorio:</strong> Lugar donde se almacenan los archivos y su historial.</li>
          <li><strong>Commit:</strong> Un registro de los cambios realizados.</li>
          <li><strong>Branch:</strong> Línea de desarrollo independiente.</li>
          <li><strong>Merge:</strong> Unión de cambios entre ramas.</li>
          <li><strong>Remote:</strong> Repositorio alojado en un servidor.</li>
        </ul>
      </section>

      <section id="comandos">
        <h2>Comandos Básicos de Git</h2>
          <ul>
          {comandos.map(({ comando, descripcion }) => (
            <li key={comando}>
              <p>{descripcion}</p>
              <pre><code>
                {comando}
              </code></pre>
            </li>
          ))}
        </ul>
      </section>

      <section id="practicas">
        <h2>Buenas Prácticas</h2>

        <h3>1. Escribe mensajes de commit claros y descriptivos</h3>
        <p>
          Los mensajes de commit deben explicar <em>qué</em> y <em>por qué</em> se hicieron cambios, no solo <em>cómo</em>.
          Esto facilita la revisión y el mantenimiento del código.
        </p>
        <p>
          Un mensaje de commit típico tiene dos partes:
        </p>
        <ul>
          <li>Título corto (una línea, 50 caracteres máximo, en tiempo presente y sin punto final)</li>
          <li>Descripción opcional (separada por una línea en blanco, más detallada y justificación)</li>
        </ul>
        <pre><code>
{`git commit -m "fix(login): corregir validación de email 
Se corrige el problema que no permitía emails con dominio .org."`}
        </code></pre>
        <p>Ejemplo de formato con Conventional Commits:</p>
        <ul>
          <li>&lt;tipo&gt;[alcance opcional]: &lt;descripción corta&gt;</li>
          <li>[descripción larga opcional]</li>
          <li>[footer(s) opcional(es)]</li>
        </ul>
        <br/>
        <p>Tipos comunes:</p>
        <ul>
          <li>feat: nueva funcionalidad</li>
          <li>fix: corrección de bug</li>
          <li>docs: cambios en documentación</li>
          <li>style: formato, espacios, punto y coma</li>
          <li>refactor: refactorización sin añadir funcionalidad</li>
          <li>test: agregar o modificar tests</li>
          <li>chore: tareas de mantenimiento (build, herramientas)</li>
        </ul>
        <p>¿Por qué usar este formato?</p>
        <ul>
          <li>Facilita entender la historia del proyecto.</li>
          <li>Permite herramientas que generan changelogs automáticos.</li>
          <li>Ayuda a filtrar commits según tipo para revisiones o deploys.</li>
        </ul>

        <h3>2. Haz commits pequeños y frecuentes</h3>
        <p>
          En lugar de hacer un solo commit con muchos cambios, es mejor hacer varios commits pequeños y atómicos.
          Así es más fácil revertir cambios específicos y entender la evolución del proyecto.
        </p>

        <h3>3. Usa ramas para nuevas funcionalidades o correcciones</h3>
        <p>
          Nunca trabajes directamente en la rama principal (<code>main</code> o <code>master</code>). Crea ramas para 
          desarrollar nuevas características o corregir errores, y luego haz merge o pull request.
        </p>
        <pre><code>
{`git checkout -b feature/nueva-funcionalidad`}
        </code></pre>

        <h3>4. Revisa tus cambios antes de hacer push</h3>
        <p>
          Usa <code>git status</code> y <code>git diff</code> para asegurarte de que todo está correcto antes de subir cambios.
        </p>
        <pre><code>
{`git status
git diff`}
        </code></pre>

        <h3>5. No subas archivos sensibles ni temporales</h3>
        <p>
          Configura un archivo <code>.gitignore</code> para evitar subir archivos con datos privados, contraseñas o generados automáticamente.
        </p>

        <h3>6. Actualiza tu rama con frecuencia</h3>
        <p>
          Para evitar conflictos grandes, integra los cambios de la rama principal regularmente usando <code>git pull</code> o rebase.
        </p>

        <h3>7. Usa Pull Requests o Merge Requests para revisión de código</h3>
        <p>
          Siempre que sea posible, utiliza pull requests para que otros revisen tus cambios antes de integrarlos a la rama principal.
        </p>
      </section>

      <section id="flujo">
        <h2>Flujo de Trabajo con Git</h2>

        <h3>1. Clonar el repositorio</h3>
        <p>
          Primero, obtén una copia local del repositorio remoto usando <code>git clone</code>:
        </p>
        <pre><code>
{`git clone https://github.com/usuario/proyecto.git`}
        </code></pre>

        <h3>2. Crear una rama para tu trabajo</h3>
        <p>
          Siempre crea una rama nueva para desarrollar una característica o corregir un error. Esto mantiene la rama principal limpia.
        </p>
        <pre><code>
{`git checkout -b feature/nueva-funcionalidad`}
        </code></pre>

        <h3>3. Trabajar y hacer commits</h3>
        <p>
          Realiza cambios en tu código y haz commits pequeños y frecuentes con mensajes claros.
        </p>
        <pre><code>
{`git add .
git commit -m "Agrega validación al formulario de registro"`}
        </code></pre>

        <h3>4. Mantener tu rama actualizada</h3>
        <p>
          Antes de subir tus cambios, sincroniza tu rama con la rama principal para evitar conflictos.
        </p>
        <pre>
          <code>{`git fetch origin
git rebase origin/main`}</code>
        </pre>
        <p>O alternativamente:</p>
        <pre><code>
{`git pull origin main --rebase`}
        </code></pre>

        <h3>5. Subir tus cambios al repositorio remoto</h3>
        <p>Envía tu rama con tus commits al remoto:</p>
        <pre><code>
{`git push origin feature/nueva-funcionalidad`}
        </code></pre>

        <h3>6. Crear un Pull Request (PR)</h3>
        <p>
          En la plataforma de hosting (GitHub, GitLab, etc.) abre un Pull Request para que otros revisen y aprueben tu código antes de integrarlo a la rama principal.
        </p>

        <h3>7. Merge y cierre de rama</h3>
        <p>
          Una vez aprobado el PR, se hace merge a la rama principal y se puede eliminar la rama de la característica.
        </p>

    </section>

      <section id="recursos">
        <h2>
          Recursos para Aprender Git
        </h2>
        <ul>
          <li>
            <a
              href="https://git-scm.com/doc"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentación Oficial de Git
            </a>
          </li>
          <li>
            <a
              href="https://learngitbranching.js.org/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Git Branching
            </a>
          </li>
          <li>
            <a
              href="https://www.atlassian.com/git"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tutoriales de Atlassian sobre Git
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}