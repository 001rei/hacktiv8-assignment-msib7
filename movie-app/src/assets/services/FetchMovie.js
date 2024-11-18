import axios from "axios";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_URL = import.meta.env.VITE_MOVIE_BASE_URL;

export default async function FetchMovie(q) {
  const query = q || "star";

  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        apikey: API_KEY,
        type: "movie",
        s: query,
        page: 1,
      },
    });

    if (response.data.Response === "False") {
      return { message: "No results found" };
    }

    return response.data.Search;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
