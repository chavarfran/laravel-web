<template>
  <div class="container">
    <div class="card card-body mx-3 mx-md-4 mt-6">
      <div class="row">
        <div class="mt-3 row">
          <div class="col-12 col-md-6 col-xl-4 position-relative">
            <div class="card card-plain h-100">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="d-flex flex-column h-50">
                      <p class="mb-1 pt-2 text-bold">titulo
                      </p>
                      <h5 class="font-weight-bolder">noticia</h5>
                      <p class="mb-5">¡Presentamos nuestro innovador Sistema de Asistencia Inteligente
                        para Universidad Mariano Galvez! Diseñado para revolucionar la manera en que se
                        gestiona la asistencia de catedráticos, nuestro sistema ofrece una solución
                        integral que combina eficiencia, precisión y facilidad de uso.</p>
                    </div>
                  </div>
                  <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                    <div class="bg-gradient-warning border-radius-lg h-100">
                      <img src="" class="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="vertical dark" />
          </div>
          <div class="col-12 col-md-6 col-xl-4 mt-md-0 mt-4 position-relative">
            <div class="card card-plain h-100">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="d-flex flex-column h-50">
                      <p class="mb-1 pt-2 text-bold">titulo
                      </p>
                      <h5 class="font-weight-bolder">noticia</h5>
                      <p class="mb-5">¡Presentamos nuestro innovador Sistema de Asistencia Inteligente
                        para Universidad Mariano Galvez! Diseñado para revolucionar la manera en que se
                        gestiona la asistencia de catedráticos, nuestro sistema ofrece una solución
                        integral que combina eficiencia, precisión y facilidad de uso.</p>
                    </div>
                  </div>
                  <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                    <div class="bg-gradient-warning border-radius-lg h-100">
                      <img src="" class="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves">
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
                <h6 class="mb-0">Conversations</h6>
              </div>
              <div class="p-3 card-body">
                <ul class="list-group">
                  <li class="px-0 mb-2 border-0 list-group-item d-flex align-items-center">
                    <material-avatar class="me-3" :img="sophie" alt="kal" border-radius="lg" shadow="regular" />
                    <div class="d-flex align-items-start flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">Sophie B.</h6>
                      <p class="mb-0 text-xs">Hi! I need more information..</p>
                    </div>
                    <a class="mb-0 btn btn-link pe-3 ps-0 ms-auto" href="javascript:;">Reply</a>
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
            <div class="row" style="margin-left: 0; margin-right: 0;">
              <div v-for="article in articles" :key="article.title" class="col-12 mb-4"
                style="padding-left: 0; padding-right: 0;">
                <default-project-card :title="article.title" :image="article.urlToImage" :label="article.source.name"
                  :description="article.description" :authors="[
                    {
                      image: '', // Puedes agregar imágenes de autores si tienes
                      name: article.author || 'Desconocido',
                    }
                  ]" :action="{
                    color: 'success',
                    label: 'Leer más',
                    url: article.url
                  }" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from "../services/new.service"; // Importar el servicio
import DefaultProjectCard from "./components/DefaultProjectCard.vue";

export default {
  name: "dashboard-default",
  data() {
    return {
      articles: [],
      query: 'Guatemala',     // Valor predeterminado para la búsqueda
      fromDate: '2024-09-06', // Valor predeterminado para la fecha
      sortBy: 'publishedAt'   // Valor predeterminado para ordenar
    };
  },
  components: {
    DefaultProjectCard,
  },

  mounted() {
    this.fetchArticles(); // Llamada a la API al montar el componente
  },
  methods: {
    async fetchArticles() {
      try {
        const data = await apiService.getArticles(this.query, this.fromDate, this.sortBy);
        console.log(data)
        this.articles = data; // Asignar los artículos al estado
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }
  }
};
</script>