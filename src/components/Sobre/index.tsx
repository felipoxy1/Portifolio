import styles from './style.module.scss';

const Sobre = () => {
 return (
  <section className={styles.aboutSection}>
   <h2 className={styles.aboutTitle}>Sobre mim</h2>
   <p className={styles.aboutText}>
    Sou Luiz Felipe, desenvolvedor com 2 ano de experiência em
    desenvolvimento front-end, usando tecnologias como JavaScript,
    Bootstrap, React, Node, Sass e Typescript. Já trabalhei como
    freelancer, criando sites para pequenas empresas e familiares, o que me
    proporcionou uma visão prática das necessidades dos clientes e
    aprimorou minhas habilidades em desenvolvimento web.
   </p>
  </section>
 );
};

export default Sobre;
