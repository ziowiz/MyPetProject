import React, { useState, useEffect } from "react";
import "./Block5.css";
import BattleSity from "./Battlesity";

function Block5() {
	const [answerURL, setAnswerURL] = useState("");
	const [lang, setLang] = useState("en");
	const ApiURL = `/api/generate_insult.php?lang=${lang}&type=json`;
	const [animationKey, setAnimationKey] = useState(0);
	useEffect(() => {
		setAnimationKey((prevKey) => prevKey + 1);
	}, [answerURL]);

	return (
		<div className="block5">
			<h1 className="block_2_text">BattleSity</h1>
			<BattleSity />
			<div className="grid-container">
				<div className="item1">
					<button
						className="button2"
						onClick={() => setLang("ru")}
					>
						Русский
					</button>
				</div>
				<div className="item2">
					<button
						className="button2"
						onClick={() => setLang("en")}
					>
						English
					</button>
				</div>
				<div className="item3">
					<button
						className="button2"
						onClick={() => {
							fetch(ApiURL)
								.then((response) => response.json())
								.then((data) => setAnswerURL(data.insult))
								.catch((error) => console.log("server down", error));
						}}
					>
						Click API Scam
					</button>
				</div>
				<div className="item4">
					<h2
						key={animationKey}
						className="animate"
					>
						{answerURL}
					</h2>
				</div>
			</div>
		</div>
	);
}

export default Block5;
