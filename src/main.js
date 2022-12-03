import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

// import Vue from "vue";
// import App from "./App.vue";
// import Flutterwave from "flutterwave-vue-v3";

// Vue.use(Flutterwave, { publicKey: "FLWPUBK_TESTXXXXXXXXXX" });

// new Vue({
//     render: (h) => h(App),
// }).$mount("#app");