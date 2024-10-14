import styles from './ProjectsStyles.module.css'
import Paris from '../../assets/Paris.png'
import finance from '../../assets/Finance.png'
import bal from '../../assets/Bal.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={Paris} link = {"https://github.com/khalilrah/Power-BI-Olympic-2024-Dashboard"} 
            h3="Olympics 2024"
            p="Olympics 2024 Dashboard" />
            <ProjectCard src={finance} link = {"https://github.com/khalilrah/Power-BI--Finance-Dashboard-"} 
            h3="Finance"
            p="Finance Dashboard"/>
            <ProjectCard src={bal} link = {"https://github.com/khalilrah/"} 
            h3="integrated project"
            p="Data science / Business Intelligence"/>
            
            
        </div>
    </section>
  ) ; 
}

export default Projects ; 