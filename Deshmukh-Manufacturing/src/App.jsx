import CombineRoutes from "./Routes/CombineRoutes";
import "./App.css";
import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
import TestNavbar from "./Components/TestNavbar";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading,setloading]=useState(true)

  useEffect(()=>{
setloading(true)
setTimeout(()=>{
setloading(false)
},2000)
  },[])
  return (


    <div className="App">
      {loading ? 
      
      <HashLoader
      className="loader"
      color="#e94c4c"
        loading={loading}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    :
    <div>
    <TestNavbar/>
    <CombineRoutes />
    <Footer />
    
    </div>
    }
      {/* <Navbar /> */}
    
    </div>
  );
}

export default App;
