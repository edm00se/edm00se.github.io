<template>
  <div v-cloak v-show="loadingComplete" class="about">
    <div class="main">
      <div class="who">
        <a class="user" :href="user.html_url">
          <img
            class="whoami img-circle"
            :src="user.avatar_url"
            alt="@edm00se profile pic from GitHub"
          />
          <h1>{{ user.name }}</h1>
        </a>
        <p v-html="user.bio_escapified"></p>
      </div>
      <hr class="separator" />
      <Links :ghUser="user" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Links from './Links.vue';

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
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        this.user = data;
        this.user.bio_escapified = data.bio.replace(/\n/gim, `<br />`);
        this.loadingComplete = true;
      })
      .catch((err) => console.error(err));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.whoami {
  max-width: 50vw;
}
h1,
h2 {
  font-weight: normal;
}
a,
a:visited {
  color: #d07922;
}
.user,
.user h1 {
  text-decoration: none;
  color: #2c3e50;
}

hr.separator {
  transition: 0.5s;
  animation-name: fade-in;
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.social-links {
  display: inline-flex;
  align-items: center;
}
.social-links a {
  text-decoration: none;
}
.social-links > * {
  padding-left: 0.25em;
  padding-right: 0.25em;
}

@media (min-width: 769px) {
  .main {
    display: flex;
  }
  .main .who,
  .main .links {
    flex: 1;
    padding-left: 1rem;
    padding-right: 1rem;
    align-self: center;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
