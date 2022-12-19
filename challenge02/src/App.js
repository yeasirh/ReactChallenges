import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [color, setColor] = useState();
	const [answers, setAnswers] = useState([]);
	const [correctAnswer, setcorrectAnswer] = useState(undefined);

	const getRandomColor = () => {
		return "#" + Math.floor(Math.random() * 16777215).toString(16);
	};

	const checkAnswer = (answer) => {
		if (answer === color) {
			setcorrectAnswer(true);
			generateColor();
		} else {
			setcorrectAnswer(false);
		}
	};

	const generateColor = () => {
		const actualColor = getRandomColor();
		setColor(actualColor);
		setAnswers(
			[actualColor, getRandomColor(), getRandomColor()].sort(
				() => Math.random() - 0.5
			)
		);
	};

	useEffect(() => {
		generateColor();
		setcorrectAnswer(undefined);
	}, []);
	return (
		<div>
			<div className="guess-me" style={{ background: color }}></div>
			{answers.map((answer) => (
				<button onClick={() => checkAnswer(answer)} key={answer}>
					{answer}
				</button>
			))}
			{correctAnswer === true && <div>Correct Answer</div>}
			{correctAnswer === false && <div>Wrong Answer</div>}
		</div>
	);
}

export default App;
