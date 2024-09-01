
import style from './Projects.style.module.css'
import photo from '../../assets/1photo.jpg'
import netflix from '../../assets/NETFLIX.png'
import dash from '../../assets/dash.png'
import sps from '../../assets/sps.jfif'
import space from '../../assets/aaa.png'
import ProjectsCards from '../../common/ProjectsCards'

const Projects = () => {
  return (
   <section id='projects' className={style.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div 
    className={style.ProjectsContainer} >

<ProjectsCards
 src={photo}
 link='https://prahaldprojects.github.io/musigeet-/'
 h3='musigeet'
 P= 'music app'
 />


<ProjectsCards
 src={netflix}
 link='https://prahaldprojects.github.io/netflx-/'
 h3='netflix'
 P= 'clone of netflix'
 />

 
<ProjectsCards
 src={dash}
 link='https://prahaldprojects.github.io/dash-board//'
 h3='dashbord'
 P= 'dash board'
 />


 
<ProjectsCards
 src={sps}
 link='https://prahaldprojects.github.io/game-R.P.S/'
 h3='game'
 P= 'stone papaer scissor'
 />

<ProjectsCards
 src={space}
 link='https://github.com/prahaldprojects/new-space-project'
 h3='space'
 P= 'space Tourism web site'
 />

    </div>
   </section>
  )
}

export default Projects
