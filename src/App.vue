<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#/">Pär Nilsson</b-navbar-brand>
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
:root {
  --base03:	#002b36;
  --base02:	#073642;
  --base01:	#586e75;
  --base00:	#657b83;
  --base0:	#839496;
  --base1:	#93a1a1;
  --base2:	#eee8d5;
  --base3:	#fdf6e3;
  --yellow:	#b58900;
  --orange:	#cb4b16;
  --red:	#dc322f;
  --magenta:	#d33682;
  --violet:	#6c71c4;
  --blue:	#268bd2;
  --cyan:	#2aa198;
  --green:	#859900;
}
.bg-dark {
    background-color: var(--base02)!important;
}
.navbar-dark .navbar-brand {
    color: var(--base0);
}
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
h1, h2 {
  font-weight: normal;
}
h4 {
  color: var(--green);
  font-weight: bold;
}
p {
  color: var(--base0);
}
pre {
  color: var(--base2);
}
</style>
