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
    return response.data;
  },

  async getArticleId(id) {
    const response = await axios.get(`${API_URL}/news/${id}`, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  },

  async getArticleRecommended(id) {
    const response = await axios.get(`${API_URL}/news/category/article/${id}`, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  }
};
