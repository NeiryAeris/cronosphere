import { Search } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="flex items-center p-2 rounded-md mt-4 mx-4 bg-[#171717] border border-white">
      {/* Search Bar */}
      <div className="flex items-center w-full max-w-2xl border-r border-gray-600 px-3 flex-1">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Digital products, artists or subject matter"
          className="w-full bg-transparent text-white p-2 outline-none ml-2"
        />
      </div>

      {/* Filter Options */}
      <div className="flex gap-6 items-center pl-4 text-gray-400 text-sm">
        <div className="min-w-[120px] text-center">
          <p>Software: <span className="text-blue-400 cursor-pointer">ALL ▼</span></p>
        </div>
        <div className="min-w-[120px] text-center">
          <p>License: <span className="text-blue-400 cursor-pointer">ALL ▼</span></p>
        </div>
        <div className="min-w-[120px] text-center">
          <p>Price: <span className="text-blue-400 cursor-pointer">ALL ▼</span></p>
        </div>
        <div className="min-w-[120px] text-center cursor-pointer text-blue-400 hover:underline">
          <p>Clear Filters</p>
        </div>
      </div>
    </div>
  );
}
