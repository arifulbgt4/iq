import * as THREE from 'three';

const OrbitControls = require('three-orbitcontrols');

const SEPARATION = 200;
const AMOUNTX = 30;
const AMOUNTY = 30;
const mouseX = 100;
const mouseY = -550;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  4500
);
camera.position.z = 1000;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight / 2.2);

const controls = new OrbitControls(camera, renderer.domElement);

const material = new THREE.SpriteMaterial({
  color: 0x2ebaca,
});

const particles = [];
let particle;
let count = 0;
let i = 0;

for (let ix = 0; ix < AMOUNTX; ix++) {
  for (let iy = 0; iy < AMOUNTY; iy++) {
    particle = particles[i++] = new THREE.Sprite(material);
    particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
    particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
    scene.add(particle);
  }
}

const animate = () => {
  requestAnimationFrame(animate);

  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouseY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);

  let i = 0;

  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      particle = particles[i++];
      particle.position.y =
        Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
      particle.scale.x = particle.scale.y =
        (Math.sin((ix + count) * 0.3) + 1) * 3 +
        (Math.sin((iy + count) * 0.5) + 1) * 3;
    }
  }
  renderer.render(scene, camera);
  count += 0.1;
};

const canvasAnimation = (mount) => {
  mount.style.overflow = 'hidden';
  mount.className = 'canvas-animation';
  animate();

  mount.appendChild(renderer.domElement);

  return controls;
};

export default canvasAnimation;
