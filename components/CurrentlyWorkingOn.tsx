import { userData } from "../lib/utils";
import { FaCode } from "react-icons/fa";

export default function CurrentlyWorkingOn() {
  if (!userData.currentlyWorkingOn) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-100 rounded-full">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Currently Working On
          </h2>
        </div>
        <p className="text-lg text-gray-700">{userData.currentlyWorkingOn}</p>
      </div>
    </div>
  );
}
