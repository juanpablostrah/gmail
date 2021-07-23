import React, { useState, useEffect } from 'react'
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
import { db } from '../database/Firebase'

const EmailList = () => {
  const [emails, setEmails] = useState([])
  const emailsCollection = db.collection('emails')
  // useEffect(() => {
  //   const myEmails = emailsCollection.where('to' === 'user').get()
  //   return () => {
  //     setEmails(myEmails)
  //   }
  // }, [emails, emailsCollection])
  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          setEmails(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        })
        console.log('mails', emails)
        //console.log('data1', emails[0].data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

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
        {
          emails && emails.map(({id, data: { to, subject, message, timestamp }}) => {
            return <EmailRow
              key={id}
              title={to}
              id={id}
              subject={subject}
              description={message}
              timestamp={timestamp}>
            </EmailRow>
          })
        }
      </div>
    </div>
  )
}

export default EmailList
