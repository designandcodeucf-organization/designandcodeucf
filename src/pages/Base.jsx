import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Base = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				justifyContent: "space-between",
			}}>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Base;
