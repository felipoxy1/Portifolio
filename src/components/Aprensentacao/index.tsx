import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
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
  <header className={styles.apresentacao}>
   <button
    onClick={alternarTema}
    className={styles.toggleTema}
    aria-label="Alternar tema"
   >
    🌙 / ☀️
   </button>

   <h1 className={styles.titulo}>
    <TypeAnimation
     sequence={[
      'Luiz Albuquerque',
      10000,
      'Tambem conhecido como: felipoxy1',
      3000,
     ]}
     speed={70}
     cursor={true}
     repeat={Infinity}
    />
   </h1>

   <h2 className={styles.subTitulo}>
    <TypeAnimation
     sequence={['Desenvolvedor Front-End', 2000]}
     speed={60}
     cursor={false}
     repeat={1}
    />
   </h2>

   <p className={styles.text}>
    <TypeAnimation
     sequence={[
      'Criando interfaces mordernas e funcionais com React e Vue',
     ]}
     speed={50}
     cursor={false}
    />
   </p>

   <a
    className={styles.buttonDownload}
    download
    href="/public/Curriculo_FrontEnd-LuizAlbuquerque.pdf"
   >
    Download CV
   </a>
  </header>
 );
};

export default Apresentacao;
