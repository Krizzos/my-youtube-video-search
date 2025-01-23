import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      onLogin(true);
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <div style={loginContainerStyle}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={formStyle}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
};

const loginContainerStyle = {
  width: '300px',
  margin: '100px auto',
  padding: '20px',
  textAlign: 'center',
  border: '1px solid #ccc',
  borderRadius: '10px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  fontSize: '14px',
};

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSearch = async (term) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 50,
        key: 'AIzaSyBdYJ-wIlTsoe0lduyPJoiIVKKeGoeF8vY',
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const handleLogin = (status) => {
    setIsLoggedIn(status); 
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {isLoggedIn ? (
        <div>
          <SearchBar onSearch={onSearch} />
          <VideoDetail video={selectedVideo} />
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;