// import './App.css';
// import { Link, Route, Routes } from "react-router-dom";
// import Header from './Components/Header';
// import Home from './pages/Home';
// import Status from './pages/Status';
// function App() {
//   return (
//     <div className='App'>
      
//       <Header />  
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/' element={<Status />} />
//       </Routes>
      
//     </div>
//   );
// }

// export default App;
import Navbar from "./Components/navbar"
import Home from './pages/Home'
import Status from './pages/Status'
import Header from "./Components/Header"
import Questions from "./Components/Frequently"
import FooterContainer from "./Components/Footer"





function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <Status/>
      <Header/>
    <Questions/>
    <FooterContainer/>
    </div>
  );
}
export default App;
       