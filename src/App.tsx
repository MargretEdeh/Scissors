import React from 'react';
// import logo from './logo.svg';
import { Create } from './Pages/Create';

import { Home } from './Pages/Home';
import { Dashboard } from './Pages/Dashboard';
import { Qrcode } from './Pages/Qrcode';
//  import { AuthProvider } from './Context/ContextProvider';
// import { AuthContext } from './Context/ContextProvider';
 import { Signup } from './Pages/Signup';
 import { Signin } from './Pages/Signin';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// import sciLogo from "./images/sciLogo.svg"

function App() {
  // const { isLoggedIn } = React.useContext(AuthContext);
  // const isAuth = false;

  return (
    
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="/dashboard/create" element={<Create/>}/>
          <Route path="/dashboard/qrcode" element={<Qrcode/>}/>
          
        </Route>
      </Routes>

    </div>
  );
}

export default App;
