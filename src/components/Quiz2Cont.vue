<template>
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

export default {
    components: {
        QuizReuse,

    },
    data() {
        return {
            questions: [

                {
                    question: "Which planet is known as the 'Red Planet'?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    answerIndex: 1,
                    userAnswerCorrect: null
                },
                {
                    question: "Who wrote the play 'Romeo and Juliet'?",
                    options: ["William Shakespeare", " Charles Dickens", "Jane Austen", "Mark Twain", ],
                    answerIndex: 0,
                    userAnswerCorrect: null
                },
                {
                    question: "What is the capital city of Australia?",
                    options: ["Sydney", " Canberra", "Melbourne", " Brisbane"],
                    answerIndex: 1,
                    userAnswerCorrect: null
                },
                {
                    question: "What is the chemical symbol for gold?",
                    options: ["Au", " Ag", "Fe", "Hg"],
                    answerIndex: 0,
                    userAnswerCorrect: null
                },
                {
                    question: "Who painted the famous artwork 'The Starry Night'?",
                    options: ["Pablo Picasso", " Leonardo da Vinci", " Claude Monet", "Vincent van Gogh"],
                    answerIndex: 3,
                    userAnswerCorrect: null
                },
                {
                    question: "Which mammal is capable of flying and is often associated with Halloween?",
                    options: ["Owl", " Raven", " Bat", "Eagle"],
                    answerIndex: 2,
                    userAnswerCorrect: null
                },
                {
                    question: "What is the tallest mountain in the world?",
                    options: [" Mount Everest", "K2", "Mount Kilimanjaro", " Mount Fuji"],
                    answerIndex: 0,
                    userAnswerCorrect: null
                },
                {
                    question: "What is the largest organ in the human body?",
                    options: [" Liver", "Brain", " Skin", "Heart"],
                    answerIndex: 2,
                    userAnswerCorrect: null
                },
                {
                    question: "Who is credited with inventing the telephone?",
                    options: ["Thomas Edison", "Alexander Graham Bell", " Leonardo da Vinci", " Claude Monet"],
                    answerIndex: 1,
                    userAnswerCorrect: null
                },
                {
                    question: "In which year did the Titanic sink?",
                    options: [" 1912", "1914", " 1916", "1918"],
                    answerIndex: 0,
                    userAnswerCorrect: null
                },
                {
                    question: "What is the currency of Japan?",
                    options: ["yun", "yen", "dollar", " euro"],
                    answerIndex: 1,
                    userAnswerCorrect: null
                },
                {
                    question: "Who was the first woman to win a Nobel Prize?",
                    options: [" Marie Curie", "Mother Teresa", "Rosa Parks", " Florence Nightingale"],
                    answerIndex: 0,
                    userAnswerCorrect: null
                },
                {
                    question: "What is the main ingredient in guacamole?",
                    options: ["Tomato", "Onion", " Garlic", "Avocado"],
                    answerIndex: 3,
                    userAnswerCorrect: null
                },
                {
                    question: "Which famous physicist developed the theory of general relativity?",
                    options: [" Isaac Newton", "Stephen Hawking", "Albert Einstein", "Galileo Galilei"],
                    answerIndex: 2,
                    userAnswerCorrect: null
                },
                {
                    question: "What is the chemical formula for water?",
                    options: [" H2O", "CO2", "NaCl", " O2"],
                    answerIndex: 0,
                    userAnswerCorrect: null
                },
                {
                    question: "Which country is known as the 'Land of the Rising Sun'?",
                    options: [" China", "Japan", "South Korea", "Thailand"],
                    answerIndex: 1,
                    userAnswerCorrect: null
                },
                {
                    question: "What is the capital city of Brazil?",
                    options: [" Rio de Janeiro", "São Paulo", "Buenos Aires", "Brasília"],
                    answerIndex: 3,
                    userAnswerCorrect: null
                },
                {
                    question: "Who wrote the novel 'To Kill a Mockingbird'?",
                    options: ["Harper Lee", " J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"],
                    answerIndex: 0,
                    userAnswerCorrect: null
                },
                {
                    question: "What is the process by which plants make their food called?",
                    options: [" Respiration", "Fermentation", " Nitrogen", " Digestion"],
                    answerIndex: 2,
                    userAnswerCorrect: null
                },
                {
                    question: "Which gas makes up the majority of Earth's atmosphere?",
                    options: [" Oxygen", " Nitrogen", " Carbon dioxide", "Argon"],
                    answerIndex: 1,
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
