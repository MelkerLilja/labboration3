<template>
  <div>
    <img :src="img" height="300px" width="300px" />
    <h3>{{ series }}</h3>
    <ul>
      <li>
        Character name:
        <b>{{ name }}</b>
      </li>
      <li>
        Character nickname:
        <b>{{ nick }}</b>
      </li>
      <li>
        Character occupation:
        <b>{{ job }}</b>
      </li>
      <li>
        Portrayed by:
        <b>{{ playedBy }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BBCompontent",
  data() {
    return {
      loading: false,
      series: null,
      img: null,
      name: null,
      nick: null,
      job: null,
      playedBy: null
    };
  },
  mounted() {
    this.loading = true;
    fetch("https://www.breakingbadapi.com/api/character/random/")
      .then(response => response.json())
      .then(result => {
        this.series = result[0].category;
        this.img = result[0].img;
        this.name = result[0].name;
        this.nick = result[0].nickname;
        this.job = result[0].occupation[0];
        this.playedBy = result[0].portrayed;
      });
  }
};
</script>