<template>
  <div class="container">
    <div class="content">
      <h1 class="heading">Random Guessing Number</h1>
      <div class="guess-section">
        <label for="guessInput">Enter your guess (between 1 and 15):</label>
        <input type="number" id="guessInput" v-model.number="userGuess" class="guess-input">
        <button @click="checkGuess" class="guess-button">Check Guess</button>
        <p class="feedback">{{ feedback }}</p>
      </div>
      <div v-if="gameOver">
        <p class="congratulations">Congratulations! You guessed the number {{ targetNumber }} in {{ attempts }} attempts.</p>
        <button @click="restartGame" class="play-again">Play Again</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetNumber: null,
      userGuess: null,
      feedback: '',
      attempts: 0,
      gameOver: false
    };
  },
  methods: {
    generateTargetNumber() {
      this.targetNumber = Math.floor(Math.random() * 15) + 1; // Generate a random number between 1 and 100
    },
    checkGuess() {
      this.attempts++;
      if (this.userGuess === this.targetNumber) {
        this.feedback = 'Congratulations! You guessed the correct number!';
        this.gameOver = true;
      } else if (this.userGuess < this.targetNumber) {
        this.feedback = 'Too low! Try again.';
      } else {
        this.feedback = 'Too high! Try again.';
      }
    },
    restartGame() {
      this.userGuess = null;
      this.feedback = '';
      this.attempts = 0;
      this.gameOver = false;
      this.generateTargetNumber();
    }
  },
  mounted() {
    this.generateTargetNumber(); // Generate the target number when the component is mounted
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -100px;
}

.content {
  text-align: center;
}

.heading {
  margin-top: 20px;
  margin-bottom: 100px;
}

.guess-section {
  margin-bottom: 20px;
}

.guess-input {
  padding: 5px;
  margin-right: 10px;
}

.guess-button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.feedback {
  margin-top: 10px;
  font-weight: bold;
}

.congratulations {
  font-weight: bold;
  color: green;
}

.play-again {
  padding: 5px 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>




