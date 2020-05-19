<template>
  <div id="app">
    <h1>Melkers Webbpage</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about/user">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 0.5em;
  text-align: center;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
