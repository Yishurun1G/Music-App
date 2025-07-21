import React, { useEffect, useState } from "react";
import CardList from "./CardList";

const TopGlobalMusic = () => {
  const [topSongs, setTopSongs] = useState([]);

  useEffect(() => {
    fetch("https://itunes.apple.com/us/rss/topsongs/limit=6/json")
      .then((res) => res.json())
      .then((data) =>
        setTopSongs(
          data.feed.entry.map((entry) => ({
            name: entry["im:name"].label,
            artist: entry["im:artist"].label,
            image: entry["im:image"][2].label,
            type: "Song",
          }))
        )
      )
      .catch((err) => console.error("Error loading top songs:", err));
  }, []);

  return (
    <div className="px-6 lg:px-24 mt-10 rounded-lg p-6 text-white bg-pink-900 bg-opacity-40">
      <CardList title="Top Global Music" items={topSongs} />
    </div>
  );
};

export default TopGlobalMusic;
