import { Outlet, Link } from "react-router-dom";

const WebsiteLayout = () => {
  return (
    <>
      <header>
        <Link to="/"></Link>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>© 2026 SkillBridge</footer>
    </>
  );
};

export default WebsiteLayout;
