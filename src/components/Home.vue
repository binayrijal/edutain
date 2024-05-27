<template>
  <div>
    <header-com></header-com>
    <section class="section-blue">
      <GreenBox></GreenBox>
      <div class="content">
        <p>Welcome to Edutain Nepal! Start exploring now.</p>
      </div>
      <div class="scroll-indicator">
        <span>↓</span>
        <!-- You can replace this with an SVG or an icon for a better look -->
      </div>
    </section>
    <section class="section-white">
      <div class="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/adLj6kygwds?si=hNQmtCXad6XG66Un"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ovLbCvq7FNA?si=oIGuqdtoOW7ZXRgD"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div class="content">
        <h1>Our Approaches</h1>
        <p>
          Watch and learn more about our exciting educational
          opportunities! Everyone Can Learn with Edutain.
        </p>
      </div>
    </section>
    <!-- <section class="section-white">
        <div class="content">
            <p>Discover our vast range of categories and courses.</p>
        </div>
    </section> -->
    <section class="section-black">
      <div class="content">
        <YellowSectionContent></YellowSectionContent>
      </div>
    </section>
    <section class="section-white">
      <div class="content">
        <div>
          <h1>Introducing:</h1>
          <WhiteSectionContent
            :heading="'Edutain Nepal:A Fun Paathshala'"
            :text="'Explore, Implement and Achieve!!!'"
          ></WhiteSectionContent>
        </div>
      </div>
    </section>
    <hr />
    <section class="section-white">
      <div class="content">
        <h1 class="heading">We Offer:</h1>
        <div class="container">
          <ProgrammedContent
            title="Practical Skill Development"
            description="Practical skill development through hands-on activities, simulations, and real-world projects."
          />
          <ProgrammedContent
            title="Holistic Learning Approach"
            description="Adoption of a holistic learning approach that integrates academic knowledge with practical skills."
          />
          <ProgrammedContent
            title="Technology Integration:"
            description="Integration of technology into educational practices, including the use of digital tools, online platforms, educational apps"
          />
          <ProgrammedContent
            title="Inclusive Education Initiatives"
            description="Commitment to inclusive education initiatives that promote diversity, equity, and accessibility for all learners."
          />
        </div>
      </div>
    </section>
    <hr />
    <section class="section-white">
      <h1>AboutUs</h1>
      <div class="content">
        <AboutUs></AboutUs>
      </div>
    </section>
    <section class="section-blue">
      <div class="content">
        <FooterContent></FooterContent>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderCom from "./HeaderCom.vue";
// import axios from 'axios';
import GreenBox from "./GreenBox.vue";
import YellowSectionContent from "./YellowSectionContent.vue";
import WhiteSectionContent from "./WhiteSectionContent.vue";
import ProgrammedContent from "./ProgrammedContent.vue";
import FooterContent from "./FooterContent.vue";
import AboutUs from "./AboutUs.vue";

export default {
  name: "HomePage",
  components: {
    HeaderCom,
    GreenBox,
    YellowSectionContent,
    WhiteSectionContent,
    ProgrammedContent,
    FooterContent,
    AboutUs,
  },
  data() {
    return {
      name: "", // This will store the user's name fetched from the server
    };
  },
  methods: {
    fetchUserData() {
      const authToken = JSON.parse(localStorage.getItem("user-value"));
      if (!authToken || !authToken.access) {
        this.$router.push({
          name: "signUp",
        });
        return;
      }
      // axios
      //   .get("http://edunp.pythonanywhere.com//api/profile/", {
      //     headers: {
      //       Authorization: `Bearer ${authToken.access}`,
      //     },
      //   })
      //   .then((response) => {
      //     this.name = response.data.name; // Assuming the API returns an object with a 'name' field
      //   })
      //   .catch((error) => {
      //     console.error("Error fetching user data:", error);
      //     this.$router.push({
      //       name: "signUp",
      //     }); // Redirect to login on error (e.g., token expired)
      //   });
    },
  },
  mounted() {
    this.fetchUserData(); // Call fetchUserData when component mounts
  },
};
</script>

<style>
header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  /* Ensures the header is always on top */
}

section {
  /* min-height: 100vh; */
  /* 100% of the viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Centers content vertically and horizontally */
}

.section-blue {
  background-color: #4a90e2;
  color: #efd52d;
  /* Adjusted for better readability */
  position: relative;
  /* Simplified curve */
}

/* .section-white {
    background-color: white;
    color: black;
} */
.content h1,
.content p {
  opacity: 0;
  /* Start with text fully transparent */
  transform: translateX(-50px);
  /* Start from 50px left of its original position */
  animation: slideIn 1s ease-out forwards;
  /* Apply the slide-in animation */
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-100px);
    /* Begin from 100px left of the starting position */
  }

  to {
    opacity: 1;
    transform: translateX(0);
    /* End at the original position */
  }
}

.section-black {
  background-color: #efd52d;
  /* Brighter pink for better visibility */
  color: white;
}

.content {
  padding: 15px;
  text-align: center;
  max-width: 80%;
  /* Optimal line length for readability */
}

.scroll-indicator {
  position: absolute;
  bottom: 20px;
  font-size: 24px;
  animation: bounce 2s infinite;
}
.heading {
  font-size: 2.5rem; /* Extra large font size */
  margin-bottom: 20px; /* Add some space between the heading and the title */
  color: #333; /* Custom color */
  text-transform: uppercase; /* Transform text to uppercase */
  font-weight: bold; /* Make the font bold */
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
}

/* Responsive Adjustments */

@media (max-width: 768px) {
  .content,
  .scroll-indicator {
    padding: 10px;
    font-size: 18px;
  }

  .section {
    padding: 20px;
    min-height: 80vh;
    /* Smaller min-height for smaller devices */
  }

  header {
    position: static;
    /* Optional: makes the header scroll away on smaller screens */
  }
}

@media (max-width: 480px) {
  .content {
    max-width: 90%;
    /* Allow more width on very small screens */
  }

  .section-blue,
  .section-white,
  .section-black {
    padding: 10px;
    clip-path: none;
    /* Disable complex shapes on small devices for better layout */
  }
}

.section-white {
  display: flex;
  flex-direction: column;
  /* Start by stacking items vertically */
  align-items: center;
  justify-content: center;
  background-color: white;
  color: rgb(13, 14, 16);
  padding: 20px;
}

.video-container {
  display: flex;
  flex-wrap: wrap;
  /* Allows items to wrap when there's not enough space */
  justify-content: space-around;
  /* Distributes space evenly around items */
  align-items: center;
  width: 100%;
  /* Full width of the container */
  margin-bottom: 20px;
  /* Space between videos and the text */
}

.video-container iframe {
  width: 48%;
  /* Half width allows for two videos side by side */
  height: 315px;
  margin: 10px;
  /* Ensures there is space between videos if they wrap */
}

.content {
  width: 90%;
  /* A bit less than full width for better readability */
  max-width: 800px;
  /* Ensures the text isn't too wide on larger screens */
  text-align: center;
  transition: transform 1s, opacity 1s;
  /* Smooth transition for responsive changes */
}

@media (max-width: 1024px) {
  .video-container iframe {
    width: 100%;
    /* Full width for smaller devices */
    height: auto;
    /* Maintains aspect ratio */
  }
}

@media (max-width: 768px) {
  .section-white {
    padding: 15px;
  }

  .video-container {
    flex-direction: column;
    /* Stacks iframes vertically */
  }

  .video-container iframe {
    margin-bottom: 15px;
    /* Adds space between stacked videos */
  }

  .content {
    order: 1;
    /* Moves text above the videos */
    font-size: 16px;
    /* Smaller font size for smaller devices */
  }
}


</style>
