import { ReactNode } from "react";
import { TiGroup } from "react-icons/ti";
import { RiExchangeDollarFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsBank, BsBriefcase } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";
import {
  MdDashboard,
  MdGroup,
  MdHistory,
  MdHome,
  MdOutlineInventory,
  MdSwapHoriz,
} from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { AppLinks } from "../../app_url";

interface ISidebarItem {
  icon: ReactNode;
  title: string;
  link: string;
  callBack?: () => void;
}

export const sideBarItems: ISidebarItem[] = [
  {
    icon: <MdHome />,
    title: "Home",
    link: AppLinks.landing,
  },
  {
    icon: <MdDashboard />,
    title: "Dashboard",
    link: AppLinks.dashboard,
  },
  {
    icon: <MdGroup />,
    title: "Beneficiaries",
    link: AppLinks.employee,
  },
  {
    icon: <MdHistory />,
    title: "History",
    link: AppLinks.history,
  },
  {
    icon: <MdSwapHoriz />,
    title: "Wrap/Unwrap",
    link: AppLinks.wrap,
  },
  {
    icon: <RiExchangeDollarFill />,
    title: "Good Dollar",
    link: AppLinks.goody,
  },
  {
    icon: <IoMdSettings />,
    title: "Settings",
    link: AppLinks.settings,
  },
];
