<template>
  <div class="vld-parent screen-height">
    <loading v-model:active="isLoading" :is-full-page="fullPage" />
    <AllPosts :posts="posts"/>
    <Join />
    </div>
</template>

<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import AllPosts from '../components/Posts.vue';
import Join from '../components/Join.vue';

export default {
  name: 'HomePage',
  components: {
    AllPosts,
    Loading,
    Join
  },
  data() {
    return {
      posts: [],
      isLoading: false,
      fullPage: true,
    }
  },
  async mounted() {
    try {
      this.isLoading = true;
      await axios
        .get('https://techcrunch.com/wp-json/wp/v2/posts')
        .then((response) => {
          this.posts = response.data,
          this.isLoading = false,
          console.log(response.data)
        })
    } catch (error) {
      console.log(error)
    }

  }

}
</script>

<style>

</style>