import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";


// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router);
app.use(AOS.init());

app.mount("#app");
