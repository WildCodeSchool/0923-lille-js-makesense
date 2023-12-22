import { Outlet } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
