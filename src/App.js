import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import { Counter } from "./pages/index";
import { Layout } from "./components/index";

const App = () => {
  return (
    <Box className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/counter" element={<Counter />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;
