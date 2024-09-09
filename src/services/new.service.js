import axios from "axios";

const API_URL = process.env.VUE_APP_API_BASE_URL;

export default {
  async getArticles(params) {
    const response = await axios.get(`${API_URL}/news`, {
      headers: {
        Accept: "application/json",
      },
      params
    });
    return response.data.articles;
  }
};
