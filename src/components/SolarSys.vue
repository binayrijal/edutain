<template>
  <div ref="container"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.container.appendChild(renderer.domElement);

    // Create Sun
    const sunGeometry = new THREE.SphereGeometry(3, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create planets
    const planets = [];
    const planetData = [
    { name: 'Mercury', radius: 0.6, distance: 4, speed: 0.04, color: 0xffffff },
    { name: 'Venus', radius: 0.8, distance: 6, speed: 0.030, color: 0xffa500 },
    { name: 'Earth', radius: 1.10, distance: 8, speed: 0.02, color: 0x500fff },
    { name: 'Mars', radius: 0.90, distance: 11, speed: 0.016, color: 0xff0000 },
    { name: 'Jupiter', radius:2.5, distance: 16, speed: 0.010, color: 0xffcc00 },
    { name: 'Saturn', radius: 1.6, distance: 21, speed: 0.006, color: 0xff6600 },
    { name: 'Uranus', radius: 1.4, distance: 26, speed: 0.004, color: 0x0099ff },
    { name: 'Neptune', radius:1.30, distance: 31, speed: 0.0300, color: 0x0033cc },
  // Add more planets here
    ];

    planetData.forEach(data => {
      // Create planet
      const planetGeometry = new THREE.SphereGeometry(data.radius, 32, 32);
      const planetMaterial = new THREE.MeshBasicMaterial({ color: data.color });
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);
      planet.distance = data.distance;
      planet.speed = data.speed;
      scene.add(planet);
      planets.push(planet);

      // Create orbit path
      const orbitGeometry = new THREE.CircleGeometry(data.distance,64);
      const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xfff000 });
      const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
      orbit.rotation.x = Math.PI / 2; // Rotate to align with the plane of the solar system
      scene.add(orbit);
    });

    // Position camera
    camera.position.y = 43; // Set camera position above the scene
    camera.lookAt(scene.position); // Look at the center of the scene

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate planets around Sun
      planets.forEach(planet => {
        const angle = planet.speed * Date.now() * 0.001;
        planet.position.x = planet.distance * Math.cos(angle);
        planet.position.z = planet.distance * Math.sin(angle);
      });
      

      // Render scene
      renderer.render(scene, camera);
    };

    animate();
  }
};
</script>

<style>
canvas {
  display: block;
}
</style>





