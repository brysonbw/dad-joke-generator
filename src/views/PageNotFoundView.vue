<template>
  <v-container class="page-not-found text-center">
    <h1>404</h1>
    <p>Page Not Found</p>
    <v-btn @click="$router.push('/')">Back to homepage</v-btn>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style scoped>
.page-not-found {
  margin-top: 340px;
  color: white;
}
</style>
