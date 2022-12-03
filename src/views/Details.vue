<template>
    <PostDetails :id="id" />
    
</template>

<script>

import PostDetails from '../components/PostDetails.vue'


export default {
  name: 'DetailsPage',
  props: {
    id: String
  },
  components: {
    PostDetails,
  },
  
}
</script>

<style>

</style>