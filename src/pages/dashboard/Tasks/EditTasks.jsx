import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateTasks } from "../../../slices/todoslice";

const EditTasks = () => {
  const { index } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const task = useSelector((state) =>
    state.myTasks.todos.find((task) => task.id === Number(index))
  );  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTasks({
      title,
      description,
      status,
      id: task.id,
    }));
    navigate("/dashboard/tasks");
  };

  return (
    <div className="p-6 lg:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Edit Task
      </h1>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <h1 className="text-xl text-blue-600">Edit Task</h1>

        <div className="input-box flex flex-col gap-4">
          <label htmlFor="title" className="text-2xl">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            name="title"
            className="rounded-md text-xl p-2"
          />
        </div>

        <div className="input-box flex flex-col gap-4">
          <label htmlFor="description" className="text-2xl">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            className="p-4 text-xl rounded-md"
          />
        </div>

        <div className="input-box flex flex-col gap-4">
          <label htmlFor="status" className="text-2xl">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-4 text-lg rounded-md"
          >
            <option value="PENDING">PENDING</option>
            <option value="IN-PROGRESS">IN PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
        </div>

        <button className="bg-blue-600 text-white transition px-4 py-3 text-lg font-bold hover:shadow-xl shadow rounded-xl duration-500">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTasks;
