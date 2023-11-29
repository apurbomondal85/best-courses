
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider';
import EnrollCourseCard from './EnrollCourseCard';

const StudentEnrolled = () => {
    const { user } = useContext(AuthContext);
    const [enrollCourses, setEnrollCourses] = useState();

    useEffect(() => {
        if (user?.email) {
            fetch(`https://course-server-i521ybuke-apurbomondal85.vercel.app/enroll-course/${user?.email}`)
                .then(res => res.json())
                .then(data => setEnrollCourses(data))
        }
    }, [user])

    return (
        <div className='md:px-16'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-[#6a2277]'>Student Enrolled Courses</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 lg:mt-12">
                {
                    enrollCourses?.map(enrollCourse => <EnrollCourseCard key={enrollCourse._id} enrollCourse={enrollCourse}/>)
                }
            </div>
        </div>
    )
}

export default StudentEnrolled