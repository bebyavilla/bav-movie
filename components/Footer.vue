<template>
    <!-- footer -->
    <v-footer
        dark
        padless
      >
        <v-card
          flat
          tile
          class="white--text text-center"
          color="#1a2439"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="bulet mx-4 white--text"
              icon
              color="warning"
            >
              <v-icon size="30px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            BAV Movie adalah sumber rekomendasi paling tepercaya di dunia untuk hiburan berkualitas. Dan Tomatometer hanyalah permulaan. Jika Anda seorang penggemar hiburan yang mencari rekomendasi, atau untuk berbagi pendapat, Anda telah datang ke tempat yang tepat.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} <strong>&copy; BEBY AVILLA</strong>
          </v-card-text>
        </v-card>
      </v-footer>
</template>

<script>

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

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap);
#app {
  
  background-color: #0C111B;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: white;
}

.none {
  text-decoration: none;
  font-weight: 100px;
  margin-right: 20px;
}

.navbar-child {
    display: flex;
    align-items: center;

}
.bulet {
  color: #F9A825 !important;
  margin: 10px;
}
.nav {
padding: 20px;
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
