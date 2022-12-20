import { useState } from "react";
import "./App.css";

const files = {
	children: [
		{
			name: "node_modules",
			children: [
				{
					name: "joi",
					children: [
						{
							name: "something !!",
						},
					],
				},
			],
		},
		{
			name: "src",
			children: [
				{
					name: "app.css",
				},
				{
					name: "app.js",
				},
				{
					name: "index.css",
				},
				{
					name: "index.js",
				},
			],
		},
		{
			name: "package.json",
		},
		{
			name: "readme.md",
		},
	],
};

function Entry({ entry, depth }) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div>
			<button onClick={() => setIsExpanded(!isExpanded)}>
				{entry.children && "+ "}
				{entry.name}
			</button>
			{isExpanded && (
				<div style={{ paddingLeft: `${depth * 10}px` }}>
					{entry.children?.map((entry) => (
						<Entry entry={entry} depth={depth + 1} />
					))}
				</div>
			)}
		</div>
	);
}

function App() {
	return (
		<div>
			{files.children.map((entry) => (
				<Entry entry={entry} depth={1} />
			))}
		</div>
	);
}

export default App;
