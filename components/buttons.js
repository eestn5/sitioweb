import Link from 'next/link'
// Botón principal
export const Button = ({ href, text }) => {
  return (
    <Link href={href}>
      <a className="button">{text}</a>
    </Link>
  );
}
// Boton secundario
export const SecondaryButton = ({ href, text }) => {
  return (
    <Link href={href}>
      <a className="secondary-button">{text}</a>
    </Link>
  );
}