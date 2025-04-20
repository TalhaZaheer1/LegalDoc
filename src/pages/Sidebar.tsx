import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronDown, FaGoogleDrive, FaLanguage, FaRegCalendarAlt, FaSearch } from "react-icons/fa";
import {
  BiSolidDownArrow,
  BiSolidFileBlank,
  BiSolidFileDoc,
} from "react-icons/bi";
import { RiMagicFill } from "react-icons/ri";
import { HiDocumentMagnifyingGlass, HiFolderOpen } from "react-icons/hi2";
import { AiTwotoneEye } from "react-icons/ai";
import { MdFileCopy, MdTask } from "react-icons/md";
import { BsPlusSquareFill, BsTextLeft } from "react-icons/bs";
import {
  PiBookOpenTextFill,
  PiChatsTeardropDuotone,
  PiSignature,
  PiSignatureFill,
} from "react-icons/pi";
import { IoBook } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";

const SidebarItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full m-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex gap-3  items-center text-primary-200  w-full hover:text-primary-100  px-4 py-1 transition-all hover:bg-primary-400  rounded-lg  "
      >
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <BiSolidDownArrow size={10} />
        </motion.div>
        {title}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden "
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-64 bg-primary-500 px-3 font-lato flex flex-col font-semibold items-center border-r border-gray-300 overflow-y-auto">
      <div className="p-4 font-bold w-full text-white text-xl flex gap-2 items-center">
        Acme{" "}
        <span>
          <IoIosArrowDown></IoIosArrowDown>
        </span>{" "}
      </div>
      <div className="relative mb-4">
        <FaSearch className="absolute text-white left-2 top-2" />
        <input
          className="rounded-md border-none outline-none pl-8 pr-2 py-1  bg-primary-400 text-white"
          placeholder="Search"
          type="text"
        />
      </div>
      <nav className="space-y-2 w-full">
        <SidebarItem title="Action">
          <ul className="space-y-1 text-white">
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <RiMagicFill size={20} />
              Legal research
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1  hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <BiSolidFileDoc size={20} />
              Create Document
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <BiSolidFileBlank size={20} />
              Excel AI
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <HiDocumentMagnifyingGlass size={20} />
              Review document
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <AiTwotoneEye size={20} />
              Case Prediction
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <MdFileCopy className="" size={20} />
              Compare document
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <BsTextLeft className="" size={20} />
              Summarize
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <FaLanguage className="" size={20} />
              Transition
            </li>
          </ul>
        </SidebarItem>
<div className="border-t border-primary-300/20 w-full my-1"></div>
        <SidebarItem title="Productivity">
          <ul className="space-y-1 text-white">
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <PiSignature className="" size={20} />
              eSignature
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <PiChatsTeardropDuotone className="" size={20} />
              Chats
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <FaRegCalendarAlt className="" size={20} />
              Calendar
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <MdTask className="" size={20} />
              Tasks
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <IoBook className="" size={20} />
              Legal News
            </li>
          </ul>
        </SidebarItem>
<div className="border-t border-primary-300/20 w-full my-1"></div>
        <SidebarItem title="Settings">
          <ul className="space-y-1 text-white">
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <HiFolderOpen className="" size={20} />
              File Station
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <PiBookOpenTextFill className="" size={20} />
              Knowledge Base
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <FaPeopleGroup className="" size={20} />
              Teams
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <SlGraph className="" size={20} />
              Usage Insight
            </li>
          </ul>
        </SidebarItem>
<div className="border-t border-primary-300/20 w-full my-1"></div>

        <SidebarItem title="Apps">
          <ul className="space-y-1 text-white">
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <FaGoogleDrive className="" size={20} />
              Google Drive 
            </li>
            <li className="flex items-center gap-2 text-primary-200 font-normal rounded-lg pl-3 py-1 hover:bg-primary-400 hover:text-primary-100 cursor-pointer">
              <BsPlusSquareFill className="" size={20} />
             Add Apps 
            </li>
          </ul>
        </SidebarItem>
     </nav>
    <div className="flex items-center justify-start mt-auto gap-4 py-2 mb-4 text-primary-200 -ml-6  rounded-md cursor-pointer">
      <img
        src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?t=st=1745170180~exp=1745173780~hmac=d250df3f65e667de24de0e8ddfb1899e9d1ddf3ed7d14d954bb3e9ef754a63a2&w=826"
        alt="User"
        className="w-10 h-10 rounded-full object-cover"
      />
<div className="flex gap-2 items-center">      <span className="font-medium ">Decio Emanuel</span>
      <FaChevronDown className=" text-sm" />
</div>

    </div>
 
    </aside>
  );
};

export default Sidebar;
