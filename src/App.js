import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

//Page Components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Article from "./pages/Article";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SharedLayout from "./SharedLayout";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [user, setUser] = useState();
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Login setUser={setUser} />} />{" "}
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/Home" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path={"login"} element={<Login setUser={setUser} />} />
          <Route path={"Dashboard"} element={<Dashboard user={user} />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

{
  /* <div>
<Routes>
  <Route path="/" element={<SharedLayout />}>
    <Route path="/" index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/articles/:id" element={<Article />} />
    <Route path={"login"} element={<Login setUser={setUser} />} />
    <Route
      path={"Dashboard"}
      element={
        <ProtectedRoute user={user}>
          <Dashboard user={user} />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<ErrorPage />} />
  </Route>
</Routes>
</div> */
}
