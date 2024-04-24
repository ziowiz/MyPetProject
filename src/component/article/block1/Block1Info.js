import {
	SiInstagram,
	SiFacebook,
	SiGithub,
	SiLinkedin,
	SiTelegram,
	SiTiktok,
} from "react-icons/si";
import { SlShare } from "react-icons/sl";
function Block1Info(params) {
	return (
		<div className="block1-info">
			<h2>CONTACT {<SlShare />}</h2>
			<div className="block1-info-text">
				<a
					href="https://www.instagram.com/dimka.zabarov"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiInstagram /> <p>Instagram</p>
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=100053799014749"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiFacebook />
					<p>Facebook</p>
				</a>
				<a
					href="https://github.com/ziowiz"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiGithub />
					<p>Github</p>
				</a>
				<a
					href="https://www.linkedin.com/in/dmitiy-storozhko-2871b42a3"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiLinkedin />
					<p>LinkedIn</p>
				</a>
				<a
					href="https://t.me/@dimka_zabarov"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiTelegram />
					<p>Telegram</p>
				</a>
				<a
					href="https://www.tiktok.com/@zioDuck"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiTiktok />
					<p>TikTok</p>
				</a>
			</div>
		</div>
	);
}

export default Block1Info;
