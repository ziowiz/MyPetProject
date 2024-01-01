import React, { useState, useEffect } from "react";
import "./Basic.css";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import Block1 from "./article/block1/block1.js";
import Block2 from "./article/block2/block2.js";
import Block3 from "./article/block3/Block3.js";
import Block4 from "./article/block4/Block4.js";
import Block5 from "./article/block5/Block5.js";
import Footer from "./footer/Footer.js";
function Basic(params) {
	const [activeArticle, setActiveArticle] = useState("block_1");

	const renderNewBlock = (blockNumber) => {
		setActiveArticle(`block_${blockNumber}`);
	};

	return (
		<div className="basic">
			<header className="header">
				<Header />
			</header>
			<nav className="nav">
				<Nav changeBlock={renderNewBlock} />
			</nav>
			<article className="article">
				{activeArticle === "block_1" ? <Block1 /> : null}
				{activeArticle === "block_2" ? <Block2 /> : null}

				{activeArticle === "block_3" ? <Block4 /> : null}

				{activeArticle === "block_4" ? <Block3 /> : null}
				{activeArticle === "block_5" ? <Block5 /> : null}
			</article>
			<footer className="footer">
				<Footer />
			</footer>
		</div>
	);
}
export default Basic;
