import React from "react";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import * as style from "./styles";
import Homepage from "../LandingPage/HomePage";
import ProsjectPage from "../LandingPage/ProsjectPage";
import AboutMePage from "../LandingPage/AboutMePage";

const Navbar = () => {
	return (
		<>
			<style.Nav>
				<style.Nav_Content>
					{/* <NavLink to="/" exact className="logoContainer">
						<h2>
							LO<span>GO</span>
						</h2>
					</NavLink> */}
					<style.Nav_Links>
						<style.Styled_NavLink end to="/Homepage" exact activeclassname="active">
							Home
						</style.Styled_NavLink>
						<style.Styled_NavLink to="/ProsjectPage" activeclassname="active">
							prosject
						</style.Styled_NavLink>
						<style.Styled_NavLink to="/AboutMePage" activeclassname="active">
							About Me
						</style.Styled_NavLink>
					</style.Nav_Links>
				</style.Nav_Content>
			</style.Nav>
			<Routes>
				<Route path="/" exact element={<Homepage />} />
				<Route path="/prosject" element={<ProsjectPage />} />
				<Route path="/AboutMe" element={<AboutMePage />} />
				{/* <Route path="?" element={<ErrorPage />} /> */}
			</Routes>
		</>
	);
};

export default Navbar;
