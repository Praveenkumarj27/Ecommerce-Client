import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Add from "./components/screens/Add";
import Navbar from "./components/Navbar";
import Login from "./components/screens/Auth/Login";
import Register from "./components/screens/Auth/Register";
import NotebookEdit from "./components/screens/NotebookEdit";
import Card from "./components/screens/Card";
import Notebooks from "./components/screens/Notebooks";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRouter from "./Utils/PrivateRouter";
import Missing from "./components/screens/Missing";
import Profile from "./components/screens/Profile";
import NotebookDetail from "./components/screens/NotebookDetail";
import Orders from "./components/screens/Orders";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route index element={<Notebooks />} />
        <Route path="/search/:keyword" element={<Notebooks />} />
        <Route path="/page/:pagenumber" element={<Notebooks />} />
        <Route
          path="/search/:keyword/page/:pagenumber"
          element={<Notebooks />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Missing />} />
        <Route path="/notebook/:id" element={<NotebookDetail />} />

        <Route element={<PrivateRouter />}>
          <Route path="/add" element={<Add />} />
          <Route path="/notebook_edit/:id" element={<NotebookEdit />} />
          <Route path="/card" element={<Card />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
