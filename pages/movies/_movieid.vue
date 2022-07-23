<template>
<v-app>
  <Navbar />
  <!-- Loading -->
  <Loading v-if="$fetchState.pending" />
  <!-- Movie Info -->
  <div v-else class="single-movie container">
    <NuxtLink 
    class="button" 
    to="/"
    target="_blank"
    > 
    BACK 
    </NuxtLink>
    <div class="movie-info">
      <div class="movie-img">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt=""
        />
      </div>
      <div class="movie-content">
        <h1>{{ movie.title }}</h1>
        <p class="movie-fact tagline">
          <span>Tagline :</span> "{{ movie.tagline }}"
        </p>
        <p class="movie-fact">
          <span>Released :</span>
          {{
            new Date(movie.release_date).toLocaleString('en-us', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })
          }}
        </p>
        <p class="movie-fact">
          <span>Duration :</span> {{ movie.runtime }} minutes
        </p>
        <p class="movie-fact">
          <span>Revenue :</span>
          {{
            movie.revenue.toLocaleString('en-us', {
              style: 'currency',
              currency: 'USD',
            })
          }}
        </p>
        <p class="movie-fact">
          <span>Status :</span> {{ movie.status }}
        </p>
        <p class="movie-fact"><span>Overview :</span> {{ movie.overview }}</p>
      </div>
    </div>
    <Cast />
  </div>
  <Footer />
</v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'singleMovie',

  async fetch() {
    await this.getSingleMovie()
  },

  // delay for fetching
  fetchDelay: 1000,

  head() {
    return {
      title: this.movie.title,
    }
  },

  data() {
    return {
      movie: '',
    }
  },
  methods: {
    async getSingleMovie() {
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`
      )
      const result = await data
      this.movie = result.data
    },
  },
}
</script>

<style lang="scss">
.single-movie {
  background-color: #0C111B;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 16px;

  .button {
    align-self: flex-start;
    margin-bottom: 32px;
    text-decoration: none;
    color: white;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #fff;
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
    }
    .movie-img {
      img {
        max-height: 300px;
        width: 80%;

        @media (min-width: 800px) {
          max-height: 400px;
          width: initial;
        }
      }
    }

    .movie-content {
      h1 {
        font-size: 33px;
        font-weight: 600;
        color: rgb(233, 212, 27);
      }

      .movie-fact {
        margin-top: 12px;
        font-size: 17px;
        line-height: 1.5;

        span {
          font-weight: 600;
          text-decoration: none;
        }
      }

      .tagline {
        font-style: italic;
        span {
          font-style: normal;
        }
      }
    }
  }
}
.button {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 8px 16px;
  background-color: #c26813;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    background-color: #891b02;
  }
}
</style>