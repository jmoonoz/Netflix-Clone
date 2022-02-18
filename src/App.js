import './style/App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
    {/* nav */}
    {/* banner */}
    <Banner />
      <Row
        title="Netflix originals"
        fetchUrl={request.fetchingNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchingTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchedActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchingTrending} />
      <Row title="Documentories" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
