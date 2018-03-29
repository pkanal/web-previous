<template>
  <div class="tile-background" v-bind:style="{ backgroundImage: backgroundImage }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TileBackground',
  props: ['theme'],
  data () {
    return {
      THEMES: {
        SPACE: 'space',
        CLOUDS: 'clouds',
        OFF_ROCK: 'off-rock',
        WATER: 'water',
        MARBLE: 'marble'
      }
    }
  },
  computed: {
    image () {
      const backgroundImages = {
        [this.THEMES.SPACE]: 'space.gif',
        [this.THEMES.CLOUDS]: 'clouds.jpg',
        [this.THEMES.OFF_ROCK]: 'off-rock.gif',
        [this.THEMES.WATER]: 'water.png',
        [this.THEMES.MARBLE]: 'marble-light.gif'
      }
      // need to use require here to make sure the file gets processed by webpack
      return require(`../../assets/${backgroundImages[this.theme]}`)
    },
    backgroundImage () {
      return `url('${this.image}')`
    }
  }
}
</script>

<style>
.tile-background {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/space.gif');
  background-repeat: repeat;
}
</style>
