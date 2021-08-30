//A THREE JS Environment is made up of 5 things"
// - Renderer (what the user sees)
// - Scene (the data)
// - Camera (the perspective)
// - Meshes (object in the 3d world)
// - light

// Aframe - VR/AR for THREE.js
// Babylon.js - Games for THREE.js

const THREE = require("three");

function createRenderer() {
  let renderer = new THREE.WebGL1Renderer();
  //Full width of the page
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor("#16161d"); //Eigengrau

  let output = document.querySelector("#output");
  output.appendChild(renderer.domElement);

  return renderer;
}

function createScene() {
  return new THREE.Scene();
}

function createCamera() {
  let camera = new THREE.PerspectiveCamera(
    45, // Field of View
    window.innerWidth / window.innerHeight, // Aspect Ratio
    0.1, // Near Value
    1000 // Far Value
  );
  //Red = X
  //Blue = Z
  //Green = Y
  camera.position.set(-30, 40, 30);
  camera.lookAt(0, 0, 0);
  return camera;
}

function createAxesHelper() {
  let axesHelper = new THREE.AxesHelper(40);
  return axesHelper;
}

function createCube() {
  //Geometry - The Actuall shape
  let geometry = new THREE.BoxGeometry(6.5, 6.5, 6.5);
  //Material - The colour
  let material = new THREE.MeshLambertMaterial({ color: "tomato" });
  //Create a mesh by combine material and geometry
  let mesh = new THREE.Mesh(geometry, material);
  //return it so we can add it to the scene
  return mesh;
}

function createSphere() {
  let geometry = new THREE.SphereGeometry(4, 30, 30);
  let material = new THREE.MeshLambertMaterial({ color: "dodgerblue" });
  let mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

function createLight() {
  let light = new THREE.PointLight("white", 1);
  return light;
}

function createLightHelper(light) {
  let helper = new THREE.PointLightHelper(light);
  return helper;
}

let renderer = createRenderer();
let scene = createScene();
let camera = createCamera();
let axesHelper = createAxesHelper();
let light = createLight();
let lightHelper = createLightHelper(light);

let cube = createCube();
let sphere = createSphere();

sphere.position.x = 20;

light.position.x = 10;
light.position.y = 10;
light.position.z = 10;

scene.add(axesHelper, lightHelper);
scene.add(cube, sphere, light);

renderer.render(scene, camera);

function animate() {
  //   cube.position.y += 0.1;
  //   cube.rotation.z += 0.1;
  //Make sure to re-render it
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
