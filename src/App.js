import Context from "./Context";
import ScrollTop from "./ScrollTop";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Context>
        <ScrollTop />
        <Layout />
      </Context>
    </BrowserRouter>
  );
}

export default App;
