<template>
  <v-container fill-height class="white--text">
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold mb-10">
          Random Dad Joke Generator
        </h1>
        <!-- Dad Joke Card -->
        <DadJokeCard />
        <!--Generate/Fetch Dad Joke Button -->
        <GenerateButton />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import DadJokeCard from '@/components/DadJokeCard.vue';
import GenerateButton from '@/components/GenerateButton.vue';
export default Vue.extend({
  name: 'HomeView',

  components: { DadJokeCard, GenerateButton },
});
</script>

<style>
html {
  overflow-y: auto;
}
</style>
