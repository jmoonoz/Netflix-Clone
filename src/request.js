
const API_KEY = process.env.TMDB_API_KEY;

const request = {
    fetchingTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchingNetflixOriginals: `/discover/tv?api_key=${API_KEY}$with_networks=2134`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchedActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}
export default request;