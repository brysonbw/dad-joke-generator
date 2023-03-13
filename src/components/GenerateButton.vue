<template>
  <v-btn
    cursor="none"
    :class="{ btnDisabled: error }"
    color="primary"
    @click="fetchJoke"
    >Generate Dad Joke</v-btn
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
export default defineComponent({
  data() {
    return {};
  },
  methods: {
    ...mapActions(['fetchJoke']),
  },
  computed: {
    ...mapState(['error']),
  },
});
</script>

<style>
.btnDisabled {
  cursor: not-allowed;
  pointer-events: none;
}
</style>
