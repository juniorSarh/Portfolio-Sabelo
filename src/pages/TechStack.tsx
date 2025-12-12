import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Skill {
  name: string;
  img: string;
  category: string;
}

const techSkills: Skill[] = [
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend Language" },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Design StyleSheet" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", category: "Frontend CSS Library" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend Web Framework" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", category: "Frontend CSS Library" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Frontend Language" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Frontend Language" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "Design Tool" },
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Backend Language" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend Language" },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
  { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Version Control" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "Version Control" },
  { name: "Vercel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", category: "Hosting" },
];

export default function TechStack() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Store cleanup functions
    const cleanupFns: (() => void)[] = [];

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1500);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Clear existing content
    while (mountRef.current?.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    mountRef.current.appendChild(renderer.domElement);

    // Globe
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(5, 64, 64),
      new THREE.MeshPhongMaterial({
        color: 0xfbbf24,
        transparent: true,
        opacity: 0.3,
      })
    );

    scene.add(globe);

    // Wireframe
    const wireframe = new THREE.Mesh(
      new THREE.SphereGeometry(5.02, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0xfcd34d,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      })
    );

    scene.add(wireframe);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const pointLight1 = new THREE.PointLight(0xffffff, 1);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xfbbf24, 0.8);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Sprites
    const sprites: THREE.Sprite[] = [];

    let loadedCount = 0;

    techSkills.forEach((skill, index) => {
      const phi = Math.acos(1 - 2 * (index + 0.5) / techSkills.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5);

      const x = 6 * Math.cos(theta) * Math.sin(phi);
      const y = 6 * Math.sin(theta) * Math.sin(phi);
      const z = 6 * Math.cos(phi);

      // Canvas for fallback & image drawing
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#fef3c7";
      ctx.beginPath();
      ctx.arc(64, 64, 60, 0, Math.PI * 2);
      ctx.fill();

      const texture = new THREE.CanvasTexture(canvas);

      const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
      });

      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.set(x, y, z);
      sprite.scale.set(1.5, 1.5, 1);

      // Type-safe userData
      sprite.userData = {
        skill,
        originalScale: 1.5,
      };

      scene.add(sprite);
      sprites.push(sprite);

      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
        ctx.clearRect(0, 0, 128, 128);
        ctx.fillStyle = "#fef3c7";
        ctx.beginPath();
        ctx.arc(64, 64, 60, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.beginPath();
        ctx.arc(64, 64, 55, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, 14, 14, 100, 100);
        ctx.restore();

        texture.needsUpdate = true;

        loadedCount++;
        if (loadedCount === techSkills.length) setIsLoading(false);
      };

      img.onerror = () => {
        ctx.clearRect(0, 0, 128, 128);
        ctx.fillStyle = "#fbbf24";
        ctx.beginPath();
        ctx.arc(64, 64, 60, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#78350f";
        ctx.font = "bold 16px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const words = skill.name.split(" ");
        words.forEach((word, i) => {
          ctx.fillText(word, 64, 64 + (i - words.length / 2 + 0.5) * 20);
        });

        texture.needsUpdate = true;

        loadedCount++;
        if (loadedCount === techSkills.length) setIsLoading(false);
      };

      img.src = skill.img;
    });

    // Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();

      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(sprites);

      sprites.forEach((sprite) => {
        const scale = sprite.userData.originalScale;
        sprite.scale.set(scale, scale, 1);
      });

      if (intersects.length > 0) {
        const sprite = intersects[0].object as THREE.Sprite;
        sprite.scale.set(2.2, 2.2, 1);
        setHoveredSkill(sprite.userData.skill);
      } else {
        setHoveredSkill(null);
      }
    };

    renderer.domElement.addEventListener("mousemove", onMouseMove);

    // Animation
    const rotationSpeed = 0.002;
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (globe) {
        globe.rotation.y += rotationSpeed;
      }
      
      if (wireframe) {
        wireframe.rotation.y += rotationSpeed;
      }

      sprites.forEach((sprite) => {
        if (sprite) {
          sprite.position.applyAxisAngle(
            new THREE.Vector3(0, 1, 0),
            rotationSpeed
          );
        }
      });

      renderer.render(scene, camera);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animate);
    
    // Add to cleanup
    cleanupFns.push(() => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    });

    // Handle resize with debounce
    let resizeTimeout: number;
    const onResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      
      resizeTimeout = window.setTimeout(() => {
        if (!mountRef.current) return;
        
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }, 200);
    };

    window.addEventListener('resize', onResize);
    
    // Add event listeners to cleanup array
    cleanupFns.push(() => {
      window.removeEventListener('resize', onResize);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      
      // Clean up renderer
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      
      // Clear any pending timeouts
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
    });
    
    // Cleanup function
    return () => {
      cleanupFns.forEach(cleanup => cleanup());
    };
  }, []);

  return (
    <>
    <Navbar />
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center relative overflow-hidden" id="stack">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-amber-400/5 via-transparent to-transparent animate-pulse-slow" />
      </div>

      {/* Main Content */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 px-4 w-full max-w-4xl">
        <div className="backdrop-blur-sm bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-amber-500/20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-300% animate-gradient mb-6 leading-none">
            Tech Stack
          </h1>
          <p className="text-lg md:text-xl text-gray-300/90 font-medium max-w-2xl mx-auto mt-6">
            Explore the technologies and tools that power my work. Hover over the icons to discover more about each one.
          </p>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/95 z-20 backdrop-blur-sm">
          <div className="relative
            w-20 h-20
            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-amber-400/20 before:via-amber-400/40 before:to-amber-400/20
            before:animate-pulse-slow
          ">
            <div className="absolute inset-1 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-4 border-t-amber-400 border-r-amber-400 border-b-transparent border-l-transparent animate-spin"></div>
            </div>
          </div>
          <p className="mt-6 text-lg font-medium text-amber-100/90 flex items-center">
            <span className="animate-pulse">Loading Tech Stack</span>
            <span className="ml-2 flex space-x-1">
              <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
            </span>
          </p>
        </div>
      )}

      {/* Three.js Canvas */}
      <div ref={mountRef} className="w-full h-full absolute inset-0" />

      {/* Skill Tooltip */}
      {hoveredSkill && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-50 to-white px-6 py-3 rounded-xl shadow-2xl z-20 transform transition-all duration-300 border border-amber-100/50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
              <img 
                src={hoveredSkill.img} 
                alt={hoveredSkill.name} 
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-xs font-medium text-amber-800';
                  fallback.textContent = hoveredSkill.name.charAt(0);
                  target.parentNode?.insertBefore(fallback, target);
                }}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {hoveredSkill.name}
              </h3>
              <p className="text-sm text-gray-600">{hoveredSkill.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}