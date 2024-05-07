<template>
    <div ref="container"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  
  export default {
    mounted() {
      // Create a scene
      const scene = new THREE.Scene();
  
      // Create a camera
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 10;
  
      // Create a renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.container.appendChild(renderer.domElement);
  
      // Create outer cube (white)
      const outerGeometry = new THREE.BoxGeometry(5, 5, 5);
      const outerMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const outerCube = new THREE.Mesh(outerGeometry, outerMaterial);
      scene.add(outerCube);
  
      // Create wireframe edges for the cube
      const wireframeGeometry = new THREE.EdgesGeometry(outerGeometry);
      const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 }); // Change the color here
      const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
      outerCube.add(wireframe);
  
      // Render the scene
      const animate = () => {
        requestAnimationFrame(animate);
  
        outerCube.rotation.x += 0.01;
        outerCube.rotation.y += 0.01;
  
        renderer.render(scene, camera);
      };
  
      animate();
    }
  };
  </script>
  
  <style>
    canvas {
      display:block;
    }
  </style>


