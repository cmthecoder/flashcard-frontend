import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudyPage from "./pages/StudyPage";
import EditCard from "./pages/EditCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/study-page' element={<StudyPage />} />
      <Route path='/edit-card' element={<EditCard />} />
    </Routes>
    </>
  );
}

export default App;
