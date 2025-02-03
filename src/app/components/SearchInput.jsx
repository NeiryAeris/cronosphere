import { Search } from "lucide-react"; // Lucide is lightweight and works well with Tailwind

export default function SearchInput({className}) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-3 py-2 border focus:outline-none focus:ring focus:ring-blue-300 bg-slate-900 rounded-3xl"
      />
    </div>
  );
}
