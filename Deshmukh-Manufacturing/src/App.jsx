import CombineRoutes from "./Routes/CombineRoutes";
import "./App.css";
import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
import TestNavbar from "./Components/TestNavbar";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <TestNavbar/>
      <CombineRoutes />
      <Footer />
    </div>
  );
}

export default App;
