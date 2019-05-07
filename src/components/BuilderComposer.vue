<template>
  <div class="">
    <h1> {{ getPorfolioItemById(id).id }} - {{ getPorfolioItemById(id).name }}</h1>
    <div v-for="content in getPorfolioItemById(id).content">
      {{ content.id }} <span v-if="content.value ">- {{ content.value }}</span>
    </div>
    <button type="button" name="button" @click="showDropDown = !showDropDown">Add a new question</button>
      <ul v-if="showDropDown" v-for="item in formComponents">
        <li><button type="button" :name="item.component" @click="addToFormById({portfolioId : id, formComponentsId : item.id})">{{ item.name }} </button></li>
      </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  props: ['id'],
  name: "BuilderComposer",
  data() {
    return {
      showDropDown : false
    }
  },
  computed: {
    ...mapGetters([
      'getPorfolioItemById',
      'getFormComponentById'
    ]),
  formComponents () {
    return this.$store.state.formComponents
    }
  },
  methods: {
    ...mapMutations([
      'addToFormById', // map `this.increment()` to `this.$store.commit('increment')`
    ])
  }
}
</script>
<style>
</style>
