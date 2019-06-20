<template >
  <v-container fluid>
    <p>{{ title }}</p>
    <v-radio-group v-model="answer" :mandatory="mandatory" row>
      <v-radio :label="labelYes" value="yes">Yes</v-radio>
      <v-radio :label="labelNo" value="no">No</v-radio>
    </v-radio-group>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      title: 'Yes or No',
      answer: '',
      mandatory: false,
      labelYes: 'Yes',
      labelNo: 'No'
    }
  }
}
</script>

<style lang="scss">
</style>
