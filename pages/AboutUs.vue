<template>
  <div class="aboutus">
      <Navbar />
      <br>

    <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="txt row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="bav justify-content-center align-self-center">
            <img  src="@/assets/imgs/logo-bav.png" width="170" /><br>
            <h1>BAV Movie</h1><br>
              <p>
                BAV Movie adalah sumber rekomendasi paling tepercaya di dunia untuk hiburan berkualitas. Dan Tomatometer hanyalah permulaan. Jika Anda seorang penggemar hiburan yang mencari rekomendasi, atau untuk berbagi pendapat, Anda telah datang ke tempat yang tepat.
              </p><br>
              <v-btn
                :to= "{ path: '/Film' }"
                large
                rounded
                color="#ca731f"
                dark
                class="btn"
              >
                See Movies
              </v-btn>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="@/assets/imgs/mov.jpg" width="400" />
        </div>
      </div>
    </div>
  </div>

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
                            <p>Dapat melihat katalog movie sebagai referensi hiburan.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="column-join">
                        <img src="@/assets/imgs/rating.png" width="70">
                        <div class="column-deskrip__bottom">
                            <p>Mengetahui review movie berdasarkan rating yang tersedia.</p>
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
    <br>
</section>

      <Footer />
  </div>
</template>

<script>
export default {
    name: 'AboutUs'
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap);
.aboutus {
  background-color: #0C111B;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: white;
}

.txt {
  padding: 35px;
}
.btn {
  text-decoration: none;
}
.bav {
  text-align: left;
}
.title {
  color: rgb(255, 187, 0);
}
#whyus {
  background-color: #111b2c;
}
</style>