<template>
  <div class="marquee" v-bind:class="behaviour" v-bind:style="{ animation: animation }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Marquee',
  props: ['behaviour', 'delay'],
  data () {
    return {
      BEHAVIOURS: {
        SCROLL: 'scroll',
        BOUNCE: 'bounce'
      }
    }
  },
  computed: {
    animation () {
      const animations = {
        [this.BEHAVIOURS.SCROLL]: `${this.BEHAVIOURS.SCROLL} ${
          this.delay
        }ms linear infinite`,
        [this.BEHAVIOURS.BOUNCE]: `${this.BEHAVIOURS.BOUNCE} ${
          this.delay
        }ms linear infinite alternate`
      }
      return animations[this.behaviour] || animations[this.BEHAVIOURS.SCROLL]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.marquee {
  overflow: hidden;
  position: relative;
}
.marquee p.scroll {
  position: absolute;
  width: 50%;
  height: 100%;
  margin: 0;
  line-height: 50px;
  text-align: center;
  /* Starting position */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  /* Apply animation to this element */
}
/* Move it (define the animation) */
@-moz-keyframes scroll {
  0% {
    -moz-transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%);
  }
}
@-webkit-keyframes scroll {
  0% {
    -webkit-transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}
@keyframes scroll {
  0% {
    -moz-transform: translateX(100%); /* Browser bug fix */
    -webkit-transform: translateX(100%); /* Browser bug fix */
    transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(-100%); /* Browser bug fix */
    -webkit-transform: translateX(-100%); /* Browser bug fix */
    transform: translateX(-100%);
  }
}

.marquee p.bounce {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 50px;
  text-align: center;
  /* Starting position */
  -moz-transform: translateX(50%);
  -webkit-transform: translateX(50%);
  transform: translateX(50%);
  /* Apply animation to this element */
}
/* Move it (define the animation) */
@-moz-keyframes bounce {
  0% {
    -moz-transform: translateX(50%);
  }
  100% {
    -moz-transform: translateX(-50%);
  }
}
@-webkit-keyframes bounce {
  0% {
    -webkit-transform: translateX(50%);
  }
  100% {
    -webkit-transform: translateX(-50%);
  }
}
@keyframes bounce {
  0% {
    -moz-transform: translateX(50%); /* Browser bug fix */
    -webkit-transform: translateX(50%); /* Browser bug fix */
    transform: translateX(50%);
  }
  100% {
    -moz-transform: translateX(-50%); /* Browser bug fix */
    -webkit-transform: translateX(-50%); /* Browser bug fix */
    transform: translateX(-50%);
  }
}
</style>
