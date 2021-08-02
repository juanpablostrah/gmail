import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mail from './components/Mail'
import { useEffect } from 'react'
import EmailList from './components/EmailList'
import SendMail from './components/SendMail';
import Login from './components/Login';
import { useSelector, useDispatch } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser, loginUser } from './features/userSlice';
import { auth } from './database/Firebase';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  console.log('appUser', user)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        //there is a user login
        dispatch(loginUser({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }))
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      {!user ? (
          <Login />
        ) : (
          <div className="App">
            <Header />
            <div className='app_body'>
            <Sidebar />
              <Switch>
                <Route path='/mail'>
                  <Mail />
                </Route>
                <Route path='/'>
                  <EmailList />
                </Route>
              </Switch>
            </div>
            {sendMessageIsOpen && <SendMail /> }
          </div>  
        )}
    </Router>
  );
}

//<img src='https://www.wallpapertip.com/wmimgs/31-311530_gmail-wallpaper-gmail-background.jpg' alt=''></img>
export default App;
