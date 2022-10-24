import React from "react";
import * as style from "./style";


const Navbar = () => {
	return (
		<>
			<style.Nav>
				<style.Nav_Links>
					<style.Styled_NavLink end to="/" exact activeclassname="active">
						Home
					</style.Styled_NavLink>
					<style.Styled_NavLink to="/ProsjectPage" activeclassname="active">
						Prosject
					</style.Styled_NavLink>
					<style.Styled_NavLink to="/AboutMePage" activeclassname="active">
						About Me
					</style.Styled_NavLink>
				</style.Nav_Links>
			</style.Nav>
		</>
	);
};

export default Navbar;
