<template>
  <div class="gitRecover container">
    <div class="col-md-auto">
      <b-card  bg-variant="dark" text-variant="white" title="#0 - git recover">
        <p class="card-text">
          Om man gör bort sig i git kan det vara smidigt att se vart i trädet commits ligger, som inte längre är kopplade till branches.
        </p>
        <pre>
git config -e --global

...
[alias]
        recover=!"git log --graph --decorate $(git rev-list --reflog)"
...
</pre>
        <p>exempelvis, om du har ett träd som ser ut såhär:</p>
        <pre>
$ git log --graph

* 7da0d0c - Sat, 15 Dec 2018 00:12:45 +0100 (HEAD -> master)
|           commit om master
| * d8eaaa6 - Sat, 15 Dec 2018 00:11:51 +0100 (feature/test)
| |           important change 2
| * d2f0408 - Sat, 15 Dec 2018 00:11:18 +0100
|/            important change 1
* 9e07d5a - Sat, 15 Dec 2018 00:10:08 +0100
            important changes
        </pre>
        <p>Om jag nu skulle rebase'a min 'feature/test' på 'master' och då inser jag att något gått snett.</p>
        <p>En vanlig log hade i detta fall visat:</p>
        <pre>
$ git log --graph

* 3e64c66 -Sat, Dec 15 00:11:18 2018 +0100 (HEAD -> feature/test)
|     interactive rebase - mistakes were made =D
* 7da0d0c - Sat, Dec 15 00:12:45 2018 +0100 (master)
|     commit om master
* 9e07d5a - Sat, Dec 15 00:10:08 2018 +0100
      important changes
        </pre>

        <p>Då är det perfekt att använda 'git recover' för att hitta commits som inte längre är kopplade till branches.</p>

        <pre>
$ git recover

* 3e64c66 - Sat, Dec 15 00:11:18 2018 +0100 (HEAD -> feature/test)
|     interactive rebase - mistakes were made =D
|
* 7da0d0c - Sat, Dec 15 00:12:45 2018 +0100 (master)
|     commit om master
|
| * d8eaaa6 - Sat, Dec 15 00:11:51 2018 +0100
| |     important change 2
| |
| * d2f0408 - Sat, Dec 15 00:11:18 2018 +0100
|/      important change 1
|
* 9e07d5a - Sat, Dec 15 00:10:08 2018 +0100
      important changes
        </pre>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gitRecover'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gitRecover {
  margin-top: 50px;
  text-align: left;
}
</style>
