import { useState } from "react"
import CoursesSection from "../../Components/CoursesSection"
import Banner from "../../Components/banner"


const Courses = () => {
  const [handleSearchValue, setHandleSearchValue] = useState();
  return (
    <div>
      <Banner handleSearchValue={setHandleSearchValue}/>
      <CoursesSection searchValue={handleSearchValue}/>
    </div>
  )
}

export default Courses