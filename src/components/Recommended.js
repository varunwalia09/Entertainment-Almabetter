import React, { useEffect, useState } from "react";
import "./Movies.css";

const Recommended = () => {
  const [movies, setMovies] = useState([]);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [playingVideo, setPlayingVideo] = useState(null);

  // Sample movie data
  const sampleMovies = [
    {
      title: "Abcd",
      releaseYear: "2013",
      posterUrl: "/images/Abcd.jpg",
      videoUrl: "/images/Abcd.mp4",
    },
    {
      title: "Animal",
      releaseYear: "2023",
      posterUrl: "/images/Animal.jpg",
      videoUrl: "/images/Animal.mp4",
    },
    {
      title: "Avatar",
      releaseYear: "2009",
      posterUrl: "/images/Avatar.jpg",
      videoUrl: "/images/Avatar.mp4",
    },
    {
      title: "Back Stage",
      releaseYear: "1998",
      posterUrl: "/images/Back Stage.jpg",
      videoUrl: "/images/Back Stage.mp4",
    },
    {
      title: "Bajirao Mastani",
      releaseYear: "2015",
      posterUrl: "/images/Bajirao Mastani.jpg",
      videoUrl: "/images/Bajirao Mastani.mp4",
    },
    {
      title: "Bhoot Police",
      releaseYear: "2021",
      posterUrl: "/images/Bhoot Police.jpg",
      videoUrl: "/images/Bhoot Police.mp4",
    },
    {
      title: "Cadaver",
      releaseYear: "2022",
      posterUrl: "/images/Cadaver.jpg",
      videoUrl: "/images/Cadaver.mp4",
    },
    {
      title: "Coolie",
      releaseYear: "2020",
      posterUrl: "/images/Coolie.jpg",
      videoUrl: "/images/Coolie.mp4",
    },
    {
      title: "No Exit",
      releaseYear: "2022",
      posterUrl: "/images/No Exit.jpg",
      videoUrl: "/images/No Exit.mp4",
    },
    {
      title: "Tad The lost Explorer",
      releaseYear: "2012",
      posterUrl: "/images/Tad The lost Explorer.jpg",
      videoUrl: "/images/Tad The lost Explorer.mp4",
    },
    {
      title: "Pink",
      releaseYear: "2016",
      posterUrl: "/images/Pink.jpg",
      videoUrl: "/images/Pink.mp4",
    },
    {
      title: "Jumanji",
      releaseYear: "2017",
      posterUrl: "/images/Jumanji.jpg",
      videoUrl: "/images/JUMANJI.mp4",
    },
    {
      title: "Jurassic Park",
      releaseYear: "1993",
      posterUrl: "/images/Jurassic Park.jpg",
      videoUrl: "/images/JUMANJI.mp4",
    },
    {
      title: "Journey-2",
      releaseYear: "2012",
      posterUrl: "/images/Journey-2.jpg",
      videoUrl: "/images/Journey-2.mp4",
    },
    {
      title: "Spider-man-2",
      releaseYear: "2004",
      posterUrl: "/images/Spider-man-2.jpg",
      videoUrl: "/images/Spider.mp4",
    },
    {
      title: "Onwords",
      releaseYear: "2020",
      posterUrl: "/images/Onwords.jpg",
      videoUrl: "/images/Spider.mp4",
    },
  ];
  useEffect(() => {
    // Use either the API call or the sample data, depending on your preference.
    // For now, let's use the sample data.
    setMovies(sampleMovies);
  }, []);

  const handleBookmark = (item) => {
    // Check if the item is already bookmarked
    const isBookmarked = bookmarkedItems.some(
      (bookmarkedItem) => bookmarkedItem.title === item.title
    );

    if (isBookmarked) {
      // Remove the item from bookmarks
      setBookmarkedItems((prevItems) =>
        prevItems.filter(
          (bookmarkedItem) => bookmarkedItem.title !== item.title
        )
      );
    } else {
      // Add the item to bookmarks
      setBookmarkedItems((prevItems) => [...prevItems, item]);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const playVideo = (videoUrl) => {
    setPlayingVideo(videoUrl);
  };

  const stopVideo = () => {
    setPlayingVideo(null);
  };

  const filteredMovies = movies.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className="movies-header">Recommended</h2>
      {playingVideo && (
        <div className="video-overlay" onClick={stopVideo}>
          {/* Video component goes here */}
          <video
            className="centered-video"
            width="70%"
            controls
            autoPlay
            onEnded={stopVideo}
          >
            <source src={playingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="movies-list">
        {filteredMovies.slice(0, 16).map((item) => (
          <div key={item.title} className="movie-card">
            <img src={item.posterUrl} alt={item.title} />
            <p>
              {item.title} ({item.releaseYear})
            </p>
            <div
              className="play-button"
              onClick={() => playVideo(item.videoUrl)}
            >
              ▶ Play
            </div>
            <div
              className="bookmark-button"
              onClick={() => handleBookmark(item)}
            >
              {bookmarkedItems.some(
                (bookmarkedItem) => bookmarkedItem.title === item.title
              )
                ? "Bookmarked"
                : "Bookmark"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
