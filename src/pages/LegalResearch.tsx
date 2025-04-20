import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SidebarItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center text-white justify-between w-full text-left px-4 py-2 transition-all hover:bg-green-900  rounded-lg  font-semibold"
      >
        {title}
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="pl-6 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function LegalResearchPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#143725] border-r border-gray-300 overflow-y-auto">
        <div className="p-4 font-bold text-white text-xl">Acme</div>
        <nav className="space-y-2">
          <SidebarItem title="Action">
            <ul className="space-y-1 text-white">
              <li className=" rounded-lg pl-3 py-1 hover:bg-green-900 cursor-pointer">Legal research</li>
              <li className=" rounded-lg pl-3 py-1 hover:bg-green-900 cursor-pointer">Create document</li>
              <li className="  rounded-lg pl-3 py-1 hover:bg-green-900 cursor-pointer">Excel AI</li>
              <li className="  rounded-lg pl-3 py-1 hover:bg-green-900 cursor-pointer">Review document</li>
            </ul>
          </SidebarItem>
          <SidebarItem title="Productivity">
            <ul className="space-y-1 text-white">
              <li className=" rounded-lg pl-3 py-1 hover:bg-green-900 cursor-pointer">eSignature</li>
              <li className=" rounded-lg pl-3 py-1 hover:bg-green-900 cursor-pointer">Chats</li>
              <li className=" rounded-lg pl-3 py-1 hover:bg-green-900 cursor-pointer">Calendar</li>
            </ul>
          </SidebarItem>
          <SidebarItem title="Settings">
            <ul className="space-y-1 text-white">
              <li className=" rounded-lg pl-3 py-1 hover:bg-green-900 cursor-pointer">File station</li>
              <li className=" rounded-lg pl-3 py-1 hover:bg-green-900 cursor-pointer">Knowledge base</li>
            </ul>
          </SidebarItem>
          <SidebarItem title="Apps">
            <ul className="space-y-1 text-white">
              <li className=" rounded-lg pl-3 py-1 hover:bg-green-900 cursor-pointer">Google Drive</li>
              <li className=" rounded-lg pl-3 py-1 hover:bg-green-900 cursor-pointer">Add apps</li>
            </ul>
          </SidebarItem>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="text-green-900 font-semibold mb-2">Legal research</div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Conversation Box */}
        <div className="space-y-6">
          <div>
            <div className="text-gray-600 text-sm">Friday, May 12th</div>
            <div className="mt-2">
              <div className="flex items-start gap-2">
                <div className="font-bold">Ali Sarraf</div>
                <div>How can I make a contract for an interior work for my office in Dubai?</div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-md p-4">
            <div className="flex items-start gap-2">
              <div className="font-bold">Nanis AI</div>
              <div className="text-green-900">
                <p className="mb-2">To create a contract for interior work for your office in Dubai, include these key details:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Parties involved: Your business and the contractor.</li>
                  <li>Scope of work: Detailed description of the tasks (e.g., design, materials, construction).</li>
                  <li>Timeline: Start and completion dates.</li>
                  <li>Payment terms: Total cost, payment schedule, and penalties for delays.</li>
                  <li>Warranties: Guarantees for materials and workmanship.</li>
                  <li>Termination clause: Conditions under which the contract can be ended.</li>
                  <li>Dispute resolution: How conflicts will be resolved, preferably as per Dubai laws.</li>
                </ol>
                <div className="mt-4">
                  I can help you making this contract. Would you like to continue by clicking the CTA below?
                </div>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Create document
                </button>
              </div>
            </div>
          </div>

          {/* Input Box */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask anything"
              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="p-2 bg-green-600 text-white rounded hover:bg-green-700">
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
