import "./App.css";
import { useRoutes } from "react-router-dom";
import { Box } from "@mui/material";

import routes from "./routes/routes";

const App = () => {
  return <Box className="app">{useRoutes(routes)}</Box>;
};

export default App;
