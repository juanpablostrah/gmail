import React from 'react'
import '../styles/EmailList.css'
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import { IconButton } from '@material-ui/core'
import Section from './Section'
import EmailRow from './EmailRow'

const EmailList = () => {
  return (
    <div className='emailList'>
      <div className='emailList_settings'>
        <div className='emailList_settings_left'>
          <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
          <IconButton >
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton >
            <RedoIcon />
          </IconButton>
          <IconButton >
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='emailList_settings_right'>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>   
      </div>

      <div className='email_section'>
        <Section Icon={InboxIcon} title='Principal' borderColor='red' active/>
        <Section Icon={PeopleIcon} title='Social' borderColor='1A73E8'/>
        <Section Icon={LocalOfferIcon} title='Promociones' borderColor='green'/>
      </div>

      <div className='emailList_list'>
        <EmailRow 
          title='hello world'
          description='first email sent'
          message='this is the message of the email'
          time='10pm'/>
      </div>
    </div>
  )
}

export default EmailList
