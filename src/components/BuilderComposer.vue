<template>
  <v-app>
    <!-- <v-navigation-drawer app></v-navigation-drawer> -->
    <h1> {{ form.id }} - {{ form.name }}</h1>
    <v-container fluid fill-height>
      <v-layout align-top justify-center>
        <v-flex xs12 md10 lg8 >
          <div v-for="(content, idx) in form.content" :key="idx" class="form-component">
          <component :is="getformComponentById(content.id).component" ></component>
          </div>
          <v-select :items="formComponents" item-text="name" item-value="id" @input=" val => addToFormById({portfolioId : id, formComponentsId : val})"></v-select>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

import BinaryQuestion from './formComponents/BinaryQuestion'
import GreetingScreen from './formComponents/GreetingScreen'
import RatingRange from './formComponents/RatingRange'

import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  props: ['id'],
  components : {
    BinaryQuestion,
    GreetingScreen,
    RatingRange
  },
  name: "BuilderComposer",
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getPorfolioItemById',
      'getformComponentById'
    ]),
    form () {
      return this.getPorfolioItemById(this.id)
    },
  formComponents () {
    return this.$store.state.formComponents
    }
  },
  methods: {
    ...mapMutations([
      'addToFormById'
    ]),
    updateContent(){
    }
  }
}
</script>
<style lang="scss">
.form-component {
  width: 100%;
  display: flex;
  flex-direction: row;

  &__full-width {
    flex: 1 0 100%;
  }
}
</style>
