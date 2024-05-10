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
  import HeaderCom from './HeaderCom.vue'
  
  export default {
    components: {
      QuizReuse,
      HeaderCom
    },
    data() {
      return {
        questions: [
          
          {
            question: "What is the value of pi (π) approximately?",
            options: ["3.14", "2.71", "1.618", "1.414"],
            answerIndex: 0,
            userAnswerCorrect: null
          },
          {
            question: "What is the principle of conservation of momentum?",
            options: [ "Momentum is always increasing in a closed system", "Momentum can only be transferred, not conserved", "Momentum is constant at all times","The total momentum of a closed system remains constant if no external forces act on it",],
            answerIndex: 3,
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