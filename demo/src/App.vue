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
</script>
