import "./Block1.css";
import Block1Info from "./Block1Info";
import { useState, useEffect } from "react";
function Block1(params) {
	const content = `
{
name: Dmytro,

lastName: Storozko,

age: 34,

skills: ["HTML", "CSS", "Figma"
	 "Jquery",  "Api-telegram",
	 "Node.js", "JavaScript",
	 "Git",  "GitHub", "Photoshop",
	 "Wordpress", "React",
	 "SASS", "SCSS", "NoSQL(mongoBD),
	 "Хостинг", "TypeScrypt",
	 "moding game", "SonyVegas", ],

MyFull-Projects:
http://air-web.kh.ua
https://painmylife.com
https://givemehope.site

exp: "1 year dev, 1 year admin website",

location: "Slovakia",

bio: My name is Dmytro Storozko,
I'm 34 years old, and I am a web developer.
Web development is my passion,
and I'm constantly eager
to learn new technologies.
My professional dream is to create
a unique framework that revolutionizes
visual intuitiveness and ease of use,
providing capabilities for quick
and efficient construction of web applications.
}`;
	const highlightContent = (text) => {
		return text.replace(
			/(skills:|exp:|location:|bio:|age:|slills:|lastName:|name:|MyFull-Projects:)/g,
			'<span class="highlight">$1</span>'
		);
	};
	const [printedContent, setPrintedContent] = useState("");
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index < content.length) {
			setTimeout(() => {
				setPrintedContent((prev) => highlightContent(prev + content[index]));
				setIndex(index + 1);
			}, 20);
		}
	}, [index, content]);

	return (
		<div className="block_1_flex">
			<div className="block_1_console">
				<h3>Windows PowerShell</h3>
				<p
					className="block_1_console_win"
					dangerouslySetInnerHTML={{ __html: printedContent }}
				/>
			</div>

			<Block1Info />
		</div>
	);
}
export default Block1;
