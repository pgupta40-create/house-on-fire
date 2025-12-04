
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">House on Fire</h1>
        <nav className="tabs">
          <button className="tab">Parties</button>
          <button className="tab">Artists</button>
          <button className="tab">Cities</button>
          <button className="tab">Genres</button>
        </nav>
        <div className="intro">
          <p>Discover the hottest house music parties around the world.</p>
          <p>Explore by city, artist, or your favorite genre. Rate and share your experience!</p>
        </div>
        <div className="music-visual">
          <div className="equalizer">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
