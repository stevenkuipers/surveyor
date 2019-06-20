<template>
  <div id="app">
    <v-app>
  <v-toolbar app> 
    <v-btn flat to="/">Workstation</v-btn>
    </v-toolbar>
  <v-content>
    <v-container fluid>
      <h1>Slot of container</h1>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app>
    <h1>Slot of Footer</h1>
  </v-footer>
</v-app>
  </div>
</template>

<style>
  #app {
    font-size: 18px;
    font-family:  Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
