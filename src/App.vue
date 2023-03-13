<template>
  <v-app>
    <!-- The Navbar -->
    <TheNavbar />
    <!-- Routes -->
    <v-main class="black">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TheNavbar from '@/components/TheNavbar.vue';

export default Vue.extend({
  components: { TheNavbar },
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
