import "./Nav.css";
import {
	GiFarmer,
	GiStack,
	GiProcessor,
	GiMoebiusTrefoil,
	GiHoneycomb,
} from "react-icons/gi";
function Nav({ changeBlock }) {
	return (
		<div className="navig">
			<ul>
				<li>
					<GiFarmer onClick={() => changeBlock(1)} />
				</li>
				<li>
					<GiStack onClick={() => changeBlock(2)} />
				</li>
				<li>
					<GiProcessor onClick={() => changeBlock(3)} />
				</li>
				<li>
					<GiMoebiusTrefoil onClick={() => changeBlock(4)} />
				</li>
				<li>
					<GiHoneycomb onClick={() => changeBlock(5)} />
				</li>
			</ul>
		</div>
	);
}

export default Nav;
