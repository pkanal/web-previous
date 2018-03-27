<template>
  <div>
    <h1>Fire Text</h1>
    <fire-text>FIRE</fire-text>
    <h1>Marquee</h1>
    <marquee behaviour="scroll" delay="3000">SCROLL</marquee>
    <marquee behaviour="bounce" delay="3000">BOUNCE</marquee>
  </div>
</template>

<script>
import FireText from './text/FireText'
import Marquee from './text/Marquee'
export default {
  name: 'WebPrevious',
  data() {
    return {}
  },
  components: {
    FireText,
    Marquee
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
