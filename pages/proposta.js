import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Proposta.module.css';

export default function PropostaPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>Faça parte do Mercado Livre, com a credibilidade de uma empresa que você já conhece.</h2>
        {/* ... código para exibir os detalhes da unidade e planos ... */}
        <div className={styles.planDetails}>
          <h3>Tarifa PREÇO FIXO</h3>
          <p>Em xx anos você economizará</p>
          <p className={styles.economiaTotal}>R$ 35.640,00</p>
          <p>Economia mensal estimada</p>
          <p className={styles.economiaMensal}>R$ 990,00</p>
        </div>
        {/* ... lista de benefícios ... */}
        <Link href="/confirmacao" passHref><button className={styles.mainButton}>CONTRATAR</button></Link>
      </div>
    </Layout>
  );
}