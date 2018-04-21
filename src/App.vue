<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Pär Nilsson</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="https://www.linkedin.com/in/pär-nilsson-95411853/" target="_blank">LinkedIn</b-nav-item>
          <b-nav-item href="https://bitbucket.org/poear/" target="_blank">Bitbucket</b-nav-item>
          <b-nav-item href="https://stackoverflow.com/users/4165604/p%C3%A4r-nilsson" target="_blank">Stack Overflow</b-nav-item>      
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: url('./assets/background.jpg'); 
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 65% 0%; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
