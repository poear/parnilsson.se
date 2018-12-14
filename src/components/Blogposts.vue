<template>
  <div class="blogposts container">
    <div class="col-md-auto">
      <b-card  bg-variant="dark" text-variant="white" title="#1 - Solarized CSS">
        <p class="card-text">
        Behagligare färger för ögonen.
        </p>
        <b-link href="#/solarized-css">Läs mer...</b-link>
      </b-card>
      <b-card  bg-variant="dark" text-variant="white" title="#0 - git recover">
        <p class="card-text">
        Ett git alias som kan hjälpa dig att hitta tillbaka till borttappade commits.
        </p>
        <b-link href="#/git-recover">Läs mer...</b-link>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogposts'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
.blogposts {
  margin-top: 50px;
  text-align: left;
}
div.card {
margin-bottom: 50px;
}
a {
  color: var(--yellow);
}
a:hover {
  color: var(--orange);
}
</style>
