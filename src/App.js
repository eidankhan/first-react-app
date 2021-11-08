import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const setToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled ", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar setMode={setToggleMode} mode={mode} />
      <Alert alert={alert} />
      <div className="my-3">
        <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>
      {/* <Routes>
          <Route path="/about"  
            element={<About />}
          />
          
          <Route path="/" 
            element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>}
          />
      </Routes> */}
      
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
