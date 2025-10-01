import "./App.css";
import BookList from "./components/BookList";

import MyFooter from "./components/MyFooter";
import NewNav from "./components/NewNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <NewNav />
      <Welcome />
      <BookList />
      <MyFooter />
    </>
  );
}

export default App;
