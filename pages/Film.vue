<template>
  <div class="film">
      <Navbar />
      <br><br>
    <!-- Loading Animation -->
    <Loading v-if="$fetchState.pending" />
    <div class="container movies">
    <!-- Desktop -->
    <div class="txt d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <br><br><br>
            <h1>Top Rated Movie</h1><br><br>
            </div>
          </div>
        </div>
        <div class="show col-md-6">
          <img src="@/assets/imgs/movvv.png" width="500" />
        </div>
      </div>
    </div>

    <!-- Movies -->
      <h1 id="popular" class="text-popular">Top Rated Movie</h1><br>
      <!-- Now Streaming  -->
      <div id="movie-grid" class="movies-grid">
        <div v-for="(movie, index) in movies" :key="index" class="movie">
          <div class="movie-img">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              alt=""
            />
            <p class="review">{{ movie.vote_average }}</p>
            <p class="overview">{{ movie.overview }}</p>
          </div>
          <div class="info">
            <p class="title">
              {{ movie.title.slice(0, 25)
              }}<span v-if="movie.title.length > 25">...</span>
            </p>
            <p class="release">
              Released:
              {{
                new Date(movie.release_date).toLocaleString('en-us', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              }}
            </p>
            <NuxtLink
              class="button button-light"
              :to="{ name: 'movies-movieid', params: { id: movie.id } }"
            >
              Get More Info
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

      <Footer class="footer"/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Film',
  data() {
    return {
      movies: [],
      searchedMovies: [],
      searchInput: '',
    }
  },
  async fetch() {
    if (this.searchInput === '') {
      await this.getMovies()
      return
    }
    if (this.searchInput !== '') {
      await this.searchMovies()
    }
  },
  fetchDelay: 1000,
  methods: {
    async getMovies() {
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1`
      )
      const result = await data
      result.data.results.forEach((movie) => {
        this.movies.push(movie)
      })
    },
    async searchMovies() {
      const data = axios.get(
        `https://api.themoviedb.org/3/search/movie/top_rated?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1&query=${this.searchInput}`
      )
      const result = await data
      result.data.results.forEach((movie) => {
        this.searchedMovies.push(movie)
      })
    },
    clearSearch() {
      this.searchInput = ''
      this.searchedMovies = []
    },
  },
  watch: {
    searchInput() {
      console.log(this.searchInput)
    },
  },
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap);
.film {
  background-color: #0C111B;
  font-family: 'Roboto', sans-serif;
  color: white;
  .loading {
    padding-top: 120px;
    align-items: flex-start;
  }
  .search {
    display: flex;
    padding: 32px 16px;

    input {
      max-width: 240px;
      width: 100%;
      padding: 12px 6px;
      background-color: white;
      font-size: 15px;
      &:focus {
        outline: none;
      }
    }

    .button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

.footer {
  text-align: center;
}
.none {
  text-decoration: none;
  font-weight: 100px;
}
.text-popular {
  font-size: 26px;
  color: white;
}
.navbar-child {
    display: flex;
    align-items: center;
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

  .movies {
    padding: 32px 16px;
    .movies-grid {
      display: grid;
      column-gap: 32px;
      row-gap: 64px;
      grid-template-columns: 1fr;
      @media (min-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 750px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 1100px) {
        grid-template-columns: repeat(4, 1fr);
      }

      .movie {
        position: relative;
        display: flex;
        flex-direction: column;

        .movie-img {
          position: relative;
          overflow: hidden;

          &:hover {
            .overview {
              transform: translateY(0);
            }
          }

          img {
            display: block;
            width: 90%;
            height: 100%;
          }

          .review {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background-color: #c92502;
            color: #fff;
            border-radius: 0 0 16px 0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          .overview {
            line-height: 1.5;
            position: absolute;
            bottom: 0;
            background-color: rgba(201, 38, 2, 0.9);
            padding: 12px;
            width: 238px;
            color: #fff;
            transform: translateY(100%);
            transition: 0.3s ease-in-out all;
          }
        }

        .info {
          margin-top: auto;
          .title {
            margin-top: 8px;
            color: white;
            font-size: 18px;
            font-weight: 500;
          }

          .release {
            margin-top: 8px;
            color: #c9c9c9;
            font-size: 14px;
          }

          .button {
            margin-top: 8px;
            background-color: #c26813;
          }
        }
      }
    }
  }
}
</style>