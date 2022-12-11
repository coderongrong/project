<template>
  <div>123</div>
  <div>{{ obj.data }}</div>
  <HelloWorld />
  <Demo />
</template>

<script setup>
import { reactive } from "vue";
// import HelloWorld from './components/HelloWorld.vue'
const obj = reactive({
  data: "abc",
});

const a = 11
var c = 22
// git updata
var b = 10
// git config --global pull.rebase true
</script>
