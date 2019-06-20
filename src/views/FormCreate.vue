<template>
  <div class="create">
    <builder-composer class="composer" :id="id"></builder-composer>
    <builder-preview class="preview" :id="id"></builder-preview>
  </div>
</template>

<script>
import BuilderComposer from '../components/BuilderComposer'
import BuilderPreview from '../components/BuilderPreview'


export default {
  name: "FormCreate",
  props: ['id'],
  components: {
    BuilderComposer,
    BuilderPreview,
  },
};
</script>

<style media="screen">

/* .create {
  height: 100%;
  display: grid;
  grid-template-columns: 6rem 1fr 1fr;
  grid-template-areas:
    "options composer preview"
}

.options {
  grid-area: options;
}

.composer {
  grid-area: composer;
}

.preview {
  grid-area: preview;
} */

</style>
