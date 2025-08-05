import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">SyntaxSphere</Link>
      </div>
      <nav>
        <Link href="/terminos">Términos</Link>
        <Link href="/programacion">Programación</Link>
        <Link href="/lenguajes">Lenguajes</Link>
        <Link href="/frameworks">Frameworks</Link>
        <Link href="/paradigmas">Paradigmas</Link>
        <Link href="/bases-de-datos">Bases de Datos</Link>
        <Link href="/patrones">Patrones</Link>
        <Link href="/html-css">HTML & CSS</Link>
        <Link href="/control-versiones">Control de versiones</Link>
        <Link href="/busqueda">Buscar</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}
