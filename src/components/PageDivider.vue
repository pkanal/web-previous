<template>
  <hr v-bind:class="hrClass" class="wbpv-hr" v-bind:style="{ backgroundImage: backgroundImage }">
</template>

<script>
export default {
  name: 'PageDivider',
  props: {
    theme: {
      type: String,
      default: 'rainbow'
    }
  },
  data () {
    return {
      THEMES: {
        RAINBOW: 'rainbow',
        STAR: 'star',
        SNOWFLAKE: 'snowflake',
        BUTTERFLY: 'butterfly',
        FIRE: 'fire'
      }
    }
  },
  computed: {
    hrClass () {
      const options = {
        [this.THEMES.RAINBOW]: 'wbpv-hr-rainbow',
        [this.THEMES.STAR]: 'wbpv-hr-star',
        [this.THEMES.SNOWFLAKE]: 'wbpv-hr-snowflake',
        [this.THEMES.BUTTERFLY]: 'wbpv-hr-butterfly',
        [this.THEMES.FIRE]: 'wbpv-hr-fire'
      }

      return options[this.theme]
    },
    image () {
      const backgroundImages = {
        [this.THEMES.STAR]: 'animated/spinning-star.gif',
        [this.THEMES.SNOWFLAKE]: 'animated/snowflake.gif',
        [this.THEMES.BUTTERFLY]: 'animated/butterfly.gif',
        [this.THEMES.FIRE]: 'animated/fire.gif'
      }
      // need to use require here to make sure the file gets processed by webpack
      return backgroundImages[this.theme] ? require(`../assets/${backgroundImages[this.theme]}`) : null
    },
    backgroundImage () {
      return this.image ? `url('${this.image}')` : ''
    }
  }
}
</script>

<style>
  .wbpv-hr {
    border: 0;
    margin: 2rem 0;
    display: block;
    width: 100%;
    background-repeat: repeat-x;
    background-size: contain;
    background-position: center;
    height: 75px;
  }

  .wbpv-hr-rainbow {
    height: 7px;
    background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  }

  .wbpv-hr-butterfly {
    background-repeat: no-repeat;
    background-width: 400px;
    height: 120px;
  }
</style>
