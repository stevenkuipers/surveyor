<template>
  <div class="create">
    <builder-options class="options" :id="id"></builder-options>
    <builder-composer class="composer" :id="id"></builder-composer>
    <builder-preview class="preview" :id="id"></builder-preview>
  </div>
</template>

<script>
import BuilderOptions from '../components/BuilderOptions'
import BuilderComposer from '../components/BuilderComposer'
import BuilderPreview from '../components/BuilderPreview'


export default {
  name: "FormCreate",
  props: ['id'],
  components: {
    BuilderOptions,
    BuilderComposer,
    BuilderPreview,
  },
};
</script>

<style media="screen">

.create {
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
}

@media screen and (max-width: 1000px) {
  .create {
    height: 100%;
    display: grid;
    grid-template-rows: 4rem 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "options "
      "composer"
  }

  .preview {
    display: none;
  }
}

</style>
