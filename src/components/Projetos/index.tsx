import { SiGithub } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import style from './style.module.scss';
import { useProjects } from '../../hooks/useProjects';
import { useState } from 'react';

const Projetos = () => {
 const [overlayIndex, setOverlayIndex] = useState<number | null>(null);
 const { projects, loading } = useProjects();

 if (loading) return <p>Carregando projetos...</p>;

 const projetosPrioritarios = projects
  .filter(p => p.Prioridade === true)
  .slice(0, 3);

 const projetoAtivo =
  overlayIndex !== null ? projetosPrioritarios[overlayIndex] : null;

 return (
  <section className={style.projectsSection}>
   <h3 className={style.projectsTitle}>Meus Projetos</h3>
   <div className={style.projectsList}>
    {projetosPrioritarios.length === 0 && (
     <p>Nenhum projeto com prioridade encontrado.</p>
    )}

    {projetosPrioritarios.map((project, index) => (
     <div
      onClick={() => setOverlayIndex(index)}
      className={style.projectCard}
      key={project.id}
     >
      {project.Imagem && (
       <img
        className={style.projectCardImg}
        src={project.Imagem}
        alt={project.Nome}
       />
      )}
      <h4 className={style.projectCardTitle}>{project.Nome}</h4>
      <p className={style.projectCardText}>{project.Desc}</p>
      <div className={style.projectCardButton}>
       {project.GitLink && (
        <a
         target="_blank"
         rel="noopener noreferrer"
         href={project.GitLink}
         onClick={e => e.stopPropagation()}
        >
         Github <SiGithub size={20} />
        </a>
       )}
       {project.Link && (
        <a
         target="_blank"
         rel="noopener noreferrer"
         href={project.Link}
         onClick={e => e.stopPropagation()}
        >
         Acessar o site <FaExternalLinkAlt size={18} />
        </a>
       )}
      </div>
     </div>
    ))}
   </div>
   {projetoAtivo && (
    <div className={style.Overlay} onClick={() => setOverlayIndex(null)}>
     <div
      className={style.OverlayContent}
      onClick={e => e.stopPropagation()}
     >
      <button
       className={style.closeButton}
       onClick={() => setOverlayIndex(null)}
      >
       &times;
      </button>
      <h2>{projetoAtivo.Nome}</h2>
      <div className={style.imageContainer}>
       <img src={projetoAtivo.Imagem} alt={projetoAtivo.Imagem} />
      </div>
      <div>
       <p>{projetoAtivo.DescMaior}</p>
      </div>
      <div className={style.linksContainer}>
       <a className={style.linkGitHub} href={projetoAtivo.GitLink}>
        GitHub <SiGithub size={20} />
       </a>
       <a className={style.linkSite} href={projetoAtivo.Link}>
        Abrir no site <FaExternalLinkAlt size={18} />
       </a>
      </div>
     </div>
    </div>
   )}
  </section>
 );
};

export default Projetos;
