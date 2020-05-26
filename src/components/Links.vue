<template>
  <div class="links">
    <div class="link" v-for="link in links" :key="link.href">
      <a class="link-of-links" :href="link.href">
        <h3>{{ link.title }}</h3>
        {{ link.descrip }}
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
          href: 'https://misc.edm00se.codes/',
          descrip: `micro-blog for non-software things`
        },
        // {
        //   title: 'demos',
        //   href: '/demos/',
        //   descrip: `home to one-off demos`
        // },
        {
          title: 'presos',
          href: 'https://github.com/edm00se/presentations/',
          descrip: `a home for my speaking materials`
        },
        {
          title: 'awesome board games',
          href: 'https://awesomeboard.games/',
          descrip: `an awesome list for board games`
        },
        {
          title: 'presto-preso',
          href: 'https://github.com/edm00se/generator-presto-preso/',
          descrip: `a yeoman generator for smart presentation repos`
        },
        {
          title: 'ama',
          href: 'https://github.com/edm00se/ama/',
          descrip: `ask me (nearly) anything`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  align-self: auto;
  transition: 0.5s;
  right: 0;
}
a.link-of-links {
  color: black;
  position: relative;
}
a.link-of-links:hover {
  color: #d07922;
}
a.link-of-links:before {
  content: '';
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
  animation-name: fade-in;
  animation-fill-mode: both;
  animation-duration: 0.5s;
}
.link-of-links {
  display: block;
  text-decoration: none;
}

$animationDelay: 1;
@for $i from 1 through 15 {
  .link:nth-of-type(#{$i}) {
    animation-delay: #{0.3+ ($i)/30}s;
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
