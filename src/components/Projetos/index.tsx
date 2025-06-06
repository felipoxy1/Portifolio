import { SiGithub } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import style from './style.module.scss';
import ListaDeContatosImg from '../../assets/ListaDeContatos.png';
import Efood from '../../assets/Efood.png';

const Projetos = () => {
 return (
  <>
   <section className={style.projectsSection}>
    <h3 className={style.projectsTitle}>Meus Projetos</h3>
    <div className={style.projectsList}>
     <div className={style.projectCard}>
      <img
       className={style.projectCardImg}
       src={ListaDeContatosImg}
       alt=""
      />
      <h4 className={style.projectCardTitle}>Lista de Contatos</h4>
      <p className={style.projectCardText}>
       Lista de contatos feita em React, Redux, Styled Componentes e
       localStorage para armazenamento de dados local
      </p>
      <div className={style.projectCardButton}>
       <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/felipoxy1/ListaDeContatos"
       >
        Github
        <SiGithub size={20} />
       </a>
       <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://lista-de-contatos-v2.vercel.app/"
       >
        Acessar o site
        <FaExternalLinkAlt size={18} />
       </a>
      </div>
     </div>
     <div className={style.projectCard}>
      <img className={style.projectCardImg} src={Efood} alt="" />
      <h4 className={style.projectCardTitle}>Efood</h4>
      <p className={style.projectCardText}>
       Site que simula um especime de ifood com restaurantes de cardapios
       dentro, tera tambem adicionar ao carrinho e pagamento, ainda nao
       esta pronto.
      </p>
      <div className={style.projectCardButton}>
       <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/felipoxy1/Efood"
       >
        Github
        <SiGithub size={20} />
       </a>
       <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://efood-ten-beige.vercel.app/"
       >
        Acessar o site
        <FaExternalLinkAlt size={18} />
       </a>
      </div>
     </div>
    </div>
   </section>
  </>
 );
};

export default Projetos;
