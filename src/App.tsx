import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarEngineForm from './components/CarEngineForm';
import CarTypeForm from './components/CarTypeForm';
import { CarsContext } from './CarsContext';
import { AbstractCar } from './models';
import { useState } from 'react';
import './App.css';
import CarColorForm from './components/CarColorForm';
import CarDoorsForm from './components/CarDoorsForm';

interface ContextType {
  car?: AbstractCar;
}
function App() {

  const [data, setDataInner] = useState<ContextType>();

  const setData = (data: React.SetStateAction<ContextType | undefined>) => {
    setDataInner(data);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <CarsContext.Provider value={{ data, setData }}>
          <Routes>
            <Route path="/" element={<CarTypeForm />} />
            <Route path="/select-engine" element={<CarEngineForm />} />
            <Route path="/select-color" element={<CarColorForm />} />
            <Route path="/select-doors" element={<CarDoorsForm />} />
          </Routes>
        </CarsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
