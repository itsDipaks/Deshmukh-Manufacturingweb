import CombineRoutes from "./Routes/CombineRoutes";
import "./App.css";
import TestNavbar from "./Components/NavbarC/TestNavbar";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import Whatsapp from "./Components/Whatsapp/Whatsapp";
import Footer from "./Components/Footer/Footer"
import ScrolltoTop from "./Components/ScrollToTop/ScrolltoTop";
function App() {
  const [loading,setloading]=useState(true)

  useEffect(()=>{
setloading(true)
setTimeout(()=>{
setloading(false)
},3000)
  },[])
  return (


    <div className="App">
      {loading ?
      
      <HashLoader
      className="loader"
      color="#e94c4c"
        loading={loading}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    :
    <div>
    <TestNavbar/>
    <CombineRoutes />
    <Whatsapp/>
    <ScrolltoTop/>
    <Footer/>
  
    </div>
    }
      {/* <Navbar /> */}
    
    </div>
  );
}

export default App;
