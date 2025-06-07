import style from './style.module.scss';

const Footer = () => {
 return (
  <>
   <footer className={style.footer}>
    <p>
     © {new Date().getFullYear()} Luiz Albuquerque. Todos os direitos
     reservados.
    </p>
   </footer>
  </>
 );
};

export default Footer;
