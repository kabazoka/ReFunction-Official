<template>
  <section class="intro-section">
    <div class="container">
      <h1 class="title">Welcome to ReFunction</h1>
      <p class="description">
        ReFunction delivers efficient carbon coefficient calculations. 
        Our AI-powered database search reduces processing time by up to 90% compared to traditional methods.
      </p>
      <div class="features">
        <div class="feature-card">
          <h3>Efficient Calculations</h3>
          <p>Our proprietary algorithms ensure accuracy while saving time and resources.</p>
        </div>
        <div class="feature-card">
          <h3>Advanced AI</h3>
          <p>State-of-the-art artificial intelligence powers our database searching capabilities.</p>
        </div>
        <div class="feature-card">
          <h3>Cost Effective</h3>
          <p>Reduce operational costs while improving environmental compliance reporting.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-section {
  padding: 4rem 2rem;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}
.description {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #34495e;
  max-width: 800px;
}
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}
.feature-card {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
.feature-card h3 {
  color: #3498db;
  margin-bottom: 0.75rem;
}
</style> 