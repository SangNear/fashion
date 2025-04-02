import React, { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleAddUser = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Add New user</h3>
        <form onSubmit={handleAddUser} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              value={formData.name}
              onChange={handleOnchange}
              name="name"
              type="text"
              className="w-full rounded-lg outline-none border border-gray-200 p-2 "
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              value={formData.email}
              name="email"
              onChange={handleOnchange}
              type="email"
              className="w-full rounded-lg outline-none border border-gray-200 p-2 "
            />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              value={formData.password}
              name="password"
              onChange={handleOnchange}
              type="password"
              className="w-full rounded-lg outline-none border border-gray-200 p-2 "
            />
          </div>
          <div className="flex flex-col">
            <label>Role</label>
            <select
              value={formData.role}
              name="role"
              onChange={handleOnchange}
              className="w-full rounded-lg outline-none border border-gray-200 p-2 "
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="py-2 px-4 w-fit text-white bg-green-500 text-sm rounded-lg"
          >
            Add user
          </button>
        </form>
      </div>
      <table className="min-w-full border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-100 rounded-lg">
          <tr>
            <th className="p-3 text-left ">Name</th>
            <th className="p-3 ">Email</th>
            <th className="p-3 ">Role</th>
            <th className="p-3 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr
              key={item.email}
              //   onClick={() => handleOrderDetail(item._id)}
              className="bg-white border-b-gray-400 border-b cursor-pointer "
            >
              <td className="p-3 ">{item.name}</td>
              <td className="p-3 text-center">{item.email}</td>

              <td className="p-3 text-center">{item.role}</td>
              <td className="p-3 text-center">
                <button className="bg-rabbit-red text-white py-2 px-4 text-sm rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
