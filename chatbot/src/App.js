// App.js
import Loginform from './components/Loginform';
import Chatbot from './components/Chatbot';
import { useState } from 'react';
import './app.css';
import UserContext from './UserContext';

function App() {
  const [isLoginned, setIsLoginned] = useState(false);
  const [userDetail, setUserDetail] = useState({ email: '', username: '' });

  return (
    <UserContext.Provider value={userDetail}>
      <div>
        {!isLoginned ? (
          <Loginform setisloginned={setIsLoginned} setuserdetail={setUserDetail} />
        ) : (
          <Chatbot setisloginned={setIsLoginned} />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;