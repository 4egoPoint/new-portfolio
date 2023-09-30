
import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Project from './components/other/pj-item/Project';


function App() {
   return (
      <div className="app">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/pages/:id" element={<Project />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
