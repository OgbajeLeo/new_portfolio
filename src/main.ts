import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import './main.css'
import "animate.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { initGoogleAnalytics } from "@/utils/analytics";
import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const gaMeasurementId = "G-25V3V5RKY7";
if (gaMeasurementId) {
  initGoogleAnalytics(gaMeasurementId);
} else {
  console.warn(
    "Google Analytics: MEASUREMENT_ID not found "
  );
}

const app = createApp(App);
app.use(store).use(router);

// Initialize dark mode before mounting
store.dispatch('theme/initDarkMode');

app.mount("#app");
