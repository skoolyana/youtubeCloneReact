import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <>
                <Header></Header>
            
                <div className="app_page">
                  <SideBar></SideBar>
                  <SearchPage></SearchPage>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header></Header>
                <div className="app_page">
                  <SideBar></SideBar>
                  <RecommendedVideos></RecommendedVideos>
                </div>

              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
