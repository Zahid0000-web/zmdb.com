import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// IMDb style sample movies
const movies = [
  {
    rank: 2,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1280_.jpg",
    genre: ["Crime", "Drama"],
    rating: "9.2",
    year: 1972,
    imdb_link: "https://www.imdb.com/title/tt0068646/",
  },
  {
    rank: 1,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmRhMC00ZDI0LWFmNTEtODM1ZmRlNjk3YzY3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmRhMC00ZDI0LWFmNTEtODM1ZmRlNjk3YzY3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1280_.jpg",
    genre: ["Drama"],
    rating: "9.3",
    year: 1994,
    imdb_link: "https://www.imdb.com/title/tt0111161/",
  },
  {
    rank: 3,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UY562_.jpg",
    big_image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1280_.jpg",
    genre: ["Action", "Crime", "Drama"],
    rating: "9.0",
    year: 2008,
    imdb_link: "https://www.imdb.com/title/tt0468569/",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Autoplay effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % movies.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + movies.length) % movies.length);

  return (
    <div className="bg-[#0e0e0e] text-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-[#121212] flex items-center justify-between p-4 border-b border-gray-800">
        <h1 className="text-yellow-400 text-2xl font-bold">IMDb Clone</h1>
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-gray-800 text-white px-4 py-2 rounded-md w-60 outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </header>

      {/* Hero Slider */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        {movies.map((movie, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={movie.big_image}
              alt={movie.title}
              className="w-full h-full object-cover brightness-[0.4]"
            />
            <div className="absolute bottom-20 left-10 max-w-xl">
              <h2 className="text-4xl font-bold mb-3">{movie.title}</h2>
              <p className="text-gray-300 text-sm mb-3">{movie.description}</p>
              <p className="text-yellow-400 flex items-center gap-2 text-lg">
                <FaStar /> {movie.rating}
              </p>
              <a
                href={movie.imdb_link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
              >
                View on IMDb
              </a>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black/70"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full hover:bg-black/70"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Movie Grid */}
      <div className="p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.rank}
            className="bg-[#1c1c1c] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-gray-400 text-sm mb-2">
                {movie.year} • {movie.genre.join(", ")}
              </p>
              <p className="text-yellow-400 flex items-center gap-2">
                <FaStar /> {movie.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
