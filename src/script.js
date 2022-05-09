import './style.css'
import * as THREE from 'three'
import { normalize } from 'gsap'
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: '#ff0000'
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
cubeMesh.position.x=1
cubeMesh.position.y=-1.4
cubeMesh.position.z=1.9

scene.add(cubeMesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
//cubeMesh.position.normalize(camera.position)
scene.add(camera)

//camera.lookAt(cubeMesh.position)

cubeMesh.scale.set(0.1,2.5,0.45)

//axesHelper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)