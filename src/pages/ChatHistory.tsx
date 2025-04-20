
// ChatHistorySidebar.tsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ChatHistorySidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`flex flex-col transition-all duration-300 bg-white border-l border-gray-200 ${collapsed ? "w-5" : "w-72"}`}>
      
      {/* Collapse Button */}
      <div className="flex items-center justify-end p-2">
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      {/* Search Bar (Hidden when collapsed) */}
      {!collapsed && (
        <div className="px-3 pb-3">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 text-sm border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}

      {/* History List */}
      <div className={`flex-1 overflow-y-auto ${collapsed ? "hidden" : "block"}`}>
        <div className="px-3 pb-4">
          {/* Sections */}
          <h3 className="text-xs font-bold text-gray-400 mb-2">Today</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700 truncate hover:bg-gray-100 p-2 rounded-md cursor-pointer">Make an NDA</li>
            <li className="text-sm text-gray-700 truncate hover:bg-gray-100 p-2 rounded-md cursor-pointer">Draft job contract</li>
            <li className="text-sm text-gray-700 truncate hover:bg-gray-100 p-2 rounded-md cursor-pointer">Create freelance ag...</li>
          </ul>

          <h3 className="text-xs font-bold text-gray-400 mt-6 mb-2">Yesterday</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700 truncate hover:bg-gray-100 p-2 rounded-md cursor-pointer">Generate rental form</li>
            <li className="text-sm text-gray-700 truncate hover:bg-gray-100 p-2 rounded-md cursor-pointer">Write privacy policy</li>
          </ul>

          <h3 className="text-xs font-bold text-gray-400 mt-6 mb-2">Previous 7 days</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700 truncate hover:bg-gray-100 p-2 rounded-md cursor-pointer">Shareholder agreement</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
