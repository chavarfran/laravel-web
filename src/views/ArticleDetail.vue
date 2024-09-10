<template>
  <div class="container">
    <div class="mt-4 mb-4 col-12 mb-xl-0">
      <div class="card card-blog card-plain">
        <div class="card-header p-0 mt-n4 mx-3">
          <a class="shadow-xl d-block border-radius-xl">
            <img :src="article?.url_to_image" alt="img-blur-shadow"
              class="shadow img-fluid border-radius-xl w-100 h-auto" />
          </a>
        </div>
        <div class="p-3 card-body">
          <p class="mb-0 text-lg text-bold text-dark">{{ article?.author }}</p>
          <p class="mb-0 text-sm text-gradient text-dark">{{ article?.published_at }}</p> <!-- Fecha de publicación -->
          <a :href="article?.url" target="_blank">
            <h5>{{ article?.title }}</h5>
          </a>
          <p class="mb-4 text-sm">
            {{ article?.description }}
          </p>
          <p class="mb-0 text-sm">
            {{ article?.content }} <!-- Mostrar el contenido del artículo -->
          </p>
        </div>
      </div>
      <a :href="article.url" target="_blank" rel="noopener noreferrer">
        <button type="button" class="mb-0 btn btn-sm btn-outline-success">
          Ver noticia
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import apiService from "../services/new.service";

export default {
  props: ['id'],
  data() {
    return {
      article: {},
    };
  },
  mounted() {
    this.fetchArticle();
  },
  methods: {
    async fetchArticle() {
      try {
        const data = await apiService.getArticleId(this.id);
        console.log(data)
        this.article = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>