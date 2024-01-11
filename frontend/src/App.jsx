import "./App.scss";
import { Outlet } from "react-router-dom";
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
