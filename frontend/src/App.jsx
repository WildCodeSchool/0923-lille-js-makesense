import "./App.scss";
import Nav from "./components/Nav/Nav";
import NewUsers from "./components/NewUsers/NewUsers";

function App() {
  return (
    <>
      <Nav />
      <NewUsers />
      <main>
        <h1 className="test">Hello</h1>
      </main>
    </>
  );
}
export default App;
