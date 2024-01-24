import React, { useEffect, useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { IoTicketSharp } from "react-icons/io5";
import { BiPackage } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import axios from "axios";

export default function Grid() {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    const fetchGridData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3500/api/stats/grid_data"
        );
        setGridData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGridData();
  }, []);

  return (
    <div className="flex gap-4">
      {gridData.length > 0 && (
        <>
          <div className="p-4 flex bg-white shadow-lg justify-left items-center basis-full rounded-sm">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-violet-600">
              <IoPeople className="text-4xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm text-gray-500">USERS</span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">
                  {gridData[3].total}
                </strong>
                <span className="text-sm text-green-500 pl-2">+3</span>
              </div>
            </div>
          </div>
          <div className="p-4 flex bg-white shadow-lg justify-left items-center basis-full rounded-sm">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-sky-400">
              <GrUserAdmin className="text-4xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm text-gray-500">AGENTS</span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">
                  {gridData[0].total}
                </strong>
                <span className="text-sm text-green-500 pl-2">+2</span>
              </div>
            </div>
          </div>

          <div className="p-4 flex bg-white shadow-lg justify-left items-center basis-full rounded-sm">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-indigo-600">
              <IoTicketSharp className="text-4xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm text-gray-500">TICKETS</span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">
                  {gridData[1].total}
                </strong>
                <span className="text-sm text-green-500 pl-2">+5</span>
              </div>
            </div>
          </div>
          <div className="p-4 flex bg-white shadow-lg justify-left items-center basis-full rounded-sm">
            <div className="rounded-full h-20 w-20 flex items-center justify-center bg-slate-600">
              <BiPackage className="text-4xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm text-gray-500">PACKAGES</span>
              <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">
                  {gridData[2].total}
                </strong>
                <span className="text-sm text-green-500 pl-2">+1</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
