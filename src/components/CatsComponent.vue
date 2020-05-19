<template>
  <div>
    <img :src="catPic" :height="height" :width="width" />
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: "CatsComponent",
  props: {
    msg: String,
    height: String,
    width: String
  },
  data() {
    return {
      loading: false,
      catPic: null
    };
  },
  mounted() {
    this.loading = true;
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(response => response.json())
      .then(result => {
        this.catPic = result[0].url;
      });
  }
};
</script>