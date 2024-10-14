import styles from './SkillsStyles.module.css' ; 
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';
function Skills() {

  return (
   <section id = 'skills' className={styles.container}>
    <h1 className='sectionTitle'>Skills</h1>
    <div className={styles.skillList}>
        <SkillList src = {checkMarkIcon} skill ='SQL'/>
        <SkillList src = {checkMarkIcon} skill ='Power BI'/>
        <SkillList src = {checkMarkIcon} skill ='Python'/>
        <SkillList src = {checkMarkIcon} skill ='NoSQL'/>
        <SkillList src = {checkMarkIcon} skill ='SSAS/SSIS/SSMS'/>
    </div>
    <hr />
    <h1 className='sectionTitle'>Certification</h1>
    <div className={styles.skillList}>
        <SkillList src = {checkMarkIcon} skill ='PL/300 Microsoft Power BI'/>
        <SkillList src = {checkMarkIcon} skill ='SQL for Data Science(UCDAVIS)'/>
        <SkillList src = {checkMarkIcon} skill ='Machine learning (DeepLearning.AI)'/>
        </div>
   </section> 

  )
}

export default Skills