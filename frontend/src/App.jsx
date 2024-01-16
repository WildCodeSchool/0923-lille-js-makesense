import "./App.scss";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { DecisionProvider } from "./contexts/decisionContext";

function App() {
  return (
    <DecisionProvider>
      <Nav />
      <Outlet />
    </DecisionProvider>
  );
}
export default App;
