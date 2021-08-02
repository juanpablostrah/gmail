import React from 'react'
import HeaderOption from './HeaderOption'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, selectUser } from '../features/userSlice';
import { auth } from '../database/Firebase';

const HeaderRight = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  function logout(){
    auth.signOut().then(() => {
      console.log('logout')
      dispatch(logoutUser())  
    })
  }

  return (
    <div className='headerRight'>
      <HeaderOption Icon={AppsIcon}/>
      <HeaderOption Icon={NotificationsIcon}/>
      <Avatar src={user?.photoUrl} onClick={() => logout()}/>
    </div>
  )
}

export default HeaderRight
