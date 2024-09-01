import React from 'react'

const ProjectsCards = ({src,link,h3,P}) => {
  return (
    <a href={link} target='-blank'>
<img className='hover' src={src} alt={ ` ${h3} logo` }/>
<h3>{h3}</h3>
<p>{P}</p>

</a>
  )
}

export default ProjectsCards
