import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Base = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
};


export default Base;