import './style.css'
import * as THREE from 'three'
import { normalize } from 'gsap'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
//cubeMesh.position.normalize(camera.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//lighting
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
light.position.set()

// Object
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: '#ff0000'
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
cubeMesh.position.x=1
cubeMesh.position.y=1.25
cubeMesh.position.z=1.9
cubeMesh.scale.set(0.1,2.5,0.45)
//camera.lookAt(cubeMesh.position)
scene.add(cubeMesh)

//model object
const loader = new OBJLoader();

loader.load('/models/Earth2K.obj', function (obj) {

	scene.add( obj);

}, undefined, function ( error ) {

	console.error( error );

} );

//controls
const controls = new OrbitControls(camera, renderer.domElement);

//gridHelper
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper)

//axesHelper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


function animate() {
    requestAnimationFrame(animate);
    // controls.update();
    renderer.render(scene, camera);
  }
  animate();


