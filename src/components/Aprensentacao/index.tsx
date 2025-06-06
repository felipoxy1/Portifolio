import styles from './style.module.scss';

const Apresentacao = () => {
 return (
  <>
   <header className={styles.apresentacao}>
    <button className={styles.toggleTema} aria-label="Alternar tema">
     🌙 / ☀️
    </button>
    <h1 className={styles.titulo}>Luiz Albuquerque</h1>
    <h2 className={styles.subTitulo}>Desenvolvedor Front-End</h2>
    <p className={styles.text}>
     Criando interfaces mordernas e funcionais com React e Vue
    </p>
    <a
     className={styles.buttonDownload}
     download
     href="/Luiz-Curriculo.pdf"
    >
     Download CV
    </a>
   </header>
  </>
 );
};

export default Apresentacao;
