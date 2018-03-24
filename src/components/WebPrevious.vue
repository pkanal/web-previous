<template>
  <div>
    <fire-text>SUP</fire-text>
  </div>
</template>

<script>
import FireText from './text/FireText'
export default {
  name: 'WebPrevious',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    FireText
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
