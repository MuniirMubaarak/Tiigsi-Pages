import Course from "./course/course"

const Courses = () => {


    return (
        <div className="bg-[#f0f2f6] px-36 pb-16 pt-32">
            <div className="flex flex-row space-x-3 text-3xl">
                <i className="fas fa-heart " href="#" > </i>
                <h1>Most Loved Courses</h1>
            </div>
            <div className="courses pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Course />
            </div>


        </div>
    )
}

export default Courses