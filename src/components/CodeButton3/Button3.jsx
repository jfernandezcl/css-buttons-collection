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

  const cssCode = `
    .button-3 {
    display: flex;
    align-items: center;
    background-color: aquamarine;
    border: none;
    margin-top: 32px;
    gap: 16px;
    width: 190px;
    height: 56px;
    padding: 12px 24px;
}
    `;

  return (
    <div>
      <button className="button-3">Button-3</button>

    </div>
  )
}

export default Button3;