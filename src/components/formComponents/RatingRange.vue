<template >
  <v-container fluid>
    <p>{{ title }}</p>
    <v-rating :length="length" :hover="hover" :x-large="true"></v-rating>
  </v-container>
</template>
<script>

// Check docs for other icons https://vuetifyjs.com/en/components/ratings#ratings

export default {
  data () {
    return {
      title: 'Give me a rating',
      length: 5,
      hover: true
    }
  }
}
</script>

<style lang="scss">
</style>
