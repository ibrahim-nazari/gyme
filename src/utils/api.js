const baseUrl = process.env.REACT_APP_RAPID_API_BASE_URL;

const options = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
  params: {
    maxResults: "50",
  },
};

export const fetchData = async (url) => {
  const endpoint = url ? `${baseUrl}/${url}` : baseUrl;

  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data;
};
