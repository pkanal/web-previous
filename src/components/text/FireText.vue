<template>
  <h1 v-bind:class="{ light: lightTheme, dark: darkTheme }">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'FireText',
  props: ['theme'],
  data() {
    return {}
  },
  computed: {
    lightTheme: () => this.theme === 'light',
    darkTheme: () => this.theme !== 'light'
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
  padding-top: 0.66em;
  -webkit-text-stroke-width: 1px;
  z-index: 0;
}

h1:after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: url('../../assets/fire.gif') repeat-x top;
  background-size: 2.25em;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.dark {
  color: black;
  -webkit-text-stroke-color: white;
}
.light {
  color: white;
  -webkit-text-stroke-color: black;
}
</style>
