<template>
  <div class="">
    <h1>Welcome back <em>User</em> </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<div class="container">

      <div class="card">
        <h3 class="card--header">New Survey</h3>
        <div class="">
          <router-link class="button" to="/create">Create New</router-link>
        </div>
      </div>

      <div class="card" v-for="item in portfolio">
        <h3 class="card--header" v-if="item.name"> {{ item.name }} </h3>
        <div class="">
          <router-link class="button" :to="{name: 'createWithId', params : { id: item.id} }">Edit</router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "SurveyFolder",
  computed: {
  portfolio () {
    return this.$store.state.portfolio
  }
}
};
</script>
<style lang="scss">

.container {
  display: flex;
  justify-content: space-evenly;
}

.card {
  display: inline-block;
  flex-basis: 12rem;
  background-color: rgba(tomato, .4);

  &__header {
    font-weight: 600;
    text-align: center;
  }
}

.button {
  padding : 20px 0;
  display: block;
}

</style>
