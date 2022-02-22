import './style.css'

import * as THREE from 'three'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xffffff);
renderer.render( scene, camera);


const geometry = new THREE.TorusKnotGeometry( 10, 3, 200, 32 );
const material = new THREE.MeshStandardMaterial({ color: 0xf1fa70});
const torusKnot = new THREE.Mesh( geometry, material );

scene.add(torusKnot)

const ambientLight = new THREE.AmbientLight(0xffffff)
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,20)


scene.add(ambientLight)
scene.add(pointLight)

function animate(){
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.0005;
  torusKnot.rotation.y += 0.0005;
  renderer.render(scene, camera);
}
animate()

function darkMode(){
  renderer.setClearColor(0x161616);
  document.getElementById("text").style.color = "white";
  torusKnot.material.color.setHex(0x3e167a);
  document.querySelector('.fa-linkedin').style.color = "white";
  document.querySelector('.fa-envelope').style.color = "white";
}

function lightMode(){
  renderer.setClearColor(0xffffff);
  document.getElementById("text").style.color = "black";
  torusKnot.material.color.setHex(0xf1fa70);
  document.querySelector('.fa-linkedin').style.color = "black";
  document.querySelector('.fa-envelope').style.color = "black";
}



document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      darkMode()
    } else {
      lightMode()
    }
  });
});

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
  
}
document.body.onscroll = moveCamera
