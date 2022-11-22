import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [mousePos, setMousePos] = useState({});

	useEffect(() => {
		const handleMouseMove = (event) => {
			setMousePos({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const savePosition = () => {
		console.log(mousePos.x, mousePos.y);
	};

	return (
		<div className="App" onClick={savePosition}>
			The mouse is at position{" "}
			<b>
				({mousePos.x},{mousePos.y})
			</b>
		</div>
	);
}

export default App;
