
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');//whether dark mode is enabled or not
  const [alert,setAlert]= useState(null);
 
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

 const toggleMode=()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
   // document.title = "TextUtils - DarkMode";
   /* setInterval(()=>{   //Flashing title with some msg
      document.title = "TextUtils is Amazing";
    },2000); */

  }
  else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
   // document.title = "TextUtils - LightMode";
   }
}

  return (
    <> 
    <Router>
   <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
    
    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
     <Routes>
      {/**exact keyword is used so that react router will search for exact same file which is refferd and dont get confuse btween similar named files
       * eg.  /users-->component 1
       *     /users/home--> componenet 2
       * 
       */}
          <Route exact path="/About" element = {<About mode={mode}/>}/>
          <Route exact path="/" element ={<TextForm showAlert={showAlert} heading=" Try TextUtils - Word counter, character counter, Remove extra spaces" mode={mode}/>}>
          </Route>
     </Routes>
   {/**<About/>  */}
   </div>
   </Router>
    </>
  );
}

export default App;
