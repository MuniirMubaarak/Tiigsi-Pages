// src/pages/dashboard/Users.jsx
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";

const Users = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Moderator", status: "Active" },
    { id: 4, name: "Bob Williams", email: "bob@example.com", role: "User", status: "Pending" },
  ];

  return (
    <div className="p-6 lg:p-10 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-600 text-left lg:text-center mb-8">
        User Management
      </h1>

      {/* Search Bar */}
      <div className="flex justify-end mb-6">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                <td className="py-3 px-6">{user.name}</td>
                <td className="py-3 px-6">{user.email}</td>
                <td className="py-3 px-6">{user.role}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : user.status === "Inactive"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center space-x-2">
                  <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                    <FaEdit />
                  </button>
                  <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
