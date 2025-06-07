import emailjs from 'emailjs-com';
import { SiLinkedin } from 'react-icons/si';
import { MdEmail, MdSend } from 'react-icons/md';
import style from './style.module.scss';
import { FaGithubSquare } from 'react-icons/fa';

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();

 emailjs
  .sendForm(
   'service_hs4mqtj',
   'template_24t0sxj',
   e.currentTarget,
   '0TWLGskG79HpmE--F',
  )
  .then(() => alert('Mensagem enviada!'))
  .catch(error => console.log(error));
};

const Contato = () => {
 return (
  <section className={style.contactSection}>
   <h3 className={style.contactTitle}>Contato</h3>
   <div className={style.contactArea}>
    <form onSubmit={sendEmail} className={style.contactForm}>
     <input
      className={style.contactInput}
      placeholder="Nome"
      name="name"
      type="text"
     />
     <input
      className={style.contactInput}
      type="email"
      placeholder="Email"
      name="email"
     />
     <input
      className={style.contactInput}
      type="text"
      placeholder="Mensagem"
      name="message"
     />
     <button className={style.contactButton} type="submit">
      Enviar
      <MdSend className={style.contactButtonIcon} size={19} />
     </button>
    </form>
    <div className={style.contactLinks}>
     <a
      target="_blank"
      rel="noopener noreferrer"
      href="mailto:1luiz.albuquerque@gmail.com"
     >
      <MdEmail
       href="luizfelipepassos2015@gmail.com"
       className={style.contactLinksIcon}
      />
     </a>
     <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/luizpalbuquerque/"
     >
      <SiLinkedin className={style.contactLinksIcon} />
     </a>
     <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/felipoxy1"
     >
      <FaGithubSquare className={style.contactLinksIcon} />
     </a>
    </div>
   </div>
  </section>
 );
};

export default Contato;
