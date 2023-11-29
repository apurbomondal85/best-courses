import { Outlet } from "react-router-dom"
import SideBar from "../Components/SideBar"


const DashboardLayout = () => {
    return (
        <div>
            <SideBar/>
            <Outlet/>
        </div>
    )
}

export default DashboardLayout