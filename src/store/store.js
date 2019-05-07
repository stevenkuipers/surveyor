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
            id: 9001,
            value: "Hello Stranger"
          }
        ]
      },
      {
        id: 2,
        name: "Second Questionaire",
        theme: 10001,
        content: [
          {
            id: 9002,
            value: "Hello Test 2"
          }
        ]
      }
    ],
    formComponents: [
      {
        id: 9001,
        name: "Greeting screen",
        component: "GreetingScreen"
      },
      {
        id: 9002,
        name: "Yes or No question",
        component: "BinaryQuestion"
      },
      {
        id: 9003,
        name: "Rating",
        component: "RatingRange"
      },
      {
        id: 9004,
        name: "Date Picker",
        component: "DatePicker"
      }
    ]
  },
  getters: {
    getPorfolioItemById(state) {
      return portfolioId =>
        state.portfolio.find(item => portfolioId == item.id);
    },
    getFormComponentById(state) {
      return componentById =>
        state.formComponents.filter(item => componentById == item.id);
    }
  },
  mutations: {
    addToFormById(state, { portfolioId, formComponentsId }) {
      const portfolioItem = this.state.portfolio.find(
        item => portfolioId == item.id
      );
      portfolioItem.content.push({ id: formComponentsId });
    }
  },
  actions: {}
});
