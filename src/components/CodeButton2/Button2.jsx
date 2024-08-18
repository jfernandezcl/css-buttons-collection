import React, { useState } from "react"
import { CopyBlock, dracula } from "react-code-blocks";
import "../../styles/re-styles.css";
import "./Button2.css"
import icon from "../../images/iconDownload.png";

const Button2 = () => {
    const [showCode2, setShowCode2] = useState(false);
    const [activeTab2, setActiveTab2] = useState('html');

    const htmlCode = `
import "./App.css";

function App() {
  return (
    <>
      <div>
        <button className="button-1">
          <img src="src/images/uiandroid.png" className="button-icon" />
          Button-2
        </button>
      </div>
    </>
  );
}

export default App;
`;
    const cssCode = `
.button-2 {
    display: flex;
    align-items: center;
    gap: 12px;

    border: none;
    border-radius: 4px;
    background: linear-gradient(to right, red 34%, white 34%);

    color: black;
    font-size: 16px;
    padding: 12px 24px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: pointer;
}

.button-icon-2 {
    display: flex;
    width: 32px;
    height: 32px;
}

.button-2:hover {
    border: 2px solid black;
}
`;

    return (       
        <div>
            <button className="button-2" onClick={() => setShowCode2(!showCode2)}>
                <img src={icon} className="button-icon-2" alt="icon" />
                {showCode2 ? "Ocultar código" : "Mostrar código"}
            </button>

            {showCode2 && (
                <div>
                    <div>
                        <button
                            className={`tab-button ${activeTab2 === "html" ? "active" : ""}`}
                            onClick={() => setActiveTab2("html")}
                        >
                            HTML
                        </button>
                        <button
                            className={`tab-button ${activeTab2 === "css" ? "active" : ""}`}
                            onClick={() => ("css")}
                        >
                            CSS
                        </button>
                    </div>
                    {activeTab2 === "html" && (
                        <div>
                            <CopyBlock
                                text={htmlCode}
                                language="html"
                                startingLineNumber={true}
                                theme={dracula}
                                wrapLongLines
                            />
                        </div>
                    )}

                    {activeTab2 === "css" && (
                        <div>
                            <CopyBlock
                                text={cssCode}
                                language="css"
                                startingLineNumber={true}
                                theme={dracula}
                                wrapLongLines
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default Button2;