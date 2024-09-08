<template>
    <navbar btnBackground="bg-gradient-" />
    <div class="page-header align-items-start min-vh-100">
        <span class="mask bg-white opacity-6"></span>

        <div class="container mb-6">
            <div class="row">
                <div class="header pt-10 w-100  d-flex justify-content-center">
                </div>
                <div class="col-lg-4 col-md-8 col-12 mx-auto pb-10">
                    <div class="card z-index-0 fadeIn3 fadeInBottom">
                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div class="bg-gradient-primary shadow-success border-radius-lg py-3 pe-1">
                                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                                    Noticias Solvere
                                </h4>
                            </div>
                        </div>
                        <div class="card-body">
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
                                    <material-button class="my-4 mb-2" variant="gradient" color="dark" full-width>
                                        <span><i class="fab fa-google text-white text-lg"></i></span>
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
        </div>

        <footer class="footer position-absolute bottom-2 py-2 w-100">
            <div class="container">
                <div class="row align-items-center justify-content-lg-between">
                    <div class="col-12 col-md-6 my-auto">
                        
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import MaterialInputField from "@/components/MaterialInputField.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
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
    },
    data() {
        return {
            user: { email: "", password: "" },
            schema: Yup.object().shape({
                email: Yup.string().email("Email has to be a valid email address").required("Email is a required input"),
                password: Yup.string().required("Password is a required input")
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
                this.$router.push({ name: 'Dashboard' })
            } catch (error) {
                showSwal.methods.showSwal({
                    type: "error",
                    message: "Invalid credentials!",
                    width: 500
                });
            }
        },
    },
};
</script>
