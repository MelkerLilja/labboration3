import Vuex from 'vuex'

<template>
  <div>
    <input v-model="someValue" @keyup.enter="onEnter" placeholder="Write your name here" />
    <p>Your name is {{ someValue }}</p>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
  computed: {
    someValue: {
      get() {
        return this.$store.state.someValue;
      },
      set(someValue) {
        this.$store.commit("setSomeValue", someValue);
      }
    }
  },
  methods: {
    onEnter() {
      console.log(this.someValue);
    }
  }
};
</script>
