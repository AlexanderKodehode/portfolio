import React from "react";
import Navbar from "./compnents/Navbar";
import { Route, Routes } from "react-router";
import Homepage from "./routs/HomePage";
import ProsjectPage from "./routs/ProsjectPage";
import AboutMePage from "./routs/AboutMePage";

// Navbar 
const LandingPage = () => {
	return(
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/ProsjectPage" element={<ProsjectPage />} />
				<Route path="/AboutmePage" element={<AboutMePage />} />
			</Routes>
		</>
	);
};

export default LandingPage;
