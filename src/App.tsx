import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarEngineForm from './components/CarEngineForm';
import { CarsContext } from './CarsContext';
import { NormalCar } from './models';
import { useState } from 'react';
import './App.css';
import CarColorForm from './components/CarColorForm';
import CarDoorsForm from './components/CarDoorsForm';
import CarWindowsForm from './components/CarWindowsForm';
import CarTireForm from './components/CarTireForm';
import CarRimsForm from './components/CarRimsForm';
import CarExtraFeaturesForm from './components/CarExtraFeaturesForm';
import Car from './components/Car';
import CarTypeForm from './components/CarTypeForm';

interface ContextType {
  car?: NormalCar;
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
            <Route path="/select-windows" element={<CarWindowsForm />} />
            <Route path="/select-tires" element={<CarTireForm />} />
            <Route path="/select-rims" element={<CarRimsForm />} />
            <Route path="/select-extras" element={<CarExtraFeaturesForm />} />
            <Route path="/car" element={<Car />} />
          </Routes>
        </CarsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
