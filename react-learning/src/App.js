import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import About2 from './components/About2';
import { useState } from 'react';
import $ from 'jquery'
import Alert from './components/Alert';
// import CustomTheme from './components/CustomTheme';

// Using react Router 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // it shows that weather the Dark mode is enabled or not
  const [switchMode,setswitchMode] = useState('Darkmode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:  message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const tooglemode = () => {
    if(mode === 'light'){
      setMode('dark');
      $('body').css('background-color', 'rgb(105, 105, 115)');
      $('body').css('color', 'white');
      // $("#main-container-body").attr('style', "Filter: invert(100%);")
      setswitchMode("LightMode");
      showAlert("Dark Mode Enabled SusessFully", "success");
      // We are using Ternary operator of javascript so i have commented it
      // $(".form-check-label").addClass("text-light")
    }
    else{
      setMode('light');
      $('body').css('background-color', 'white');
      $('body').css('color', 'black');
      // $("#main-container-body").attr('style', "Filter: invert(0%);")
      setswitchMode("Darkmode");
      showAlert("Light Mode Enabled SusessFully", "success");
      // We are using Ternary operator of javascript so i have commented it
      // $(".form-check-label").removeClass("text-light")
    }
  }

  // Creating a custom Theme 

  // const [theme, setTheme] = useState(null);
  // const changeTheme = () => {
  //   let back_color = document.getElementById('back-Color').value;
  //   let text_color = document.getElementById('text-Color').value;
  //   setTheme(
      
  //       'backgroundColor', back_color, 
  //       'color', text_color
  //     );
  //   $('body').css('backgroundColor', back_color, 'color', text_color);
  //   // $('body').css('backgroundColor', back_color, 'color', text_color);
  //   showAlert("Custom Theme Applied SusessFully", "success");
  // }
  
  return (
    <>
      {/* if no props are set then default will be loded */}
      {/* <Navbar /> */}
      {/* <CustomTheme changeTheme={changeTheme} theme={theme}/> */}
      {/* <div id="main-container-body"> */}
      {/* if you want to see this form then uncomment it. */}
      {/* <div className="container">
        <Form heading="Enter the Text to Analyze" showAlert={showAlert}/>
      </div> */}


      {/* i have created one module with Navbar and adding props inside */}
    <Router>
      <Navbar title="TextUtils" mode={mode} toogleMode={tooglemode} switchMode={switchMode} />
      <Alert alert={alert}/>
      {/* I am trying to use Router For better user experience.  */}
      <Routes>
            {/* <Navbar title="TextUtils" mode = {mode} toogleMode={tooglemode} switchMode={switchMode}/> */}
            <Route exact path='/' element={<Form heading="Enter the Text to Analyze" showAlert={showAlert}/>} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/about2' element={<About2  mode = {mode}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
