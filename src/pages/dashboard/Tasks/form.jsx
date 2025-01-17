import { useState } from "react"
import  { useDispatch } from "react-redux";
import { addTask } from "../../../slices/todoslice";
const Form = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const dispatch = useDispatch();

    const handelSubmit = (e) => {
        e.preventDefault();
        // Add new task to the array
        // Clear form inputs

        dispatch(addTask({
            title,
            description,
            status
        }))
    }

  return (
    <div className="form justify-center w-full lg:w-1/4 items-center p-5 px-2 ">
        {/*  eslint-disable-next-line no-unused-vars */}
        <form onSubmit={(e) => handelSubmit(e)} className="grid gap-4 ">
        <h1 className="text-xl text-blue-600">Add Task</h1>
            <div className="input-box flex flex-col gap-4">
                <label htmlFor="title" className="text-2xl">Title</label>
                <input type="text"
                onChange={(e) => setTitle(e.target.value)}
                id="title" name="title" className=" border-blue-600 border-2 transition-all duration-500 
                rounded-md text-xl p-2" />
            </div>

            

            <div className="input-box flex flex-col gap-4">
                <label htmlFor="description"
                
                className="text-2xl">Description</label>
                <textarea 
                onChange={(e) => setDescription(e.target.value)}
                rows="5" className="p-4 text-xl rounded-md border-blue-600 border-2 transition-all duration-500 "></textarea>
            </div>

            <div className="input-box flex flex-col gap-4">
                <label htmlFor="status" className="text-2xl">Status</label>
                <select 
                onChange={(e) => setStatus(e.target.value)}
                className="p-4 text-lg rounded-md border-blue-600 border-2 transition-all duration-500 ">
                    <option value="PENDING">PENDING</option>
                    <option value="IN-PROGRESS">IN PROGRESS</option>
                    <option value="COMPLETED">COMPLETED</option>
                </select>
            </div>

            <button 
            className="bg-blue-600 text-white transition 
            px-4 py-3 text-lg font-bold hover:shadow-xl shadow rounded-xl duration-500">Add Task</button>
        </form>
    </div>
  )
}

export default Form