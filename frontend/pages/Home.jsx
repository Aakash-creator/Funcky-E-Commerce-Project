import { Outlet } from "react-router-dom";
import CategoryLayout from "../components/CategoryLayout";

const Home = () => {
  return (
    <div>
      Image <hr />
      <CategoryLayout />
      <hr />
      <Outlet />
    </div>
  );
};

export default Home;
