<template>
  <div>
    <h3>{{ msg }}</h3>
    <p>{{ tip }}</p>
  </div>
</template>

<script>
export default {
  name: "TipComponent",
  props: {
    msg: String
  },
  data() {
    return {
      loading: false,
      tip: null
    };
  },
  mounted() {
    fetch("https://www.boredapi.com/api/activity/")
      .then(response => response.json())
      .then(result => {
        this.tip = result.activity;
      });
  }
};
</script>