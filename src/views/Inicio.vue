<template>
  <div class="container">
    <div class="card card-body mx-3 mx-md-4 mt-2">
      <div class="row">


        <!-- Category Select Dropdown -->
        <div class="col-12 mt-3">
          <nav class="navbar navbar-expand-lg border-radius-lg">
            <div class="container">
              <span class="navbar-brand">Categorías:</span>
              <!-- Toggler button for collapsing menu in smaller screens -->
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <!-- Collapsible Navbar -->
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" :class="{ active: articleParams.category_id === 1 }" href="#"
                      @click="updateCategory(1)">
                      Negocios
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" :class="{ active: articleParams.category_id === 2 }" href="#"
                      @click="updateCategory(2)">
                      Entretenimiento
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" :class="{ active: articleParams.category_id === 3 }" href="#"
                      @click="updateCategory(3)">
                      General
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" :class="{ active: articleParams.category_id === 4 }" href="#"
                      @click="updateCategory(4)">
                      Salud
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" :class="{ active: articleParams.category_id === 5 }" href="#"
                      @click="updateCategory(5)">
                      Ciencia
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" :class="{ active: articleParams.category_id === 6 }" href="#"
                      @click="updateCategory(6)">
                      Deportes
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" :class="{ active: articleParams.category_id === 7 }" href="#"
                      @click="updateCategory(7)">
                      Tecnología
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="mt-3 row">
          <div class="input-group">
            <input id="search" type="text" class="form-control" placeholder="Buscar noticias" v-model="searchQuery"
              @input="performSearch" />
          </div>
          <div class="col-12 col-md-12 col-xl-8">
            <div class="card card-plain h-100">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="d-flex flex-column h-50">
                      <p class="mb-1 pt-2 text-bold">
                        {{ articles[0]?.source.name }}
                      </p>
                      <h5 class="font-weight-bolder">
                        {{ articles[0]?.title }}
                      </h5>
                      <p class="mb-5">{{ articles[0]?.description }}</p>
                    </div>
                    <div class="d-flex flex-column h-50">
                      <p class="mb-1 pt-2 text-bold">
                        {{ articles[1]?.source.name }}
                      </p>
                      <h5 class="font-weight-bolder">
                        {{ articles[1]?.title }}
                      </h5>
                      <p class="mb-5">{{ articles[1]?.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="vertical dark" />
          </div>
          <div class="mt-4 col-12 col-xl-4 mt-xl-0">
            <div class="card card-plain h-100">
              <div class="p-3 pb-0 card-header">
                <h6 class="mb-0">Noticias populares</h6>
                <p class="text-sm">
                  Las noticias mas populares de las que todo mundo habla
                </p>
              </div>
              <div class="p-3 card-body news-scroll">
                <ul class="list-group">
                  <li v-for="miniNew in miniNews" :key="miniNew.url"
                    class="px-0 mb-2 border-0 list-group-item d-flex flex-column">
                    <img :src="miniNew.urlToImage" alt="news-image" class="me-3 img-thumbnail" />
                    <div class="d-flex flex-column mb-2">
                      <h6 class="mb-0 text-sm">{{ miniNew.title }}</h6>
                      <p class="mb-0 text-xs">{{ miniNew.description }}</p>
                    </div>
                    <a class="btn btn-link" :href="miniNew.url" target="_blank">VER</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12">
            <div class="mb-5 ps-3">
              <h6 class="mb-1">Todas las noticias</h6>
              <p class="text-sm">Las noticias mas relevantes del momento</p>
            </div>
            <div class="row" style="margin-left: 0; margin-right: 0">
              <div v-for="article in articles" :key="article.title" class="col-12 mb-4"
                style="padding-left: 0; padding-right: 0">
                <default-project-card :title="article.title" :image="article.urlToImage" :label="article.source.name"
                  :description="article.description" :authors="[
                    {
                      image: '', // Puedes agregar imágenes de autores si tienes
                      name: article.author || 'Desconocido',
                    },
                  ]" :action="{
                    color: 'success',
                    label: 'Leer más',
                    url: `/articulo/${article.source.id}`,
                  }" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.news-scroll {
  max-height: 350px;
  /* Ajusta según sea necesario */
  overflow-y: auto;
}

.img-thumbnail {
  width: auto;
  /* Ajusta según sea necesario */
  height: auto;
  border-radius: 5px;
}
</style>
<script>
import apiService from "../services/new.service"; // Importar el servicio
import DefaultProjectCard from "./components/DefaultProjectCard.vue";

export default {
  name: "dashboard-default",
  data() {
    return {
      searchQuery: "",
      articles: [],
      miniNews: [],
      articleParams: {
        category_id: 1,
        query: ""
      },
      miniNewsParams: {
        category_id: 2,
      },
    };
  },
  components: {
    DefaultProjectCard,
  },
  mounted() {
    this.setDefaultFromDate();
    this.fetchArticles();
    this.fetchMiniNews();
  },
  methods: {
    setDefaultFromDate() {
      const today = new Date();
      today.setDate(today.getDate() - 1);
      const defaultDate = today.toISOString().split("T")[0];
      this.articleParams.from = defaultDate;
      this.miniNewsParams.from = defaultDate;
    },
    async fetchMiniNews() {
      try {
        const data = await apiService.getArticles(this.miniNewsParams);
        this.miniNews = data;
      } catch (error) {
        console.error("Error fetching mini news:", error);
      }
    },
    async fetchArticles() {
      this.articleParams.query = this.searchQuery;

      try {
        const data = await apiService.getArticles(this.articleParams);
        this.articles = data;
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    },
    // Method to update category based on selection
    updateCategory(categoryId) {
      this.articleParams.category_id = categoryId;
      this.fetchArticles();
    },
    performSearch() {
      this.articleParams.query = this.searchQuery;
      this.fetchArticles();
    },
  },
};
</script>