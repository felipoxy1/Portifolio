import { useEffect, useState } from 'react';
import styles from './style.module.scss';

const Apresentacao = () => {
 const [tema, setTema] = useState<'light' | 'dark'>('light');

 useEffect(() => {
  const temaSistema =
   window.matchMedia &&
   window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  const temaSalvo = localStorage.getItem('tema') as
   | 'light'
   | 'dark'
   | null;

  const temaInicial = temaSalvo || temaSistema;
  setTema(temaInicial);
  document.documentElement.setAttribute('data-theme', temaInicial);
 }, []);

 useEffect(() => {
  document.documentElement.setAttribute('data-theme', tema);
  localStorage.setItem('tema', tema);
 }, [tema]);

 const alternarTema = () => {
  setTema(prevTema => (prevTema === 'light' ? 'dark' : 'light'));
 };

 return (
  <>
   <header className={styles.apresentacao}>
    <button
     onClick={alternarTema}
     className={styles.toggleTema}
     aria-label="Alternar tema"
    >
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
