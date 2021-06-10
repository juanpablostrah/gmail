import React from 'react'
import '../styles/EmailRow.css'
import { Checkbox, IconButton } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import { useHistory } from 'react-router-dom'

const EmailRow = ({id, title, subject, description, time}) => {
  const history = useHistory()
  return (
    <div className='emailRow' onClick={() => history.push('/mail')}>
      <div className='emailRow_options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <h3 className='emailRow_title' >
        {title + 'dsadasdasdasdasdasdasdsdasdasdasdasdadasdasdasdasdasdasdaasdasdasdasdasdasdasdasdasdasdasdasdadasdasda'}
      </h3>

      <div className='emailRow_message'>
        <h4>
          {subject}
          <span className='emailRow_description'>
            {'- ' + description + 'dasdsadasdasdasdasdasddasaaaaaaaaaaaaaaaadasdsadasdasdasdasdasddasaaaaaaaaaaaaaaaadasdsadasdasdasdasdasddasaaaaaaaaaaaaaaaadasdsadasdasdasdasdasddasaaaaaaaaaaaaaaaadasdsadasdasdasdasdasddasaaaaaaaaaaaaaaaa'}
          </span>  
        </h4>
      </div>

      <p className='emailRow_time'>
        {time}
      </p>

    </div>
  )
}

export default EmailRow
