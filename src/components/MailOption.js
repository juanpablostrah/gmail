import React from 'react'
import '../styles/MailOption.css'

const MailOption = ({Icon, title, number, selected}) => {
  return (
    <div className={`mailOption ${selected && "mailOption--active"}`}>
      <Icon></Icon>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}

export default MailOption
