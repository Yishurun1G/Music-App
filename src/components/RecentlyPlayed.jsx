import React, { useEffect, useState } from "react";
import CardList from "./CardList"; // ✅ import your reusable CardList

const RecentlyPlayed = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://itunes.apple.com/search?term=coldplay&entity=song&limit=6")
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching iTunes API:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="px-6 lg:px-24 mt-10 rounded-lg p-6
                      bg-gradient-to-r from-pink-950 via-pink-900 to-transparent">
        <h2 className="text-xl font-semibold mb-4 text-white">Recently played</h2>
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="px-6 lg:px-24 mt-10 rounded-lg p-6
                    bg-gradient-to-r from-pink-950 via-pink-900 to-transparent">
      <CardList title="Recently Played" items={songs} />
    </div>
  );
};

export default RecentlyPlayed;
