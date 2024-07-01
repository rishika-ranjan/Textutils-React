import './Appa.css';
import React,{ useState} from 'react';

//import About from './Componenets/About';
import Navbar from './Componenets/Navbar';
import Textform from './Componenets/Textform';
import Alert from './Componenets/Alert';

//import {
  //BrowserRouter as Router,
 // Routes,
 // Route
  //} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('dark'); //it tells whether dark mode is enabled or not
  const [alert, setAlert] =useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
     setAlert(null);
    },3000);
  };
  const toggleMode=()=>{
    if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled" , "success");
    document.title='Textutils-Dark mode';
    // setInterval(()=>{
    //document.title='Textutils is amazing';

    //},2000);
    //setInterval(()=>{
     // document.title='Install Textutils Now';
  
     // },1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled" , "success");
    document.title='Textutils-Light mode';
  }
};
  return (
    
    <>
    {/* <Navbar title="textutils" abouttext="About Textutils"/> */}
    {/* <Router> */}
    <Navbar title="textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={<Textform showAlert={showAlert}heading="Enter the text to analyse"mode={mode} />} /> */}
          
    {/* </Routes> */}
    
   
    </div>
    {/* </Router> */}
    
    
   </>
    
  );
}

export default App;
