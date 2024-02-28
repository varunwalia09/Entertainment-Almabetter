// client/src/components/Trending.js
import React, { useEffect, useState } from 'react';
import './Trending.css';
import './Movies.css'; // Import the same CSS file used in Movies
import SearchBox from './SearchBox'; // Import the SearchBox component
import Recommended from './Recommended';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [playingVideo, setPlayingVideo] = useState(null);

// Sample trending data
  const sampleTrending = [
    {
      title: 'Abcd',
      releaseYear: '2013',
      imageUrl: '/images/Abcd.jpg',
      videoUrl: '/images/Abcd.mp4',
    },
    {
      title: 'Animal',
      releaseYear: '2023',
      imageUrl: '/images/Animal.jpg',
      videoUrl: '/images/Animal.mp4',
    },
    {
      title: 'Back Stage',
      releaseYear: '1998',
      imageUrl: '/images/Back Stage.jpg',
      videoUrl: '/images/Back Stage.mp4',
    },
    {
      title: 'Bajirao Mastani',
      releaseYear: '2015',
      imageUrl: '/images/Bajirao Mastani.jpg',
      videoUrl: '/images/Bajirao Mastani.mp4',
    },
    {
      title: 'Bhoot Police',
      releaseYear: '2021',
      imageUrl: '/images/Bhoot Police.jpg',
      videoUrl: '/images/Bhoot Police.mp4',
    },
    {
      title: 'Cadaver',
      releaseYear: '2022',
      imageUrl: '/images/Cadaver.jpg',
      videoUrl: '/images/Cadaver.mp4',
    },
    {
      title: 'Coolie',
      releaseYear: '2020',
      imageUrl: '/images/Coolie.jpg',
      videoUrl: '/images/Coolie.mp4',
    },
    {
      title: 'No Exit',
      releaseYear: '2022',
      imageUrl: '/images/No Exit.jpg',
      videoUrl: '/images/No Exit.mp4',
    },
    {
      title: 'Tad The lost Explorer',
      releaseYear: '2012',
      imageUrl: '/images/Tad The lost Explorer.jpg',
      videoUrl: '/images/Tad The lost Explorer.mp4',
    },
    {
      title: 'Pink',
      releaseYear: '2016',
      imageUrl: '/images/Pink.jpg',
      videoUrl: '/images/Pink.mp4',
    },
    {
      title: 'Jumanji',
      releaseYear: '2017',
      imageUrl: '/images/Jumanji.jpg',
      videoUrl: '/images/JUMANJi.mp4',
    },
    {
      title: 'Jurassic Park',
      releaseYear: '1993',
      imageUrl: '/images/Jurassic Park.jpg',
      videoUrl: '/images/Entertainment App Movie Video Sample.mp4',
    },
    {
      title: 'Journey-2',
      releaseYear: '2012',
      imageUrl: '/images/Journey-2.jpg',
      videoUrl: '/images/Journey-2.mp4',
    },
    {
      title: 'Spider-man-2',
      releaseYear: '2004',
      imageUrl: '/images/Spider-man-2.jpg',
      videoUrl: '/images/Spider-man-2.mp4',
    },
    {
      title: 'Onwords',
      releaseYear: '2020',
      imageUrl: '/images/Onwords.jpg',
      videoUrl: '/images/Spider-man-2.mp4',
    },
    
    // ... (other trending items)
  ];

  useEffect(() => {
    // Use either the API call or the sample data, depending on your preference.
    // For now, let's use the sample data.
    setTrending(sampleTrending);

    // If you want to fetch data from an API:
    // axios.get('/api/trending').then((response) => {
    //   setTrending(response.data);
    // }).catch((error) => {
    //   console.error('Error fetching trending:', error);
    // });
  }, []);

  const handleBookmark = (item) => {
    // Implement your logic to add/remove items from bookmarks
    const isBookmarked = bookmarkedItems.some((bookmarkedItem) => bookmarkedItem.title === item.title);

    if (isBookmarked) {
      // If already bookmarked, remove from bookmarks
      const updatedBookmarks = bookmarkedItems.filter((bookmarkedItem) => bookmarkedItem.title !== item.title);
      setBookmarkedItems(updatedBookmarks);
    } else {
      // If not bookmarked, add to bookmarks
      setBookmarkedItems([...bookmarkedItems, item]);
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


  const filteredTrending = trending.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log('Trending state:', filteredTrending);
  console.log('Bookmarked state:', bookmarkedItems);

  return (
    <div>
      <SearchBox onSearch={handleSearch} /> {/* Include the SearchBox component */}
      <h2 className="movies-header">Trending</h2>
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
      <div className="trending-list">
        {filteredTrending.slice(0, 8).map((item) => (
          <div key={item.title} className="movie-card">
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Release Year: {item.releaseYear}</p>
            <div
              className="play-button"
              onClick={() => playVideo(item.videoUrl)}
            >
              ▶ Play
            </div>
            <div className="bookmark-button" onClick={() => handleBookmark(item)}>
              {bookmarkedItems.some((bookmarkedItem) => bookmarkedItem.title === item.title)
                ? 'Bookmarked'
                : 'Bookmark'}
            </div>
          </div>
        ))}
      </div>

      {/* Recommended section */}

      {/* Movie cards from Recommended */}
      <Recommended />

    </div>
  );
};

export default Trending;