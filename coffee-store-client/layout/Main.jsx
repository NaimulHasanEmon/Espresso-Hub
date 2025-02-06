import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../src/components/Header/Header";
import App from "../src/App";

const Main = () => {
  const storedCoffee = useLoaderData();

  return (
    <div>
      <Header></Header>
      <App storedCoffee={storedCoffee}></App>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
