<template>
  <img class="wbpv-under-construction" v-bind:src="imgSrc">
</template>

<script>
export default {
  name: 'UnderConstruction',
  props: {
    theme: {
      type: String,
      default: 'fun'
    }
  },
  data () {
    return {
      THEMES: {
        FUN: 'fun', // comic sans
        PROFESSIONAL: 'professional', // times new roman
        COOL: 'cool', // verdana
        FANTASY: 'fantasy' // papyrus
      }
    }
  },
  computed: {
    imgSrc () {
      const images = {
        [this.THEMES.FUN]: 'rainbow.gif',
        [this.THEMES.PROFESSIONAL]: 'wordart.gif',
        [this.THEMES.COOL]: 'metal.gif',
        [this.THEMES.FANTASY]: 'pikachu.gif'
      }

      return require(`../../assets/construction/${images[this.theme]}`)
    }
  }
}
</script>

<style>
  .wbpv-under-construction {
    display: block;
    margin: 2rem auto;
  }
</style>
