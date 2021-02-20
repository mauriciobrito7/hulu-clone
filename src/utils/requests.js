const API_KEY = "d3b18a32c12a4ddb42ccdf68e8eef600";

const moviesRequest = {
  fecthTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
  fecthActionMovies: `/discover/movie?api_key${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key${API_KEY}&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key${API_KEY}&with_genres=9648`,
  fetchSciFi: `/discover/movie?api_key${API_KEY}&with_genres=878`,
  fetchWestern: `/discover/movie?api_key${API_KEY}&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key${API_KEY}&with_genres=16`,
  fetchTv: `/discover/movie?api_key${API_KEY}&with_genres=10770`,
};

export default moviesRequest;
