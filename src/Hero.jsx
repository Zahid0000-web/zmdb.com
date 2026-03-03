 import React from "react";
 import { Play } from "lucide-react"
 export default function HeroSection() {
   return (
     <section className="flex flex-col lg:flex-row bg-black text-white max-w-7xl mx-auto mt-4 rounded-lg overflow-hidden shadow-lg">
       {/* Left: Main Video */}
       <div className="relative flex-1">
         <img
           src="https://m.media-amazon.com/images/M/MV5BMTY0MjM2OTUyMV5BMl5BanBnXkFtZTgwNDM0NTE3NzM@._V1_.jpg"
           alt="Hero Video"
           className="w-full h-[400px] object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
         {/* Play Button */}
         <button className="absolute bottom-6 left-6 flex items-center gap-3 bg-[#f5c518] text-black px-4 py-2 rounded-full font-semibold hover:bg-[#e5b914] transition">
           <Play size={20} fill="black" />
           <span>Inside Dwayne Johnson’s Transformation</span>
         </button>
       </div>
       {/* Right: Up Next */}
       <div className="w-full lg:w-[360px] bg-[#1a1a1a] border-l border-[#333] p-4">
         <h2 className="text-[#f5c518] font-bold mb-4">Up next</h2>
         <div className="space-y-4">
           {[
             {
               title: "Roald Dahl's The Twits Coming to Netflix",
               duration: "2:09",
               img: "https://m.media-amazon.com/images/M/MV5BMjA2MzE4NDQ1OF5BMl5BanBnXkFtZTcwOTYyMzQxMw@@._V1_.jpg",
             },
             {
               title: "The Gen V Season 2 Cast Plays What's in the Box?",
               duration: "12:35",
               img: "https://m.media-amazon.com/images/M/MV5BMjE1NTM5MzQ5Ml5BMl5BanBnXkFtZTcwOTYxMzQxMw@@._V1_.jpg",
             },
             {
               title:
                 "Why Leonardo DiCaprio Wants You to Go to the Movies",
               duration: "4:54",
               img: "https://m.media-amazon.com/images/M/MV5BM2E5MTczZTQtMTc1YS00OGY2LTgzNDUtOGQzN2ExMzljZTc2XkEyXkFqcGc@._V1_.jpg",
             },
           ].map((item, i) => (
             <div
               key={i}
               className="flex items-center gap-3 hover:bg-[#2a2a2a] p-2 rounded-lg transition"
             >
               <div className="relative">
                 <img
                   src={item.img}
                   alt={item.title}
                   className="w-20 h-14 rounded object-cover"
                 />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xs rounded">
                   ▶
                 </div>
               </div>
               <div>
                 <p className="text-sm font-semibold">{item.title}</p>
                 <p className="text-xs text-gray-400">Watch the trailer • {item.duration}</p>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 }
