import { ChakraProvider} from '@chakra-ui/react';
import { BrowserRouter as Router} from 'react-router-dom';
import theme from './lib/theme.js';
import NavBar from './components/navbar.js';
import AnimatedRoutes from './components/animatedroutes.js';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Football from './lib/Model.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar/>
        <div style={{height: "50vh"}}>
          <Canvas>
            <PerspectiveCamera makeDefault fov={30} position={[5, 5, 5]} />
            <Football></Football>
            <OrbitControls/>
            <pointLight position={[10, 15, 10]}/>
          </Canvas>
        </div>
        <AnimatedRoutes/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
