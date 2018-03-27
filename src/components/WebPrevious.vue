<template>
  <div>
    <h1>Fire Text</h1>
    <fire-text>FIRE</fire-text>
    <h1>Marquee</h1>
    <marquee behaviour="scroll" delay="3000">SCROLL</marquee>
    <marquee behaviour="bounce" delay="3000">BOUNCE</marquee>
    <h1>Tile Background</h1>
    <tile-background theme="space">
      <div class="tile-bg">SPACE</div>
    </tile-background>
    <tile-background theme="water">
      <div class="tile-bg"><fire-text>WATER</fire-text></div>
    </tile-background>
    <tile-background theme="clouds">
      <div class="tile-bg">CLOUDS</div>
    </tile-background>
    <tile-background theme="marble">
      <div class="tile-bg">MARBLE</div>
    </tile-background>
    <tile-background theme="off-rock">
      <div class="tile-bg">OFF ROCK</div>
    </tile-background>
  </div>
</template>

<script>
import FireText from './text/FireText'
import Marquee from './text/Marquee'
import TileBackground from './image/TileBackground'
export default {
  name: 'WebPrevious',
  data() {
    return {}
  },
  components: {
    FireText,
    Marquee,
    TileBackground
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
.tile-bg {
  height: 500px;
  color: white;
}
</style>
