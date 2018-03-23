<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'FireText',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: impact;
  text-transform: uppercase;
  font-size: 4rem;
  position: relative;
  display: inline-block;
  margin: 0;
  padding-top: 2.5rem;
  margin: 1rem 0;
  color: black; /* TODO: Make customizable */
  -webkit-text-stroke-color: white; /* TODO: Make customizable */
  -webkit-text-stroke-width: 1px;
}

h1:after {
  content: '';
  display: block;
  width: 100%;
  height: 100px;
  background: url('https://image.ibb.co/k1AdvS/fire.gif') repeat-x;
  background-size: contain;
  position: absolute;
  top: 0;
  z-index: -1;
}
</style>
