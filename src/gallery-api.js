import axios from "axios";

//client_id

const MY_ACCESS_KEY = "ITbJcfAKB3TArN0Qm41iGHVV_2zC3cKBjvYbvLkeoqI";

axios.defaults.headers.common["Authorization"] = `Client-ID ${MY_ACCESS_KEY}`;
axios.defaults.baseURL = "https://api.unsplash.com/";

const fetchImages = async (query, page = 1) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 20,
    },
  });

  return response;
};

export default fetchImages;
