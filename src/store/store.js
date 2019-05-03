import Vue from "vue";
import Vuex from "vuex";

// https://stackoverflow.com/questions/40564071/how-do-i-break-up-my-vuex-file
//  All data currently in state is dummy data for testing only
//  import portfolio from server
//  import styles from server
//  import content types from server

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    portfolio: [
      {
        id: 1,
        name: "First Questionaire",
        theme: 10001,
        content: [
          {
            type: "greeting",
            value: "Hello Stranger"
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {}
});
