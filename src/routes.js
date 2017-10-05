import homePage from './components/home.vue';
import literatur from './components/literatur.vue';
import page from './components/page.vue';
import items from './components/items.vue';

export default [
  {path: '/', component: homePage},
  {path: '/literatur', component: literatur},
  {path: '/page/:id', component: page},
  {path: '/items', component: items}
]
