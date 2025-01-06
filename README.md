# Goofy Music Frontend

This repository contains the complete frontend UI setup for the Goofy Music app. It includes all components, pages, and styles required to deliver a seamless user experience for the music application.

## Features

* **Dark Mode UI**: A visually appealing dark theme with #1d88e6 as the secondary color.
* **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop devices.
* **Dynamic Pages**:
    * Home
    * Explore
    * My Likes
    * Library
    * Profile
    * Signup/Login
* **Music Player**: Advanced functionalities, including play/pause, volume control, lyrics, and navigation using keyboard shortcuts.
* **Search Bar**: A fast, intuitive search experience for songs, albums, and artists.
* **Custom Playlists**: Support for creating personalized playlists.

## Tech Stack

* **React.js**: Frontend library for building the UI.
* **TypeScript**: For better type safety and maintainability.
* **Tailwind CSS**: Utility-first CSS framework for styling.
* **Vite**: Lightning-fast development environment and build tool.

## Installation

1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/goofy-music-frontend.git
cd goofy-music-frontend
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run the Development Server**
```bash
npm run dev
```

4. **Build for Production**
```bash
npm run build
```

5. **Preview the Build**
```bash
npm run preview
```

## Directory Structure
```
├── public/            # Public assets like fonts, images, and icons
├── src/
│   ├── components/    # Reusable React components (e.g., buttons, modals, etc.)
│   ├── pages/        # Page components for each route
│   ├── styles/       # Global and component-specific styles
│   ├── utils/        # Utility functions
│   ├── assets/       # Static assets (images, SVGs, etc.)
│   └── App.tsx       # Root component
├── package.json      # Dependencies and scripts
└── vite.config.ts    # Vite configuration
```

## Key Functionalities

* **Music Player**:
    * Play, pause, next, and previous controls
    * Keyboard shortcuts (e.g., spacebar for play/pause, arrows for seeking)
    * Volume control and mute/unmute support
* **Navigation**:
    * AJAX-based smooth transitions to ensure music playback continuity
    * Easy navigation across pages like Explore, Library, and Profile
* **Customization**:
    * Profile picture uploads
    * Personalized playlist creation

## Contributing

We welcome contributions to enhance the frontend UI. To contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions, feedback, or suggestions, feel free to reach out to Shreevats Dhyani.
