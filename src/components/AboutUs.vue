<template>
    <div class="about-us" id="aboutuspage">
      <!-- Team members section -->
      <div class="team-members">
        <div v-for="(member, index) in teamMembers" :key="index" class="member">
          <div class="member-image">
            <img :src="member.image" :alt="member.name">
          </div>
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p>{{ member.position }}</p>
            <div class="spoken-word">
              <p v-if="!member.showAll">{{ member.spokenWord.substring(0, 100) }}</p>
              <p v-else>{{ member.spokenWord }}</p>
              <button v-if="!member.showAll" @click="toggleShowAll(member)">Read More</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Contact info section -->
      <div class="contact-info">
        <h2>Contact Information</h2>
        <p>Email: example@example.com</p>
        <p>Phone: +1234567890</p>
        <a href="https://moest.gov.np/" target="_blank">Visit our website</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teamMembers: [
          { name: 'John Doe', position: 'CEO', image: require('../assets/student.jpg'), spokenWord:"At Edutain Nepal, we're not just educators we're creators of joy, champions of curiosity, and architects of a brighter future. Our Fun Pathshaala isn't just a place of learning; it's a sanctuary of imagination, where every child's potential is nurtured and celebrated. With boundless enthusiasm and unwavering dedication, we're shaping tomorrow's leaders, thinkers, and dreamers.Our mission is simple yet profound: to ignite a lifelong love for learning and discovery in every child who walks through our doors. We believe that education isn't just about textbooks and exams; it's about fostering creativity, building resilience, and instilling a passion for exploration." },
          { name: 'Jane Smith', position: 'CTO', image: require('../assets/student-a.png'), spokenWord: "At Edutain Nepal, we're not just educators; we're pioneers of educational technology, shaping the future of learning one digital innovation at a time. As the Chief Technology Officer, I'm proud to lead our team in harnessing the power of technology to revolutionize education and create an immersive, interactive learning environment.In today's digital age, technology is more than just a tool; it's a gateway to limitless possibilities. From virtual classrooms to gamified learning platforms, we're leveraging cutting-edge technology to engage students, inspire creativity, and unlock their full potential. With every line of code we write and every algorithm we deploy, we're empowering educators and students alike to thrive in the digital era" },
          { name: 'Michael Johnson', position: 'Designer', image: require('../assets/student-anim.jpg'), spokenWord: "At Edutain Nepal, we believe that design isn't just about aesthetics; it's about storytelling, immersion, and creating memorable experiences that ignite curiosity and inspire learning. As the Designer, I'm passionate about harnessing the power of design to transform education and bring joy to the hearts of every student who walks through our doors.In a world where attention spans are fleeting and distractions abound, design plays a crucial role in capturing and holding the imagination. From whimsical illustrations to interactive interfaces, we're crafting immersive learning environments that spark creativity, foster exploration, and make every lesson an adventure." }
        ]
      };
    },
    methods: {
      toggleShowAll(member) {
        member.showAll = true;
      }
    }
  };
  </script>
  
  <style scoped>
  .about-us {
    text-align: center;
  }
  
  .team-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 50px;
  }
  
  .member {
    flex: 0 1 calc(30% - 20px);
    margin: 0 10px;
    margin-bottom: 20px;
  }
  
  .member-image img {
    max-width: 150px; /* Adjust as needed */
    max-height: 150px; /* Adjust as needed */
    border-radius: 50%;
    object-fit: cover;
  }
  
  .member-info {
    margin-top: 10px;
  }
  
  .contact-info {
    background-color: #efd52d;
    padding: 20px;
    border-radius: 10px;
  }
  
  .spoken-word {
    margin-top: 20px;
    text-align: left;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover{
    background-color: #efd52d;
  }
  </style>
  
  

