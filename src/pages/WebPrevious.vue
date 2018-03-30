<template>
  <div>
    <h1>Fire Text</h1>
    <fire-text>FIRE</fire-text>
    <h1>Marquee</h1>
    <div class="marquee-example">
      <marquee behaviour="scroll" delay="3000"><h1>SCROLL</h1></marquee>
      <marquee behaviour="bounce" delay="3000"><h1>BOUNCE</h1></marquee>
    </div>

    <page-divider theme="rainbow"></page-divider>
    <page-divider theme="butterfly"></page-divider>
    <page-divider theme="fire"></page-divider>
    <page-divider theme="star"></page-divider>
    <page-divider theme="snowflake"></page-divider>
    <h1>Blink</h1>
    <blink delay="200">Here's some blinking text!!!!1!</blink>
    <blink delay="2000"><fire-text>YES YOU CAN HAZ BLINKING FIRE</fire-text></blink>
    <h1>Tile Background</h1>

    <tile-background theme="space">
      <marquee behaviour="bounce" delay="2000"><fire-text theme="light">SPACE</fire-text></marquee>
      <under-construction></under-construction>
    </tile-background>

    <tile-background theme="water">
      <fire-text>WATER</fire-text>
      <under-construction theme="cool"></under-construction>
    </tile-background>

    <tile-background theme="clouds">
      <blink delay="300"><header-text colour="magenta" theme="fantasy">CLOUDS</header-text></blink>
      <body-text theme="fantasy">Hi hello this is some v compelling reading</body-text>
      <under-construction theme="fantasy"></under-construction>
    </tile-background>

    <tile-background theme="marble">
      <div class="tile-bg">MARBLE</div>
      <under-construction theme="professional"></under-construction>
    </tile-background>

    <tile-background theme="off-rock">
      <div class="tile-bg">OFF ROCK</div>
      <under-construction theme="professional"></under-construction>
    </tile-background>

    <frame-container>
      <tile-background theme="water" slot="frame-content">
        <body-text>
          <ul>
            <li>Welcome</li>
            <li>To</li>
            <li>My</li>
            <li>Personal</li>
            <li>Homepage</li>
            <li>!!!!!!</li>
            <li>Please</li>
            <li>Have</li>
            <li>Fun</li>
          </ul>
        </body-text>
      </tile-background>
      <tile-background theme="clouds" slot="main-content">
        <body-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus animi corporis cum deserunt dolor enim, et illo ipsa minus tempora unde vero? Assumenda cupiditate illum nemo quos voluptatem.</body-text>
      </tile-background>
    </frame-container>

    <frame-container direction="right">
      <tile-background theme="space" slot="frame-content">
        <body-text>My menu!</body-text>
      </tile-background>
      <tile-background theme="off-rock" slot="main-content">
        <body-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus animi corporis cum deserunt dolor enim, et illo ipsa minus tempora unde vero? Assumenda cupiditate illum nemo quos voluptatem.</body-text>
        <body-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus animi corporis cum deserunt dolor enim, et illo ipsa minus tempora unde vero? Assumenda cupiditate illum nemo quos voluptatem.</body-text>
      </tile-background>
    </frame-container>
  </div>
</template>

<script>

import FireText from '../components/text/FireText'
import Marquee from '../components/text/Marquee'
import Blink from '../components/text/Blink'
import TileBackground from '../components/image/TileBackground'
import BodyText from '../components/text/BodyText'
import HeaderText from '../components/text/HeaderText'
import PageDivider from '../components/PageDivider'
import FrameContainer from '../components/FrameContainer.vue'
import UnderConstruction from '../components/image/UnderConstruction.vue'

export default {
  name: 'WebPrevious',
  data () {
    return {}
  },
  components: {
    UnderConstruction,
    FrameContainer,
    FireText,
    Marquee,
    Blink,
    TileBackground,
    BodyText,
    HeaderText,
    PageDivider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  box-sizing: border-box;
}
.marquee-example {
  width: 50%;
  margin: auto;
}
</style>
