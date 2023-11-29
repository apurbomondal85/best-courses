import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider";
import SyllabusModal from "./Modal";
import Swal from "sweetalert2";

const CourseDetails = () => {
    const { user } = useContext(AuthContext)
    const [openModal, setOpenModal] = useState(false);
    const [course, setCourse] = useState([]);
    const { name, instructor, description, enrollmentStatus, thumbnail, duration, schedule, location, prerequisites, syllabus } = course;
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        if (id) {
            fetch(`https://course-server-i521ybuke-apurbomondal85.vercel.app/course-details/${id}`)
                .then(res => res.json())
                .then(data => setCourse(data))
        }
    }, [])

    const handleEnroll = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be Enroll this Course",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes Enrolled"
        }).then((result) => {
            if (result.isConfirmed) {
                const currentDate = new Date();
                const dueDate = new Date(currentDate.getTime() + getMillisecondsFromDuration(duration));
                const enrollCourse = { userName: user?.displayName, email: user?.email, courseName: name, instructor, thumbnail, dueDate: dueDate.toDateString(), completeCourse: 0 }

                if (user?.email) {
                    fetch("https://course-server-i521ybuke-apurbomondal85.vercel.app/enroll-course", {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(enrollCourse)
                    }).then(res => res.json()).then(data => {
                        if (data.acknowledged) {
                            Swal.fire({
                                title: "Success",
                                text: "Your Enroll Course has been Added.",
                                icon: "success"
                            });
                        }
                    })
                }else{
                    navigate("/login")
                }
            }
        });

    }

    // Function to convert duration to milliseconds
    function getMillisecondsFromDuration(duration) {
        const weeks = parseInt(duration);
        return weeks * 7 * 24 * 60 * 60 * 1000; // Convert weeks to milliseconds
    }

    return (
        <div>
            <div className='w-full h-[400px] bg-[#125c46] flex items-center'>
                <div className='w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto'>
                    <h3 className='text-white text-xl'>Courses || Courses Details</h3>
                    <h1 className='text-2xl md:text-3xl font-bold tracking-wider text-white mt-2'>Details</h1>
                </div>
            </div>
            <div className="my-12 lg:my-20 w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 lg:px-8 bg-[#160516]">
                <div className="p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#faa454] p-[2px] rounded-md">
                        <img src={thumbnail} className="w-full h-full rounded-md" alt="course thumbnail" />
                    </div>
                    <div>
                        <h1 className="text-white text-2xl font-bold tracking-wide">{name}</h1>
                        <p className="text-gray-400 mt-2"><span className="font-bold text-gray-200">Instructor </span>: {instructor}</p>
                        <p className="text-gray-400 mt-2">{description}</p>
                        <p className="mt-2 text-gray-200 font-bold"><span>Enroll : </span><span className="text-gray-400 inline-block font-normal py-[1px] px-2 border border-white rounded-md"> {enrollmentStatus}</span></p>
                        <p className="text-gray-400 mt-2"><span className="font-bold text-gray-200">Course Duration : </span>{duration}</p>
                        <p className="text-gray-400 mt-2"><span className="font-bold text-gray-200">Schedule : </span>{schedule}</p>
                        <p className="text-gray-400 mt-2"><span className="font-bold text-gray-200">Location : </span>{location}</p>
                        <p className="text-gray-400 mt-2"><span className="font-bold text-gray-200">Prerequisites : </span><span>{prerequisites?.map((item, index) => <span className="ml-1" key={index}>{item}.</span>)}</span></p>
                        <div className="flex items-center justify-between">
                            <button onClick={() => setOpenModal(true)} className="text-sm font-medium text-white py-1 px-3 mt-2 rounded-md bg-[#301b8f]">See Syllabus</button>
                            <button onClick={handleEnroll} className="text-sm font-medium text-white py-2 px-4 mt-2 rounded-md bg-[#8b1b8f]">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <SyllabusModal openModal={openModal} setOpenModal={setOpenModal} syllabus={syllabus} name={name} />
        </div>
    )
}

export default CourseDetails