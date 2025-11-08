"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SpaceBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000011, 0.0006);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      4000
    );
    // place camera further back so distant moon is visible initially
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.zIndex = "-1";
    renderer.domElement.style.pointerEvents = "none";
    container.appendChild(renderer.domElement);

    // Stars
    const starsCount = 8000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starsCount * 3);
    const colors = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 2000;
      positions[i3 + 1] = (Math.random() - 0.5) * 1000;
      positions[i3 + 2] = -Math.random() * 2000;

      const c = new THREE.Color();
      c.setHSL(0.6 + Math.random() * 0.4, 0.7, 0.7);
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // --- Moon (textured sphere) ---
    const textureLoader = new THREE.TextureLoader();
    // moon.jpg lives in the same folder as this component; build will copy it.
    const moonUrl = new URL("./moon.jpg", import.meta.url).href;
    const moonTexture = textureLoader.load(moonUrl);
    const moonGeo = new THREE.SphereGeometry(60, 64, 64);
    const moonMat = new THREE.MeshStandardMaterial({
      map: moonTexture,
      roughness: 1,
      metalness: 0,
    });
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    // place moon to the upper-right-back of the scene (closer so it's visible)
    moonMesh.position.set(200, 240, -400);
    moonMesh.scale.set(1.4, 1.4, 1.4);
    scene.add(moonMesh);

    // Lights for the moon
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const moonLight = new THREE.PointLight(0xfff3e0, 1.6, 2000);
    moonLight.position.set(220, 140, -360);
    scene.add(moonLight);

    const clock = new THREE.Clock();

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", onWindowResize);

    let targetX = 0;
    let targetY = 0;

    function onScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = Math.max(
        document.body.scrollHeight - window.innerHeight,
        1
      );
      const t = scrollY / maxScroll; // 0..1

      // Move camera away as user scrolls down (creates depth feel)
      camera.position.z = 300 + t * 800;

      // Slight rotation target based on scroll
      targetX = (t - 0.5) * 0.8;
      targetY = (t - 0.5) * 0.6;

      // Change fog density and star properties for dramatic effect
      scene.fog.density = 0.0006 + t * 0.0012;
      material.size = 0.6 + t * 1.6;
      material.opacity = 0.6 + t * 0.4;

      // Move moon slightly for parallax depth effect
      if (moonMesh) {
        moonMesh.position.z = -400 - t * 600; // move further as you scroll
        moonMesh.position.x = 200 + (t - 0.5) * 300; // slight horizontal drift
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    let frameId;
    function animate() {
      const delta = clock.getDelta();

      // slow rotation to simulate motion
      stars.rotation.x += 0.01 * delta;
      stars.rotation.y += 0.02 * delta;

      // moon rotation
      if (moonMesh) {
        moonMesh.rotation.y += 0.02 * delta;
        moonMesh.rotation.x += 0.002 * delta;
      }

      // smooth camera rotation toward target
      camera.rotation.x += (targetX - camera.rotation.x) * 0.05;
      camera.rotation.y += (targetY - camera.rotation.y) * 0.05;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("scroll", onScroll);
      try {
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      } catch (e) {
        // ignore
      }
      geometry.dispose();
      material.dispose();
      // dispose moon resources
      try {
        moonGeo.dispose();
        if (moonMat.map) moonMat.map.dispose();
        moonMat.dispose();
      } catch (e) {
        // ignore dispose errors
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
}
