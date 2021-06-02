import React from 'react'
import HeaderRight from './HeaderRight'
import HeaderLeft from './HeaderLeft'
import '../styles/Header.css'
import HeaderCenter from './HeaderCenter'

const Header = () => {
  return (
    <div className='header'>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  )
}

export default Header
