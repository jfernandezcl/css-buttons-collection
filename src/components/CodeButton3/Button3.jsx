import { useState } from "react";
import "./Button3.css"

const Button3 = () => {
    const [showCode3, setShowCode3] = useState(false);
    const [activeTab3, setActiveTab3] = useState('html');

    const htmlCode = `
import "./App.css";

function App() {
  return (
    <>
      <div>
        <button className="button-3">
          <img src="src/images/iconDownload.png" className="button-icon-3" />
          Button-2
        </button>
      </div>
    </>
  );
}
`;

    const cssCode = ``;

    return (
        <div>
            <button className="button-3">Button-3</button>

        </div>
    )
}

export default Button3;