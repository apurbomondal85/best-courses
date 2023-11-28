import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../page/Courses/Courses";import CourseDetails from "../Components/CourseDetails";
 "../page/Courses/Courses";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/courses",
                element: <Courses/>
            },
            {
                path: "/course-details/:id",
                element: <CourseDetails />
            }
        ]
    },
]);