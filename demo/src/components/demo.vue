<template>
  <h1 class='main_color'>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: () => 'demo'
    }
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
</style>
