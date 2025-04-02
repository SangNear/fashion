import { Link, useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const navigate = useNavigate();
  const orders = [
    {
      _id: "67540ajnjnvsnd34234jn23b2jb",
      user: {
        name: "Lam sang",
      },
      totalPrice: 110,
      status: "Processing",
    },
  ];
  const handleOrderDetail = (orderId) => {
    navigate(`/order/${orderId}`);
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 shadow-md rounded-lg">
          <p className="text-xl font-semibold">Revenue</p>
          <p className="text-2xl">$319.94</p>
        </div>
        <div className="p-4 shadow-md rounded-lg">
          <p className="text-xl font-semibold">Total Orders</p>
          <p className="text-2xl">4</p>
          <Link to="/admin/orders" className="text-blue-400">
            Manage Orders
          </Link>
        </div>
        <div className="p-4 shadow-md rounded-lg">
          <p className="text-xl font-semibold">Total Products</p>
          <p className="text-2xl">40</p>
          <Link to="/admin/products" className="text-blue-400">
            Manage Products
          </Link>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-5">Recent Orders</h2>
      <table className="min-w-full border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-100 rounded-lg">
          <tr>
            <th className="p-3 text-left ">ORDER ID</th>
            <th className="p-3 ">USER</th>
            <th className="p-3 ">TOTAL PRICE</th>
            <th className="p-3 ">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <tr
              key={item._id}
              onClick={() => handleOrderDetail(item._id)}
              className="bg-white border-b-gray-400 border-b cursor-pointer "
            >
              <td className="p-3 ">{item._id}</td>
              <td className="p-3 text-center">{item.user.name}</td>

              <td className="p-3 text-center">{item.totalPrice}</td>
              <td className="p-3 text-center">${item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHomePage;
