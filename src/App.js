
import React from 'react';
import SignUp from './components/Registration';
import  Login from './components/Login';
import  Home  from './components/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignupForm from './components/SignupForm';




function App() {
  return (
    <>
    
  
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/SignUp" element={<SignUp />}></Route>

  </Routes>
  


{/*<Home/>
    <Login/>
  <SignUp/> 
  */}
  
    
</>

  );
}

export default App;