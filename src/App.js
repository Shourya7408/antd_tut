import './App.css';
import { Route, Routes } from 'react-router-dom';
import Antdtable from './components/AntdTable';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      {/* <span>App</span> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="table" element={<Antdtable/>}/>
      </Routes>
    </div>
  );
}

export default App;
