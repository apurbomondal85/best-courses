import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../page/Courses/Courses";
import CourseDetails from "../Components/CourseDetails";
import Login from "../page/Login/Login";
import SingUp from "../page/Singup/Singup";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../page/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Courses />
            },
            {
                path: "/course-details/:id",
                element: <CourseDetails />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/singup",
                element: <SingUp />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
]);