export const terminos = {
  'algoritmo': {
    titulo: 'Algoritmo',
    definicion: 'Conjunto finito de instrucciones para resolver un problema.',
    descripcion: 'Un algoritmo es una secuencia de pasos lógicos y ordenados que permiten resolver un problema específico o realizar una tarea determinada.',
    relacionados: ['variable', 'compilador']
  },
  'api': {
    titulo: 'API',
    definicion: 'Interfaz que permite la comunicación entre aplicaciones.',
    descripcion: 'Una API (Application Programming Interface) es un conjunto de reglas y protocolos que permite a diferentes programas comunicarse entre sí.',
    relacionados: ['rest', 'json']
  },
  'frontend': {
    titulo: 'Frontend',
    definicion: 'Parte de una aplicación con la que interactúa el usuario.',
    descripcion: 'El frontend es la interfaz visual de una aplicación web o móvil, donde se muestra la información y se captura la interacción del usuario.',
    relacionados: ['html', 'css', 'javascript']
  },
  'backend': {
    titulo: 'Backend',
    definicion: 'Parte del software que gestiona la lógica del servidor.',
    descripcion: 'El backend es la parte de una aplicación que se ejecuta en el servidor, gestiona bases de datos, autenticación y lógica del negocio.',
    relacionados: ['api', 'base-de-datos']
  },
  'base-de-datos': {
    titulo: 'Base de datos',
    definicion: 'Sistema organizado para almacenar, gestionar y recuperar datos.',
    descripcion: 'Una base de datos es una colección de datos organizados que pueden ser accedidos, gestionados y actualizados fácilmente.',
    relacionados: ['backend', 'sql']
  },
  'bug': {
    titulo: 'Bug',
    definicion: 'Error o fallo en un programa.',
    descripcion: 'Un bug es un comportamiento inesperado o incorrecto en un programa causado por errores de lógica, sintaxis u omisiones.',
    relacionados: ['testing']
  },
  'cliente-servidor': {
    titulo: 'Cliente-servidor',
    definicion: 'Modelo donde el cliente solicita recursos y el servidor los proporciona.',
    descripcion: 'La arquitectura cliente-servidor separa las responsabilidades entre el cliente (interfaz) y el servidor (lógica y datos), comunicándose mediante una red.',
    relacionados: ['http', 'api']
  },
  'compilador': {
    titulo: 'Compilador',
    definicion: 'Programa que traduce código fuente a código máquina.',
    descripcion: 'Un compilador convierte el código fuente escrito por el programador en un lenguaje de bajo nivel comprensible por la máquina.',
    relacionados: ['ide', 'algoritmo']
  },
  'css': {
    titulo: 'CSS',
    definicion: 'Lenguaje para definir estilos de páginas web.',
    descripcion: 'CSS (Cascading Style Sheets) permite aplicar estilos visuales como colores, fuentes y disposición a elementos HTML.',
    relacionados: ['html', 'javascript']
  },
  'dom': {
    titulo: 'DOM',
    definicion: 'Interfaz que representa documentos HTML como una estructura de objetos.',
    descripcion: 'El DOM (Document Object Model) permite a los lenguajes de programación acceder y modificar la estructura, estilo y contenido de un documento HTML.',
    relacionados: ['html', 'javascript']
  },
  'framework': {
    titulo: 'Framework',
    definicion: 'Conjunto de herramientas y librerías para facilitar el desarrollo.',
    descripcion: 'Un framework proporciona una estructura base y componentes reutilizables que simplifican el desarrollo de aplicaciones.',
    relacionados: ['frontend', 'backend']
  },
  'git': {
    titulo: 'Git',
    definicion: 'Sistema de control de versiones distribuido.',
    descripcion: 'Git permite a los desarrolladores gestionar cambios en el código fuente y colaborar de manera eficiente.',
    relacionados: ['version']
  },
  'html': {
    titulo: 'HTML',
    definicion: 'Lenguaje de marcado para estructurar contenido en la web.',
    descripcion: 'HTML (HyperText Markup Language) es el estándar para crear páginas web y define la estructura de los contenidos.',
    relacionados: ['css', 'javascript']
  },
  'http': {
    titulo: 'HTTP',
    definicion: 'Protocolo para la transferencia de datos en la web.',
    descripcion: 'HTTP (HyperText Transfer Protocol) es el protocolo que permite la comunicación entre clientes y servidores en la web.',
    relacionados: ['api', 'rest']
  },
  'ide': {
    titulo: 'IDE',
    definicion: 'Entorno de desarrollo integrado.',
    descripcion: 'Un IDE combina herramientas como editor de código, depurador y compilador para facilitar el desarrollo de software.',
    relacionados: ['compilador']
  },
  'javascript': {
    titulo: 'JavaScript',
    definicion: 'Lenguaje de programación para desarrollo web.',
    descripcion: 'JavaScript es un lenguaje que permite crear contenido dinámico e interactivo en páginas web.',
    relacionados: ['html', 'css', 'json']
  },
  'json': {
    titulo: 'JSON',
    definicion: 'Formato ligero para intercambio de datos.',
    descripcion: 'JSON (JavaScript Object Notation) es un formato de texto fácil de leer y escribir para representar datos estructurados.',
    relacionados: ['api', 'javascript']
  },
  'machine-learning': {
    titulo: 'Machine Learning',
    definicion: 'Rama de la inteligencia artificial que permite a los sistemas aprender de datos.',
    descripcion: 'Machine Learning utiliza algoritmos para que los computadores mejoren su rendimiento a través de la experiencia.',
    relacionados: ['algoritmo', 'datos']
  },
  'rest': {
    titulo: 'REST',
    definicion: 'Arquitectura para diseñar servicios web.',
    descripcion: 'REST (Representational State Transfer) define un conjunto de restricciones para crear APIs que sean escalables y fáciles de usar.',
    relacionados: ['api', 'http']
  },
  'sistema-operativo': {
    titulo: 'Sistema Operativo',
    definicion: 'Software que gestiona hardware y recursos del sistema.',
    descripcion: 'Un sistema operativo administra procesos, memoria, dispositivos y proporciona una interfaz para el usuario.',
    relacionados: ['backend', 'cliente-servidor']
  },
  'testing': {
    titulo: 'Testing',
    definicion: 'Proceso de verificación de software para detectar errores.',
    descripcion: 'Testing incluye técnicas para asegurar la calidad y funcionamiento correcto de una aplicación antes de su lanzamiento.',
    relacionados: ['bug', 'frontend', 'backend']
  },
  'ui': {
    titulo: 'UI (Interfaz de Usuario)',
    definicion: 'Parte visual con la que interactúa el usuario.',
    descripcion: 'UI se enfoca en el diseño y disposición de elementos visuales para facilitar la interacción.',
    relacionados: ['ux']
  },
  'ux': {
    titulo: 'UX (Experiencia de Usuario)',
    definicion: 'Percepción y respuesta del usuario al usar un producto o sistema.',
    descripcion: 'UX considera factores como usabilidad, accesibilidad y satisfacción del usuario para mejorar el diseño.',
    relacionados: ['ui']
  },
  'variable': {
    titulo: 'Variable',
    definicion: 'Espacio en memoria para almacenar datos.',
    descripcion: 'Una variable es un contenedor para almacenar información que puede cambiar durante la ejecución del programa.',
    relacionados: ['algoritmo', 'lenguaje']
  },
  'version': {
    titulo: 'Versión',
    definicion: 'Estado o edición de un software en un momento dado.',
    descripcion: 'Las versiones permiten controlar cambios y mantener el historial del desarrollo del software.',
    relacionados: ['git']
  }

};