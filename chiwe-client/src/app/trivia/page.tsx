"use client";

import { useState } from "react";

const Trivia = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const genres = [
    "General Knowledge",
    "Science",
    "History",
    "Geography",
    "Entertainment",
    "Sports",
    "Literature",
    "Art & Culture",
    "Technology",
    "Food & Drink",
    "Pop Culture",
    "Video Games",
    "Nature",
    "Mythology",
    "Miscellaneous",
  ];

  const handleGenreSelect = (genre: string) => {
    setSelectedGenres((prev) => {
      if (prev.includes(genre)) {
        return prev.filter((g) => g !== genre);
      }
      return [...prev, genre];
    });
  };

  return (
    <div className="flex flex-col w-[800px] items-center justify-center min-h-screen p-6 ">
      <h1 className="text-3xl font-bold text-center mb-4">
        Welcome to Trivia!
      </h1>
      <p className="text-lg text-center mb-4">Choose a genre to begin</p>
      <p className="text-md text-center mb-8">
        Pick at least 3 genres to start playing.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreSelect(genre)}
            className={`px-6 py-2 border rounded-lg text-lg font-medium transition-colors duration-300 
              ${
                selectedGenres.includes(genre)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-blue-500 border-blue-500 hover:bg-blue-100"
              }`}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {selectedGenres.length >= 3 ? (
          <button className="py-2 px-8 bg-blue-500 text-white rounded-lg text-lg">
            Start Trivia!
          </button>
        ) : (
          <p className="text-red-500 text-md">
            Please select at least 3 genres.
          </p>
        )}
      </div>
    </div>
  );
};

export default Trivia;
