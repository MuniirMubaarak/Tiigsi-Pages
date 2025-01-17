import Form from "./form"
import ShowTasks from "./ShowTasks"

const Tasks = () => {
  return (
    <div className="lg:p-10 bg-gray-100 min-h-screen">
        <h1 className="text-blue-600 text-center text-3xl font-bold">Tasks</h1>
        <div className="after flex flex-col lg:flex-row lg:justify-between gap-8">
            <Form />
            <ShowTasks />
        </div>

    </div>
  )
}

export default Tasks