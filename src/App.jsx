import React, { useState } from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import Player from "./components/Player";
import store from "./redux/store"; // Ensure this path is correct

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <Sidebar setSearchTerm={setSearchTerm} />
          <MainSection searchTerm={searchTerm} />
        </div>
        <Player />
      </div>
    </Provider>
  );
}

export default App;
