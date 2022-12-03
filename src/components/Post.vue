<template>
  <loading v-model:active="isLoading" :is-full-page="fullPage" />

  <img :src="post != undefined ? post.jetpack_featured_media_url : null" alt="image" class="card-image">
  <div class="display-flex">
    <div class="card-author">
      <h3>{{ author }}</h3>
      <div> <span class="card-author-space">.</span> <span>{{post != undefined ? moment(post.date_gmt).fromNow() : " "}}</span></div>
    
    </div>
    <h1 class="text-ellipsis" v-html="post != undefined ? post.title.rendered : ' '"></h1>
    <p class="text-ellipsis--4" v-html="post != undefined ? post.excerpt.rendered : ' '"></p>

  </div>
  <div class="card-read">
    <span class="card-read-time">{{ post != undefined ? getReadingTime(post.title.rendered + ' ' + post.subtitle + ' '
        + post.content.rendered) : ' '
    }} Min Read</span>
    <router-link class="card-read-more" :to="{ name: 'details', params: { id: post != undefined ? post.id : ' ' } }">
      Read Full <img src="../assets/images/arrow.svg" alt="">
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'SinglePost',
  props: {
    post: Object
  },
  components: {
    Loading
  },
  data() {
    return {
      author: '',
      isLoading: false,
      fullPage: true
    }
  },
   created: function () {
    this.moment = moment;
  },
  methods: {
    
    getReadingTime: function (str) {
      const arr = str.split(' ');
      return parseInt(arr.filter(word => word !== '').length / 200); //Get Word Count and divide by 200 as average reading time
    }
  },
  async mounted() {
    try {
      this.isLoading = true;
      await axios
        .get(`https://techcrunch.com/wp-json/tc/v1/users/${this.post.author}`)
        .then((response) => {
          this.author = response.data.name,
            this.isLoading = false
        })
    } catch (error) {
      console.log(error)
    }

  }
}
</script>

<style scoped lang="scss">
$--c-border: #F5F5F5;
$--c-black-30: #4B4B4B;
$--c-black-20: #6E6E6E;
$--c-black: #2C2C2C;
$--c-primary: #1473E6;


@font-face {
  font-family: "SF Pro Display";
  src: url(../assets/fonts/SFPRODISPLAYBOLD.OTF) format("opentype");
}

.card-image {
  object-fit: contain;
  width: 100%;
  max-height: 200px;
}



.card-author {
  display: flex;
  align-items: center;

  h4 {
    color: $--c-black-30;
    font-weight: 700;

  }

    div {
        color: $--c-black-20;
        font-weight: 500;
        margin-left: 10px;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        justify-content: center;

        .card-author-space{
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 15px;
          margin-right: 5px;
        }
      }


}

.display-flex {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;


  h1 {
    font-family: 'SF Pro Display', sans-serif;
    color: $--c-black;
    font-weight: 900;
    margin: 0 auto;
    // font-size: 22px;
  }

  p {
    margin: 0 auto;
    color: $--c-black-20;
  }




}

.card-read {
  display: flex;
  justify-content: space-between;
  margin-top: auto;

  .card-read-time {
    color: $--c-black-20;
  }

  .card-read-more {
    color: $--c-primary;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

      

}

.text-ellipsis--4{
  text-overflow:ellipsis;
  overflow:hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.text-ellipsis{
  text-overflow:ellipsis;
  overflow:hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal;
}



@media (max-width: 767px) {
  .card-container {
    flex-wrap: wrap;
    padding: 0;

    .card-left,
    .card-right {
      width: 100%;
      padding: auto;
    }
  }

}
</style>