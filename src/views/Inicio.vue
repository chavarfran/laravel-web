<template>
  <div class="container">
    <div class="card card-body mx-3 mx-md-4 mt-8">
      <div class="row">
        <div class="mt-3 row">
          <div class="col-12 col-md-6 col-xl-4 position-relative">
            <div class="card card-plain h-100">
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                      <div class="d-flex flex-column h-50">
                        <p class="mb-1 pt-2 text-bold">Sistema de control de asistencia
                        </p>
                        <h5 class="font-weight-bolder">Universidad mariano galvez</h5>
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
                        <p class="mb-1 pt-2 text-bold">Sistema de control de asistencia
                        </p>
                        <h5 class="font-weight-bolder">Universidad mariano galvez</h5>
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
              <h6 class="mb-1">Projects</h6>
              <p class="text-sm">Architects design houses</p>
            </div>
            <div class="row">
              <default-project-card title="Modern" :image="img1" label="Project #2" description="As Uber works through a huge amount of internal
                management turmoil." :authors="[
                  {
                    image: team1,
                    name: 'Elena Morison',
                  },
                  {
                    image: team2,
                    name: 'Ryan Milly',
                  },
                  {
                    image: team3,
                    name: 'Nick Daniel',
                  },
                  {
                    image: team4,
                    name: 'Peterson',
                  },
                ]" :action="{
                  color: 'success',
                  label: 'View Project',
                }" />

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultProjectCard from "./components/DefaultProjectCard.vue";

import MaterialAvatar from "@/components/MaterialAvatar.vue";
import sophie from "@/assets/img/kal-visuals-square.jpg";
import marie from "@/assets/img/marie.jpg";
import ivana from "@/assets/img/ivana-square.jpg";
import peterson from "@/assets/img/team-4.jpg";
import nick from "@/assets/img/team-3.jpg";
import img1 from "@/assets/img/home-decor-1.jpg";
import img2 from "@/assets/img/home-decor-2.jpg";
import img3 from "@/assets/img/home-decor-3.jpg";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "dashboard-default",
  data() {
    return {
      showMenu: false,
      sophie,
      marie,
      ivana,
      peterson,
      nick,
      img1,
      team1,
      team2,
      team3,
      team4,
      img2,
      img3,
    };
  },
  components: {
    DefaultProjectCard,

    MaterialAvatar,
  },

  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
  },
};
</script>