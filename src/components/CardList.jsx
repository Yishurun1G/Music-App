import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const CardList = ({ title, items }) => {
  const [likedIds, setLikedIds] = useState([]);

  const toggleLike = (id) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto">
        {items.map((item, i) => {
          const id = item.trackId || item.collectionId || item.genreId || i;
          const isLiked = likedIds.includes(id);
          const url = `/details/${id}`;

          return (
            <div
              key={id}
              className="relative bg-zinc-800 rounded-lg p-4 w-40 shrink-0 cursor-pointer hover:bg-zinc-700 transition"
            >
              <Link to={url}>
                <img
                  src={
                    item.artworkUrl100
                      ? item.artworkUrl100.replace("100x100", "200x200")
                      : item.image
                  }
                  alt={item.trackName || item.collectionName || item.name}
                  className="h-40 w-full object-cover mb-2 rounded"
                />
                <div className="text-sm font-semibold truncate">
                  {item.trackName || item.collectionName || item.name}
                </div>
                <div className="text-xs text-gray-400">
                  {item.artistName || item.type || item.genre}
                </div>
              </Link>

              <button
                onClick={() => toggleLike(id)}
                className="absolute top-2 right-2 text-pink-500"
              >
                {isLiked ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
