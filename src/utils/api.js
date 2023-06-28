const baseUrl = process.env.REACT_APP_RAPID_API_BASE_URL;
const baseYoutbeUrl = process.env.REACT_APP_YOUTUBE_SEARCH_DOWNLOAD_URL;

const options = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
  params: {
    maxResults: "50",
  },
};
const youtubeOptions = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
  params: {
    maxResults: "20",
  },
};

export const fetchData = async (url) => {
  const endpoint = url ? `${baseUrl}/${url}` : baseUrl;

  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data;
};
export const fetchYoutubeData = async (url) => {
  const endpoint = url ? `${baseYoutbeUrl}/${url}` : baseYoutbeUrl;

  const response = await fetch(endpoint, youtubeOptions);
  const data = await response.json();
  return data;
};
