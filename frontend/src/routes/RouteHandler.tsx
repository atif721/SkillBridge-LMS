import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "@/layout/WebsiteLayout";
import Home from "@/components/Home/Home";
import LoginLoader from "@/pages/Auth/LoginLoader";
import SignIn from "@/pages/Auth/SignIn";

const RouteHandler = () => {
  return (
    <>
      <Routes>
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth/github/callback" element={<LoginLoader />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default RouteHandler;
