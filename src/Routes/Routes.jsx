import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../page/Courses/Courses"; "../page/Courses/Courses";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Courses/>
            }
        ]
    },
]);