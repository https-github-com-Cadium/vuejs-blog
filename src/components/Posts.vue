<template>
  <RecentPost :post="posts[0]" />
  <div class="display-flex">
    <div v-for="post in shift(posts)" :key="post.id" class="card-container">
      <SinglePost :post="post" />
    </div>
  </div>

</template>

<script>
import SinglePost from './Post.vue'
import RecentPost from './RecentPost.vue'

export default {
  name: 'AllPosts',
  props: {
    posts: Array,
  },

  components: {
    SinglePost,
    RecentPost
  },
  methods: {
    shift(posts) {
      let d = [...posts];
      d.shift();
      return d;
    },
  },
} 
</script>

<style scoped lang="scss">
$--c-border: #F5F5F5;

.display-flex {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;

  .card-container {
    display: flex;
    justify-content: center;
    padding: 8px;
    border: 1px solid $--c-border;
    flex-direction: column;
    width: 30%;
    margin: 30px auto;
  }

  div {
    width: 30%;
  }
}
</style>