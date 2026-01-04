import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import './main.css'
import "animate.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { initGoogleAnalytics } from "@/utils/analytics";

const gaMeasurementId = "G-25V3V5RKY7";
if (gaMeasurementId) {
  initGoogleAnalytics(gaMeasurementId);
} else {
  console.warn(
    "Google Analytics: MEASUREMENT_ID not found "
  );
}

createApp(App).use(store).use(router).mount("#app");
