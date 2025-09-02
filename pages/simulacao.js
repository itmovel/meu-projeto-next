import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Simulacao.module.css';

export default function SimulacaoPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>Dados para uma simulação mais rápida e precisa</h2>
        <p>Para agilizar sua simulação precisamos usar os seus dados cadastrados na sua conta de luz, o seu histórico de consumo e detalhes da fatura.</p>
        {/* Imagem */}
        <img src="/images/ilustracao-simulacao.png" alt="Simulação de conta de luz" />
        <Link href="/proposta" passHref><button className={styles.mainButton}>Continuar com meus dados</button></Link>
        <p className={styles.lgpdText}>Informa-se que a (LGPD) realizará o tratamento de seus dados...</p>
      </div>
    </Layout>
  );
}