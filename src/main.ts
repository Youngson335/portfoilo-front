import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import animation from "./directives/animation";
import notificationPlugin from "./plugins/notification";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.directive("animation", animation);

app.use(pinia);
app.use(router);
app.use(notificationPlugin);

app.mount("#app");
