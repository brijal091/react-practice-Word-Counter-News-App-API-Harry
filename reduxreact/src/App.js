import "./App.css";
import NavBar from "./NavBar";
import Shop from "./Shop";

function App() {
  return (
    <>
      <NavBar />
      <div className="container my-5">
        <Shop />
      </div>
    </>
  );
}

export default App;
