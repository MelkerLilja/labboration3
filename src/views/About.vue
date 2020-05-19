<template>
  <div class="about">
    <h1>Hello fellow {{ this.$route.params.username }}!</h1>
    <AboutComponent></AboutComponent>
  </div>
</template>

<script>
import AboutComponent from "@/components/AboutComponent.vue";

export default {
  name: "About",
  components: {
    AboutComponent
  }
};
</script>

<style>
.about {
  width: 70%;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  border-style: double;
  border-color: #000;
  border-width: 5px;
  border-radius: 5px;
  display: table;
  box-shadow: 10px 5px 5px rgba(128, 128, 128, 0.4);
}

div.about {
  display: grid;
  grid-gap: 1em;
  padding: 1em;
  grid-template-columns: 0.5fr;
  grid-template-rows: 0.5fr;
  justify-items: center;
  align-items: center;
}
</style>
