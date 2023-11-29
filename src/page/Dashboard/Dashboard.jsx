import { Avatar } from "flowbite-react"
import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import StudentEnrolled from "../../Components/StudentEnrolled";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="sm:ml-64">
            <div className="py-6 bg-gray-50 flex items-center justify-end lg:px-16">
                <Avatar img={user?.photoURL} rounded bordered />
            </div>
            <div className="mt-12 lg:mt-16">
                <StudentEnrolled/>
            </div>
        </div>
    )
}

export default Dashboard