import React, { useState } from "react"
import { CopyBlock, dracula } from "react-code-blocks";
import "../../styles/re-styles.css";
import "./Button2.css"


const Button2 = () => {
    const [showCode, setShowCode] = useState(false);
    const [activeTab, setActiveTab] = useState('html');

    const htmlCode = `
import "./App.css";

function App() {
  return (
    <>
      <div>
        <button className="button-1">
          <img src="src/images/uiandroid.png" className="button-icon" />
          Button-1
        </button>
      </div>
    </>
  );
}

export default App;
`;
    const cssCode = ``;

    return (       
        <div>
            <button className="button-2" onClick={() => setShowCode(!showCode)}>
                <img src={icon} className="button-icon-2" alt="icon" />
                {showCode ? "Ocultar código" : "Mostrar código"}
            </button>
        </div>
    )
};
export default Button2;