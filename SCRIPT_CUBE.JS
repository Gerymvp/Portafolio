const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// Crear una cámara
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 8;

// Crear un renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('cubo-container').appendChild(renderer.domElement);

// Crear una geometría y un material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x4CAF50 });

// Crear un cubo
const cube = new THREE.Mesh(geometry, material);
cube.position.z = -5; // Mover el cubo hacia el fondo
scene.add(cube);

// Crear geometría de bordes y material para las líneas negras
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x367b38 });
const cubeEdges = new THREE.LineSegments(edges, lineMaterial);
cube.add(cubeEdges); // Añadir los bordes negros al cubo

// Configurar el raycaster y el mouse
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Función para animar
function animate() {
    requestAnimationFrame(animate);

    // Rotar el cubo
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Renderizar la escena
    renderer.render(scene, camera);
}

// Llamar a la función de animación
animate();

// Manejar el cambio de tamaño de la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Obtener el elemento de audio
const audio = document.getElementById('myAudio');

// Manejar el clic del mouse
window.addEventListener('click', (event) => {
    // Convertir las coordenadas del mouse a coordenadas de la escena
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    // Actualizar el raycaster con la posición del mouse
    raycaster.setFromCamera(mouse, camera);

    // Calcular objetos intersectados
    const intersects = raycaster.intersectObjects(scene.children);

    // Si hay intersecciones, de aqui pasa a la siguiente pagina
    if (intersects.length > 0) {
        // Aplicar animación de desvanecimiento
        document.body.classList.add('fade-out');

        // Esperar a que la animación termine antes de redirigir
        setTimeout(() => {
            window.location.href = 'landin.html';
        }, 500); 
    }
});
window.addEventListener('keydown', function(event) {
    // Imprimir la tecla presionada en la consola
    console.log(`Tecla presionada: ${event.key}`);

    // Verificar si la tecla presionada es la "a"
    if (event.key === 'Enter') {
        // Aplicar animación de desvanecimiento
        document.body.classList.add('fade-out');

        // Esperar a que la animación termine antes de redirigir
        setTimeout(() => {
            window.location.href = 'landin.html';
        }, 500); 
    }
});