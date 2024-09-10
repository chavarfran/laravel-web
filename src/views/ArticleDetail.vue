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
    <div class="row mt-4">
      <div class="col-12">
        <div class="mb-5 ps-3">
          <h6 class="mb-1">Recomendados por el autor</h6>
          <p class="text-sm">Todas las noticias del autor</p>
        </div>
        <div class="row">
          <div v-for="author in authors" :key="author.title" class="col-3 mb-4"
            style="padding-left: 0; padding-right: 0">
            <default-card :title="author.title" :image="author.urlToImage" :label="author.source.name"
              :description="author.description" :authors="[
                {
                  image: '',
                  name: author.author || 'Desconocido',
                },
              ]" :action="{
                color: 'success',
                label: 'Leer más',
                url: `/articulo/${author.source.id}`,
              }" />
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <div class="mb-5 ps-3">
          <h6 class="mb-1">Recomendados por la categoria</h6>
          <p class="text-sm">Todas las noticias segun la categoria</p>
        </div>
        <div class="row">
          <div v-for="category in categorys" :key="category.title" class="col-3 mb-4"
            style="padding-left: 0; padding-right: 0">
            <default-card :title="category.title" :image="category.urlToImage" :label="category.source.name"
              :description="category.description" :category="[
                {
                  image: '',
                  name: category.author || 'Desconocido',
                },
              ]" :action="{
              color: 'success',
              label: 'Leer más',
              url: `/articulo/${category.source.id}`,
            }" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from "../services/new.service";
import DefaultCard from "../views/components/DefualtCard.vue";

export default {
  props: ['id'],
  data() {
    return {
      article: {},
      authors: [],
      categorys: [],

    };
  },
  components: {
    DefaultCard,
  },
  mounted() {
    this.fetchArticle();
    this.fetchRecommended(); // Agrega esta línea para obtener artículos recomendados
  },
  methods: {
    async fetchArticle() {
      try {
        const data = await apiService.getArticleId(this.id);
        this.article = data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchRecommended() {
      try {
        const data = await apiService.getArticleRecommended(this.id);
        console.log(data)
        this.authors = data.authorArticles;
        this.categorys = data.categoryArticles;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>