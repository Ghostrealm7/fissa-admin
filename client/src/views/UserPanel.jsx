import React from "react";
import UserTable from "../components/tables/UserTable";

function UserPanel() {
  //   const navigate = useNavigate();
  //   const navigateRegister = () => {
  //     navigate("/register_user");
  //   };

  return (
    <div>
      <h1 className="text-4xl text-gray-500 font-bold pt-2 mb-6">
        USER OVERVIEW
      </h1>
      {/* <button
        onClick={navigateRegister}
        className="flex justify-center items-center py-1 px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700"
      >
        <div className="p-1">
          <FaUserPlus fontSize={20} />
        </div>
        <div className="pl-2">
          <p className="">Add New Team Member</p>
        </div>
      </button> */}
      <UserTable />
    </div>
  );
}

export default UserPanel;
