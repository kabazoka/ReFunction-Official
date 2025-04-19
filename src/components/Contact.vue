<template>
  <section class="contact-section">
    <div class="container">
      <h2 class="section-title">Contact Us</h2>
      <p class="section-description">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <h3>Email</h3>
            <p><a href="mailto:support@ReFunction.com">support@ReFunction.com</a></p>
          </div>
          <div class="info-item">
            <h3>Phone</h3>
            <p><a href="tel:+18001234567">+1 (800) 123-4567</a></p>
          </div>
          <div class="info-item">
            <h3>Address</h3>
            <p>123 Innovation Way<br>Tech District<br>San Francisco, CA 94105</p>
          </div>
          <div class="social-links">
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Facebook</a>
          </div>
        </div>
        
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group" :class="{ 'error': errors.name }">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              placeholder="Your name"
              @blur="validateName"
            />
            <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
          </div>
          
          <div class="form-group" :class="{ 'error': errors.email }">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              placeholder="Your email address"
              @blur="validateEmail"
            />
            <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
          </div>
          
          <div class="form-group">
            <label for="subject">Subject</label>
            <select id="subject" v-model="formData.subject">
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="sales">Sales</option>
              <option value="partnership">Partnership</option>
            </select>
          </div>
          
          <div class="form-group" :class="{ 'error': errors.message }">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              placeholder="Your message"
              rows="5"
              @blur="validateMessage"
            ></textarea>
            <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
          </div>
          
          <button 
            type="submit" 
            class="btn btn-primary" 
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
          
          <div class="form-status" v-if="formStatus">
            {{ formStatus }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: 'general',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      formStatus: ''
    }
  },
  methods: {
    validateName() {
      if (!this.formData.name.trim()) {
        this.errors.name = 'Name is required';
      } else {
        this.errors.name = '';
      }
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formData.email.trim()) {
        this.errors.email = 'Email is required';
      } else if (!emailRegex.test(this.formData.email)) {
        this.errors.email = 'Please enter a valid email address';
      } else {
        this.errors.email = '';
      }
    },
    validateMessage() {
      if (!this.formData.message.trim()) {
        this.errors.message = 'Message is required';
      } else if (this.formData.message.length < 10) {
        this.errors.message = 'Message must be at least 10 characters';
      } else {
        this.errors.message = '';
      }
    },
    validateForm() {
      this.validateName();
      this.validateEmail();
      this.validateMessage();
      
      return !this.errors.name && !this.errors.email && !this.errors.message;
    },
    async submitForm() {
      if (!this.validateForm()) {
        return;
      }
      
      this.isSubmitting = true;
      this.formStatus = '';
      
      try {
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // In a real app, you would send the form data to your backend
        console.log('Form submitted:', this.formData);
        
        // Reset form after successful submission
        this.formData = {
          name: '',
          email: '',
          subject: 'general',
          message: ''
        };
        
        this.formStatus = 'Thank you! Your message has been sent successfully.';
      } catch (error) {
        this.formStatus = 'An error occurred. Please try again later.';
        console.error('Form submission error:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style scoped>
.contact-section {
  padding: 4rem 2rem;
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
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
}
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
.contact-info {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
}
.info-item {
  margin-bottom: 1.5rem;
}
.info-item h3 {
  font-size: 1.2rem;
  color: #3498db;
  margin-bottom: 0.5rem;
}
.info-item p {
  color: #34495e;
}
.info-item a {
  color: #34495e;
  text-decoration: none;
  transition: color 0.3s ease;
}
.info-item a:hover {
  color: #3498db;
}
.social-links {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}
.social-link {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease;
}
.social-link:hover {
  color: #2980b9;
}
.contact-form {
  width: 100%;
}
.form-group {
  margin-bottom: 1.5rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #34495e;
  font-weight: 500;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #34495e;
  transition: border-color 0.3s ease;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3498db;
}
.form-group.error input,
.form-group.error textarea {
  border-color: #e74c3c;
}
.error-message {
  display: block;
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
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
.btn-primary:hover:not(:disabled) {
  background-color: #2980b9;
}
.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.form-status {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 4px;
  background-color: #d4edda;
  color: #155724;
}
</style> 