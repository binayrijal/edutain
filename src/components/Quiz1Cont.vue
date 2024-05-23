<template>
    <div class="quiz-container">
      <h1>Quiz Time!</h1>
      <QuizReuse :questions="questions" @quiz-completed="handleQuizCompleted"></QuizReuse>
      <div v-if="quizCompleted" class="quiz-completed">
        <h2>Quiz Completed!</h2>
        <p>Your Score: {{ totalScore }}/{{ questions.length }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import QuizReuse from './QuizReuse.vue';
  
  export default {
    components: {
      QuizReuse,
    },
    data() {
      return {
        questions: [
          {
            question: "When was the unification of Nepal under King Prithvi Narayan Shah completed?",
            options: ["1768", "1786", "1814", "1846"],
            answerIndex: 0,
            userAnswerCorrect: null,
          },
          {
            question: "Who was the first king of a unified Nepal?",
            options: ["Prithvi Narayan Shah", "Bahadur Shah", "Rana Bahadur Shah", "Gorkha Shah"],
            answerIndex: 0,
            userAnswerCorrect: null,
          },
          {
            question: "What was the name of the historic treaty signed between Nepal and the East India Company in 1815?",
            options: ["Treaty of Sugauli", "Treaty of Kathmandu", "Treaty of Gorkha", "Treaty of Pokhara"],
            answerIndex: 0,
            userAnswerCorrect: null,
          },
          {
            question: "Which dynasty ruled Nepal before the Shah dynasty came into power?",
            options: ["Malla dynasty", "Lichhavi dynasty", "Thakuri dynasty", "Kirat dynasty"],
            answerIndex: 1,
            userAnswerCorrect: null,
          },
          {
            question: "During which century did the establishment of the Gorkha Kingdom take place?",
            options: ["13th century", "15th century", "17th century", "18th century"],
            answerIndex: 3,
            userAnswerCorrect: null,
          },
          {
            question: "Who was the prime minister of Nepal during the signing of the Sugauli Treaty?",
            options: ["Bhimsen Thapa", "Jung Bahadur Rana", "Bir Narsingh Kunwar", "Chandra Shumsher Rana"],
            answerIndex: 0,
            userAnswerCorrect: null,
          },
          {
            question: "What event led to the establishment of the Rana regime in Nepal?",
            options: ["Anglo-Nepalese War", "Kot Massacre", "Treaty of Sugauli", "Civil war among the nobility"],
            answerIndex: 1,
            userAnswerCorrect: null,
          },
          {
            question: "When did Nepal officially become a constitutional monarchy?",
            options: ["1947", "1951", "1960", "1990"],
            answerIndex: 1,
            userAnswerCorrect: null,
          },
          {
            question: "Who was the first democratically elected Prime Minister of Nepal?",
            options: ["Bishweshwar Prasad Koirala", "Girija Prasad Koirala", "Krishna Prasad Bhattarai", "Surya Bahadur Thapa"],
            answerIndex: 0,
            userAnswerCorrect: null,
          },
          {
            question: "What was the name of the communist insurgency that took place in Nepal from 1996 to 2006?",
            options: ["People's War", "Maoist Rebellion", "Red Uprising", "Nepalese Revolution"],
            answerIndex: 0,
            userAnswerCorrect: null,
          },
          {
            question: "Which king of Nepal was known for his attempts to modernize the country and introduce reforms?",
            options: ["King Mahendra", "King Tribhuvan", "King Birendra", "King Gyanendra"],
            answerIndex: 2,
            userAnswerCorrect: null,
          },
          {
            question: "What was the outcome of the 1951 revolution in Nepal?",
            options: ["Restoration of democracy", "Establishment of a communist regime", "Abolishment of the monarchy", "Continuation of the Rana regime"],
            answerIndex: 0,
            userAnswerCorrect: null,
          },
          {
            question: "Who founded the Nepali Congress, the first political party of Nepal?",
            options: ["Bishweshwar Prasad Koirala", "Mohan Shamsher", "Krishna Prasad Bhattarai", "BP Koirala"],
            answerIndex: 3,
            userAnswerCorrect: null,
          },
          {
            question: "What event led to the end of the Rana regime in Nepal?",
            options: ["People's Movement of 1951", "People's Movement of 1990", "Anglo-Nepalese War", "Treaty of Sugauli"],
            answerIndex: 1,
            userAnswerCorrect: null,
          },
          {
            question: "Which treaty established the current borders of Nepal with India and China?",
            options: ["Treaty of Sugauli", "Treaty of Kathmandu", "Treaty of Gorkha", "Treaty of Mahakali"],
            answerIndex: 0,
            userAnswerCorrect: null,
          },
          {
            question: "Who was the first Nepalese woman to climb Mount Everest?",
            options: ["Pasang Lhamu Sherpa", "Junko Tabei", "Phurba Tashi Sherpa", "Bachendri Pal"],
            answerIndex: 0,
            userAnswerCorrect: null,
          },
          {
            question: "What was the name of the Nepalese currency before the introduction of the Nepalese rupee?",
            options: ["Mohar", "Paisa", "Rupiya", "Rupee"],
            answerIndex: 0,
            userAnswerCorrect: null,
          },
          {
            question: "Which country was the first to officially recognize Nepal's sovereignty?",
            options: ["India", "China", "United Kingdom", "United States"],
            answerIndex: 2,
            userAnswerCorrect: null,
          },
          {
            question: "Who was the last Rana prime minister of Nepal?",
            options: ["Jung Bahadur Rana", "Mohan Shamsher", "Chandra Shumsher", "Bir Shamsher"],
            answerIndex: 1,
            userAnswerCorrect: null,
          },
          {
            question: "What was the name of the movement led by the Communist Party of Nepal (Maoist) during the Nepalese Civil War?",
            options: ["People's Movement", "Jan Andolan", "Maoist Rebellion", "Jana Yuddha"],
            answerIndex: 2,
            userAnswerCorrect: null,
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
  
  <style scoped>
  .quiz-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f0ecec;
    box-shadow: 0 0 50px rgba(221, 36, 36, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .quiz-container:hover {
    transform: scale(1.02);
    color: #e9899f;
    box-shadow: #9b200d;
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
    font-size: 2.5em;
    font-family: 'Arial', sans-serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
  
  .quiz-completed {
    text-align: center;
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #e0f7fa;
    transition: background-color 0.3s ease-in-out;
  }
  
  .quiz-completed h2 {
    color: #00796b;
    font-size: 1.8em;
    font-family: 'Arial', sans-serif;
  }
  
  .quiz-completed p {
    font-size: 1.2em;
    color: #004d40;
  }
  
  .quiz-option {
    display: block;
    padding: 10px;
    margin: 10px 0;
    border-radius: 8px;
    background-color: #f0f0f0;
    transition: background-color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
  }
  
  .quiz-option:hover {
    background-color: #d1c4e9;
    transform: translateY(-5px);
  }
  
  .quiz-option.selected {
    background-color: #c5e1a5;
    color: #fff;
  }
  
  button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background-color: #00796b;
    color: #fff;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  button:hover {
    background-color: #9b200d;
    transform: translateY(-3px);
  }
  </style>
  