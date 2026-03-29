import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendURL } from "../config.js";
import { toast } from "react-toastify";
import { assets } from "../assets/admin_assets/assets";

const Order = ({ token }) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendURL + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendURL + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Status Updated");
        fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="px-6 py-6">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Orders</h3>

      <div>
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[0.5fr,2fr,1.3fr] 
                       lg:grid-cols-[0.4fr,1.8fr,1.3fr,1fr]
                       gap-4 border border-gray-300 bg-white rounded-lg 
                       shadow-sm p-6 my-4"
          >
            <div>
              <img src={assets.parcel_icon} className="w-12 opacity-70" />
            </div>

            <div>
              {order.items.map((item, i) => (
                <p key={i} className="text-gray-800 text-sm">
                  {item.name} × {item.quantity}
                  <span className="text-gray-500 ml-1">({item.size})</span>
                </p>
              ))}
            </div>

            <div className="text-sm">
              <p className="font-medium">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>{order.address.street}</p>
              <p>{order.address.city}, {order.address.state}</p>
              <p>{order.address.country} - {order.address.zipcode}</p>
              <p className="font-medium mt-1">{order.phone}</p>
            </div>

            <div className="text-sm space-y-1">
              <p>Items: {order.items.length}</p>
              <p>Method: {order.paymentMethod}</p>
              <p>
                Payment:
                <span className={order.payment ? "text-green-600" : "text-red-500"}>
                  {" "}
                  {order.payment ? "Done" : "Pending"}
                </span>
              </p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              <p className="font-semibold">${order.amount}</p>

              <select
                className="border border-gray-300 rounded px-2 py-1 bg-gray-50"
                value={order.status}
                onChange={(e) => statusHandler(e, order._id)}
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
