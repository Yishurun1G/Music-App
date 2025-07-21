# 🎵 Music Player App

A full-featured React music player built with manual Webpack configuration, React, and Tailwind CSS. Displays songs, genres, top global music, and allows users to like tracks and manage playlists.

##  Features

- Top global music from iTunes RSS
- Recently Played section
- Liked Songs page
- Genre and Album pages
- Playlist creation
- Responsive and stylish UI
- Manual Webpack setup
- Dark & pink transparent sidebar

---

##  Setup Instructions

- Clone the repository
   ```bash
   git clone https://github.com/yourusername/music-app.git
   cd music-app
 Webpack Configuration
This project uses a custom Webpack configuration (no Create React App). Key highlights:

Entry point: src/index.js

Output: dist folder

Babel Loader for JSX and modern JS

CSS & Tailwind: PostCSS with Tailwind v3.4.17

Assets: Supports image file imports (JPG, PNG, SVG)

Environment Variables: Defined using DefinePlugin

Dev Server: Configured via webpack-dev-server with hot reload


