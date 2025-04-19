<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">ReFunction</router-link>
      </div>
      <nav class="nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/pricing" class="nav-link">Pricing</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </div>
  </header>
  
  <main>
    <router-view />
  </main>
  
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">ReFunction</div>
        <div class="footer-links">
          <router-link to="/">Home</router-link>
          <router-link to="/pricing">Pricing</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="footer-copyright">
          &copy; {{ new Date().getFullYear() }} ReFunction. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header styles */
.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3498db;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #34495e;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #3498db;
}

.nav-link.router-link-active {
  color: #3498db;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background-color: #3498db;
}

/* Main content */
main {
  min-height: calc(100vh - 135px);
}

/* Footer styles */
.footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 2rem 0;
  margin-top: 3rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #3498db;
}

.footer-copyright {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #bdc3c7;
}

@media (max-width: 768px) {
  .header .container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav {
    gap: 1rem;
  }
}
</style>
