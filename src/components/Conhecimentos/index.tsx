import styles from './style.module.scss';
import {
 SiTypescript,
 SiHtml5,
 SiCss3,
 SiJavascript,
 SiReact,
 SiVuedotjs,
 SiAngular,
 SiSass,
 SiBootstrap,
 SiTailwindcss,
 SiRedux,
 SiJest,
} from 'react-icons/si';

const conhecimentos = [
 { Icon: SiHtml5, colorHover: '#e34f26' },
 { Icon: SiCss3, colorHover: '#1572b6' },
 { Icon: SiJavascript, colorHover: '#f7df1e' },
 { Icon: SiTypescript, colorHover: '#3178c6' },
 { Icon: SiReact, colorHover: '#61dafb' },
 { Icon: SiVuedotjs, colorHover: '#42b883' },
 { Icon: SiAngular, colorHover: '#dd0031' },
 { Icon: SiSass, colorHover: '#cc6699' },
 { Icon: SiBootstrap, colorHover: '#7952b3' },
 { Icon: SiTailwindcss, colorHover: '#38b2ac' },
 { Icon: SiRedux, colorHover: '#764abc' },
 { Icon: SiJest, colorHover: '#99425b' },
];

const Conhecimentos = () => {
 return (
  <section className={styles.knowleadsSection}>
   <h2 className={styles.knowleadsTitle}>Conhecimentos</h2>
   <div className={styles.knowleadsGrid}>
    {conhecimentos.map(({ Icon, colorHover }, i) => (
     <Icon
      key={i}
      className={styles.icon}
      style={{ '--hover-color': colorHover } as React.CSSProperties}
     />
    ))}
   </div>
  </section>
 );
};

export default Conhecimentos;
