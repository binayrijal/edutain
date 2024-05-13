<template>
    <div ref="container" style="width: 100%; height: 100%;"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  
  export default {
    name: 'ThreeDShapes',
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
  
        // Create a cone geometry
        const coneGeometry = new THREE.ConeGeometry(1, 2, 32);
  
        // Create a material
        const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  
        // Create a cone mesh
        this.coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);
        this.coneMesh.position.x = -3;
  
        // Add the cone mesh to the scene
        scene.add(this.coneMesh);
  
        // Create a cylinder geometry
        const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 2, 32);
  
        // Create a material
        const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  
        // Create a cylinder mesh
        this.cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        this.cylinderMesh.position.x = 2;
  
        // Add the cylinder mesh to the scene
        scene.add(this.cylinderMesh);
  
        // Render the scene
        const animate = () => {
          requestAnimationFrame(animate);
          this.coneMesh.rotation.x += 0.01; // Rotate cone around x-axis
          this.cylinderMesh.rotation.y += 0.01; // Rotate cylinder around y-axis
          renderer.render(scene, camera);
        };
  
        animate();
      }
    }
  };
  </script>



