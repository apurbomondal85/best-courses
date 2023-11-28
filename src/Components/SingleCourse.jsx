

const SingleCourse = ({course}) => {
    const {name, thumbnail, description} = course;
  return (
    <div className="p-4 lg:p-6 h-[400px] md:h-[450px] bg-[#200820] rounded-lg shadow-lg shadow-[#64bbe4] overflow-hidden relative">
        <img src={thumbnail} alt="course image" className="w-full rounded-md h-[200px]" />
        <div className="mt-4">
            <h2 className="text-white text-xl">{name}</h2>
            <p className="text-gray-400 mt-4">{description}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full"><button className="w-full py-2 bg-[#3a56b3] text-white text-base font-bold">Details</button></div>
    </div>
  )
}

export default SingleCourse