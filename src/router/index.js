import { createRouter, createWebHistory } from 'vue-router';
import Introduction from '../components/Introduction.vue';
import Pricing from '../components/Pricing.vue';
import Contact from '../components/Contact.vue';

const routes = [
  { path: '/', component: Introduction },
  { path: '/pricing', component: Pricing },
  { path: '/contact', component: Contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
}); 