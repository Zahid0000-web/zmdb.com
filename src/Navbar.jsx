 import React from "react";
 import { Search, Menu } from "lucide-react"
 export default function Navbar() {
   return (
     <nav className="bg-[#121212] border-b border-[#2c2c2c] text-white">
       <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-4">
         {/* Left Section */}
         <div className="flex items-center gap-4">
           {/* IMDb Logo */}
           <div className="bg-[#f5c518] text-black font-extrabold px-2 py-1 rounded text-lg cursor-pointer">
             IMDb
           </div>
           {/* Menu Dropdown */}
           <button className="flex items-center gap-1 bg-[#1f1f1f] px-3 py-1 rounded hover:bg-[#2a2a2a]">
             <Menu size={18} />
             <span className="text-sm font-medium">Menu</span>
           </button>
           {/* Dropdown Placeholder */}
           <select className="bg-[#1f1f1f] text-sm rounded px-2 py-1 focus:outline-none">
             <option>All</option>
             <option>Titles</option>
             <option>TV Episodes</option>
             <option>Celebs</option>
           </select>
         </div>
         {/* Center Search */}
         <div className="hidden md:flex flex-1 mx-4">
           <div className="relative w-full">
             <input
               type="text"
               placeholder="Search IMDb"
               className="w-full bg-[#1f1f1f] border border-[#333] rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:border-[#f5c518]"
             />
             <Search
               size={18}
               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
             />
           </div>
         </div>
         {/* Right Section */}
         <div className="flex items-center gap-4 text-sm">
           <a href="#" className="hover:text-[#f5c518]">
             IMDbPro
           </a>
           <a href="#" className="hover:text-[#f5c518]">
             Watchlist
           </a>
           <a href="#" className="hover:text-[#f5c518]">
             Sign in
           </a>
           <select className="bg-transparent">
             <option>EN</option>
             <option>ES</option>
           </select>
         </div>
       </div>
     </nav>
   );
 