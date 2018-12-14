<template>
  <div class="solarizedCss container">
    <div class="col-md-auto">
      <b-card  bg-variant="dark" text-variant="white" title="#1 - solarized css">
        <p class="card-text">
          Jag gillar inte att titta på svart text på vit bakgrund hela dagarna.
          Jag väljer 'Dark theme' eller motsvarande när det är ett alternativ, det känns inte lika påfrestande för ögonen.

          Jag har börjat använda färgkoderna från <b-link href="https://ethanschoonover.com/solarized/" target="_blank"">Ethan Schoonover's Solarized colors</b-link> här av samma anledning.
        </p>
<p>Urklipp från CSS</p>
        <pre>
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
        </pre>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'solarizedCss'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.solarizedCss {
  margin-top: 50px;
  text-align: left;
}
a {
  color: var(--yellow);
}
a:hover {
  color: var(--orange);
}
</style>
