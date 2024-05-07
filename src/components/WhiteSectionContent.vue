<template>
<div class="image-gallery">
    <div class="heading">
        <h2><i>{{ heading }}</i></h2>
        <p><i>{{ text }}</i></p>
    </div>
    <div class="images">
        <div class="image">
            <img src="../assets/students-computer.png" alt="Image 1">
        </div>
        <div class="image">
            <img src="../assets/student-lab.png" alt="Image 2">
        </div>
        <div class="image">
            <img src="../assets/student-marks.png" alt="Image 3">
        </div>

    </div>
    <div class="description-edutain">
        <p>At Edutain Nepal, we believe in revolutionizing education through visualization. Our innovative approach caters specifically to students in grades 8, 9, and 10, providing them with immersive learning experiences that bring subjects to life. By integrating visual aids, interactive media, and real-world applications, we bridge the gap between textbook theory and practical understanding. From dynamic visual storytelling to engaging interactive web platforms, our methods captivate young minds, making learning an exciting journey of exploration and discovery. Join us at Edutain Nepal and unlock the potential of education through the power of visualization.</p>
    </div>
    
</div>
</template>

<script>
export default {
    name: 'WhiteSectionContent',
    props: {
        heading: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.description-edutain{
    background-color: #efd52d ;
}
.description-edutain p{
    padding: 2%;
}
.image-gallery {
    text-align: center;
    margin-top: 20px;
}

.heading {
    margin-bottom: 20px;
}

.images {
    display: flex;
    justify-content: center;
}

.image {
    margin: 0 10px;
    padding: 3%;
}

.image img {
    width: 100%;
    /* Adjust image width as needed */
    height: auto;
}
</style>
