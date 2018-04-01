<template>
  <h1 v-bind:style="{ color: color, fontFamily: fontFamily}"><slot></slot></h1>
</template>

<script>
export default {
  name: 'HeaderText',
  props: {
    color: {
      type: String,
      default: 'yellow'
    },
    theme: {
      type: String,
      default: 'fun'
    }
  },
  data() {
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
    fontFamily() {
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
