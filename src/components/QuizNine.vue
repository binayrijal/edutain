<template>
    <HeaderCom></HeaderCom>
    <div>
      <h1>Quiz App</h1>
      <QuizReuse :questions="questions" @quiz-completed="handleQuizCompleted"></QuizReuse>
      <div v-if="quizCompleted">
        <h2>Quiz Completed!</h2>
        <p>Your Score: {{ totalScore }}/{{ questions.length }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import QuizReuse from './QuizReuse.vue';
  import HeaderCom from './HeaderCom.vue';
  
  export default {
    components: {
      QuizReuse,
      HeaderCom
    },
    data() {
      return {
        questions: [
          
                        {
                            question: "What is the name of the phenomenon where the Moon partially or completely covers the Sun?",
                            options: ["Solar eclipse", "Lunar eclipse", "Halley's comet", "Asteroid belt"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the name of the point in the sky directly above an observer?",
                            options: ["Zenith", "Nadir", "Meridian", "Horizon"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the name of the giant cloud of gas and dust from which stars and planets are formed?",
                            options: ["Nebula", "Supernova", "Pulsar", "Quasar"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the name of the red planet in our solar system?",
                            options: ["Mars", "Jupiter", "Venus", "Saturn"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the name of the largest moon of Jupiter?",
                            options: ["Ganymede", "Europa", "Io", "Callisto"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the name of the effect where an object's wavelength is stretched as it moves away from an observer?",
                            options: ["Redshift", "Blueshift", "Doppler effect", "Hubble's law"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the name of the phenomenon where two celestial bodies appear close together in the sky?",
                            options: ["Conjunction", "Occultation", "Transit", "Eclipse"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the name of the region in space where the gravitational pull is so strong that nothing, not even light, can escape?",
                            options: ["Black hole", "Quasar", "Pulsar", "Neutron star"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the name of the effect where light is bent due to the presence of a massive object?",
                            options: ["Gravitational lensing", "Refraction", "Reflection", "Diffraction"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the name of the largest constellation in the night sky?",
                            options: ["Hydra", "Ursa Major", "Orion", "Virgo"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the SI unit of force?",
                            options: ["Newton", "Joule", "Watt", "Volt"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the acceleration due to gravity on Earth?",
                            options: ["9.8 m/s²", "6.2 m/s²", "12.5 m/s²", "5.3 m/s²"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the formula to calculate kinetic energy?",
                            options: ["1/2 * mass * velocity²", "mass * gravity * height", "mass * velocity", "mass * acceleration"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the law of conservation of energy?",
                            options: ["Energy cannot be created or destroyed, only transformed", "Energy is always increasing in a closed system", "Energy can only be destroyed, not created", "Energy is constant at all times"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the formula for calculating work done?",
                            options: ["Force * Distance * Cos(θ)", "Mass * Velocity", "Force * Velocity", "Mass * Gravity * Height"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the unit of electric current?",
                            options: ["Ampere", "Ohm", "Volt", "Watt"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        
          {
            question: "What is the value of pi (π) approximately?",
            options: ["3.14", "2.71", "1.618", "1.414"],
            answerIndex: 0,
            userAnswerCorrect: null
          },
          {
                            question: "What is a constellation?",
                            options: ["A group of stars forming a pattern", "A type of galaxy", "A planet and its moons", "A cluster of asteroids"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the process by which a star converts hydrogen into helium?",
                            options: ["Fusion", "Fission", "Convection", "Radiation"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the name of the galaxy that contains our solar system?",
                            options: ["Milky Way", "Andromeda", "Triangulum", "Orion"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the name of the phenomenon where light bends as it passes through a lens?",
                            options: ["Refraction", "Reflection", "Dispersion", "Diffraction"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the name of the imaginary line around which the Earth rotates?",
                            options: ["Axis", "Equator", "Meridian", "Tropic of Cancer"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                        {
                            question: "What is the study of celestial objects such as stars, planets, and galaxies called?",
                            options: ["Astronomy", "Geology", "Botany", "Meteorology"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is Ohm's Law?",
                            options: ["V = IR", "P = IV", "V = I²R", "P = I²R"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the phenomenon where light changes direction as it passes from one medium to another?",
                            options: ["Refraction", "Reflection", "Diffraction", "Dispersion"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the unit of electric charge?",
                            options: ["Coulomb", "Newton", "Joule", "Watt"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the formula to calculate power?",
                            options: ["Work / Time", "Force * Distance", "Force * Velocity", "Voltage * Current"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the principle of buoyancy?",
                            options: ["An object will float if it displaces an amount of water equal to its weight", "An object will sink if it displaces an amount of water equal to its weight", "An object will float if it is lighter than the water it displaces", "An object will sink if it is denser than the water it displaces"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the formula for calculating pressure?",
                            options: ["Force / Area", "Mass * Gravity", "Work / Time", "Density * Volume"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the principle of conservation of momentum?",
                            options: ["The total momentum of a closed system remains constant if no external forces act on it", "Momentum is always increasing in a closed system", "Momentum can only be transferred, not conserved", "Momentum is constant at all times"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the formula for calculating force?",
                            options: ["Mass * Acceleration", "Mass * Velocity", "Work / Time", "Density * Volume"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the SI unit of power?",
                            options: ["Watt", "Joule", "Ampere", "Ohm"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the law of reflection?",
                            options: ["The angle of incidence is equal to the angle of reflection", "The angle of incidence is greater than the angle of reflection", "The angle of incidence is less than the angle of reflection", "Reflection occurs only in one direction"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the unit of potential difference?",
                            options: ["Volt", "Ampere", "Ohm", "Watt"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the formula for calculating distance?",
                            options: ["Speed * Time", "Work / Time", "Force / Mass", "Power / Voltage"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the principle of electromagnetic induction?",
                            options: ["A changing magnetic field induces an electromotive force", "A static magnetic field induces an electromotive force", "A changing electric field induces a magnetic force", "An electric current induces a magnetic field"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        },
                         {
                            question: "What is the formula for calculating acceleration?",
                            options: ["Change in velocity / Time taken", "Force * Distance", "Work / Time", "Density * Volume"],
                            answerIndex: 0,
                            userAnswerCorrect: null
                        }
          // Add more questions here
        ],
        totalScore: 0,
        quizCompleted: false,
      };
    },
    methods: {
      handleQuizCompleted(score) {
        this.totalScore = score;
        this.quizCompleted = true;
      },
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>