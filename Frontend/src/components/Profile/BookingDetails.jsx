import React from "react";
import { ordersData } from "../../utils/constants";

const BookingDetails = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h2 className="text-xl font-semibold mb-4 text-white">
        Your Orders
      </h2>

      {ordersData.map((order) => (
        <div
          key={order.id}
          className="rounded-2xl bg-[#120a24]/80 backdrop-blur border border-purple-700/30 p-6 flex gap-6 shadow-lg hover:shadow-purple-900/30 transition"
        >
          {/* Poster */}
          <img
            src={order.poster}
            alt={order.title}
            className="w-24 rounded-lg shadow-md"
          />

          {/* Order Info */}
          <div className="flex-1 text-gray-200">
            <div className="flex justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white">
                  {order.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {order.format}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  {order.datetime}
                </p>
                <p className="text-sm mt-2 text-purple-300">
                  🎟 {order.seats}
                </p>
              </div>

              <div className="text-right text-sm">
                <span className="text-xs text-gray-400">
                  M-Ticket
                </span>
                <p className="font-semibold mt-2 text-lg text-purple-300">
                  ₹{order.total}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4 text-xs text-gray-400">
              <div>
                <p className="font-medium text-gray-300">
                  Booking Date & Time
                </p>
                <p>{order.bookingTime}</p>
              </div>
              <div>
                <p className="font-medium text-gray-300">
                  Payment Method
                </p>
                <p>{order.paymentMethod}</p>
              </div>
              <div>
                <p className="font-medium text-gray-300">
                  Booking ID
                </p>
                <p className="font-mono text-purple-300">
                  {order.id}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingDetails;