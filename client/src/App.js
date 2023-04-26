import { Routes, Route } from "react-router-dom";
import { Header, Home, Login } from "./containers/public";
import { path } from "./utils/constants";


function App() {
  return (
    <div className="h-screen w-screen bg-primary w-screen">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
