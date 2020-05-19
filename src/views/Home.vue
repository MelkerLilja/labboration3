<template>
  <div class="home">
    <CatsComponent height="300px" width="300px" msg="Cats"></CatsComponent>
    <TipComponent msg="If your bored you should..."></TipComponent>
    <BBComponent></BBComponent>
    <RNMComponent series="Rick and Morty"></RNMComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import CatsComponent from "@/components/CatsComponent.vue";
import TipComponent from "@/components/TipComponent.vue";
import BBComponent from "@/components/BBComponent.vue";
import RNMComponent from "@/components/RNMComponent.vue";

export default {
  name: "Home",
  components: {
    CatsComponent,
    TipComponent,
    BBComponent,
    RNMComponent
  }
};
</script>
<style>
.home {
  width: 70%;
  text-align: center;
  margin: 0 auto;
  border-style: double;
  border-color: #000;
  border-width: 5px;
  border-radius: 5px;
  display: table;
  box-shadow: 10px 5px 5px rgba(128, 128, 128, 0.4);
}

div.home {
  display: grid;
  grid-gap: 1em;
  padding: 1em;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr;
  justify-items: center;
  align-items: center;
}
</style>
