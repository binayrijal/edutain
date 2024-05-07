<template>
<HeaderCom></HeaderCom>
<hr>
<div class="categories-container">
    <div class="menu-bar">
        <div class="menu-item" @click="toggleSubMenu('class')">Class</div>
        <transition name="slide-fade">
            <div v-show="subMenuOpen.class" class="sub-menu">
                <div class="sub-menu-item" @click="selectOption('7')">i.Class 7</div>
                <div class="sub-menu-item" @click="selectOption('8')">ii.Class 8</div>
                <div class="sub-menu-item" @click="selectOption('9')">iii.Class 9</div>
                <div class="sub-menu-item" @click="selectOption('10')">iv.Class 10</div>
            </div>
        </transition>
        <div class="menu-item" @click="toggleSubMenu('draw')">Draw</div>
        <transition name="slide-fade">
            <div v-show="subMenuOpen.draw" class="sub-menu">
                <div class="sub-menu-item" @click="selectOption('drawchart')">i.Draw chart</div>
                <div class="sub-menu-item" @click="selectOption('drawtrigo')">ii.Draw Trigonometry</div>
                <div class="sub-menu-item" @click="selectOption('drawtriangle')">iii.Draw Triangle</div>
                <div class="sub-menu-item" @click="selectOption('drawven')">iii.Draw VenDiagram</div>
                <div class="sub-menu-item" @click="selectOption('drawangle')">iv.Draw Angle</div>

            </div>
        </transition>
        <div class="menu-item" @click="toggleSubMenu('animation')">Animation</div>
        <transition name="slide-fade">
            <div v-show="subMenuOpen.animation" class="sub-menu">
                <div class="sub-menu-item" @click="selectOption('animation')">i.animation video</div>
                <div class="sub-menu-item" @click="selectOption('cube')">ii.cube</div>
                <div class="sub-menu-item" @click="selectOption('solar')">iii.solar-sys</div>
                <div class="sub-menu-item" @click="selectOption('drawpyramid')">iv.Draw Pyramid</div>
                <div class="sub-menu-item" @click="selectOption('drawcone')">iv.Draw Cone</div>

            </div>
        </transition>
        <div class="menu-item" @click="toggleSubMenu('quiz')">Quiz</div>
        <transition name="slide-fade">
            <div v-show="subMenuOpen.quiz" class="sub-menu">
                <div class="sub-menu-item" @click="selectOption('quiz1')">i.quiz1</div>
                <div class="sub-menu-item" @click="selectOption('quiz2')">i.quiz2</div>

            </div>
        </transition>
        <div class="menu-item" @click="toggleSubMenu('game')">Game</div>
        <transition name="slide-fade">
            <div v-show="subMenuOpen.game" class="sub-menu">
                <div class="sub-menu-item" @click="selectOption('game1')">i.Guess Num</div>
                <div class="sub-menu-item" @click="selectOption('game2')">ii.tik tac</div>

            </div>
        </transition>
    </div>
    <div class="result">
        <p>Time:{{ timeSpentInSeconds }}</p>
        <PieChart v-if="selectedOption === 'drawchart'" />
        <TriangleGen v-else-if="selectedOption==='drawtriangle'"></TriangleGen>
        <TrigonometryGen v-else-if="selectedOption==='drawtrigo'"></TrigonometryGen>
        <ClassContent v-else-if="selectedOption === '7' || selectedOption === '8' || selectedOption === '9' || selectedOption === '10'" :selectedOption="selectedOption" />
        <AnimationCont v-else-if="selectedOption=== 'animation'"></AnimationCont>
        <SolarSys v-else-if="selectedOption==='solar'"></SolarSys>
        <ThreeDee v-else-if="selectedOption==='cube'"></ThreeDee>
        <PyramidCont v-else-if="selectedOption==='drawpyramid'"></PyramidCont>
        <ConeCont v-else-if="selectedOption==='drawcone'"></ConeCont>
        <VenCont v-else-if="selectedOption==='drawven'"></VenCont>
        <GameCom v-else-if="selectedOption==='game1'"></GameCom>
        <TikTok v-else-if="selectedOption==='game2'"></TikTok>
        <AngleCont v-else-if="selectedOption==='drawangle'"></AngleCont>

        <div v-else>
            <h1> {{ selectedOption }}</h1>
        </div>

    </div>
</div>
</template>

<script>
    import ClassContent from './ClassContent.vue';
    import HeaderCom from './HeaderCom.vue';
    import PieChart from './PieChart.vue'; // Import your PieChart component here
    import AnimationCont from './AnimationCont.vue'
    import TriangleGen from './TriangleGen.vue';
    import TrigonometryGen from './TrigonometryGen.vue';
    import SolarSys from './SolarSys.vue';
    import ThreeDee from './ThreeDee.vue';
    import PyramidCont from './PyramidCont.vue';
    import ConeCont from './ConeCont.vue';
    import VenCont from './VenCont.vue';
    import GameCom from './GameCom.vue';
    import TikTok from './TikTok';
    import AngleCont from './AngleCont.vue';

    export default {
        components: {
            PieChart,
            HeaderCom,
            ClassContent,
            AnimationCont,
            TriangleGen,
            TrigonometryGen,
            SolarSys,
            ThreeDee,
            PyramidCont,
            ConeCont,
            VenCont,
            GameCom,
            TikTok,
            AngleCont,
        },
        data() {
            return {
                subMenuOpen: {
                    class: false,
                    draw: false
                },
                selectedOption: '',
                startTime: new Date(),
                timeSpentInSeconds: 0
            };
        },
        methods: {
            toggleSubMenu(menu) {
                // Toggle sub-menu visibility
                this.subMenuOpen[menu] = !this.subMenuOpen[menu];
            },
            selectOption(option) {
                // Set selected option and close sub-menu
                this.selectedOption = option;
                this.closeSubMenus();
            },
            closeSubMenus() {
                // Close all sub-menus
                for (let menu in this.subMenuOpen) {
                    this.subMenuOpen[menu] = false;
                }
            },
            updateTimeSpent() {
                const currentTime = new Date();
                const difference = currentTime.getTime() - this.startTime.getTime();
                this.timeSpentInSeconds = Math.floor(difference / 1000);
            },
            formatTime(seconds) {
                const hours = Math.floor(seconds / 3600);
                const minutes = Math.floor((seconds % 3600) / 60);
                const remainingSeconds = seconds % 60;

                return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
            },
            pad(number) {
                return (number < 10 ? "0" : "") + number;
            }
        },
        mounted() {

            setInterval(this.updateTimeSpent, 1000); // Update every second

        }
    };
</script>

<style scoped>
    .categories-container {
        display: flex;
    }

    .menu-bar {
        display: flex;
        flex-direction: column;

        height: 100vh;
        border: 1px solid blue;
        width: 15%;
        background-color: #4A90E2;
    }

    .menu-item {
        cursor: pointer;
        padding: 10px;
        background-color: #4A90E2;
        color: white;
        border: 1px solid #999;
        border-radius: 10px;
    }

    .menu-item:hover,
    .sub-menu-item:hover {
        background-color: #efd52d;
        color: #4A90E2;
    }

    .sub-menu {
        padding: 5px;
        border: 1px solid #999;
        background-color: #4A90E2;
        margin-bottom: 5px;
        color: black;
    }

    .sub-menu-item {
        cursor: pointer;
        padding: 5px;
        border: 1px solid #0f2df0;
        border-radius: 10px
    }

    .result {
        color: #4A90E2;
        flex: 1;
        padding: 10px;
        height: 100vh;
    }
</style>

<!-- <template>
    <HeaderCom></HeaderCom>
    <hr>
    <div class="categories-container">
        <div class="menu-bar">
            <div class="menu-item" @click="toggleSubMenu('class')">Class</div>
            <transition name="slide-fade">
                <div v-show="subMenuOpen.class" class="sub-menu">
                    <div class="sub-menu-item" @click="selectOption('7')">i.Class 7</div>
                    <div class="sub-menu-item" @click="selectOption('8')">ii.Class 8</div>
                    <div class="sub-menu-item" @click="selectOption('9')">iii.Class 9</div>
                    <div class="sub-menu-item" @click="selectOption('10')">iv.Class 10</div>
                </div>
            </transition>
            <div class="menu-item" @click="toggleSubMenu('draw')">Draw</div>
            <transition name="slide-fade">
                <div v-show="subMenuOpen.draw" class="sub-menu">
                    <div class="sub-menu-item" @click="selectOption('drawchart')">i.Draw chart</div>
                    <div class="sub-menu-item" @click="selectOption('drawtrigo')">ii.Draw Trigonometry</div>
                    <div class="sub-menu-item" @click="selectOption('drawtriangle')">iii.Draw Triangle</div>
                    <div class="sub-menu-item" @click="selectOption('drawven')">iii.Draw VenDiagram</div>
                    <div class="sub-menu-item" @click="selectOption('drawangle')">iv.Draw Angle</div>

                </div>
            </transition>
            <div class="menu-item" @click="toggleSubMenu('animation')">Animation</div>
            <transition name="slide-fade">
                <div v-show="subMenuOpen.animation" class="sub-menu">
                    <div class="sub-menu-item" @click="selectOption('animation')">i.animation video</div>
                    <div class="sub-menu-item" @click="selectOption('cube')">ii.cube</div>
                    <div class="sub-menu-item" @click="selectOption('solar')">iii.solar-sys</div>
                    <div class="sub-menu-item" @click="selectOption('drawpyramid')">iv.Draw Pyramid</div>
                    <div class="sub-menu-item" @click="selectOption('drawcone')">iv.Draw Cone</div>

                </div>
            </transition>
            <div class="menu-item" @click="toggleSubMenu('quiz')">Quiz</div>
            <transition name="slide-fade">
                <div v-show="subMenuOpen.quiz" class="sub-menu">
                    <div class="sub-menu-item" @click="selectOption('quiz1')">i.quiz1</div>
                    <div class="sub-menu-item" @click="selectOption('quiz2')">i.quiz2</div>

                </div>
            </transition>
            <div class="menu-item" @click="toggleSubMenu('game')">Game</div>
            <transition name="slide-fade">
                <div v-show="subMenuOpen.game" class="sub-menu">
                    <div class="sub-menu-item" @click="selectOption('game1')">i.Guess Num</div>
                    <div class="sub-menu-item" @click="selectOption('game2')">ii.tik tac</div>

                </div>
            </transition>
        </div>
        <div class="result">
            <p>Time:{{ timeSpentInSeconds }}</p>
            <PieChart v-if="selectedOption === 'drawchart'" />
            <TriangleGen v-else-if="selectedOption==='drawtriangle'"></TriangleGen>
            <TrigonometryGen v-else-if="selectedOption==='drawtrigo'"></TrigonometryGen>
            <ClassContent v-else-if="selectedOption === '7' || selectedOption === '8' || selectedOption === '9' || selectedOption === '10'" :selectedOption="selectedOption" />
            <AnimationCont v-else-if="selectedOption=== 'animation'"></AnimationCont>
            <SolarSys v-else-if="selectedOption==='solar'"></SolarSys>
            <ThreeDee v-else-if="selectedOption==='cube'"></ThreeDee>
            <PyramidCont v-else-if="selectedOption==='drawpyramid'"></PyramidCont>
            <ConeCont v-else-if="selectedOption==='drawcone'"></ConeCont>
            <VenCont v-else-if="selectedOption==='drawven'"></VenCont>
            <GameCom v-else-if="selectedOption==='game1'"></GameCom>
            <TikTok v-else-if="selectedOption==='game2'"></TikTok>
            <AngleCont v-else-if="selectedOption==='drawangle'"></AngleCont>

            <div v-else>
                <h1> {{ selectedOption }}</h1>
            </div>

        </div>
    </div>
</template>

    <script>
    import ClassContent from './ClassContent.vue';
    import HeaderCom from './HeaderCom.vue';
    import PieChart from './PieChart.vue'; // Import your PieChart component here
    import AnimationCont from './AnimationCont.vue'
    import TriangleGen from './TriangleGen.vue';
    import TrigonometryGen from './TrigonometryGen.vue';
    import SolarSys from './SolarSys.vue';
    import ThreeDee from './ThreeDee.vue';
    import PyramidCont from './PyramidCont.vue';
    import ConeCont from './ConeCont.vue';
    import VenCont from './VenCont.vue';
    import GameCom from './GameCom.vue';
    import TikTok from './TikTok';
    import AngleCont from './AngleCont.vue';
    import axios from 'axios';

    export default {
        components: {
            PieChart,
            HeaderCom,
            ClassContent,
            AnimationCont,
            TriangleGen,
            TrigonometryGen,
            SolarSys,
            ThreeDee,
            PyramidCont,
            ConeCont,
            VenCont,
            GameCom,
            TikTok,
            AngleCont,
        },
        data() {
            return {
                subMenuOpen: {
                    class: false,
                    draw: false
                },
                selectedOption: '',
                startTime: 0,
                endTime: 0,
            };
        },
        methods: {
            toggleSubMenu(menu) {
                // Toggle sub-menu visibility
                this.subMenuOpen[menu] = !this.subMenuOpen[menu];
            },
            selectOption(option) {
                // Set selected option and close sub-menu
                this.selectedOption = option;
                this.closeSubMenus();
            },
            closeSubMenus() {
                // Close all sub-menus
                for (let menu in this.subMenuOpen) {
                    this.subMenuOpen[menu] = false;
                }
            },
            sendTimeDataToBackend(timeSpent) {
                axios.post('/api/user-time/', { time_spent: timeSpent })
                .then(response => {
                   console.log('Time spent data sent successfully');
                })
                .catch(error => {
                  console.error('Error sending time spent data:', error);
                });
            },
            created() {
                this.startTime = new Date().getTime();
            },
            beforeDestroy() {
               this.endTime = new Date().getTime();
               const timeSpent = Math.floor((this.endTime - this.startTime) / 1000); // Calculate time spent in seconds
               this.sendTimeDataToBackend(timeSpent);
           },

        }
    };
    </script>

    <style scoped>
    .categories-container {
        display: flex;
    }

    .menu-bar {
        display: flex;
        flex-direction: column;

        height: 100vh;
        border: 1px solid blue;
        width: 15%;
        background-color: #4A90E2;
    }

    .menu-item {
        cursor: pointer;
        padding: 10px;
        background-color: #4A90E2;
        color: white;
        border: 1px solid #999;
        border-radius: 10px;
    }

    .menu-item:hover,
    .sub-menu-item:hover {
        background-color: #efd52d;
        color: #4A90E2;
    }

    .sub-menu {
        padding: 5px;
        border: 1px solid #999;
        background-color: #4A90E2;
        margin-bottom: 5px;
        color: black;
    }

    .sub-menu-item {
        cursor: pointer;
        padding: 5px;
        border: 1px solid #0f2df0;
        border-radius: 10px
    }

    .result {
        color: #4A90E2;
        flex: 1;
        padding: 10px;
        height: 100vh;
    }
    </style> -->
