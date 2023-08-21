import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="font-inter overflow-x-hidden">
        <Homepage />
      </div>
    </>
  );
}

export default App;
