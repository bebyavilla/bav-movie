<template>
<v-main class="overflow-hidden">
    <v-app-bar app color="#0C111B" dark height="76px" >
      <div class="nav d-flex align-center">

          <img 
          src="@/assets/imgs/logo-bav.png" 
          alt=""
          class="shrink mr-2"
          transition="scale-transition"
          width="150"
          >
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="/"
        text
        class="none text-capitalize"
      >
        <span class="none mr-2">HOME</span>
      </v-btn>

      <v-btn
        :to= "{ path: '/AboutUs' }"
        text
        class="none text-capitalize"
      >
        <span class="none mr-2">ABOUT US</span>
      </v-btn>

      <v-btn
        :to= "{ path: '/Trailer' }"
        text
        class="none text-capitalize"
      >
        <span class="none mr-2">TRAILER</span>
      </v-btn>

      <v-btn
        :to= "{ path: '/TvShow' }"
        text
        class="none text-capitalize"
      >
        <span class="none mr-2">TV SHOW</span>
      </v-btn>

      <v-btn
        :to= "{ path: '/Film' }"
        text
        class="none text-capitalize"
      >
        <span class="none mr-2">TOP RATED</span>
      </v-btn>

      <v-btn
        :to= "{ path: '/FAQ' }"
        text
        class="none text-capitalize"
      >
        <span class="none mr-2">FAQ</span>
      </v-btn>
    </v-app-bar>
</v-main>
</template>

<script>
// import Trailer from 'components/Trailer.vue'
export default {
  name: 'App',
  data () {
      return {
        colors: [
          '#1a2439',
          '#253453',
          '#1b263d',
        ],
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
        slides: [
          'Trending Movies',
          'Top Rated Movies',
          'Upcoming Movies',
        ],
      }
    },
}
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap);
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}
#app {
  background-color: #0C111B;
  font-family: 'Roboto', sans-serif;
}
.none {
  text-decoration: none;
  font-weight: 100px;
}
.nav {
padding: 20px;
}
.search {
    color: cyan;
}
.header {
  color: white;
  font-weight: 300px;
  justify-content: right;
  text-align: center;
}
h1 {
  font-weight: 600px;
  font-size: 50px;
}
</style>
