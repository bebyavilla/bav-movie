<template>
    <div class="trailer">
        <Navbar />
        <br>
        <h1>Trailer Movie</h1>


    <!-- Loading Animation -->
    <Loading v-if="$fetchState.pending" />
    <v-container class="grey lighten-5">
        <v-row no-gutters>
            <v-card
                class="card mx-auto primary"
                max-width="350"
            >
                <iframe width="350" height="223" src="https://www.youtube.com/embed/aWzlQ2N6qqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-card-text class="text--primary">
                    <div><h3>Doctor Strange in the Multiverse of Madness</h3></div>
                </v-card-text>
            </v-card>
            <v-card
                class="card mx-auto"
                max-width="350"
            >
                <iframe width="350" height="225" src="https://www.youtube.com/embed/mqqft2x_Aa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-card-text class="text--primary">
                    <div><h3>The Batman</h3></div>
                </v-card-text>
            </v-card>
            <v-card
                class="card mx-auto"
                max-width="350"
            >
                <iframe width="350" height="223" src="https://www.youtube.com/embed/CNcT9GguOOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-card-text class="text--primary">
                    <div><h3>The Bad Guys</h3></div>
                </v-card-text>
            </v-card>
            <v-card
                class="card mx-auto"
                max-width="350"
            >
                <iframe width="350" height="223" src="https://www.youtube.com/embed/Eghnv7-1J9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-card-text class="text--primary">
                    <div><h3>Sonic The Hedgehog 2</h3></div>
                </v-card-text>
            </v-card>
            <v-card
                class="card mx-auto"
                max-width="350"
            >
                <iframe width="350" height="223" src="https://www.youtube.com/embed/beToTslH17s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-card-text class="text--primary">
                    <div><h3>Scream</h3></div>
                </v-card-text>
            </v-card>
            <v-card
                class="card mx-auto"
                max-width="350"
            >
                <iframe width="350" height="223" src="https://www.youtube.com/embed/4A0muKc83Nc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-card-text class="text--primary">
                    <div><h3>Pil's Adventures</h3></div>
                </v-card-text>
            </v-card>
            <v-card
                class="card mx-auto"
                max-width="350"
            >
                <iframe width="350" height="223" src="https://www.youtube.com/embed/nfKO9rYDmE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-card-text class="text--primary">
                    <div><h3>The Lost City</h3></div>
                </v-card-text>
            </v-card>
            <v-card
                class="card mx-auto"
                max-width="350"
            >
                <iframe width="350" height="223" src="https://www.youtube.com/embed/7NU-STboFeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-card-text class="text--primary">
                    <div><h3>Ambulance</h3></div>
                </v-card-text>
            </v-card>
            <v-card
                class="card mx-auto"
                max-width="350"
            >
                <iframe width="350" height="223" src="https://www.youtube.com/embed/e7glvM8Xh0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-card-text class="text--primary">
                    <div><h3>The Contractor</h3></div>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
    <Footer />
    </div>
</template>

<script>
export default {
    name: 'Trailer',
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap);
.trailer {
  background-color: #0C111B;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: white;
}
iframe {
    padding: 10px;
}
.card {
    margin: 10px;
    background-color: red;
}
h3 {
    font-weight: 900;
    color: #0C111B;
}
</style>