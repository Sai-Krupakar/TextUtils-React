import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      // document.title = 'TextUtils - Light Mode';
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
      // document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtils is Amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500);
    }
  }
  return (
    <>
    <Router>
      <Navbar title='TextUtils' aboutText='About TextUtils' mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar title='TextUtils'/> */}
      <Alert alert={alert}/>
      <div className='container my-3'>
        <Routes>
              <Route exact path="/about" element={<About mode={mode}/>}>
              </Route>
              <Route exact path="/" element={<TextForm heading='Try TextUtils - Word Counter, Character Counter, Remove extra spaces' showAlert={showAlert} mode={mode}/>}>
                {/* <TextForm heading='Enter the text to analyze below' showAlert={showAlert} mode={mode}/> */}
              </Route>
        </Routes>
      </div>
    </Router>

    {/* <Router>
      <Navbar title="TextUtils" aboutText='About TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert} mode={mode}/>} />
        </Routes>
      </div>
   </Router> */}

    </>
  );
}

export default App;
