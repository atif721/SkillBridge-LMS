import { Route, Routes } from "react-router-dom";
import "./App.css";
import WebsiteLayout from "./layout/WebsiteLayout";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
