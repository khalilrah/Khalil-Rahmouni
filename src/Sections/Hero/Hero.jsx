import styles from './HeroStyles.module.css';
import heroImg from '../../assets/portfolioCercle.png';
import sun from '../../assets/sun.svg' ; 
import moon from '../../assets/moon.svg' ; 
import linkdinLight from '../../assets/linkedin-light.svg'
import linkdinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/CV Khalil.pdf'
import {useTheme} from '../../common/ThemeContext'
function Hero() {
  const {theme , toggleTheme} = useTheme(); 
  const themeIcon = theme === 'light' ? sun : moon ; 
  const linkdinIcon = theme === 'light' ? linkdinLight : linkdinDark ; 
  const GithubIcon = theme === 'light' ? githubLight : githubDark ;  
  return (
    <section id="hero" className={styles.container}>
      <div className = {styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture of Khalil Rahmouni" />
        <img className = {styles.colorMode} src={themeIcon} alt = 'Color mode icon'
        onClick={toggleTheme} />
      </div>
      <div className= {styles.info}>
        <h1>
          Khalil
           <br />
          Rahmouni 
        </h1>
        <h2>
          Business Analytics Student  
        </h2>
        <span>
          <a href="https://linkedin.com/in/khalil-rahmouni/" target='_blank'>
          <img src={linkdinIcon} alt="linkdin icon" /></a>
          <a href="https://github.com/khalilrah/" target='_blank'>
          <img src={GithubIcon} alt="Github icon" /></a>
        </span>
        <p className={styles.description}>
        Business Analytics student with strong skills in data analysis, ETL processes, SQL, Python, and Power BI, currently seeking an internship to apply and further develop these skills in a professional setting.
        </p>
        <a href={CV} download>
          <button className='hover'>
            Resume 
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
