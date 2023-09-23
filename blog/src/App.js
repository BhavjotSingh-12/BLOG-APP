import { useContext } from "react";
import Login from "./Login";
import Register from "./Register";
import Settings from "./Settings";
import Home from "./components/Home";
import Scroll from "./components/Scroll";
import Single from "./components/Single";
import Topbar from "./components/Topbar";
import Write from "./components/Write";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Context } from "./components/Context/Context";
import Contact from "./components/Contact";
import "./index.css"

function App() {
  const { user } = useContext(Context);
  return (

    <BrowserRouter>
      <Topbar />
      <Scroll>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/Register" exact element={user ? <Home /> : <Register />} />
          <Route path="/Login" exact element={user ? <Home /> : <Login />} />
          <Route path="/Write" exact element={user ? <Write /> : <Register />} />
          <Route path="/Settings" exact element={user ? <Settings /> : <Register />} />
          <Route path="/post/:postId" exact element={<Single />} />
        </Routes>
      </Scroll>
    </BrowserRouter>


  );
}

export default App;
