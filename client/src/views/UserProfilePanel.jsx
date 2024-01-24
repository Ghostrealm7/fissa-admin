import React from "react";
import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import UserInvoiceTable from "../components/tables/UserInvoiceTable";

export default function UserProfilePanel() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate(`/createmedicalreport/${id}`);
  };
  // Very important to set useState([]) or ({}) parameter properly...make sure you know what data you will be receiving.
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`http://localhost:3500/api/user/${id}`);
        setUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  console.log(userData);
  return (
    <>
      <div className="flex gap-4">
        {/* Patient Details */}
        <div className="p-4 flex-1 w-40 bg-white shadow-sm justify-around items-center basis-full">
          <div className="flex flex-col items-left justify-center pb-2">
            <div className="rounded h-28 w-28 flex items-center justify-center bg-gray-800">
              <TbListDetails className="text-7xl text-white" />
            </div>
            <h1 className="text-xl text-gray-500 font-bold pt-2">
              User Details
            </h1>
          </div>
          {userData.map((user, index) => (
            <div className="" key={index}>
              <p className="text-sm text-gray-500 ">ID: {user.user_id}</p>
              <p className="text-sm text-gray-500 ">Name: {user.name}</p>
              <p className="text-sm text-gray-500 ">Email: {user.email}</p>
              <p className="text-sm text-gray-500 ">Phone: {user.phone}</p>
              <p className="text-sm text-gray-500 ">Address: {user.address}</p>
              <p className="text-sm text-gray-500 pb-1">
                User Since: {format(new Date(user.create_time), "dd MMM yyyy")}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                IP Address: {user.ip_address}
              </p>
              <p className="text-sm text-gray-500 ">User Type: {user.type}</p>
              <p className="text-sm text-gray-500 ">
                Package: {user.package_name}
              </p>
              {user.status == "active" ? (
                <p className="text-sm text-gray-500 mt-2">
                  Status: {user.status}{" "}
                  <FaCircle className="inline text-green-500" />
                </p>
              ) : (
                <p className="text-sm text-gray-500 mt-2">
                  Status: {user.status}{" "}
                  <FaCircle className="inline text-red-500" />
                </p>
              )}
            </div>
          ))}
          <div className="pt-4">
            <button className="flex py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700">
              <div className="">
                <p className="">Edit Details</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-white shadow-sm">
        <h1 className="font-bold mt-4">Bill History</h1>
        <UserInvoiceTable id={id} />
      </div>
    </>
  );
}
