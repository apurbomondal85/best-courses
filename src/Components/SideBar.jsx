import { FaBars } from "react-icons/fa6"
import { Link } from "react-router-dom"

const SideBar = () => {
    return (
        <div>
            <button type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-base text-gray-500 rounded-lg sm:hidden">
                <FaBars />
            </button>

            <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
                <div className="h-full px-3 lg:px-8 py-20 overflow-y-auto bg-gray-50">
                    <ul className="flex flex-col items-start gap-6 font-medium">
                        <li>
                            <Link to="/dashboard" className="p-2 text-gray-900 rounded-lg">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/" className="p-2 text-gray-900 rounded-lg">Courses</Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default SideBar