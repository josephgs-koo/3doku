import "./App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
