import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home, ExerciseDetail, Navbar, Footer } from "./components";
function App() {
  return (
    <>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </Box>{" "}
      <Footer />
    </>
  );
}

export default App;
