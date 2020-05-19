<template>
  <div>
    <h3>{{ series }}</h3>
    <p>{{ name }}</p>
    <p>{{ episode }}</p>
    <p>{{ airDate }}</p>
  </div>
</template>

<script>
export default {
  name: "RNMCompontent",
  props: {
    series: String
  },
  data() {
    return {
      loading: false,
      rnm: null,
      name: null,
      episode: null,
      airDate: null,
      randomEpisode: null
    };
  },
  created() {
    this.randomEpisode = Math.floor(Math.random() * 31) + 1;
    fetch("https://rickandmortyapi.com/api/episode/" + this.randomEpisode)
      .then(response => response.json())
      .then(result => {
        this.rnm = result;
        this.name = result.name;
        this.episode = result.episode;
        this.airDate = result.air_date;
      });
  }
};
</script>