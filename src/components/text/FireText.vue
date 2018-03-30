<template>
  <h1 class="wbpv-fire-text" v-bind:class="theme">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'FireText',
  props: {
    theme: {
      type: String,
      default: 'dark'
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
.wbpv-fire-text {
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

.wbpv-fire-text:after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: url('../../assets/animated/fire.gif') top;
  background-repeat: repeat-x; /* TODO: change to round */
  background-size: 2.25em;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.wbpv-fire-text.dark {
  color: black;
  -webkit-text-stroke-color: white;
}
.wbpv-fire-text.light {
  color: white;
  -webkit-text-stroke-color: black;
}
</style>
