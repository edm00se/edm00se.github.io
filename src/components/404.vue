<template>
  <div>
    <h1>404: OMG!</h1>
    <p>
        The tumbeasts are to be blamed, as your destination couldn't be found.
    </p>
    <br/>
    <figure>
      <img class="tumbeast" alt="thar be tumbeasts" src="../assets/omg404.svg">
      <figcaption><a href="https://theoatmeal.com/comics/state_web_summer#tumblr">Tumbeasts provided</a>, courtesy of <a href="https://twitter.com/oatmeal">@Oatmeal</a>.</figcaption>
    </figure>
    <a href="/">Back to home</a>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  title: '404: OMG!'
}
</script>

<style>
body {
  text-align: center;
}
img.tumbeast {
  max-width: 100%;
  max-height: 40rem;
}
</style>