<template>
  <section class="pricing-section">
    <div class="container">
      <h2 class="section-title">Pricing Plans</h2>
      <p class="section-description">Choose the plan that fits your business needs</p>
      
      <div class="pricing-cards">
        <div class="pricing-card">
          <div class="card-header">
            <h3>Basic</h3>
            <div class="price">$99<span>/month</span></div>
          </div>
          <div class="card-body">
            <ul class="features-list">
              <li>Standard search speed</li>
              <li>Basic analytics dashboard</li>
              <li>Email support</li>
              <li>API access (100 requests/day)</li>
            </ul>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
        
        <div class="pricing-card popular">
          <div class="popular-badge">Most Popular</div>
          <div class="card-header">
            <h3>Pro</h3>
            <div class="price">$249<span>/month</span></div>
          </div>
          <div class="card-body">
            <ul class="features-list">
              <li>50% faster processing</li>
              <li>Advanced analytics dashboard</li>
              <li>Priority email support</li>
              <li>API access (1000 requests/day)</li>
              <li>Data export capabilities</li>
            </ul>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
        
        <div class="pricing-card">
          <div class="card-header">
            <h3>Enterprise</h3>
            <div class="price">$499<span>/month</span></div>
          </div>
          <div class="card-body">
            <ul class="features-list">
              <li>90% faster processing</li>
              <li>Custom analytics dashboard</li>
              <li>24/7 dedicated support</li>
              <li>Unlimited API access</li>
              <li>Advanced data integration</li>
              <li>Custom reporting</li>
            </ul>
            <button class="btn btn-primary">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-section {
  padding: 4rem 2rem;
  background-color: #f8f9fa;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.section-title {
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1rem;
}
.section-description {
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 3rem;
}
.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.pricing-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  position: relative;
}
.pricing-card:hover {
  transform: translateY(-10px);
}
.card-header {
  padding: 2rem;
  background-color: #3498db;
  color: white;
  text-align: center;
}
.popular {
  border: 3px solid #2ecc71;
}
.popular .card-header {
  background-color: #2ecc71;
}
.popular-badge {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #2ecc71;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border-bottom-left-radius: 8px;
}
.price {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
}
.price span {
  font-size: 1rem;
  font-weight: normal;
}
.card-body {
  padding: 2rem;
}
.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}
.features-list li {
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}
.features-list li::before {
  content: "✓";
  color: #3498db;
  position: absolute;
  left: 0;
}
.popular .features-list li::before {
  color: #2ecc71;
}
.btn {
  display: block;
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}
.btn-primary {
  background-color: #3498db;
  color: white;
}
.popular .btn-primary {
  background-color: #2ecc71;
}
.btn-primary:hover {
  background-color: #2980b9;
}
.popular .btn-primary:hover {
  background-color: #27ae60;
}
</style> 