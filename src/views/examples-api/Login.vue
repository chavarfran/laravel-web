<template>
    <navbar btnBackground="bg-gradient" />
    <div class="page-header align-items-start min-vh-100" >
        <span class="mask bg-white opacity-6"></span>
        <div class="container">
            <div class="row">
                <div class="mt-10 col-lg-4 col-md-8 col-12 mx-auto ">
                    <div class="card z-index-0 fadeIn3 fadeInBottom">
                        <div class="card-body">
                            <h4 class="text-success font-weight-bolder text-center mt-2 mb-0">
                                    Noticias solvere
                                </h4>
                            <Form role="form" class="text-start mt-3" :validation-schema="schema" @submit="handleLogin"
                                @invalid-submit="badSubmit">
                                <div class="mb-3">
                                    <material-input-field id="email" v-model:value="user.email" type="email" label="Correo electronico"
                                        name="email" variant="static" />
                                </div>
                                <div class="mb-3">
                                    <material-input-field id="password" v-model:value="user.password" type="password"
                                        label="Clave" name="password" variant="static" />
                                </div>
                                <material-switch id="rememberMe" name="Remember Me">Recordar usuario</material-switch>
                                <div class="text-center">
                                    <material-button class="my-4 mb-2" variant="gradient" color="success" full-width>
                                        <span>Iniciar sesión</span>
                                    </material-button>
                                    <material-button class=" mb-2" variant="gradient" color="dark" full-width>
                                        <span><i class="fab fa-google text-white text-lg"></i></span>
                                    </material-button>
                                    <material-button class=" mb-2" variant="gradient" color="dark" full-width>
                                        <span><i class="fab fa-microsoft text-white text-lg"></i></span>
                                    </material-button>
                                </div>
                                <p class="mt-4 text-sm text-center">
                                ¿No tienes una cuenta?
                                    <router-link :to="{ name: 'Signup' }"
                                        class="text-primary text-gradient font-weight-bold">Registrarse</router-link>
                                </p>
                                <p class="text-sm text-center">
                                    <router-link :to="{ name: 'Password Forgot' }"
                                        class="text-primary text-gradient font-weight-bold">Recuperar contraseña</router-link>
                                </p>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <app-footer />
        </div>
    </div>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import MaterialInputField from "@/components/MaterialInputField.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import showSwal from "@/mixins/showSwal";
import { mapMutations } from "vuex";
import { Form } from "vee-validate"
import * as Yup from 'yup'

export default {
    name: "Login",
    components: {
        Navbar,
        MaterialInputField,
        MaterialSwitch,
        MaterialButton,
        Form,
        AppFooter,
    },
    data() {
        return {
            user: { email: "", password: "" },
            schema: Yup.object().shape({
                email: Yup.string().email("El correo electrónico debe ser una dirección de correo electrónico válida.").required("El correo electrónico es una entrada obligatoria"),
                password: Yup.string().required("La contraseña es una entrada obligatoria")
            }),
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.loggedIn;
        }
    },
    beforeMount() {
        this.toggleEveryDisplay();
        this.toggleHideConfig();
    },
    beforeUnmount() {
        this.toggleEveryDisplay();
        this.toggleHideConfig();
    },
    methods: {
        ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
        async handleLogin() {
            try {
                await this.$store.dispatch('auth/login', this.user);
                this.$router.push({ name: 'Inicio' })
            } catch (error) {
                showSwal.methods.showSwal({
                    type: "error",
                    message: error,
                    width: 500
                });
            }
        },
    },
};
</script>
