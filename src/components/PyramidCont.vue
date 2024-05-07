<template>
    <div ref="container"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  
  export default {
    name: 'ThreeDPyramid',
    mounted() {
      this.init();
    },
    methods: {
      init() {
        // Create a scene
        const scene = new THREE.Scene();
  
        // Create a camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
  
        // Create a renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.container.appendChild(renderer.domElement);
  
        // Create a geometry (pyramid)
        const geometry = new THREE.CylinderGeometry(0, 1, 2, 4);
  
        // Create a material
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
  
        // Create a mesh
        const pyramid = new THREE.Mesh(geometry, material);
  
        // Add the mesh to the scene
        scene.add(pyramid);
  
        // Render the scene
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
  
        animate();
  
        // Rotate the pyramid based on mouse movement
        let mouseX = 0;
        let mouseY = 0;
        document.addEventListener('mousemove', event => {
          mouseX = (event.clientX / window.innerWidth) * 2 - 1;
          mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });
  
        const rotatePyramid = () => {
          camera.position.x += (mouseX - camera.position.x) * 0.05;
          camera.position.y += (mouseY - camera.position.y) * 0.05;
          camera.lookAt(scene.position);
        };
  
        const render = () => {
          requestAnimationFrame(render);
          rotatePyramid();
          renderer.render(scene, camera);
        };
  
        render();
      }
    }
  };
  </script>
  
  <style>
    #container {
      width: 100%;
      height: 100%;
    }
  </style>
  



<!-- <template>
    <div ref="container"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  
  export default {
    name: 'ThreeDPyramid',
    mounted() {
      this.init();
    },
    methods: {
      init() {
        // Create a scene
        const scene = new THREE.Scene();
  
        // Create a camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
  
        // Create a renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.$refs.container.appendChild(renderer.domElement);
  
        // Create a geometry (pyramid)
        const geometry = new THREE.ConeGeometry(1, 2, 4);
  
        // Create a material
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  
        // Create a mesh
        const pyramid = new THREE.Mesh(geometry, material);
  
        // Add the mesh to the scene
        scene.add(pyramid);
  
        // Render the scene
        const animate = () => {
          requestAnimationFrame(animate);
          pyramid.rotation.y += 0.01;
          renderer.render(scene, camera);
        };
  
        animate();
      }
    }
  };
  </script>
  
  <style>
    #container {
      width: 100%;
      height: 100%;
    }
  </style> -->