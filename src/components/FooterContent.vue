<!-- <template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h2>About Us</h2>
          <p>We are dedicated to providing innovative educational solutions to empower learners.</p>
        </div>
        <div class="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@edutain.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div class="footer-section">
          <h2>Follow Us</h2>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Edutain Nepal. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterContent'
  };
  </script>
  
  <style scoped>
  .footer {
    background-color:rgb(210, 210, 8);;
    color: rgb(0, 110, 255);
    padding: 30px 0;
  }
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-section {
    flex: 1 1 300px; /* Flex-grow, flex-shrink, flex-basis */
    margin-right: 20px;
    margin-bottom: 20px;
  }
  
  .footer-section h2 {
    margin-bottom: 10px;
  }
  
  .social-icons a {
    color: #fff;
    margin-right: 10px;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
  }
  </style>
  
  <style>
  @media (max-width: 768px) {
    .footer-section {
      flex-basis: calc(50% - 20px); /* Two columns on smaller screens */
    }
  }
  @media (max-width: 480px) {
    .footer-section {
      flex-basis: 100%; /* One column on even smaller screens */
    }
  }
  </style> -->

  <template>
    <div class="contact-us-page" id="contactuspage">
      <div class="company-info">
        <h2>Our Company Name</h2>
        <p>This is a brief description of our company.</p>
        <footer>
          <p>Contact: contact@example.com</p>
          <p>Phone: +1234567890</p>
          <!-- Additional footer content -->
        </footer>
      </div>
      <div class="contact-form">
        <h2>Contact Us</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" v-model="formData.message" rows="5" required></textarea>
          </div>
          <button class="button" type="submit">Submit</button>
        </form>
        <div v-if="isSubmitted" class="success-message">
          Thank you for contacting us! We'll get back to you soon.
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        },
        isSubmitted: false
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.formData);
        this.resetForm();
        this.isSubmitted = true;
      },
      resetForm() {
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-us-page {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-image: url('../assets/Emblem_of_Nepal.svg\ \(1\).png');
    background-size: cover;
    background-position: center;
  }
  
  .company-info {
    background-color:   #efd52d;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    color: #2aaaf3;
  }
  
  .contact-form {
    background-color:  #efd52d;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #007bff;
  }
  
  h2 {
    color: #2aaaf3;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .button {
    width: 100%;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .button:hover{
    
    background-color:  #efd52d;
    border: 1px solid white;
  }
  
  .success-message {
    margin-top: 20px;
    padding: 10px;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    color: #155724;
    border-radius: 5px;
  }
  
  @media (min-width: 768px) {
    .contact-us-page {
      flex-direction: row;
      align-items: flex-start;
      background-color: transparent;
    }
  
    .company-info {
      flex: 0 0 40%;
      margin-right: 20px;
    }
  
    .contact-form {
      flex: 0 0 50%;
    }
  }
  </style>
  
  
  
  