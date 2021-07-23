import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mail from './components/Mail'
import EmailList from './components/EmailList'
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice'

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  console.log('selectSendMessage', selectSendMessageIsOpen)
  return (
    <Router>
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
    </Router>
    
  );
}

//<img src='https://www.wallpapertip.com/wmimgs/31-311530_gmail-wallpaper-gmail-background.jpg' alt=''></img>
export default App;
