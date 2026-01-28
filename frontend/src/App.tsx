import { Route, Routes } from "react-router-dom";
import "./App.css";
import WebsiteLayout from "./layout/WebsiteLayout";
import Home from "./components/Home/Home";
import GithubCallback from "./pages/Auth/GithubLogin";
import SignIn from "./pages/Auth/SignIn";

const App = () => {
  return (
    <Routes>
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth/github/callback" element={<GithubCallback />}></Route>
        <Route path="/auth/login" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
