N<template>
  <nav class="shadow-none navbar navbar-main navbar-expand-lg border-radius-xl" v-bind="$attrs" id="navbarBlur"
    data-scroll="true" :class="isAbsolute ? 'mt-4' : 'mt-0'">
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" :color="color" />
      <div class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4" :class="isRTL ? 'px-0' : 'me-sm-4'"
        id="navbar">
        <div class="pe-md-3 d-flex align-items-center" :class="isRTL ? 'me-md-auto' : 'ms-md-auto'">
          <material-input id="search" label="Search" :color="color ? 'light' : 'dark'" />
        </div>
        <ul class="navbar-nav justify-content-end">

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle d-flex align-items-center py-0" href="#" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" :class="color ? color : 'text-body'">
              <i class="material-icons" :class="isRTL ? 'ms-sm-2' : 'me-sm-1'">account_circle</i>
            </a>

            <ul class="dropdown-menu dropdown-menu-end">
              <!--Profile-->
              <li class="nav-item d-flex align-items-center">
                <router-link :to="{ name: 'User Profile' }"
                  class="px-0 nav-link font-weight-bold lh-1 d-flex align-items-center">
                  <i class="material-icons ms-2" :class="isRTL ? 'ms-sm-2' : 'me-sm-1'">
                    account_circle
                  </i>
                  My Profile
                </router-link>
              </li>

              <hr class="m-0">

              <!--Logout-->
              <li class="nav-item d-flex align-items-center">
                <router-link :to="{ name: 'Login' }" @click="logout"
                  class="px-0 nav-link font-weight-bold lh-1 d-flex align-items-center">
                  <i class="material-icons ms-2" :class="isRTL ? 'ms-sm-2' : 'me-sm-1'">
                    logout
                  </i>
                  Logout
                </router-link>
              </li>
            </ul>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import MaterialInput from "@/components/MaterialInput.vue";
import Breadcrumbs from "../Breadcrumbs.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
    };
  },
  props: ["minNav", "color"],
  created() {
    this.minNav;
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),

    toggleSidebar() {
      this.navbarMinimize();
    },

    logout() {
      this.$store.dispatch("auth/logout");
    }
  },
  components: {
    Breadcrumbs,
    MaterialInput,
  },
  computed: {
    ...mapState(["isRTL", "isAbsolute"]),

    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>