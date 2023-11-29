import banner from '../assets/course-banner.jpg'

const Banner = ({ handleSearchValue }) => {

    const handleSearch = (e) => {
        e.preventDefault()
        const searchValue = e.target.search.value;
        handleSearchValue(searchValue)
    }

    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="w-full bg-cover h-[600px] bg-center">
            <div className="w-full h-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto py-4 px-4 flex items-center justify-center">
                <div className=" w-full sm:w-2/3 md:w-1/2 text-center bg-[rgba(3,3,3,.5)] rounded-md p-6 md:p-10 lg:p-12">
                    <h1 className='text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-white'>Getting started with E-Learning</h1>
                    <p className='text-gray-300 mt-6'>We pride ourselves on providing the most up-to-date content for our students to learn each course.</p>
                    <div className="bg-gradient-to-tr from-[#8c31f3] to-[#3185f3] p-[1px] mt-4">
                        <form onSubmit={handleSearch} className='flex items-center'>
                            <input type="search" name="search" id="search" className='w-full focus:ring-0' placeholder='Search Your Favorite Course' />
                            <button type="submit" className='h-full px-6 py-2 font-bold bg-[#9e1f34] text-white'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner