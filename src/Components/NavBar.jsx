import { Navbar } from 'flowbite-react'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
    }

    return (
        <div className="fixed top-0 w-full bg-white z-50">
            <Navbar fluid rounded className='w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto py-4 bg-transparent'>
                <Navbar.Brand>
                    <h1 className='text-2xl font-extrabold tracking-wide'><span className='text-[#2da595] text-3xl'>B</span>Courses</h1>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <NavLink to="/">Courses</NavLink>
                        {
                            user ? <><NavLink to="/dashboard">Dashboard</NavLink><button onClick={handleLogout}>LogOut</button></> : <NavLink to="/login">Login</NavLink>
                        }
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar