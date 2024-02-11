import "./App.css";
import { Fragment } from "react";
import NavbarLayout from "./components/Layout/NavbarLayout";
import Items from "./components/Items/Items";
function App() {
  return (
    <Fragment>
      <NavbarLayout />
      <Items />
    </Fragment>
  );
}
export default App;
