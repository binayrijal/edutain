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
    <div>
        <p>Your Score: {{ totalScore }}/{{ questions.length }}</p>
        <p v-if="totalScore >= 0.7 * questions.length">Great job! You did well!</p>
        <p v-else-if="totalScore >= 0.5 * questions.length">Not bad! You can improve!</p>
    </div>
</div>
<!-- <button @click="completeQuiz">Complete Quiz</button> -->
</template>

<script>
    export default {
        data() {
            return {
                questions: [{
                        question: "What is the value of pi (π) approximately?",
                        options: ["3.14", "2.71", "1.618", "1.414"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the formula to calculate the area of a rectangle?",
                        options: ["length × width", "1/2 × base × height", "π × radius^2", "1/2 × (a + b + c)"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "If a triangle has angles 45°, 45°, and 90°, what type of triangle is it?",
                        options: ["Equilateral triangle", "Scalene triangle", "Isosceles triangle", "Right triangle"],
                        answerIndex: 3,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the value of sin(90°)?",
                        options: ["1", "0", "1/2", "-1"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the formula to calculate the volume of a cylinder?",
                        options: ["π × radius^2 × height", "length × width × height", "1/2 × base × height", "2 × π × radius"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the square root of 144?",
                        options: ["12", "11", "10", "14"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the value of cos(0°)?",
                        options: ["1", "0", "1/2", "-1"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the formula to calculate the area of a circle?",
                        options: ["π × radius^2", "length × width", "1/2 × base × height", "2 × π × radius"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "If a triangle has sides of length 3 cm, 4 cm, and 5 cm, what type of triangle is it?",
                        options: ["Equilateral triangle", "Scalene triangle", "Isosceles triangle", "Right triangle"],
                        answerIndex: 3,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the value of tan(45°)?",
                        options: ["1", "0", "1/2", "-1"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the formula to calculate the perimeter of a rectangle?",
                        options: ["2 × (length + width)", "length × width", "π × radius^2", "1/2 × (a + b + c)"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the value of log(1)?",
                        options: ["0", "1", "2", "undefined"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the formula to calculate the area of a triangle?",
                        options: ["1/2 × base × height", "length × width", "π × radius^2", "2 × π × radius"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the value of cos(90°)?",
                        options: ["1", "0", "1/2", "-1"],
                        answerIndex: 1,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the formula to calculate the volume of a cone?",
                        options: ["1/3 × π × radius^2 × height", "length × width × height", "1/2 × base × height", "2 × π × radius"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the value of sin(0°)?",
                        options: ["1", "0", "1/2", "-1"],
                        answerIndex: 1,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the formula to calculate the circumference of a circle?",
                        options: ["2 × π × radius", "length × width", "1/2 × base × height", "π × radius^2"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "If a triangle has angles 30°, 60°, and 90°, what type of triangle is it?",
                        options: ["Equilateral triangle", "Scalene triangle", "Isosceles triangle", "Right triangle"],
                        answerIndex: 3,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the value of tan(60°)?",
                        options: ["1", "0", "1/2", "-1"],
                        answerIndex: 2,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the formula to calculate the volume of a sphere?",
                        options: ["4/3 × π × radius^3", "length × width × height", "1/2 × base × height", "2 × π × radius"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the function of mitochondria in a cell?",
                        options: ["Protein synthesis", "Energy production", "Waste removal", "Cell division"],
                        answerIndex: 1,
                        userAnswerCorrect: null
                    }, {
                        question: "What is the function of chlorophyll in plants?",
                        options: ["Absorbing light energy", "Regulating water balance", "Storing carbohydrates", "Facilitating respiration"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    }, {
                        question: "What is the process by which plants release water vapor into the atmosphere?",
                        options: ["Transpiration", "Respiration", "Osmosis", "Photosynthesis"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "Which part of the human brain is responsible for controlling voluntary movements?",
                        options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the role of DNA in cells?",
                        options: ["Storing genetic information", "Producing proteins", "Regulating cell activities", "Providing energy"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the function of red blood cells?",
                        options: ["Transporting oxygen", "Fighting infection", "Clotting blood", "Producing antibodies"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "Which organ in the human body produces insulin?",
                        options: ["Pancreas", "Liver", "Kidneys", "Stomach"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the purpose of the respiratory system?",
                        options: ["Supplying oxygen to the body", "Regulating body temperature", "Digesting food", "Pumping blood"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the largest organ in the human body?",
                        options: ["Skin", "Liver", "Heart", "Brain"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the function of white blood cells?",
                        options: ["Fighting infection", "Transporting oxygen", "Digesting food", "Storing energy"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the structure responsible for carrying out photosynthesis in plants?",
                        options: ["Chloroplasts", "Mitochondria", "Ribosomes", "Nucleus"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "Which gas do plants absorb during photosynthesis?",
                        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the function of the nervous system?",
                        options: ["Transmitting signals", "Producing hormones", "Breaking down food", "Circulating blood"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the purpose of the digestive system?",
                        options: ["Breaking down food", "Transporting oxygen", "Pumping blood", "Producing energy"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the function of the circulatory system?",
                        options: ["Transporting nutrients and oxygen", "Regulating body temperature", "Fighting infection", "Filtering waste"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the process by which organisms produce offspring?",
                        options: ["Reproduction", "Respiration", "Digestion", "Circulation"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the smallest unit of life?",
                        options: ["Cell", "Tissue", "Organ", "Organism"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the function of ribosomes in a cell?",
                        options: ["Protein synthesis", "Energy production", "Waste removal", "Cell division"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the function of the endocrine system?",
                        options: ["Producing hormones", "Digesting food", "Circulating blood", "Regulating body temperature"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the role of enzymes in biological reactions?",
                        options: ["Speeding up chemical reactions", "Storing genetic information", "Regulating body temperature", "Transporting nutrients"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is the closest star to Earth?",
                        options: ["Proxima Centauri", "Sirius", "Alpha Centauri", "Betelgeuse"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is a light-year?",
                        options: ["A measure of distance", "A measure of time", "A unit of energy", "A unit of brightness"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What causes the phases of the Moon?",
                        options: ["Earth's rotation", "Earth's revolution", "Moon's rotation", "Moon's revolution"],
                        answerIndex: 3,
                        userAnswerCorrect: null
                    },
                    {
                        question: "What is a supernova?",
                        options: ["An exploding star", "A black hole", "A comet", "A planet"],
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
                currentQuestionIndex: 0,
                selectedOption: null,
                score: 0,
                answerFeedback: null,
                answerChecked: false // Flag to track whether answer has been checked
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
            }
        },
        methods: {
            updateScore(score) {
               this.score = score; // Update score
             },
            checkAnswer() {
                if (this.selectedOption !== null) {
                    if (this.selectedOption === this.currentQuestion.answerIndex) {
                        this.score++;
                        this.currentQuestion.userAnswerCorrect = true;
                        this.answerFeedback = "Correct!";
                    } else {
                        this.currentQuestion.userAnswerCorrect = false;
                        this.answerFeedback = "Wrong. The correct answer is: " + this.currentQuestion.options[this.currentQuestion.answerIndex];
                    }
                    this.answerChecked = true; // Set flag to true after checking answer
                } else {
                    this.answerFeedback = "Please select an option";
                }
            },
            nextQuestion() {
                if (this.currentQuestionIndex === this.questions.length - 1) {
                    // Show total score if it's the last question
                    this.answerFeedback = null; // Clear any previous feedback
                } else {
                    // Move to the next question
                    this.currentQuestionIndex++;
                    this.selectedOption = null;
                    this.answerFeedback = null; // Clear any previous feedback
                    this.answerChecked = false; // Reset flag for the next question
                }
            },
            completeQuiz() {
      // Simulate completing quiz and getting a score
               const score = this.totalScore; // Example score, replace with your logic
               this.$emit('quiz-completed', score);
              }
        }
    };
</script>

<style scoped>
    /* Add your custom styles here */
</style>

<!-- <template>
<div>
    <div v-if="!quizFinished">
        <h2>{{ currentQuestion.question }}</h2>
        <div v-for="(option, index) in currentQuestion.options" :key="index">
            <input type="radio" :id="'option' + index" :value="index" v-model="selectedOption">
            <label :for="'option' + index">{{ option }}</label>
        </div>
        <button @click="checkAnswer">Check Answer</button>
        <div v-if="answerFeedback !== null">
            <p>{{ answerFeedback }}</p>
            <button @click="nextQuestion">Next</button>
        </div>
    </div>
    <div>

        <p>Your Score: {{ totalScore }}/{{ questions.length }}</p>
        <p v-if="totalScore >= 0.7 * questions.length">Great job! You did well!</p>
        <p v-else-if="totalScore >= 0.5 * questions.length">Not bad! You can improve!</p>

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            questions: [{
                    question: "What is the capital of France?",
                    options: ["Paris", "Berlin", "London", "Rome"],
                    answerIndex: 0,
                    userAnswerCorrect: null
                },
                {
                    question: "Who wrote 'Romeo and Juliet'?",
                    options: ["Shakespeare", "Hemingway", "Tolstoy", "Fitzgerald"],
                    answerIndex: 0,
                    userAnswerCorrect: null
                },
                {
                        question: "What is the value of pi (π) approximately?",
                        options: ["3.14", "2.71", "1.618", "1.414"],
                        answerIndex: 0,
                        userAnswerCorrect: null
                    }
                   
              ],

                // Add more questions here

            currentQuestionIndex: 0,
            selectedOption: null,
            score: 0,
            answerFeedback: null
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
        }
    },
    methods: {
        checkAnswer() {
            if (this.selectedOption !== null) {
                if (this.selectedOption === this.currentQuestion.answerIndex) {
                    this.score++;
                    this.currentQuestion.userAnswerCorrect = true;
                    this.answerFeedback = "Correct!";
                } else {
                    this.currentQuestion.userAnswerCorrect = false;
                    this.answerFeedback = "Wrong. The correct answer is: " + this.currentQuestion.options[this.currentQuestion.answerIndex];
                }
            } else {
                this.answerFeedback = "Please select an option";
            }
        },
        nextQuestion() {
            if (this.currentQuestionIndex === this.questions.length - 1) {
                // Show total score if it's the last question
                this.answerFeedback = null; // Clear any previous feedback
            } else {
                // Move to the next question
                this.currentQuestionIndex++;
                this.selectedOption = null;
                this.answerFeedback = null; // Clear any previous feedback
            }
        }
    }
};
</script>

<style scoped>
/* Add your custom styles here */
</style> -->
