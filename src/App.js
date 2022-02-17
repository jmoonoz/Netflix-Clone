import './App.css';
import Row from './Row';
import request from './request';

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Row title="Netflix originals" fetchUrl={request.fetchingNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchingTrending} />
    </div>
  );
}

export default App;
