import React, { useState } from 'react'
import '../styles/SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/mailSlice'
import { db } from '../database/Firebase'
import firebase from 'firebase'

const SendMail = () => {
  const {register, handleSubmit, watch, errors} = useForm();
  const dispatch = useDispatch()
  
  function submit(formData){
    debugger
    console.log(formData)
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    dispatch(closeSendMessage())
  }

  function closeSendMail(){
    dispatch(closeSendMessage())
  }

  return (
    <div className='sendMail'>
      <div className='sendMailHeader'>
        <h3>New Message</h3>
        <CloseIcon className='sendMailCloseIcon' onClick={() => closeSendMail()}/>
      </div>
      <form onSubmit={handleSubmit(submit)} className='sendMailForm'>
        <input 
          name='to' 
          className='sendMailInput' 
          type='email' 
          placeholder='To'
          {...register('to',{ required : true})}
        />
        {/* {errors.subject && <p>To is required!</p>} */}
        <input 
          name='subject' 
          className='sendMailInput' 
          type='text' 
          placeholder='Subject'
          {...register('subject',{ required : true})} 
        />
        <input 
          name='message' 
          className='sendMailInputBody' 
          type='text' placeholder='Message' 
          {...register('message',{ required : true})}
        />  
        <div className='sendMailFooter'>
          <Button 
            className='footerButton'
            type='submit'
            variant='contained'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
