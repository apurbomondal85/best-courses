import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



const CourseDetails = () => {
    const [openModal, setOpenModal] = useState(false);
    const [course, setCourse] = useState([]);
    const { name, instructor, description, enrollmentStatus, thumbnail, duration, schedule, location, prerequisites, syllabus } = course;
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/course-details/${id}`)
                .then(res => res.json())
                .then(data => setCourse(data))
        }
    }, [])
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
                        <button onClick={() => setOpenModal(true)} className="text-sm font-medium text-white py-1 px-3 mt-2 rounded-md bg-[#301b8f]">See Syllabus</button>
                    </div>
                </div>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>{name}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-3">
                        {
                            syllabus?.map(({week,topic,content}, index) => <div className="p-4 bg-[#091525] text-white rounded-lg">
                                <p>Week : <span className="text-gray-400">{week}</span></p>
                                <p>Topic : <span className="text-gray-400">{topic}</span></p>
                                <p>Content : <span className="text-gray-400">{content}</span></p>
                            </div>)
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CourseDetails