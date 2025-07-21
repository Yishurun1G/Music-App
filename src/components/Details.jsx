// src/components/Details.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  setLoading(true);
  console.log("Fetching details for id:", id);
  fetch(`https://itunes.apple.com/lookup?id=${id}`)
    .then((res) => res.json())
    .then((res) => {
      console.log("Lookup response:", res);
      setData(res.results[0]);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching details:", err);
      setLoading(false);
    });
}, [id]);


  if (loading) return <p>Loading...</p>;

  if (!data) return <p>No details found for this item.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{data.trackName || data.collectionName}</h2>
      <img
        src={data.artworkUrl600 || data.artworkUrl100}
        alt={data.trackName || data.collectionName}
        className="w-64 rounded-lg mb-6"
      />
      <p className="mb-2">
        <strong>Artist:</strong> {data.artistName}
      </p>
      <p className="mb-2">
        <strong>Genre:</strong> {data.primaryGenreName}
      </p>
      <p className="mb-2">
        <strong>Release Date:</strong>{" "}
        {data.releaseDate ? new Date(data.releaseDate).toDateString() : "N/A"}
      </p>
      {data.description && (
        <p className="mb-2">
          <strong>Description:</strong> {data.description}
        </p>
      )}
      {data.collectionViewUrl && (
        <a
          href={data.collectionViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View on Apple
        </a>
      )}
    </div>
  );
};

export default Details;
