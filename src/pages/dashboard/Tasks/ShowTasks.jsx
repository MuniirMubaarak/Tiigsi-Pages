import { useDispatch, useSelector } from "react-redux"
import { deleteTasks } from "../../../slices/todoslice";
import { Link } from "react-router-dom";
// import { Link } from "react-router";
const ShowTasks = () => {

    const dispatch = useDispatch();
    
    const tasks = useSelector((state) => state.myTasks.todos)
    const deleteTask = (id) => {
        dispatch(deleteTasks(id))
    }
  return (
    <div className="flex flex-col p-5 flex-1 ">
        <h1 className="text-xl text-blue-600 pt-8 px-4">
            <i className="fa fa-tasks" aria-hidden="true"></i>
            Your To Do List
        </h1>
        {
            
            tasks.map((task) =>(  
                
                <div key={task.id} className="task m-4
                hover:scale-110 ease-linear -translate-x-4
                hover:-translate-y-3 duration-300 transition-all
                bg-white rounded-xl p-4 flex justify-between items-center">
                   <div className="information flex flex-col gap-2">
                     <h2 className="font-bold text-xl">{task.title}</h2>
                     <p className="text-[16px] font-mono">{task.description}</p>
                   </div>
                   <div className="actions flex gap-2">
                     <Link to={`/dashboard/edittask/${task.id}`} className="bg-blue-600 
                     hover:bg-blue-700
 text-white rounded-xl px-4 py-2">Edit</Link>
                     <button onClick={() => deleteTask(task.id)} className="bg-red-500
                     hover:bg-red-700
                     text-white rounded-xl px-4 py-2">Delete</button>
                   </div>
                </div>
            ))
        }
    </div>
  )
}

export default ShowTasks