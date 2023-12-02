
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';

const IntroAnimation = ({ onAnimationComplete }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        console.log("Start of IntroAnimation.jsx");

        // Setup Three.js Scene, Camera, Renderer, etc.
        const scene = new THREE.Scene();
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const wallGroup = new THREE.Group();
        let elapsedTime = 0;

        wallGroup.position.set(0, 0, -20); // Set the pivot point to the center of rotation
        scene.add(wallGroup);

        const totalImages = 32;
        const projects = [];

        for (let i = 2; i <= totalImages; i += 3) {
            const formattedNumber = String(i).padStart(4, '0'); // This will format numbers like 1 to 0001, 2 to 0002, etc.
            const imageSrc = `https://storage.googleapis.com/cai-xu-kun/img_cxk/screenshot_${formattedNumber}.png`;
            projects.push({
                image_src: imageSrc
            });
        }

        // Add more constants
        const numWalls = projects.length;
        const cylinderRadius = 30;
        const gapBetweenWalls = 1;
        const wallWidth = 20;
        const wallHeight = 10;
        const angleOccupiedByWall = wallWidth / cylinderRadius;
        const angleBetweenWalls = (2 * Math.PI - angleOccupiedByWall * numWalls) / numWalls;

        // Create a camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Create a WebGLRenderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Add resize event listener
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        function addWall(angle, radius, width, height, depth, imageURL) {
            let wallMesh;
            let wallMaterial;
            let wallGeometry = new THREE.BoxGeometry(width, height, depth); // Change PlaneGeometry to BoxGeometry and add depth parameter

            if (imageURL) {
                const textureLoader = new THREE.TextureLoader();
                const wallTexture = textureLoader.load(imageURL);
                wallMaterial = new THREE.MeshBasicMaterial({ map: wallTexture, side: THREE.DoubleSide });
            } else {
                wallMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
            }

            wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);

            const wallOffset = width / 2;
            wallMesh.position.set(Math.cos(angle) * (radius + wallOffset), 0, Math.sin(angle) * (radius + wallOffset));
            wallMesh.rotation.y = -1 * angle + Math.PI / 2;
            wallGroup.add(wallMesh);
        }


        // Add more walls as needed

        // Create a function to add text to a wall
        function addTextToWall(text, x, y, z, size, color) {
            const fontLoader = new THREE.FontLoader();
            fontLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json', font => {
                const textGeometry = new THREE.TextGeometry(text, {
                    font: font,
                    size: size,
                    height: 0.1
                });
                const textMaterial = new THREE.MeshBasicMaterial({color: color});
                const textMesh = new THREE.Mesh(textGeometry, textMaterial);
                textMesh.position.set(x, y, z);
                scene.add(textMesh);
            });
        }

        // Add OrbitControls for the camera
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.screenSpacePanning = false;
        controls.minDistance = 5;
        controls.maxDistance = 500;

        function loadProjects(projects) {
            // 更新角度计算
            const angleOccupiedByWall = 2 * Math.PI / numWalls;

            let projectIndex = 0;
            for (const project of projects) {
                const angle = projectIndex * angleOccupiedByWall;
                addWall(angle, cylinderRadius - wallWidth / 2, wallWidth, wallHeight, 10, project.image_src); // Add a depth of 1
                // addTextToWall(project.title, Math.cos(angle) * (cylinderRadius + 0.1), 2, Math.sin(angle) * (cylinderRadius + 0.1), 1, 0x000000);
                // addTextToWall(project.description, Math.cos(angle) * (cylinderRadius + 0.1) - 5, 0, Math.sin(angle) * (cylinderRadius + 0.1), 0.5, 0x000000);

                projectIndex++;
            }
        }

        function onMouseClick(event) {
            event.preventDefault();

            // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Update the picking ray with the camera and mouse position
            raycaster.setFromCamera(mouse, camera);

            // Calculate objects intersecting the picking ray
            const intersects = raycaster.intersectObjects(wallGroup.children);

            for (let i = 0; i < intersects.length; i++) {
                if (intersects[i].object === wallMesh) {
                    window.open('https://chat.openai.com/chat?model=gpt-4', '_blank'); // Replace 'https://www.example.com' with your website URL
                }
            }
        }

        function isMouseHoveringWall() {
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(wallGroup.children);
            return intersects.length > 0;
        }


        window.addEventListener('click', onMouseClick, false);
        window.addEventListener('mousemove', (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
        }, false);

        loadProjects(projects);

        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            elapsedTime += delta;
            controls.update();

            const rotationSpeedAmplitude = 0.02;
            const rotationSpeedFrequency = 2 * Math.PI / 5; // Change 5 to adjust the duration of the sine wave cycle
            const rotationSpeed = Math.abs(rotationSpeedAmplitude * Math.sin(rotationSpeedFrequency * elapsedTime));

            if (!isMouseHoveringWall()) {
                wallGroup.rotation.y += rotationSpeed;
            }

            renderer.render(scene, camera);
        }

        function startAnimation() {
            const tl = gsap.timeline();

            // 0. Disable OrbitControls
            controls.enabled = false;

            // 1. Initial rotation with simultaneous changes in size, perspective, and position
            tl.to(wallGroup.rotation, {
                duration: 3,
                y: wallGroup.rotation.y + Math.PI * 20,
                ease: 'power2.inOut',
            }, 's1').to(wallGroup.scale, {
                duration: 3,
                x: 0.5,
                y: 0.5,
                z: 0.5,
                ease: 'power2.inOut',
            }, 's1').to(camera.position, {
                duration: 3,
                x: 0,
                y: 60,
                z: 0,
                ease: 'power2.inOut',
            }, 's1');

            // 1.1 Enlarge wall and change camera field of view to create straight and diagonal line effects
            tl.to(wallGroup.scale, {
                duration: 2,
                x: 1.7,
                y: 1.7,
                z: 1.7,
                ease: 'power2.inOut',
            }, "s2").to(camera, {
                duration: 2,
                fov: 110,
                onUpdate: () => camera.updateProjectionMatrix(),
                ease: 'power2.inOut',
            }, "s2");

            // wallGroup.rotation.y += Math.PI * 8;

            //camera y closeer
            tl.to(camera.position, {
                duration: 1,
                x: -60,
                y: 80,
                z: 1,
                ease: 'power2.inOut',
            }, "s2.5").to(wallGroup.scale, {
                duration: 1,
                x: 6,
                y: 6,
                z: 6,
                ease: 'power2.inOut',
            }, "s2.5");
            // move camara to the right

            // 2. Multi-layered perspective effect
            tl.to(wallGroup.rotation, {
                duration: 3,
                y: wallGroup.rotation.y + Math.PI * 12,
                ease: 'power1.inOut',
            },"s3").to(camera.position, {
                duration: 3,
                x: 0,
                y: 0,
                z: 30,
                ease: 'power1.inOut',
            }, "s3").to(wallGroup.scale, {
                duration: 3,
                x: 1.7,
                y: 1.7,
                z: 1.7,
                ease: 'power1.inOut',
            }, "s3");

            // go back to 墙的外围
            tl.to(camera.position, {
                duration: 2,
                x: 0,
                y: 0,
                z: 40,
                ease: 'power1.inOut',
            }, "s4");

            // 3. Straight and diagonal line effects using a high field of view and camera rotation
            tl.to(camera, {
                duration: 1,
                fov: 150,
                onUpdate: () => camera.updateProjectionMatrix(),
                ease: 'power2.inOut',
            }, "fjfjjfjf")

            tl.to(wallGroup.scale, {
                duration: 1.1,
                x: 0.2,
                y: 0.2,
                z: 0.2,
                ease: 'power2.inOut',
            }, 'lll').to(wallGroup.rotation, {
                duration: 1.1,
                x: wallGroup.rotation.x - Math.PI / 2,
                y: wallGroup.rotation.y + Math.PI * 20,
                ease: 'power2.inOut',
            }, "lll");

            // 5.1 眼花缭乱之转
            tl.to(wallGroup.rotation, {
                duration: 2,
                x: wallGroup.rotation.x - Math.PI * 10,
                y: wallGroup.rotation.y - Math.PI * 10,
                z: wallGroup.rotation.z - Math.PI * 10,
                ease: 'power2.inOut',
            }, 'tttt').to(wallGroup.scale, {
                duration: 2,
                x: 3,
                y: 3,
                z: 3,
                ease: 'power2.inOut',
            }, "tttt");

            tl.to(wallGroup.scale, {
                duration: 1,
                x: 1,
                y: 1,
                z: 1,
                ease: 'power2.inOut',
            }, "final");

            // 重置墙壁缩放和相机视场
            tl.to(camera, {
                duration: 2,
                fov: 40, // 将视野调整为更广一点
                onUpdate: () => camera.updateProjectionMatrix(),
                ease: 'power2.inOut',
            }, "final");

            // 8. End the animation and enable the OrbitControls
            tl.eventCallback('onComplete', () => {
                controls.enabled = true;
                // Notify the parent component that the animation is complete
                onAnimationComplete();
            });

            return tl;
        }

        console.log("Start animation");

        const startTL = startAnimation();
        controls.enabled = false; // 禁用OrbitControls，直到动画结束

        // Add the rest of the JavaScript code here...
        animate();

        console.log("End of IntroAnimation.jsx");

        return () => {
            // Cleanup
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div ref={containerRef} />
    );
};

export default IntroAnimation;
