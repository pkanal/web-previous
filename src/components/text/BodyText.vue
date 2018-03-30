<template>
  <p class="body-text" v-bind:style="{ color: colour, fontFamily: fontFamily}"><slot></slot></p>
</template>

<script>
export default {
  name: 'BodyText',
  props: {
    colour: {
      type: String,
      default: 'yellow'
    },
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
    fontFamily () {
      const fonts = {
        [this.THEMES.FUN]: 'Comic Sans MS, Comic Sans',
        [this.THEMES.PROFESSIONAL]: 'Times New Roman',
        [this.THEMES.COOL]: 'Verdana, Geneva, sans-serif',
        [this.THEMES.FANTASY]: 'Papyrus, fantasy'
      }

      return fonts[this.theme]
    }
  }
}
</script>

<style scoped>
.body-text {
  font-size: 24px;
  font-weight: 700;
}
</style>
