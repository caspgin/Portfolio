import { Canvas, useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, ScrollControls, Scroll } from '@react-three/drei'
import './App.css'
import { useRef } from "react"
import { SphereGeometry } from "three"

function App() {
	const {nodes,materials} = useLoader(GLTFLoader, '../planet.glb')
	console.log(nodes.Icosphere)
	return (
		<div id="canvas-container">
			<Canvas camera={{ position: [-50, 0, 0], fov:45 }} >
				<ambientLight intensity={1}/>
				<directionalLight position={[-50,0,300]}/>
				<ScrollControls pages={2} damping={0.1} >
						<mesh>
							<primitive object={nodes.Icosphere} position={[0, 0, -20]} />		
						</mesh>
					<mesh>
						<boxGeometry position={[0,0,0]} />
					</mesh>
					<Scroll html>
						<h1> Hey</h1>
						<h2 style={{position:'fixed',top:'100vh'}}>I scroll</h2>
					</Scroll>
				</ScrollControls>
			</Canvas>

		</div>
	)
}

export default App
