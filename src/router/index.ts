
import { createRouter, createMemoryHistory } from 'vue-router';
const routes: any = [
  //TODO: login
  //{ path: '/', name: 'home', component: Home, meta: { hideMasterLayout: false } },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

//router.beforeEach((to, from, next) => {
//  const authStore = useAuthStore();
//
//  if (to.meta.requiresAuth && !authStore.token) {
//    next("/login");
//  } else {
//    next();
//  }
//});

export default router;
