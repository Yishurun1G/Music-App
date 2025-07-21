import React, { useEffect, useState } from "react";
import CardList from "./CardList";

const PopularPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch("https://itunes.apple.com/search?term=podcast&entity=podcast&limit=6")
      .then((res) => res.json())
      .then((data) =>
        setPodcasts(
          data.results.map((podcast) => ({
            name: podcast.collectionName,
            artist: podcast.artistName,
            image: podcast.artworkUrl100,
            type: "Podcast",
          }))
        )
      )
      .catch((err) => console.error("Error loading podcasts:", err));
  }, []);

  return (
    <section className="bg-pink-500/10 backdrop-blur-sm text-white rounded-xl p-6 lg:px-24 mt-8 shadow-md">
      <CardList title="Popular Podcasts" items={podcasts} />
    </section>
  );
};

export default PopularPodcasts;
