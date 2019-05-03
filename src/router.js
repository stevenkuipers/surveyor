import Vue from "vue";
import Router from "vue-router";
import Workspace from "./views/Workspace.vue";
import FormCreate from "./views/FormCreate.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "workspace",
      component: Workspace
    },
    {
      path: "/create",
      name: "create",
      component: FormCreate
    },
    {
      path: "/create/:id",
      name: "createWithId",
      component: FormCreate,
      props: true
    }
  ]
});
