import React, { useEffect, useState } from 'react';
import './Movies.css'; // Import the same CSS file used in Movies
import SearchBox from './SearchBox'; // Import the SearchBox component

const TvSeries = () => {
  const [tvSeries, setTvSeries] = useState([]);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [playingVideo, setPlayingVideo] = useState(null);

  // Sample TV series data with video URLs
  const sampleTvSeries = [
    {
      title: 'The Boys',
      releaseYear: '2003',
      posterUrl: '/images/The Boys.jpg',
      videoUrl: '/images/The Boys.mp4',
    },
{
      title: 'His Dark Materials',
      releaseYear: '2019',
      posterUrl: '/images/His Dark Materials.jpg',
      videoUrl: '/images/His Dark Materials.mp4',
    },
    {
      title: 'Rick And Morty',
      releaseYear: '2013',
      posterUrl: '/images/Rick And Morty.jpg',
      videoUrl: '/images/Rick And Morty .mp4',
    },
    {
      title: 'The 100',
      releaseYear: '2014',
      posterUrl: '/images/The 100.jpg',
      videoUrl: '/images/The 100.mp4',
    },
    {
      title: 'Moon Knight ',
      releaseYear: '2022',
      posterUrl: '/images/Moon Knight.jpg',
      videoUrl: '/images/Moon Knight.mp4',
    },
    {
      title: 'Dark',
      releaseYear: '2017',
      posterUrl: '/images/Dark.jpg',
      videoUrl: '/images/Dark.mp4',
    },
    {
      title: 'Adventure Time',
      releaseYear: '2010',
      posterUrl: '/images/Adventure Time.jpg',
      videoUrl: '/images/Adventure Time.mp4',
    },
    {
      title: 'Coffee',
      releaseYear: '2022',
      posterUrl: '/images/Coffee.jpg',
      videoUrl: '/images/Coffee.mp4',
    },
    // ... Repeat this structure for other TV series
  ];

  useEffect(() => {
    // Use either the API call or the sample data, depending on your preference.
    // For now, let's use the sample data.
    setTvSeries(sampleTvSeries);

    // If you want to fetch data from an API:
    // axios.get('/api/tv-series').then((response) => {
    //   setTvSeries(response.data);
    // }).catch((error) => {
    //   console.error('Error fetching TV series:', error);
    // });
  }, []);

  const handleBookmark = (item) => {
    const isBookmarked = bookmarkedItems.some(
      (bookmarkedItem) => bookmarkedItem.title === item.title
    );

    if (isBookmarked) {
      setBookmarkedItems((prevItems) =>
        prevItems.filter((bookmarkedItem) => bookmarkedItem.title !== item.title)
      );
    } else {
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

  const filteredTvSeries = tvSeries.filter((series) =>
    series.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <h2 className="movies-header">TV Series</h2>
      {playingVideo && (
        <div className="video-overlay" onClick={stopVideo}>
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
        {filteredTvSeries.map((series) => (
          <div key={series.title} className="movie-card">
            <img src={series.posterUrl} alt={series.title} />
            <p>{series.title} ({series.releaseYear})</p>
            {series.videoUrl && (
              <div
                className="play-button"
                onClick={() => playVideo(series.videoUrl)}
              >
                ▶ Play
              </div>
            )}
            <div
              className="bookmark-button"
              onClick={() => handleBookmark(series)}
            >
              {bookmarkedItems.some(
                (bookmarkedItem) => bookmarkedItem.title === series.title
              )
                ? 'Bookmarked'
                : 'Bookmark'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvSeries;
