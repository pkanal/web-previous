<template>
  <div class="blink" v-bind:style="{ animation: animation }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Blink',
  props: ['delay'],
  data () {
    return {}
  },
  computed: {
    animation () {
      return `blink ${this.delay}ms linear infinite`
    }
  }
}
</script>

<style>
@-webkit-keyframes blink {
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
@keyframes blink {
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
</style>
