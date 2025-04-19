# ReFunction Official Website

This Vue.js project provides an official website for ReFunction, showcasing:

- Company Introduction
- AI-Powered Efficiency
- Pricing Plans
- Contact Information

---

## Prerequisites

- Node.js (v14+)
- npm or yarn

---

## 1. Project Initialization

```bash
# Using Vite to scaffold a Vue 3 project
env npm init vite@latest ReFunction-website -- --template vue
cd ReFunction-website
npm install
npm install vue-router@4
```

---

## 2. Folder Structure

```
ReFunction-website/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Introduction.vue
│   │   ├── Pricing.vue
│   │   └── Contact.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
└── README.md
```

---

## 3. main.js

```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');
```

---

## 4. router/index.js

```js
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
```

---

## 5. App.vue

```html
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/pricing">Pricing</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  padding: 1rem;
  background: #f7f7f7;
}
nav a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: #333;
}
</style>
```

---

## 6. Components (src/components)

### Introduction.vue
```html
<template>
  <section>
    <h1>Welcome to ReFunction</h1>
    <p>
      ReFunction delivers efficient carbon coefficient calculations. 
      Our AI-powered database search reduces processing time by up to 90% compared to traditional methods.
    </p>
  </section>
</template>
```

### Pricing.vue
```html
<template>
  <section>
    <h2>Pricing Plans</h2>
    <ul>
      <li>Basic: $99/month — Standard search speed</li>
      <li>Pro: $249/month — 50% faster processing</li>
      <li>Enterprise: $499/month — 90% faster processing + dedicated support</li>
    </ul>
  </section>
</template>
```

### Contact.vue
```html
<template>
  <section>
    <h2>Contact Us</h2>
    <p>Email: support@ReFunction.com</p>
    <p>Phone: +1 (800) 123-4567</p>
    <form>
      <label>Name:<input type="text" /></label>
      <label>Email:<input type="email" /></label>
      <label>Message:<textarea /></label>
      <button type="submit">Send</button>
    </form>
  </section>
</template>
```

---

## 7. Next Steps

1. Style with CSS or a UI framework (e.g., Tailwind, Bootstrap).
2. Implement form handling and backend integration.
3. Deploy to a hosting service (e.g., Netlify, Vercel).
