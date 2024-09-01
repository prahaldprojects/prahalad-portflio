
import style from './Skill.style.module.css'; 
import checkMarkIconDark from '../../assets/checkmark-dark (1).svg'; 
import checkMarkIconLight from '../../assets/checkmark-light.svg'; 
import SkillList from '../../common/SkillList'; // Ensure this path is correct

import { useTheme } from '../../common/ThemeContext';



function Skills() {
  const { theme } = useTheme(); // Ensure useTheme hook works properly
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={style.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={style.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="tailwind css" />
        <SkillList src={checkMarkIcon} skill="React js" />
      </div>
  
    </section>
  );
}

export default Skills;