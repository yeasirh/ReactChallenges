import { useState } from "react";
import "./App.css";

function App() {
	const [mousePos, setMousePos] = useState([]);

	const savePosition = (e) => {
		// setMousePos((pV) => [...pV, { x: e.clientX, y: e.clientY }]);
		console.log(e);
		setMousePos([...mousePos, { x: e.clientX, y: e.clientY }]);
		// console.log(pV);
		console.log(mousePos);
	};

	return (
		// <div className="App" onClick={(e) => savePosition(e)}>
		//  <h1>
		//      {mousePos.map((pos) => (
		//          <div style={{ left: pos.x, top: pos.y }} className="circle">
		//              ddddd
		//          </div>
		//      ))}
		//  </h1>
		// </div>
		<div className="App" onClick={(e) => savePosition(e)}></div>
	);
}

export default App;
