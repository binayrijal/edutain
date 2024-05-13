<template>
  <div ref="container">
    
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  name: 'ThreeDPyramid',
  data() {
    return {
      surfaceArea: 0,
      volume: 0,
      mouseX: 0,
      mouseY: 0
    };
  },
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
      const material = new THREE.MeshPhongMaterial({ color: 0xffff00, wireframe: false });

      // Create a mesh
      const pyramid = new THREE.Mesh(geometry, material);

      // Add the mesh to the scene
      scene.add(pyramid);

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // Add directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add(directionalLight);

      // Add controls for user interaction
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.rotateSpeed = 0.35;

      // Resize handling
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      // Update mouse position
      document.addEventListener('mousemove', event => {
        this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      });

      const rotatePyramid = () => {
        camera.position.x += (this.mouseX - camera.position.x) * 0.05;
        camera.position.y += (this.mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      };

      const calculateAreaAndVolume = () => {
        // Surface Area calculation
        const slantHeight = Math.sqrt(1 * 1 + 1 * 1);
        const lateralArea = 4 * (1 / 2) * slantHeight;
        const baseArea = Math.PI * 1 * 1;
        this.surfaceArea = lateralArea + baseArea;

        // Volume calculation
        this.volume = (1 / 3) * Math.PI * 1 * 1 * 2;
      };

      calculateAreaAndVolume();

      const animate = () => {
        requestAnimationFrame(animate);
        rotatePyramid();
        controls.update();
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
</style>

 

  <!-- <template>
    <div ref="container"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  
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
        const material = new THREE.MeshPhongMaterial({ color: 0xffff00, wireframe: false });
  
        // Create a mesh
        const pyramid = new THREE.Mesh(geometry, material);
  
        // Add the mesh to the scene
        scene.add(pyramid);
  
        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
  
        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);
  
        // Add controls for user interaction
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.rotateSpeed = 0.35;
  
        // Resize handling
        window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });
  
        // Rotate the pyramid based on cursor movement
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
  
        const animate = () => {
          requestAnimationFrame(animate);
          rotatePyramid();
          controls.update();
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
  </style>
   -->