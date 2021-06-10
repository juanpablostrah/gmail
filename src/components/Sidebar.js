import React from 'react'
import { Button, Icon, IconButton } from '@material-ui/core'
import '../styles/Sidebar.css'
import AddIcon from '@material-ui/icons/Add'
import MailOption from './MailOption'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/LabelImportant'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Button className='sidebar_addButton' startIcon={<AddIcon className='sidebar_addIcon' />}>Redactar</Button>
      <MailOption Icon={InboxIcon} title='Recibidos' number={54} selected={true}></MailOption>
      <MailOption Icon={StarIcon} title='Destacados' number={99}></MailOption>
      <MailOption Icon={AccessTimeIcon} title='Pospuestos' number={99}></MailOption>
 
      <MailOption Icon={NearMeIcon} title='Enviados' number={99}></MailOption>
      <MailOption Icon={NoteIcon} title='Borrador' number={99}></MailOption>
      <MailOption Icon={ExpandMoreIcon} title='Mas' number={99}></MailOption>
      
      <div className='sidebar_footer'>
        <div className='sidebar_footer_icon'>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar
