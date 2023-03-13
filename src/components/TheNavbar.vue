<template>
  <nav>
    <v-app-bar dark app>
      <v-toolbar-title>Dad Joke Generator</v-toolbar-title>
      <v-spacer></v-spacer>

      <a
        style="text-decoration: none"
        target="_blank"
        href="https://github.com/brysonbw/dad-joke-generator"
        ><v-icon large>mdi-github</v-icon></a
      >
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped></style>
