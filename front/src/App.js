import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import MainContainer from "./Components/Main/Container";
import SideBarContainer from "./Components/SideBar/Container";
import AdminContainer from "./Components/Admin/Container";

function App() {
  const [sideWidth, setSideWidth] = useState(200);
  axios.get("/api").then((data) => {
    console.log(data);
  });

  return (
    <BrowserRouter>
      <AppBox className="App">
        <SideBarContainer setSideWidth={setSideWidth} sideWidth={sideWidth} />
        <Routes>
          <Route
            path="/"
            element={<MainContainer sideWidth={sideWidth} />}
          ></Route>
          <Route
            path="/admin"
            element={<AdminContainer></AdminContainer>}
          ></Route>
        </Routes>
      </AppBox>
    </BrowserRouter>
  );
}

export default App;

const AppBox = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
`;
