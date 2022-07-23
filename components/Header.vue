<template>
<v-app>
    <!-- header -->
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1>WELCOME TO BAV MOVIE</h1>
          <p class="font-weight-light">
            Let's See Your Favourite Movie!
          </p>

          <a href="#search" class="btn">
          <v-btn
                large
                rounded
                color="#ca731f"
                dark
              >
                See Movies
          </v-btn>
          </a>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- why us -->
<section id="whyus" class="at-section">
    <div class="container">
      <br>
        <h2 class="title at-section-title">Why BAV Movie?</h2><br><br>
        <div class="at-section__join">
            <div class="row">
                <div class="col-md-3 col-6">
                    <div class="column-join">
                        <img src="@/assets/imgs/cinema.png" width="70">
                        <div class="column-deskrip__bottom">
                            <p>Dapat melihat katalog movie sebagai referensi hiburan</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="column-join">
                        <img src="@/assets/imgs/rating.png" width="70">
                        <div class="column-deskrip__bottom">
                            <p>Mengetahui review movie berdasarkan rating yang tersedia</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="column-join">
                        <img src="@/assets/imgs/note.png" width="70">
                        <div class="column-deskrip__bottom">
                            <p>Melihat informasi mengenai detail movie</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="column-join">
                        <img src="@/assets/imgs/chair.png" width="70">
                        <div class="column-deskrip__bottom">
                            <p>Data movie selalu up to date</p>
                        </div>
                    </div>
                </div>
              </div>
        </div>
    </div>
</section><br>

    <div class="header">
      <div class="title font-weight-bold">
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <template v-slot:prev="{ on, attrs }">
            <v-btn
              color="#ca731f"
              v-bind="attrs"
              v-on="on"
            >Previous slide</v-btn>
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn
              color="#ca731f"
              v-bind="attrs"
              v-on="on"
            >Next slide</v-btn>
          </template>
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet
              :color="colors[i]"
              height="100%"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="text-h2 text-white">
                  {{ slide }}
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    
</v-app>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
      return {
        colors: [
          '#1a2439',
          '#253453',
          '#1b263d',
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
#app {
  text-align: center;
}
.mov {
  background-color: #0C111B;
  justify-content: center;
}
.btn {
  text-decoration: none;
}
.date {
  margin-bottom: 30px;
}
.title {
  color: rgb(255, 187, 0);
  font-size: 25px !important;
}
</style>
