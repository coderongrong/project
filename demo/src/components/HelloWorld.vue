<template>
  <h1 class='main_color'>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: () => 'abc'
    }
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
