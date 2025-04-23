import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import animation from "./directives/animation";
import notificationPlugin from "./plugins/notification";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
const pinia = createPinia();

app.directive("animation", animation);

app.use(pinia);
app.use(router);
app.use(notificationPlugin);
app.use(ElementPlus);

app.mount("#app");
