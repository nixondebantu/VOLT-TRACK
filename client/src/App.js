import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import VoltBar from './components/VoltBar';
import AddDevicePage from './pages/AddDevicePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
    <>
      <VoltBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/add-device" element={<AddDevicePage/>}/>
      </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
