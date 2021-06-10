import React from 'react'
import HeaderOption from './HeaderOption'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Avatar } from '@material-ui/core';

const HeaderRight = () => {
  return (
    <div className='headerRight'>
      <HeaderOption Icon={AppsIcon}/>
      <HeaderOption Icon={NotificationsIcon}/>
      <Avatar />
    </div>
  )
}

export default HeaderRight
