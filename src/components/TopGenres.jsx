import React from "react";
import CardList from "./CardList";

// Import genre images
import hiphopImg from "../assets/hiphop.jpg";
import popImg from "../assets/pop.jpg";
import afrobeatsImg from "../assets/afrobeats.jpg";
import jazzImg from "../assets/jazz.jpg";
import edmImg from "../assets/edm.jpg";
import classicalImg from "../assets/classical.jpg";

// Genre data
const genres = [
  { name: "Hip Hop", image: hiphopImg, genre: "Hip Hop", type: "Genre" },
  { name: "Pop", image: popImg, genre: "Pop", type: "Genre" },
  { name: "Afrobeats", image: afrobeatsImg, genre: "Afrobeats", type: "Genre" },
  { name: "Jazz", image: jazzImg, genre: "Jazz", type: "Genre" },
  { name: "EDM", image: edmImg, genre: "EDM", type: "Genre" },
  { name: "Classical", image: classicalImg, genre: "Classical", type: "Genre" },
];

const TopGenres = () => {
  return (
    <div className="px-6 lg:px-24 mt-10 rounded-lg p-6 text-white bg-pink-900 bg-opacity-40">
      <CardList title="Top Genres" items={genres} />
    </div>
  );
};

export default TopGenres;
