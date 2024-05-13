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
                    question: "What is the principle of conservation of momentum?",
                    options: ["Momentum is always increasing in a closed system", "Momentum can only be transferred, not conserved", "Momentum is constant at all times", "The total momentum of a closed system remains constant if no external forces act on it", ],
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
                {
                    question: "What is 3/4 of 120?",
                    options: ["30", "40", "60", "90"],
                    answerIndex: 3,
                    userAnswerCorrect: null
                },
                // {
                //     question: "What is the formula to calculate the area of a rectangle?",
                //     options: ["length × width", "1/2 × base × height", "π × radius^2", "1/2 × (a + b + c)"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "If a triangle has angles 45°, 45°, and 90°, what type of triangle is it?",
                //     options: ["Equilateral triangle", "Scalene triangle", "Isosceles triangle", "Right triangle"],
                //     answerIndex: 3,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the value of sin(90°)?",
                //     options: ["1", "0", "1/2", "-1"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "if x=5,y=3 then what 2x+3y?",
                //     options: ["13", "16", "21", "23"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the square root of 144?",
                //     options: ["12", "11", "10", "14"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "Solve for x in the equation 2x+5=17?",
                //     options: ["5", "6", "7", "8"],
                //     answerIndex: 1,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "if a=4,b=7, what is the value of a2+b2?",
                //     options: ["41", "49", "53", "61"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "what is 5!(5 factorial)?",
                //     options: ["10", "15", "20", "120"],
                //     answerIndex: 3,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "solve for x in the equation 3x-8=13",
                //     options: ["5", "7", "8", "9"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the formula to calculate the perimeter of a rectangle?",
                //     options: ["2 × (length + width)", "length × width", "π × radius^2", "1/2 × (a + b + c)"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the value of log(1)?",
                //     options: ["0", "1", "2", "undefined"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the formula to calculate the area of a triangle?",
                //     options: ["1/2 × base × height", "length × width", "π × radius^2", "2 × π × radius"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the value of cos(90°)?",
                //     options: ["1", "0", "1/2", "-1"],
                //     answerIndex: 1,
                //     userAnswerCorrect: null
                // },

                // {
                //     question: "What is the function of mitochondria in a cell?",
                //     options: ["Protein synthesis", "Energy production", "Waste removal", "Cell division"],
                //     answerIndex: 1,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the process by which a star converts hydrogen into helium?",
                //     options: ["Fusion", "Fission", "Convection", "Radiation"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the name of the galaxy that contains our solar system?",
                //     options: ["Milky Way", "Andromeda", "Triangulum", "Orion"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the name of the phenomenon where light bends as it passes through a lens?",
                //     options: ["Refraction", "Reflection", "Dispersion", "Diffraction"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the name of the imaginary line around which the Earth rotates?",
                //     options: ["Axis", "Equator", "Meridian", "Tropic of Cancer"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the study of celestial objects such as stars, planets, and galaxies called?",
                //     options: ["Astronomy", "Geology", "Botany", "Meteorology"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the function of chlorophyll in plants?",
                //     options: ["Absorbing light energy", "Regulating water balance", "Storing carbohydrates", "Facilitating respiration"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the process by which plants release water vapor into the atmosphere?",
                //     options: ["Transpiration", "Respiration", "Osmosis", "Photosynthesis"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "Which part of the human brain is responsible for controlling voluntary movements?",
                //     options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the role of DNA in cells?",
                //     options: ["Storing genetic information", "Producing proteins", "Regulating cell activities", "Providing energy"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the function of red blood cells?",
                //     options: ["Transporting oxygen", "Fighting infection", "Clotting blood", "Producing antibodies"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "Which organ in the human body produces insulin?",
                //     options: ["Pancreas", "Liver", "Kidneys", "Stomach"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the purpose of the respiratory system?",
                //     options: ["Supplying oxygen to the body", "Regulating body temperature", "Digesting food", "Pumping blood"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the largest organ in the human body?",
                //     options: ["Skin", "Liver", "Heart", "Brain"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the function of white blood cells?",
                //     options: ["Fighting infection", "Transporting oxygen", "Digesting food", "Storing energy"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the structure responsible for carrying out photosynthesis in plants?",
                //     options: ["Chloroplasts", "Mitochondria", "Ribosomes", "Nucleus"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "Which gas do plants absorb during photosynthesis?",
                //     options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the function of the nervous system?",
                //     options: ["Transmitting signals", "Producing hormones", "Breaking down food", "Circulating blood"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the purpose of the digestive system?",
                //     options: ["Breaking down food", "Transporting oxygen", "Pumping blood", "Producing energy"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the function of the circulatory system?",
                //     options: ["Transporting nutrients and oxygen", "Regulating body temperature", "Fighting infection", "Filtering waste"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the process by which organisms produce offspring?",
                //     options: ["Reproduction", "Respiration", "Digestion", "Circulation"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the smallest unit of life?",
                //     options: ["Cell", "Tissue", "Organ", "Organism"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the function of ribosomes in a cell?",
                //     options: ["Protein synthesis", "Energy production", "Waste removal", "Cell division"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the function of the endocrine system?",
                //     options: ["Producing hormones", "Digesting food", "Circulating blood", "Regulating body temperature"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the role of enzymes in biological reactions?",
                //     options: ["Speeding up chemical reactions", "Storing genetic information", "Regulating body temperature", "Transporting nutrients"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the closest star to Earth?",
                //     options: ["Proxima Centauri", "Sirius", "Alpha Centauri", "Betelgeuse"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is a light-year?",
                //     options: ["A measure of distance", "A measure of time", "A unit of energy", "A unit of brightness"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What causes the phases of the Moon?",
                //     options: ["Earth's rotation", "Earth's revolution", "Moon's rotation", "Moon's revolution"],
                //     answerIndex: 3,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is a supernova?",
                //     options: ["An exploding star", "A black hole", "A comet", "A planet"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is a constellation?",
                //     options: ["A group of stars forming a pattern", "A type of galaxy", "A planet and its moons", "A cluster of asteroids"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the unit of electric current?",
                //     options: ["Ampere", "Ohm", "Volt", "Watt"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is Ohm's Law?",
                //     options: ["V = IR", "P = IV", "V = I²R", "P = I²R"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the phenomenon where light changes direction as it passes from one medium to another?",
                //     options: ["Refraction", "Reflection", "Diffraction", "Dispersion"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
                // {
                //     question: "What is the unit of electric charge?",
                //     options: ["Coulomb", "Newton", "Joule", "Watt"],
                //     answerIndex: 0,
                //     userAnswerCorrect: null
                // },
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
