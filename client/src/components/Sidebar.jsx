import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { MdHealthAndSafety } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../library/navigation";
import { useNavigate } from "react-router-dom";

const linkClass =
  "flex items-center gap-2 px-3 py-2 hover:bg-slate-600 hover:no-underline active:bg-slate-900 text-base";

export default function Sidebar() {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <div className="bg-slate-700 w-72 p-3 pt-8 flex flex-col">
      <div className="flex items-center gap-2 px-2 py-3 text-gray-200">
        <MdHealthAndSafety fontSize={24} />
        <span className="text-lg">ADMIN Dashboard</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-2 px-2">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div className="flex flex-col gap-2 pt-2 border-t px-2 border-slate-200">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
        <div
          onClick={logout}
          className={classNames(
            linkClass,
            "cursor-pointer text-red-500 font-bold"
          )}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? "bg-slate-600 text-white" : "text-neutral-300",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
