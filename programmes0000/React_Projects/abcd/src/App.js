import "./App.css";
import Home from "./pages/home/Home";
import Product from "./components/product/Product";
import { Routes, Route } from "react-router-dom";
import News from "./pages/news/News";
import Python from "./pages/python/Python";
import { useState } from "react";
function App() {
  const [pageSize, setPageSize] = useState(8);
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Home/News"
          element={<News country="us" category="general" pageSize={pageSize} />}
        />
        <Route path="/Home/Python" element={<Python />} />
        <Route
          path="/Home/News/general"
          element={
            <News
              country="us"
              category="general"
              setProgress={setProgress}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/Home/News/sports"
          element={
            <News
              country="us"
              category="sports"
              setProgress={setProgress}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/Home/News/business"
          element={
            <News
              country="us"
              category="business"
              setProgress={setProgress}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/Home/News/health"
          element={
            <News
              country="us"
              category="health"
              setProgress={setProgress}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/Home/News/technology"
          element={
            <News
              country="us"
              category="technology"
              setProgress={setProgress}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/Home/News/science"
          element={
            <News
              country="us"
              category="science"
              setProgress={setProgress}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/Home/News/entertainment"
          element={
            <News
              country="us"
              category="entertainment"
              setProgress={setProgress}
              pageSize={pageSize}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
