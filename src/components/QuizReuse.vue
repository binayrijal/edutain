<template>
    <div>
      <div v-if="!quizFinished">
        <h2>{{ currentQuestion.question }}</h2>
        <div v-if="!answerChecked">
          <div v-for="(option, index) in currentQuestion.options" :key="index">
            <input type="radio" :id="'option' + index" :value="index" v-model="selectedOption">
            <label :for="'option' + index">{{ option }}</label>
          </div>
          <button @click="checkAnswer">Check Answer</button>
        </div>
        <div v-else>
          <p>Your answer: {{ currentQuestion.options[selectedOption] }}</p>
          <p v-if="answerFeedback !== null">{{ answerFeedback }}</p>
          <button @click="nextQuestion">Next</button>
        </div>
      </div>
      <div v-else>
        <p>Your Score: {{ totalScore }}/{{ questions.length }}</p>
        <p v-if="totalScore >= 0.7 * questions.length">Great job! You did well!</p>
        <p v-else-if="totalScore >= 0.5 * questions.length">Not bad! You can improve!</p>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    props: ['questions'],
    data() {
      return {
        currentQuestionIndex: 0,
        selectedOption: null,
        score: 0,
        answerFeedback: null,
        answerChecked: false,
      };
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentQuestionIndex];
      },
      totalScore() {
        return this.score;
      },
      quizFinished() {
        return this.currentQuestionIndex === this.questions.length;
      },
    },
    methods: {
      updateScore(score) {
        this.score = score;
      },
      checkAnswer() {
        if (this.selectedOption !== null) {
          if (this.selectedOption === this.currentQuestion.answerIndex) {
            this.score++;
            this.currentQuestion.userAnswerCorrect = true;
            this.answerFeedback = 'Correct!';
          } else {
            this.currentQuestion.userAnswerCorrect = false;
            this.answerFeedback =
              'Wrong. The correct answer is: ' + this.currentQuestion.options[this.currentQuestion.answerIndex];
          }
          this.answerChecked = true;
        } else {
          this.answerFeedback = 'Please select an option';
        }
      },
      nextQuestion() {
        if (this.currentQuestionIndex === this.questions.length - 1) {
          this.answerFeedback = null;
          this.$emit('quiz-completed', this.score);
        } else {
          this.currentQuestionIndex++;
          this.selectedOption = null;
          this.answerFeedback = null;
          this.answerChecked = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  