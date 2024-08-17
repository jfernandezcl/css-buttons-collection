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