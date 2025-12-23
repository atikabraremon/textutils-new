import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [textColorMode, setTextColorMode] = useState("dark");
  const [alert, setAlert] = useState();

  const showAlert = (message, types) => {
    setAlert({
      msg: message,
      type: types,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextColorMode("light");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setMode("light");
      setTextColorMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };

  return (
    <>
      <Navbar
        title={"TextUtils"}
        toggleMode={toggleMode}
        mode={mode}
        textColorMode={textColorMode}
      />

      <Alert alert={alert} />
      <div className="container">
        <TextFrom
          heading={"Enter the Text to analyze below"}
          mode={mode}
          textColorMode={textColorMode}
          showAlert={showAlert}
        />
      </div>
    </>
  );

}

export default App;
