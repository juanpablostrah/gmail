import React from 'react'
import '../styles/Section.css'

const Section = ({Icon, title, borderColor, selected}) => {
  return (
    <div className={`section ${selected && "section--selected"}`} 
         style={{borderBottom: `3px ${borderColor}`,
                 color: `${selected && borderColor}`,
                }}>
      <Icon />
      <p>{title}</p>
    </div>
  )
}

export default Section
