import "./styles.css";
import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  function toggle() {
    setDark(!dark);
  }
  return (
    <div className="App">
      <div className={dark ? "darkTheme" : "lightTheme"}>
        <h1>Dark Theme</h1>
        <button onClick={() => toggle()}>Toggle</button>
      </div>
      <Navbar dark={dark} />
    </div>
  );
}
function Navbar({ dark }) {
  return (
    <div className={dark ? "darkTheme" : "lightTheme"}>
      <h1>Dark Theme</h1>
      <Footer dark={dark} />
    </div>
  );
}

function Footer({ dark }) {
  return (
    <div className={dark ? "darkTheme" : "lightTheme"}>
      <h1>Dark Theme</h1>
    </div>
  );
}
