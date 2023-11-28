import { useEffect } from "react";
import { useState } from "react"
import SingleCourse from "./SingleCourse";


const CoursesSection = ({ searchValue }) => {
    const [courses, setCourses] = useState(null);
    const [moreData, setMoreData] = useState(false);
    useEffect(() => {
        fetch("http://localhost:3000/courses")
            .then(res => res.json())
            .then(data => {
                setCourses(data)
                if (searchValue && courses) {
                    const filteredCourses = data.filter((course) => course.name.toLowerCase().includes(searchValue.toLowerCase()) || course.instructor.toLowerCase().includes(searchValue.toLowerCase()));
                    filteredCourses ? setCourses(filteredCourses) : setCourses(data)
                }
            })
    }, [searchValue])

    return (
        <div className="my-16 md:my-20">
            <h3 className="text-center text-sm md:text-base text-[#9b30cc] font-bold">Our Courses List</h3>
            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 relative after:absolute after:w-[150px] after:h-1 after:bg-[#9b30cc] after:-bottom-4 after:left-1/2 after:-translate-x-1/2">Best Courses</h1>
            <div className="w-full h-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 lg:px-8">
                <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        moreData ? courses?.map(course => <SingleCourse key={course._id} course={course} />) : courses?.slice(0, 6).map(course => <SingleCourse key={course._id} course={course} />)
                    }
                </div>
            </div>
            <div className={`flex justify-center ${moreData && "hidden"}`}><button onClick={() => setMoreData(true)} className="py-2 px-6 rounded-md bg-[#3a56b3] text-white text-base font-bold">See More</button></div>
        </div>
    )
}

export default CoursesSection