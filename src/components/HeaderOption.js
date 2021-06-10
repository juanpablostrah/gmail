import React from 'react'
import { IconButton } from '@material-ui/core';

const HeaderOption = ({Icon}) => {
  return (
    <div>
      <IconButton style={{color: 'gray'}}>
        <Icon />
      </IconButton>
    </div>
  )
}

export default HeaderOption
