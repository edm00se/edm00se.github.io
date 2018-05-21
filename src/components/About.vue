<template>
  <div v-cloak v-show="loadingComplete" class="about">
    <div class="main">
      <div class="who">
        <img class="whoami img-circle" :src="user.avatar_url">
        <h1>{{user.name}}</h1>
        <a href="https://github.com/edm00se"><h3>@{{user.login}}</h3></a>
        <p v-html="user.bio_escapified"></p>
      </div>
      <hr>
      <Links/>
    </div>
  </div>
</template>

<script>
import Links from './Links';

export default {
  name: 'About',
  components: {
    Links
  },
  data() {
    return {
      user: {},
      loadingComplete: false
    };
  },
  mounted() {
    const userName = 'edm00se';
    const url = `https://api.github.com/users/${userName}`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.user = json;
        this.user.bio_escapified = json.bio.replace(/\n/gim, `<br />`);
        this.loadingComplete = true;
      })
      .catch(err => console.error(err));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.whoami {
  max-width: 100%;
}
h1,
h2 {
  font-weight: normal;
}
a,
a:visited {
  color: #d07922;
}

@media (min-width: 768px) {
  .main {
    display: flex;
  }
  .main .who, .main .links {
    flex: 1;
    padding-left: 1rem;
    padding-right: 1rem;
    align-self: center;
  }
}
</style>
