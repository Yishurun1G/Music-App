// src/components/SearchResults.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (query) {
      fetch(`https://itunes.apple.com/search?term=${query}&entity=podcast`)
        .then((res) => res.json())
        .then((data) => setResults(data.results))
        .catch((err) => console.error("Search error:", err));
    }
  }, [query]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Search Results for "{query}"</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((item) => (
          <div key={item.trackId} className="bg-zinc-800 p-4 rounded-lg">
            <img
              src={item.artworkUrl100}
              alt={item.trackName}
              className="w-full rounded mb-2"
            />
            <p className="font-medium text-sm">{item.trackName}</p>
            <p className="text-xs text-gray-400">{item.artistName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
