import { useState } from "react"
import { FaBars, FaXmark } from "react-icons/fa6"
import { Link } from "react-router-dom"

const SideBar = () => {
    const [sideBarToggle, setSideBarToggle] = useState(false)
    return (
        <div>
            <button type="button" onClick={() => setSideBarToggle(true)} className="inline-flex items-center absolute left-[10%] top-8 text-xl z-30 text-gray-500 md:hidden">
                <FaBars />
            </button>

            <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ${sideBarToggle ? "" : "-translate-x-full md:translate-x-0"}`}>
                <div className="h-full px-3 lg:px-8 py-20 overflow-y-auto bg-gray-50">
                    <button type="button" onClick={() => setSideBarToggle(false)} className="inline-flex items-center absolute left-[10%] top-8 p-2 text-xl text-gray-500 md:hidden">
                        <FaXmark />
                    </button>
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