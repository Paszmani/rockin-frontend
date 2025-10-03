import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.ts";
import i18n from "./locales.ts";
import axios from "axios";

createApp(App).use(router).use(i18n).mount("#app");

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.withCredentials = true;
