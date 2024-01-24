import { GiPlagueDoctorProfile } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";
import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiUserGroup,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "overview",
    label: "Overview",
    path: "/overview",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "employee",
    label: "Manage Team",
    path: "/employee",
    icon: <MdAdminPanelSettings />,
  },
  {
    key: "user",
    label: "Users",
    path: "/user",
    icon: <HiUserGroup />,
  },
  {
    key: "invoice",
    label: "Bills & Invoice",
    path: "/",
    icon: <HiUserGroup />,
  },
  {
    key: "ticket",
    label: "Tickets",
    path: "/",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/login",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/login",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
