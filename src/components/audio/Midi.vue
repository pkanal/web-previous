<template></template>

<script>
export default {
  name: 'Midi',
  props: {
    theme: {
      type: String,
      default: 'fantasy'
    }
  },
  data() {
    return {
      THEMES: {
        COOL: 'cool',
        FANTASY: 'fantasy',
        PROFESSIONAL: 'professional',
        FUN: 'fun',
        WISE: 'wise'
      }
    }
  },
  computed: {
    midiFile() {
      const midiFiles = {
        [this.THEMES.COOL]: 'xfiles.mid',
        [this.THEMES.FANTASY]: 'sarias-song.mid',
        [this.THEMES.PROFESSIONAL]: 'starwars.mid',
        [this.THEMES.FUN]: 'sonic.mid',
        [this.THEMES.WISE]: 'imagine.mid'
      }

      return require(`../../assets/${midiFiles[this.theme]}`)
    }
  },
  //FIXME: load script in this component instead of index.html
  mounted() {
    MIDIjs.play(this.midiFile) // eslint-disable-line no-undef
  },
  destroyed() {
    MIDIjs.stop() // eslint-disable-line no-undef
  }
}
</script>
