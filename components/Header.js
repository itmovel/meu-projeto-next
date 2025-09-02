import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.homeLink}>
          {/* Substitua por um ícone SVG de casa */}
          <svg className={styles.icon} viewBox="0 0 24 24">...</svg>
          <span>Home</span>
        </a>
      </Link>
      <p>Olá, Felipe, você está em Mercado Livre</p>
      {/* Adicione o ícone de escudo ou menu aqui se necessário */}
    </header>
  );
}