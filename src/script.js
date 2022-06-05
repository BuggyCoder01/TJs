import './style.css'
import * as THREE from 'three'
import { normalize } from 'gsap'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Loader } from 'three';


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: innerWidth,
    height: innerHeight
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
const cubeGeometry  = new THREE.BoxGeometry(1, 1, 1)
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

//Model
const loader = new FBXLoader();
loader.load('/models/Earth2K/Earth2K.fbx', function (materials) {
    
    scene.add(materials);
}, undefined, function ( error ) {
	console.error( error );
} );


//Controls
const controls = new OrbitControls(camera, renderer.domElement);

//gridHelper
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper)

//axesHelper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)



// //World
// const world = new World(GRAVITY, AIRDENSITY);
// worldfolder
//   .add(paramters, "gravity", -10, 100, 0.1)
//   .name("gravity")
//   .onChange(() => {
//     world.gravity = paramters.gravity;
//   });

//   worldfolder
//   .add(paramters, "airdensity", -10, 100, 0.1)
//   .name("airdensity")
//   .onChange(() => {
//     world.airdensity = paramters.airdensity;
//   });

//Physics





const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1500, 1500, 100, 100),
    new THREE.MeshStandardMaterial({
      displacementScale: 2,
      })
  );
  floor.material.roughness = 0.5;
  floor.geometry.setAttribute(
    "uv2",
    new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2)
  );
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);





const clock =new THREE.Clock()
let oldElapsedTime=0
const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltadTime = elapsedTime-oldElapsedTime
    
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
  }
tick();

//const loader = new OBJLoader();

// loader.load('/models/Earth2K.obj', function (obj) {

// 	scene.add( obj);

// }, undefined, function ( error ) {
// 	console.error( error );
// } );

// //Texure
// const image = new Image()
// const texture = new THREE.Texture(image)
// image.onload=()=>
// {
//   texture.needs =true
// }
// image.src = 'models/Earth2K/Textures/Diffuse_2K.png' 

