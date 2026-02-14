import React, { useState } from "react";
import { tabs } from "../utils/constants";
import BookingDetails from "../components/Profile/BookingDetails";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const user = {
    firstName: "Tanishq",
    lastName: "Tiwari",
    email: "tanishq.tiwari2812@gmail.com",
    phone: "+91 - 9870216687",
    birthday: "28-12-2002",
    identity: "Man",
    married: "No",
  };

  return (
    <>
      {/* Page-level Navbar (Profile | Your Orders) */}
      <div className="bg-[#0b0714] border-b border-purple-800/40">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 py-3 text-sm font-medium text-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 cursor-pointer transition ${
                activeTab === tab
                  ? "text-purple-400 border-b-2 border-purple-500"
                  : "hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Page Content */}
      <div className="bg-[#0b0714] min-h-screen py-10">
        {activeTab === "Profile" && (
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Header Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1b1033] via-[#3b1a6f] to-[#b5179e] p-8 flex items-center gap-6 text-white shadow-xl">
              <div className="w-16 h-16 rounded-full bg-black/40 ring-2 ring-purple-400 flex items-center justify-center text-2xl font-bold">
                +
              </div>
              <div>
                <h2 className="text-2xl font-semibold">
                  Hi, {user.firstName} 👋
                </h2>
                <p className="text-sm text-gray-200">
                  Manage your personal information
                </p>
              </div>
            </div>

            {/* Account Details */}
            <div className="rounded-2xl bg-[#120a24]/80 backdrop-blur border border-purple-700/30 p-6 shadow-lg">
              <h3 className="font-semibold mb-4 text-white text-lg">
                Account Details
              </h3>

              <div className="flex justify-between items-center text-sm mb-4">
                <div>
                  <p className="text-gray-400">Email Address</p>
                  <p className="flex items-center gap-2 text-gray-100">
                    {user.email}
                    <span className="text-green-400 text-xs bg-green-900/40 px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                  </p>
                </div>
                <button className="text-purple-400 hover:text-purple-300 transition">
                  ✎
                </button>
              </div>

              <div className="flex justify-between items-center text-sm">
                <div>
                  <p className="text-gray-400">Mobile Number</p>
                  <p className="flex items-center gap-2 text-gray-100">
                    {user.phone}
                    <span className="text-green-400 text-xs bg-green-900/40 px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                  </p>
                </div>
                <button className="text-purple-400 hover:text-purple-300 transition">
                  ✎
                </button>
              </div>
            </div>

            {/* Personal Details */}
            <div className="rounded-2xl bg-[#120a24]/80 backdrop-blur border border-purple-700/30 p-6 shadow-lg">
              <h3 className="font-semibold mb-4 text-white text-lg">
                Personal Details
              </h3>

              <div className="grid md:grid-cols-2 gap-5 text-sm">
                <div>
                  <label className="text-gray-400">First Name</label>
                  <input
                    value={user.firstName}
                    readOnly
                    className="w-full mt-1 rounded-lg bg-[#0b0714] border border-purple-700/40 px-3 py-2 text-gray-100 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-400">Last Name</label>
                  <input
                    value={user.lastName}
                    readOnly
                    className="w-full mt-1 rounded-lg bg-[#0b0714] border border-purple-700/40 px-3 py-2 text-gray-100 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-400">Birthday (Optional)</label>
                  <input
                    value={user.birthday}
                    readOnly
                    className="w-full mt-1 rounded-lg bg-[#0b0714] border border-purple-700/40 px-3 py-2 text-gray-100 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-400">Identity (Optional)</label>
                  <div className="flex gap-2 mt-2">
                    {["Woman", "Man"].map((g) => (
                      <button
                        key={g}
                        className={`px-4 py-1 rounded-full text-xs border transition ${
                          user.identity === g
                            ? "bg-purple-700 text-white border-purple-500"
                            : "border-purple-700/40 text-gray-300 hover:bg-purple-700/20"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-gray-400">Married? (Optional)</label>
                  <div className="flex gap-2 mt-2">
                    {["Yes", "No"].map((m) => (
                      <button
                        key={m}
                        className={`px-4 py-1 rounded-full text-xs border transition ${
                          user.married === m
                            ? "bg-[#7a04d4] text-white border-purple-500"
                            : "border-purple-700/40 text-gray-300 hover:bg-purple-700/20"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Your Orders" && <BookingDetails />}
      </div>
    </>
  );
};

export default Profile;