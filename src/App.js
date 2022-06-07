import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import routes from "./routes/routes";

const App = () => {
  return (
    <Box className="app">
      <Routes>
        {routes.map((route, routeIndex) => (
          <Route
            key={routeIndex}
            path={route.path}
            element={<route.element />}
            exact={route.exact}
          >
            {route.childrens?.map((children, childrenIndex) => (
              <Route
                key={childrenIndex}
                path={children.path}
                element={<children.element />}
                exact={children.exact}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </Box>
  );
};

export default App;
