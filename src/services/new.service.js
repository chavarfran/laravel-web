import axios from "axios";

const API_URL = process.env.VUE_APP_API_BASE_URL;

export default {
  async getArticles(query = "", fromDate = "", sortBy = "publishedAt") {
    const params = {
      q: query,
      from: fromDate,
      sortBy: sortBy,
    };

    const response = await axios.get(`${API_URL}/news`, {
      headers: {
        Accept: "application/json",
      },
      params: params,
    });
    return response.data.articles;
  },
};
