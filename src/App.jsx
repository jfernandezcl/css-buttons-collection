import React from "react";
import Button1 from "./components/CodeButton1/Button1.jsx";
import Button2 from "./components/CodeButton2/Button2.jsx"
import Button3 from "./components/CodeButton3/Button3.jsx";

function App() {
  return (
    <>
      <h1 className="title-main">Button Collection</h1>
      <div>
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
      
    </>
  );
}

export default App;
