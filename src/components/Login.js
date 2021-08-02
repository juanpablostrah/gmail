import React from 'react'
import '../styles/Login.css'
import { Button } from '@material-ui/core'
import { auth, googleProvider } from '../database/Firebase'
import { useDispatch } from 'react-redux'
import { loginUser } from '../features/userSlice'

const Login = () => {
  const dispatch = useDispatch()

  function signIn() {
    auth.signInWithPopup(googleProvider)
      .then(({user}) => {
        console.log('USER', user)
        dispatch(loginUser({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        ) 
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <div className='login_container'>
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png'
          alt="">
        </img>
        <Button variant="contained" color="primary" onClick={() => signIn()}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
