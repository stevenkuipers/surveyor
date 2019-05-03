<template>
  <div class="outline">
    <h1>BuilderPreview</h1>
    <ul>
      <li>Hier moeten all gerenderde form onderdelen te zien zijn</li>
    </ul>
  </div>
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
