import './style.css'

import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg'),});


renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xffffff, 0);
renderer.render( scene, camera);


const geometry = new THREE.TorusKnotGeometry( 8, 3, 96, 32 );
const material = new THREE.MeshPhongMaterial({ color: 0xf1fa70});
const torusKnot = new THREE.Mesh( geometry, material );

scene.add(torusKnot)

const ambientLight = new THREE.AmbientLight(0xffffff)
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,30)


scene.add(ambientLight)
scene.add(pointLight)

function animate(){
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.0002;
  torusKnot.rotation.y += 0.0002;
  renderer.render(scene, camera);
}
animate()

function darkMode(){
  document.getElementById("text").style.color = "white";
  document.documentElement.style.setProperty("background", "rgb(22,22,22)");
  document.querySelector('.fa-linkedin').style.color = "white";
  document.querySelector('.fa-envelope').style.color = "white";
  torusKnot.material.color.setHex(0x3e167a);
  pointLight.color.set(0xda45ff);
  ambientLight.color.set(0xda45ff);
}

function lightMode(){
  document.getElementById("text").style.color = "rgb(22,22,22)";
  document.documentElement.style.setProperty("background", "white");
  document.querySelector('.fa-linkedin').style.color = "rgb(22,22,22)";
  document.querySelector('.fa-envelope').style.color = "rgb(22,22,22)";
  torusKnot.material.color.setHex(0xf1fa70);
  pointLight.color.set(0xffffff);
  ambientLight.color.set(0xffffff);
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

window.addEventListener('resize', function()

	{
	var width = window.innerWidth;
	var height = window.innerHeight;
	renderer.setSize( width, height );
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
	} );

document.addEventListener("touchmove", ScrollStart, false);

function ScrollStart() {
  var width = window.innerWidth;
	var height = window.innerHeight;
	renderer.setSize( width, height );
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
}

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
  
}
document.body.onscroll = moveCamera
