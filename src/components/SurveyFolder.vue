<template>
  <div class="">
    <h1>Welcome back <em>User</em> </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<div class="container">
      <v-container fill-height fluid grid-list-lg>
        <v-layout fill-height row wrap justify-space-between>
        <!-- We have one card to add new items  -->
          <v-flex xs12 sm6 md4 lg3 align-end flexbox mb-4>
            <v-card >
              <v-img
                class="white--text"
                height="200px"
                src="https://source.unsplash.com/46juD4zY1XA/750x200"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height row>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Create a new Form</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div>
                  <span>Info about </span><br>
                  <span>This particular from</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="green" @click="createNewPortfolioItem()">Test</v-btn>
                <v-btn flat color="green" to="/create">Create New</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

        <!--Render other card of previously created items -->
        <!-- Add pagination to this render later -->
          <v-flex v-for="item in portfolio" v-bind:key="item.id" xs12 sm6 md4 lg3 align-end flexbox mb-4>     
          <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://source.unsplash.com/46juD4zY1XA/750x200"
          >
            <v-container fill-height fluid>
              <v-layout fill-height row>
                <v-flex xs12 align-end flexbox>
                  <span class="headline" v-if="item.name"> {{ item.name }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span>Info about </span><br>
              <span>This particular from</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange" :to="{name: 'createWithId', params : { id: item.id} }">Edit</v-btn>
          </v-card-actions>
        </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "SurveyFolder",
  methods: {
    ...mapActions([
      'createNewPortfolioItem', // map `this.createNewPortfolioItem()` to `this.$store.dispatch('createNewPortfolioItem')`
    ])
  },
  computed: {
  portfolio () {
    return this.$store.state.portfolio
  }
}
};
</script>
