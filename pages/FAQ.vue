<template>
  <div class="faq">
      <Navbar />
      <br>
      <h1>FAQ</h1><br>

    <!-- Desktop -->
    <div class="txt d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
                <img src="@/assets/imgs/faq.png" width="400" />
            </div>
          </div>
        </div>
        <div class="show col-md-6">
         
    <br><br><br><br>
    <div class="container">
      <v-expansion-panels focusable>
          <v-expansion-panel>
            <v-expansion-panel-header  class="panel">
              <h4>Apa itu BAV Movie?</h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="oren">
              <br>
              <h4>BAV Movie adalah platform untuk melihat katalog movie yang terdiri dari Now Playing, Tv Show, Top Rated Movie.</h4>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="panel">
              <h4>Siapa pemilik BAV Movie? Siapa perusahaan induknya?</h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="oren">
              <br>
              <h4>Pada Maret 2020, BAV Movie dan situs induknya Flixster diakuisisi oleh Fandango (yang dimiliki oleh Comcast). Warner Bros. mempertahankan saham minoritas di entitas yang digabungkan, termasuk Fandango.</h4>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="panel">
              <h4>Kapan skor rating muncul di situs web?</h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="oren">
             <br>
             <h4>Skor rating dihitung untuk film atau acara TV setelah menerima setidaknya lima ulasan.</h4>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="panel">
              <h4>Apakah runtime yang ditampilkan untuk setiap film termasuk cuplikan?</h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="oren">
             <br>
             <h4>Tidak. Runtime yang tercantum adalah durasi film fitur. Film fitur tidak dimulai pada waktu tayang yang diterbitkan. Ada sekitar 20 menit materi pra-pertunjukan, termasuk trailer, antara waktu tayang yang diterbitkan dan awal film fitur.</h4>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="panel">
              <h4>Apakah data movie dari BAV Movie up to date?</h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="oren">
              <br>
              <h4>Ya, informasi mengenai movie kami up to date berdasarkan perkembangan terbaru.</h4>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </div>
        </div>
      </div>
    </div>


      <Footer />
  </div>
</template>

<script>
export default {
    name: 'Faq'
    
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap);
.faq {
  background-color: #0C111B;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: white;
}
.container {
  width: 600px;
  text-align: left !important;
}
.panel {
  background-color: rgb(174, 195, 235);
  font-weight: 200px;
  text-align: left;
}
.oren {
  background-color: #e2dfdc;
}
</style>