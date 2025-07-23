import { Routes, Route } from 'react-router-dom';

import Presentation from '../../pages/Presentation/Presentation';
import Game from '../../pages/Game/Game';
import BasicTable from '../BasicTable/BasicTable';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Presentation />} />
      <Route path="/game" element={<Game />} />
      <Route path="/leaders" element={<BasicTable />} />
    </Routes>
  );
}

export default App;
