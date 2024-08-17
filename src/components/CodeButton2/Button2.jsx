import { useState } from "react"



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
            <button></button>
        </div>
    )

export default Button2;
}