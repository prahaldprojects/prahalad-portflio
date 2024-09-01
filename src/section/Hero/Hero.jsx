import style from './Hero.Style.module.css';
import prahald from '../../assets/prahald.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import cv from '../../assets/White Professional Web Designer Resume_20240826_160811_0000.pdf';
import { useTheme } from '../../common/ThemeContext';

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


  return (
    <section id="hero" className={style.container}>
      <div className={style.colorModeContainer}>
        <img className={style.hero} src={prahald} alt="profile" />
        <img
          className={style.colorMode}
          src={themeIcon}
          alt="theme toggle icon"
          onClick={toggleTheme}  // Corrected onClick event
        />
      </div>
      <div className={style.info}>
        <h1><span className="intro"> hi, I'm </span> Prahalad prajapat &</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/Prahalad__19?t=Eq1dy1tV0bqWJ-z4_8rZsg&s=09" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://github.com/prahaldprojects" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/prahalad-prajapat-b59bb0263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </span>
        <p className={ style.description}>
          Passionate about creating engaging web solutions that combine aesthetics and functionality to deliver exceptional user experiences.
        </p>
        <a href={cv} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;