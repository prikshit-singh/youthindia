import React,{lazy,Suspense} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
const Home = lazy(() => import('./components/Home'));
const Lazy_load = lazy(() => import('./components/Lazy_load'));


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Suspense fallback={<p> Loading...</p>}>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="lazyload" element={<Lazy_load />} />
        
      </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;
