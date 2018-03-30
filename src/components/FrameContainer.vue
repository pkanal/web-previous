<template>
  <section class="wbpv-frame-container" v-bind:class="containerClass">
    <aside class="wbpv-frame" v-bind:class="frameClass" v-bind:style="{ height: pixelHeight }">
      <slot name="frame-content"></slot>
    </aside>
    <div class="wbpv-frame-content"  v-bind:class="contentClass" ref="frameContent">
      <slot name="main-content"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FrameContainer',
  props: {
    direction: {
      type: String,
      default: 'left'
    }
  },
  data () {
    return {
      DIRECTIONS: {
        LEFT: 'left',
        RIGHT: 'right'
      },
      height: 0
    }
  },
  mounted () {
    this.setHeight()
  },
  methods: {
    setHeight () {
      this.height = this.$refs.frameContent.clientHeight
    }
  },
  computed: {
    pixelHeight () {
      return `${this.height}px`
    },
    containerClass () {
      const options = {
        [this.DIRECTIONS.LEFT]: 'wbpv-frame-container-left',
        [this.DIRECTIONS.RIGHT]: 'wbpv-frame-container-right'
      }

      return options[this.direction]
    },
    frameClass () {
      const options = {
        [this.DIRECTIONS.LEFT]: 'wbpv-frame-left',
        [this.DIRECTIONS.RIGHT]: 'wbpv-frame-right'
      }

      return options[this.direction]
    },
    contentClass () {
      const options = {
        [this.DIRECTIONS.LEFT]: 'wbpv-frame-content-left',
        [this.DIRECTIONS.RIGHT]: 'wbpv-frame-content-right'
      }

      return options[this.direction]
    }
  }
}
</script>

<style>
  .wbpv-frame-container {
    display: flex;
    flex-wrap: nowrap;
  }
  .wbpv-frame {
    flex-shrink: 0;
    box-sizing: content-box;
  }

  .wbpv-frame-left, .wbpv-frame-right {
    overflow-y: scroll;
    width: 30%;
    border-image: linear-gradient(to left, #666, #ccc, #666) 0 100%;
  }

  .wbpv-frame-container-left {
    flex-direction: row;
  }

  .wbpv-frame-left {
    border-right: 5px solid;
  }

  .wbpv-frame-container-right {
    flex-direction: row-reverse;
  }
  .wbpv-frame-right {
    border-left: 5px solid;
    right: 0;
  }

</style>
