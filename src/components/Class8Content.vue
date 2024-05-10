<template>
    <div class="class-content">
        <div v-for="(item, index) in items" :key="index" class="item" @click="selectItem(item)">
            <div class="item-image" :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
            <div class="item-content">
                <h1>{{ item.title }}</h1>
                <router-link to="/eight-youtube">{{ item.content }}</router-link>
             
            </div>
        </div>
    </div>
    
    </template>
    
    <script>
    
    
    
        export default {
            components:{
           
              
            },
            data() {
                return {
                    items: [{
                            title: 'Videos',
                            content: 'START',
                            image: require('../assets/student-anim.jpg')
                        },
                        {
                            title: 'Quiz',
                            content: 'Quiz material',
                            image: require('../assets/student-marks.png')
                            
                        },
                        {
                            title: 'Material',
                            content: 'Study material',
                            image: require('../assets/student-a.png')
                        },
                        {
                            title: 'others',
                            content: 'Content for Div 4',
                            image: require('../assets/student-b.png')
                        },
                        
                    ],
    
                    selected: null,
                    quizScore: null
                };
            },
            methods: {
                selectItem(item) {
                    this.selected = item;
                    // Handle item selection
                    if (item.title === 'Quiz') {
                    // Redirect to '/quiz-cont' or perform other actions
    
                      this.$router.push('/quiz-eight');
                    } else {
                    // Show other content or perform other actions
                      console.log('Selected item:', item);
                    }
                },
                handleQuizCompleted(score) {
                    this.quizScore = score;
                }
                
            }
        };
    </script>
    
    
    <style scoped>
        .class-content {
            display: flex;
            flex-wrap: wrap;
        }
    
        .item {
            width: calc(20% - 30px);
            /* 25% width for each item with margin */
            margin: 10px;
            display: flex;
            flex-direction: column;
            cursor: pointer;
            transition: transform 0.3s;
            border: 1px solid blue;
            border-radius: 10px;
        }
    
        .item:hover {
            transform: translateY(-10px);
    
        }
    
        .item-image {
            height: 150px;
            /* Height of the image area */
            background-size: cover;
            background-position: center;
            opacity: 0.6;
        }
    
        .item-content {
            padding: 10px;
        }
    
        .item-content h1 {
            margin-bottom: 5px;
        }
    
        .item-content p {
            margin: 0;
        }
    
        @media (max-width: 768px) {
            .item {
                width: calc(95% - 20px);
                /* 50% width for each item with margin on smaller screens */
            }
        }
    </style>
    
    