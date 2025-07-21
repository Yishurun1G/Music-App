import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-pink-500/10 backdrop-blur-sm text-pink-200 py-6 px-4 lg:px-24 mt-8 border-t border-pink-500/20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold text-white">🎵 MyMusicApp</div>

        <ul className="flex gap-6 mt-4 md:mt-0 text-sm">
          <li>
            <a href="/genres" className="hover:text-pink-100 transition duration-200">
              Genres
            </a>
          </li>
          <li>
            <a href="/recently-played" className="hover:text-pink-100 transition duration-200">
              Recently Played
            </a>
          </li>
          <li>
            <a href="/liked" className="hover:text-pink-100 transition duration-200">
              Liked Songs
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-pink-100 transition duration-200">
              About
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center mt-4 text-xs text-pink-300">
        &copy; {new Date().getFullYear()} MyMusicApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
