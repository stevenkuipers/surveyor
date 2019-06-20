
<template>
  <v-app>
    <h1>BuilderPreview</h1>
    <v-container fluid fill-height>
      <v-layout align-top justify-center>
        <v-flex xs12 md10 lg8 >
          <ul>
           <li>Hier moeten all gerenderde form onderdelen te zien zijn</li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: ['id'],
  name: "BuilderPreview",
};
</script>
<style>
.outline {
  border-left: 1px solid tomato;
}
</style>
