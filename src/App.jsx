import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import NewNav from "./components/NewNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <NewNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
