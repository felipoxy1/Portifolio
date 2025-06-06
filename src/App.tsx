import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import './styles/global.scss';

function App() {
 return (
  <>
   <div className="container">
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/projetos" element={<Projetos />} />
    </Routes>
   </div>
  </>
 );
}

export default App;
