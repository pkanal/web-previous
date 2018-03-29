<template>
  <div>
    <h1>Fire Text</h1>
    <fire-text>FIRE</fire-text>
    <h1>Marquee</h1>
    <div class="marquee-example">
      <marquee behaviour="scroll" delay="3000"><h1>SCROLL</h1></marquee>
      <marquee behaviour="bounce" delay="3000"><h1>BOUNCE</h1></marquee>
    </div>
    <h1>Blink</h1>
    <blink delay="200">Here's some blinking text!!!!1!</blink>
    <blink delay="2000"><fire-text>YES YOU CAN HAZ BLINKING FIRE</fire-text></blink>
    <h1>Tile Background</h1>
    <tile-background theme="space">
      <div class="tile-bg"><marquee behaviour="bounce" delay="2000"><fire-text theme="light">SPACE</fire-text></marquee></div>
    </tile-background>
    <tile-background theme="water">
      <div class="tile-bg"><fire-text>WATER</fire-text></div>
    </tile-background>
    <tile-background theme="clouds">
      <div class="tile-bg">
        <blink delay="300">CLOUDS</blink>
        <body-text theme="wise">Hi hello this is some v compelling reading</body-text>
      </div>
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
import Blink from './text/Blink'
import TileBackground from './image/TileBackground'
import BodyText from './text/BodyText'
export default {
  name: 'WebPrevious',
  data() {
    return {}
  },
  components: {
    FireText,
    Marquee,
    Blink,
    TileBackground,
    BodyText
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
.marquee-example {
  width: 50%;
  margin: auto;
}
</style>
