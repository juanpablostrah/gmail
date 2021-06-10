import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import '../styles/Header.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { IconButton } from '@material-ui/core';

const HeaderCenter = () => {
  return (
    <div className='header_center'>
      <div className='headerCenter_searchIcon'>
        <SearchIcon style={{color: "gray"}}/>
        <input placeholder='Buscar en el correo electrónico'></input>
        <div className='headerCenter_arrowDropDown'>
          <IconButton >
            <ArrowDropDownIcon />
          </IconButton>
        </div>
        
      </div>
    </div>
  )
}

export default HeaderCenter
