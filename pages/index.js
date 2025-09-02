import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <Layout>
      <div className={styles.container}>
        {/* Seção Superior */}
        <div className={styles.hero}>
          <h2>Mercado Livre</h2>
          <p>Energia limpa e até 35% de desconto para a sua empresa</p>
          <Link href="/simulacao" passHref><button className={styles.ctaButton}>CONTRATE JÁ</button></Link>
        </div>

        {/* Seção "Venha economizar" */}
        {/* ... código para as seções de informações e o mapa ... */}

        <Link href="/simulacao" passHref><button className={styles.mainButton}>SIMULAR AGORA</button></Link>
      </div>
    </Layout>
  );
}