<template>
  <div>123</div>
  <div>{{ obj.data }}</div>
</template>

<script setup>
import { reactive } from "vue";

const obj = reactive({
  data: "abc",
});
</script>
