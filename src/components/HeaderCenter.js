import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import '../styles/Header.css'
import ArrowDropDownIcon from './ArrowDropDownIcon'

const HeaderCenter = () => {
  return (
    <div className='headerLeft_searchInput'>
      <div className='headerLeft_searchIcon'>
        <SearchIcon fontSize='large' style={{color: "gray"}}/>
        <input placeholder='Buscar Correo'></input>
        <ArrowDropDownIcon className='headerCenter_arrowDropDown'/>
      </div>
      
    </div>
  )
}

export default HeaderCenter
