import { SiGithub } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import style from './style.module.scss';
import { useProjects } from '../../hooks/useProjects';

const Projetos = () => {
 const { projects, loading } = useProjects();

 if (loading) return <p>Carregando projetos...</p>;

 const projetosPrioritarios = projects
  .filter(p => p.Prioridade === true)
  .slice(0, 3);

 return (
  <>
   <section className={style.projectsSection}>
    <h3 className={style.projectsTitle}>Meus Projetos</h3>
    <div className={style.projectsList}>
     {projetosPrioritarios.length === 0 && (
      <p>Nenhum projeto com prioridade encontrado.</p>
     )}
     {projetosPrioritarios.map(project => (
      <div className={style.projectCard} key={project.id}>
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
         >
          Github <SiGithub size={20} />
         </a>
        )}
        {project.Link && (
         <a target="_blank" rel="noopener noreferrer" href={project.Link}>
          Acessar o site <FaExternalLinkAlt size={18} />
         </a>
        )}
       </div>
      </div>
     ))}
    </div>
   </section>
  </>
 );
};

export default Projetos;
