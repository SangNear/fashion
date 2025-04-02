import { Link, NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
const AdminSidebar = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl text-white font-semibold">
          Rabbit
        </Link>
      </div>
      <div>
        <h1 className="text-white pl-2">Admin Dashboard</h1>
        <nav className="flex flex-col gap-5  mt-10">
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive
                ? "flex gap-2 items-center cursor-pointer bg-gray-500 px-2 py-3 rounded-lg"
                : "flex gap-2 items-center cursor-pointer hover:bg-gray-500 px-2 py-3 rounded-lg"
            }
          >
            <FaUsers size={20} className="text-white" />
            <p className="text-white">Users</p>
          </NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              isActive
                ? "flex gap-2 items-center cursor-pointer bg-gray-500 px-2 py-3 rounded-lg"
                : "flex gap-2 items-center cursor-pointer hover:bg-gray-500 px-2 py-3 rounded-lg"
            }
          >
            <FaBoxOpen size={20} className="text-white" />
            <p className="text-white">Products</p>
          </NavLink>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              isActive
                ? "flex gap-2 items-center cursor-pointer bg-gray-500 px-2 py-3 rounded-lg"
                : "flex gap-2 items-center cursor-pointer hover:bg-gray-500 px-2 py-3 rounded-lg"
            }
          >
            <FaBook size={20} className="text-white" />
            <p className="text-white">Orders</p>
          </NavLink>
          <NavLink
            to="/admin/shop"
            className={({ isActive }) =>
              isActive
                ? "flex gap-2 items-center cursor-pointer bg-gray-500 px-2 py-3 rounded-lg"
                : "flex gap-2 items-center cursor-pointer hover:bg-gray-500 px-2 py-3 rounded-lg"
            }
          >
            <FaStore size={20} className="text-white" />
            <p className="text-white">Shop</p>
          </NavLink>
        </nav>
        <div className="mt-6">
          <button className="bg-rabbit-red flex items-center justify-center gap-2 text-white py-2 w-full rounded-md">
            <BiLogOut size={20} className="text-white" />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
