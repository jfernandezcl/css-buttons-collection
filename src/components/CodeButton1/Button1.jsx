import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import "./Button1.css";
import "../../styles/re-styles.css";
import icon from "../../images/uiandroid.png";

const Button1 = () => {
  const [showCode, setShowCode] = useState(false);
  const [activeTab, setActiveTab] = useState("html");

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

  const cssCode = `
.button-1{
  display: flex;
  align-items: center;
  gap: 12px;

  border: none;
  background-color: #007ccd;
  border-radius: 4px;

  color: white;
  font-size: 16px;
  padding: 12px 32px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  cursor: pointer;
}

.button-icon{
  display: flex;
  width: 32px;
  height: 32px;
}

.button-1:hover{
  border: 2px solid #025b97;
  box-shadow: 2px 5px 0 #025b97;
}
  `;

  return (
    <div>
      <button className="button-1" onClick={() => setShowCode(!showCode)}>
        <img src={icon} className="button-icon" alt="icon" />
        {showCode ? "Ocultar código" : "Mostrar código"}
      </button>

      {showCode && (
        <div style={{ marginTop: "20px" }}>
          <div>
            <button
              className={`tab-button ${activeTab === "html" ? "active" : ""}`}
              onClick={() => setActiveTab("html")}
            >
              HTML
            </button>
            <button
              className={`tab-button ${activeTab === "css" ? "active" : ""}`}
              onClick={() => setActiveTab("css")}
            >
              CSS
            </button>
          </div>

          {activeTab === "html" && (
            <div>
              <CopyBlock
                text={htmlCode}
                language="html"
                showLineNumbers={true}
                theme={dracula}
                wrapLines
              />
            </div>
          )}

          {activeTab === "css" && (
            <div>
              <CopyBlock
                text={cssCode}
                language="css"
                showLineNumbers={true}
                theme={dracula}
                wrapLines
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Button1;
