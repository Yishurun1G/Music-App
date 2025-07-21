import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaHeart, FaHeadphones, FaMusic, FaList } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside
      className="w-64 p-6 space-y-8 bg-gradient-to-b from-pink-300/20 via-pink-500/30 to-black text-white"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="text-xl font-bold">🎵 Musicplayer</div>

      <nav className="space-y-4">
        <div className="text-gray-400 uppercase text-xs">Discover</div>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm hover:text-white cursor-pointer">
            <FaHome />
            <Link to="/" className="hover:text-white">Home</Link>
          </li>
          <li className="flex items-center gap-2 text-sm hover:text-white cursor-pointer">
            <FaMusic />
            <Link to="/genres" className="hover:text-white">Genres</Link>
          </li>
          <li className="flex items-center gap-2 text-sm hover:text-white cursor-pointer">
            <FaList />
            <Link to="/albums" className="hover:text-white">Albums</Link>
          </li>
          <li className="flex items-center gap-2 text-sm hover:text-white cursor-pointer">
            <FaHeadphones />
            <Link to="/events" className="hover:text-white">Events</Link>
          </li>
        </ul>
      </nav>

      <nav className="space-y-4">
        <div className="text-gray-400 uppercase text-xs">Library</div>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm hover:text-white cursor-pointer">
            <FaMusic />
            <Link to="/recent" className="hover:text-white">Recent</Link>
          </li>
          <li className="flex items-center gap-2 text-sm hover:text-white cursor-pointer text-pink-400">
            <FaHeart />
            <Link to="/liked" className="hover:text-pink-400">Liked songs</Link>
          </li>
          <li className="flex items-center gap-2 text-sm hover:text-white cursor-pointer">
            <FaMusic />
            <Link to="/local" className="hover:text-white">Local</Link>
          </li>
        </ul>
      </nav>

      <nav className="space-y-4">
        <div className="text-gray-400 uppercase text-xs">Your Playlist</div>
        <ul className="space-y-2 text-sm">
          <li className="cursor-pointer hover:text-white">+ Create playlist</li>
          <li className="cursor-pointer hover:text-white">Morning mood 2021</li>
          <li className="cursor-pointer hover:text-white">Study musics</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
