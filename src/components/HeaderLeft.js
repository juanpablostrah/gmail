import React, {useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import Menu from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import '../styles/Header.css'

const HeaderLeft = () => {
  const [inputSearch, setInputSearch] = useState('')
  return (
    <div className='headerLeft'>
      <IconButton>
        <Menu fontSize='large' style={{color: "gray", marginRight: 10}}/>
      </IconButton>
      <div className='headerLeft_gmail'>
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_2x_r2.png' alt='gmail'></img>
      </div>
    </div>
  )
}

export default HeaderLeft
