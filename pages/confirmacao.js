import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Confirmacao.module.css';

export default function ConfirmacaoPage() {
  return (
    <Layout>
      <div className={styles.container}>
        {/* Ícone de check */}
        <div className={styles.successIcon}>✓</div>
        <h2>Contrato assinado</h2>
        <p>Seja bem-vindo ao Mercado Livre</p>
        <p>Você receberá um e-mail no endereço felipe@gmail.com com as informações da sua contratação e uma cópia do seu contrato.</p>
        <Link href="/" passHref><button className={styles.mainButton}>RETORNAR AO INÍCIO</button></Link>
      </div>
    </Layout>
  );
}