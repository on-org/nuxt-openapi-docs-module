import { defineNuxtModule, extendPages } from "@nuxt/kit";
import { resolve } from "path";

export default defineNuxtModule({
  setup() {
    extendPages((pages) => {
      console.log(1111112222233);
      // Add /test page
      pages.push({
        name: "Test",
        path: "/test",
        file: resolve(__dirname, "./pages/test.vue"),
      });
    });
  },
});
