import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { fetchPosts } from "./Store/Slices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])
  const item = useSelector((state) => state.posts.itemData);
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Social Media App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/item/${item.id}`} element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
