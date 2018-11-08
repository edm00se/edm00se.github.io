<template>
  <div v-cloak v-show="loadingComplete" class="about">
    <div class="main">
      <div class="who">
        <a class="user" :href="user.html_url">
          <img class="whoami img-circle" :src="user.avatar_url"
            alt="@edm00se profile pic from GitHub">
          <h1>{{user.name}}</h1>
          <h3>@{{user.login}}</h3>
        </a>
        <p v-html="user.bio_escapified"></p>
      </div>
      <hr class="separator">
      <Links/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
    axios.get(url)
      .then(res => {
        const data = res.data;
        this.user = data;
        this.user.bio_escapified = data.bio.replace(/\n/gim, `<br />`);
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
  .user, .user h1 {
    text-decoration: none;
    color: #2c3e50;
  }
  .user h3 {
    color: #d07922;
  }

  @media (min-width: 769px) {
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
  hr.separator {
    transition: 0.5s;
    animation-name: fade-in;
    animation-fill-mode: both;
    animation-duration: 0.5s;
  }
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
</style>
