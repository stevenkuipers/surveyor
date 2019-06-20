import Vue from "vue";
import Vuex from "vuex";
//  Break up getters, mutations and actions into seperate components
//  All data currently in state is dummy data for testing only
//  import portfolio from server
//  import styles from server
//  import content types from server

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    portfolio: [
      {
        id: "25346746-dbc2-f627-f7a1-81ee0afd22a5",
        name: "First Questionaire",
        theme: 10001,
        content: [
          {
            id: 9002,
            value: "Hello Stranger"
          }
        ]
      },
      {
        id: "f9916984-641e-70a8-2456-c488c4db171d",
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
    getformComponentById(state) {
      return formComponentId =>
        state.formComponents.find(item => formComponentId == item.id);
    },
  },
  mutations: {
    addToFormById(state, { portfolioId, formComponentsId }) {
      // console.log(portfolioId, formComponentsId)
      const portfolioItem = this.state.portfolio.find(
        item => portfolioId == item.id
      );
      portfolioItem.content.push({ id: formComponentsId });
    },
    addItemToPortfolio(state, payload) {
      // add to portfolio
      state.portfolio.push(payload);
    }
  },
  actions: {
    createNewPortfolioItem({ commit }) {
      const guidGenerator = () => {
        const S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1)
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
      };
      // commit new portfolio item to store
      let item = {
        id: guidGenerator(),
        name: "Default Name",
        theme: 10001,
        content: []
      };
      commit("addItemToPortfolio", item);
    }
  }
});
