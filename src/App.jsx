import { Canvas, useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'
import './App.css'
import { useRef } from "react"
import { SphereGeometry } from "three"

function App() {
	const gltf = useLoader(GLTFLoader, '../planet.glb')
	const customCam = useRef();
	const boundingRadius = (gltf.scene.children[0].geometry.boundingSphere.radius / 2.0)
	console.log(boundingRadius)
	console.log(gltf.scene.children[0])

	return (
		<div id="canvas-container">
			<Canvas camera={{ position: [-500, 0, 0], fov: 60, far: 15000 }} >
				{/*<perspectiveCamera position={[-500, 0, 0]} fov={45} />*/}

				<directionalLight color="orange" position={[-800, 20, 0]} />
				<mesh>
					<primitive object={gltf.scene} position={[0, 0, 0]} />
				</mesh>
				<mesh>
					<sphereGeometry args={[boundingRadius, 32, 32]} />
				</mesh>
				<OrbitControls onEnd={(e) => { console.log(e.target.object.position) }} />
			</Canvas>

		</div>
	)
}

export default App
