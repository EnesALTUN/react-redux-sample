import "./App.css";
import { Route, Routes } from "react-router-dom";

import Counter from "./pages/Counter";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
};

export default App;
