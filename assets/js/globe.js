---
---

 // Gen random data
 const N = 20;

 const globeContainer = document.querySelector('#globeContainer');
 const height = 750; //globeContainer.offsetHeight;
 const arcsData = [...Array(N).keys()].map(() => ({
     startLat: (Math.random() - 0.5) * 180,
     startLng: (Math.random() - 0.5) * 360,
     endLat: (Math.random() - 0.5) * 180,
     endLng: (Math.random() - 0.5) * 360,
     color: '#ef8300'
 }));

 const Globe = new ThreeGlobe()
     .globeImageUrl('images/worldmap.png')
     .arcsData(arcsData)
     .showGraticules(true)
     .showAtmosphere(false)
     .arcColor('color')
     .arcStroke(1)
     .arcDashLength(0.4)
     .arcDashGap(2)
     .arcDashInitialGap(() => Math.random() * 5)
     .arcDashAnimateTime(3000);

 // Setup renderer
 const renderer = new THREE.WebGLRenderer({ alpha: true } );
 renderer.setClearColor( 0x000000, 0 ); // the second parameter is opacity

 renderer.setSize(globeContainer.offsetWidth, height);
 document.getElementById('globeContainer').appendChild(renderer.domElement);

 // Setup scene
 const scene = new THREE.Scene();
 scene.add(Globe);
 scene.add(new THREE.AmbientLight(0xbbbbbb));
 scene.add(new THREE.DirectionalLight(0xffffff, 0.6));

 // Setup camera
 const camera = new THREE.PerspectiveCamera();
 camera.aspect = globeContainer.offsetWidth / height ;
 camera.updateProjectionMatrix();
 camera.position.z = 140;
 camera.position.x = 180;
 camera.position.y = 130; 
 
 // Add camera controls
//  const tbControls = new THREE.TrackballControls(camera, renderer.domElement);
//  tbControls.minDistance = 101;
//  tbControls.rotateSpeed = 5;
//  tbControls.noZoom = true;
//  tbControls.zoomSpeed = 0.8;

 this.time = 0;

 // Kick-off renderer
 (function animate() { // IIFE
     // Frame cycle
    // tbControls.update();
     this.time += 0.10;
     scene.rotation.y = -this.time / 30;
     renderer.render(scene, camera);
     requestAnimationFrame(animate);
 })();