
import { Progress } from 'flowbite-react';
import React from 'react'

const EnrollCourseCard = ({ enrollCourse }) => {
    const { email, courseName, instructor, thumbnail, dueDate, completeCourse } = enrollCourse;
    return (
        <div className='flex items-center gap-2 p-4 rounded-md bg-[#1b0620] shadow-lg shadow-[#92caff]'>
            <div className='bg-[#30dbe7] w-[40%] h-full p-[1px] rounded-md'>
                <img src={thumbnail} className='rounded-md w-full h-full' alt="enroll image" />
            </div>
            <div className="space-y-2 w-[60%]">
                <h2 className='text-white font-semibold'>{courseName}</h2>
                <p className='text-sm text-gray-400'>{instructor}</p>
                <p className='text-sm text-gray-400'>Due Date : {dueDate}</p>
                <div className='w-full'>
                    <Progress progress={completeCourse} size="sm" />
                </div>
                <span className={`py-1 px-3 rounded-md inline-block text-xs font-bold text-white ${completeCourse < 100 ? "bg-[#382d9c]" : "bg-[#9c2d8d]"}`} >
                    {
                        completeCourse < 100 ? "Course is Running" : "Course is Complete"
                    }
                </span>
            </div>
        </div>
    )
}

export default EnrollCourseCard