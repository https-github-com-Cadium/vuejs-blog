<template>
  <div class="content-container">
    <div class="content-author">
      <h3>By {{ author }}</h3>
      <span>
        {{
          post != undefined ? "   " + moment(post.date_gmt).fromNow() : " "
        }}</span
      >
    </div>
    <div v-if="!isLoading">
      <h1 v-html="post.title.rendered"></h1>
      <p v-html="post.content.rendered"></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "PostDetails",
  props: {
    id: String,
  },

  data() {
    return {
      post: {},
      author: "",
      isLoading: false,
      fullPage: true,
    };
  },
  created: async function () {
    this.moment = moment;

    try {
      this.isLoading = true;
      await axios
        .get(`https://techcrunch.com/wp-json/wp/v2/posts/${this.id}`)
        .then((response) => {
          (this.post = response.data), console.log(response.data);
        });
      await axios
        .get(`https://techcrunch.com/wp-json/tc/v1/users/${this.post.author}`)
        .then((response) => {
          this.author = response.data.name;
          this.isLoading = false;
        });
    } catch (error) {
      console.log(error);
    }
  },
  async mounted() {},
  methods: {},
};
</script>

<style></style>
