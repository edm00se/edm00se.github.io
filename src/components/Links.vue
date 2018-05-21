<template>
  <div class="links">
    <div class="link" v-for="link in links" :key="link.href">
      <a class="link-of-links" :href="link.href">
        <h3>{{link.title}}</h3>
        {{link.descrip}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'blog',
          href: 'https://edm00se.io/',
          descrip: `chronicles in software development`
        },
        {
          title: 'misc',
          href: '/misc/',
          descrip: `micro-blog for non-software things`
        }
      ]
    };
  }
};
</script>

<style>
a.link-of-links {
  color: black;
  position: relative;
}
a.link-of-links:hover {
  color: #d07922;
}
a.link-of-links:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #d07922;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
a.link-of-links:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
.link {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.link-of-links {
  display: block;
  text-decoration: none;
}
@media (min-width: 40rem) {
  .links {
    display: flex;
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>
