import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Change BrowserRouter to HashRouter
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import PlaceRoute from "./pages/PlaceRoute";
import NoPage from "./pages/NoPage";
import BlogsDetails from "./pages/BlogsDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogsDetails />} />
          <Route path="/places" element={<PlaceRoute />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
