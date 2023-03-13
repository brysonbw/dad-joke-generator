<template>
  <v-card dark>
    <h1 v-show="joke" class="mb-10 pa-3 font-weight-regular">
      {{ joke }}
    </h1>
    <h1 v-show="error" class="mb-10 pa-3 red--text">{{ error }}</h1>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  data() {
    return {};
  },
  computed: {
    ...mapState(['joke', 'error']),
  },
});
</script>
