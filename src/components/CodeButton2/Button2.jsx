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

            {showCode && (
                <div>
                    <div>
                        <button
                            className={`tab-button ${activeTab === "html" ? "active" : ""}`}
                            onClick={() => setActiveTab("html")}
                        >
                            HTML
                        </button>
                        <button
                            className={`tab-button ${activeTab === "css" ? "active" : ""}`}
                            onClick={() => ("css")}
                        >
                            CSS
                        </button>
                    </div>
                    {activeTab === "html" && (
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

                    {activeTab === "css" && (
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