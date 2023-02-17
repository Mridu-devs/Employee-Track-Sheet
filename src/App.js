import { Route, Routes } from "react-router-dom";
import Exp from "./Components/Exp";
import Exp3 from "./Components/Exp3";
import Login from "./Components/Login";
import Manish from "./Components/Manish";
import Navbar from "./Components/Navbar";
import Tracksheet from "./Components/Tracksheet";
import Search from "./Components/Wiki";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tracksheet" element={<Tracksheet />} />
        <Route path="/exp" element={<Exp />} />
        <Route path="/exp3" element={<Exp3 />} />
        <Route path="/manish" element={<Manish />} />
        <Route path="/wiki" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
