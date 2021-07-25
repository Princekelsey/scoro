import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/global.css";
import clickOutside from "@/directives/clickOutside";

createApp(App)
  .use(router)
  .directive("click-outside", clickOutside)
  .mount("#app");
