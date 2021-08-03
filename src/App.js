import './App.css';
import { useState } from 'react';

function App() {
	const [btnColor, setBtnColor] = useState("red");
	const textColor = btnColor === "red" ? "blue" : "red";

  return (
    <div className="App">
		<button style={{backgroundColor: btnColor}} onClick={() => {
			setBtnColor(textColor);
		}}>Change to {textColor}</button>
    </div>
  );
}

export default App;
