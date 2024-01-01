import "./Footer.css";
function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-content">
				<div className="footer-section">
					<h3>Contact & Follow</h3>
					<p>Stay connected with me through social media:</p>
					<ul className="social-links">
						<li>
							<a
								href="https://www.instagram.com/dimka.zabarov"
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/profile.php?id=100053799014749"
								target="_blank"
								rel="noopener noreferrer"
							>
								Facebook
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/dmitiy-storozhko-2871b42a3"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								href="https://github.com/ziowiz"
								target="_blank"
								rel="noopener noreferrer"
							>
								Github
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer-bottom">
				<p>
					© {new Date().getFullYear()} Dmytro Storozko. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
