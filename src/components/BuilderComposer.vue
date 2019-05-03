<template>
  <div class="">
    <h1>builder composer {{ id }}</h1>
    <ul>
      <li>Hier moeten alle reeds geselecteerde form onderdelen geshowd worden</li>
    </ul>
    <button type="button" name="button" @click="showDropDown = !showDropDown">Add a new question</button>
      <p v-if="showDropDown">Drop down should be shown</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: "BuilderComposer",
  data() {
    return {
      showDropDown : false
    }
  }
};
</script>
<style>
</style>
