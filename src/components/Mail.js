import React, {useState} from 'react'
import '../styles/Mail.css'
import Checkbox from '@material-ui/core/Checkbox';
import EmailIcon from '@material-ui/icons/Email'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import DeleteIcon from '@material-ui/icons/Delete'
import ErrorIcon from '@material-ui/icons/Error'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import PrintIcon from '@material-ui/icons/Print'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import { IconButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import '../styles/Mail.css'
import { selectSelectedMail } from '../features/mailSlice'

const Mail = () => {
  const history = useHistory()
  const mail = useSelector(selectSelectedMail)
  console.log('mail', mail)
  return (
    <div className='mail'>
      <div className='mail_tools'>
        <div className='mail_toolsLeft'>
          <IconButton onClick={() => history.push('/')}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
        </div>

        <div className='mail_toolsRight'>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className='mail_body'>
        <div className='mail_bodyHeader'>
          <h2>{mail.subject}</h2>
          <LabelImportantIcon className='mail_important' />
          <p>{mail.title}</p>
          <p className='mail_body_time'>{mail.time}</p>
        </div>
        <div className='mail_message'>
          <p>{mail.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail
